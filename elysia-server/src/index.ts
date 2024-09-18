import "./config/mongodb";
import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import mainRoutes from "./routes/main.routes";
import { logger } from "@bogeychan/elysia-logger";

const port = process.env.PORT || 3000;

const app = new Elysia()
  .use(cors(
    {
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
      allowedHeaders: ["Content-Type", "Authorization, X-Requested-With, X-HTTP-Method-Override, Accept, Origin"],
    }
  ))
  .use(logger({
    level: "error",
    stream: process.stdout,
  }))
  .use(mainRoutes)
  .get("/", () => "Hello Elysia").listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
