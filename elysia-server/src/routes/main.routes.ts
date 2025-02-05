import { Elysia } from "elysia";
import projectsController from "../controllers/projects.controller";

const mainRoutes = new Elysia({ prefix: '/api' })
  .use(projectsController)
  .get("/", () => "Hello Elysia main routes")

export default mainRoutes;