import { Elysia } from "elysia";
import ProjectService from "../services/project.service";


const projectController = new Elysia({ prefix: "/projects" })
  .decorate({
    Service: new ProjectService()
  })
  .get("/", async ({Service}) => {
    try {
      const projects = await Service.findAllProjects();

      return {
        code: 200,
        success: true,
        message: "Projects found",
        data: projects,
      }
    } catch (error: any) {
      return {
        code: error.code || 500,
        success: false,
        message: error.message || "Error get projects",
        data: error,
      }
    }
  })
  .get("/:slug", async ({Service, params}) => {
    try {
      const project = await Service.findProjectBySlug(params.slug);

      return {
        code: 200,
        success: true,
        message: "Project found",
        data: project,
      }
    } catch (error: any) {
      return {
        code: error.code || 500,
        success: false,
        message: error.message || "Error get projects",
        data: error,
      }
    }
  }
)

export default projectController;