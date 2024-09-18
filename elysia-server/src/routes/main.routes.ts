import { Elysia } from "elysia";
import projectController from "../controllers/project.controller";

const mainRoutes = new Elysia({ prefix: '/api' })
  .use(projectController)
  .get("/", () => "Hello Elysia main routes")

export default mainRoutes;