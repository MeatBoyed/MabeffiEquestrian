import { InferResponseType } from "hono";
import { client } from "./honoClient";
import { z } from "zod";
import { LeadFormSchema} from "@/components/LeadForm"

export async function postLead(lead: z.infer<typeof LeadFormSchema>) {
  const res = await client.api.leads.$post({ json: lead });
  //   console.log(res);

  if (res.status === 500 || !res.ok) {
    console.log("Lead Service Error:", res);
    throw new Error("Lead Service Error");
  }

  const data: { status: string } = await res.json();
  if (data.status === "success") return true;
throw new Error("Data wasn't a success")
}

// { post: Post } | { error: string }
// type ResponseType = InferResponseType<typeof client.lead.$get>;

// { post: Post }
// type ResponseType200 = InferResponseType<typeof client.lead.$get, 200>;
