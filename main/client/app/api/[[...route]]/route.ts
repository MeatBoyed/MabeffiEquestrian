import { Hono } from "hono";
import { handle } from "hono/vercel";

import LeadController from "@/Server/LeadController";

const app = new Hono().basePath("/api");

const routes = app.route("/leads", LeadController);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
