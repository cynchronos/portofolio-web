import mongoose from "mongoose";
import Project from "../models/Projects";
import { CreateProjectDto, UpdateProjectDto } from "../dtos/project.dto";

class ProjectService {
  constructor(
    private readonly projectModel = Project,
  ){}

  async findAllProjects(): Promise<object[]> {
    try {
      const projects: typeof Project[] = await this.projectModel.find().exec();
  
      if (projects.length < 1) {
        const error: any = new Error();
  
        error.code = 404;
        error.success = false;
        error.message = "No projects found";
  
        throw error;
      }
  
      return projects;
    } catch (error) {
      throw error;
    }
  }

  async findProjectById(id: string): Promise<object> {
    try {
      const project: typeof Project = await this.projectModel.findById(id).exec();
  
      if (!project) {
        const error: any = new Error();
  
        error.code = 404;
        error.success = false;
        error.message = "Project not found";
  
        throw error;
      }
  
      return project;
    } catch (error) {
      throw error;
    }
  }

  async findProjectBySlug(slug: string): Promise<object> {
    try {
      const project: typeof Project = await this.projectModel.findOne({ slug}).exec();
      
      if (!project) {
        const error: any = new Error();
  
        error.code = 404;
        error.success = false;
        error.message = "Project not found";
  
        throw error;
      }

      return project;
    } catch (error) {
      throw error;
    }
  }
}

export default  ProjectService