import "./config/mongodb";
import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import mainRoutes from "./routes/main.routes";
import { logger } from "@bogeychan/elysia-logger";

const client_uri = process.env.APP_ENV === "production" ? process.env.CLIENT_URL_PROD : process.env.CLIENT_URL_DEV;
const port = process.env.PORT || 3000;


const app = new Elysia()
  .use(cors(
    {
      origin: client_uri,
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
