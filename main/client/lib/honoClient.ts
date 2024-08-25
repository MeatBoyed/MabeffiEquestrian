import { AppType } from "@/app/api/[[...route]]/route";
import { env } from "@/env";
import { hc } from "hono/client";

const client = hc<AppType>(env.NEXT_PUBLIC_HOST_URL);
export { client };
