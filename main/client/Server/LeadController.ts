import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { Resend } from "resend";
import { HTTPException } from "hono/http-exception";
import { env } from "@/env";
import { z } from "zod";
import { Service } from "@/components/ServiceCard";

const LeadFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  date: z.date().optional(),
  phoneNumber: z.string(),
  service: z.enum(Service),
});
type LeadSchema = z.infer<typeof LeadFormSchema>;

const app = new Hono().post("/", zValidator("json", LeadFormSchema), async (c) => {
  const lead = c.req.valid("json");
  const res = await SendLeadEmail(lead);
  return c.json(res);
});

export default app;

export async function SendLeadEmail(lead: LeadSchema) {
  const resend = new Resend(env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    to: env.LEAD_TO_EMAIL,
    from: "feedback@nerfdesigns.com",
    subject: `New lead from NDX Mabeffi Equestrian`,
    html: `
            <html>
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #4a4a4a;">New Lead from NDX Mabeffi Equestrian</h2>
                <p>Customer has requested: <strong>${lead.service}</strong></p>
                <h3 style="color: #4a4a4a;">Customer Details:</h3>
                <ul style="list-style-type: none; padding-left: 0;">
                  <li><strong>Name:</strong> ${lead.name}</li>
                  <li><strong>Email:</strong> ${lead.email}</li>
                  <li><strong>Phone Number:</strong> ${lead.phoneNumber}</li>
                </ul>
                <p><em>Created At: ${new Date().toLocaleString()}</em></p>
                <hr style="border: none; border-top: 1px solid #e0e0e0;">
                <p style="font-size: 0.9em; color: #888;">Proudly provided by Nerf Designs Automation Services.</p>
              </body>
            </html>
          `,
  });

  if (error || !data) throw new HTTPException(500, { cause: error, message: error?.message || "Error sending email" });

  return { status: "success" };
}
