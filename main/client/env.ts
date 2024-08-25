import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {

    // Resend
    RESEND_API_KEY: z.string().min(1),
    LEAD_TO_EMAIL: z.string().min(1)
  },
  client: {
    NEXT_PUBLIC_HOST_URL: z.string().url(),
  },
  //   For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
NEXT_PUBLIC_HOST_URL: process.env.NEXT_PUBLIC_HOST_URL
  },
});