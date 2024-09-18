interface Project {
  title: string;
  slug: string;
  description: string;
  credits: Array<{
    name: string;
    github: string;
  }>;
  url: string;
  status: string;
  assets: Array<string>;
} 

export class projectValidation {
  static getProject(project: Project) {
   try {
    const data: object = {
      title: project.title,
      slug: project.slug,
      description: project.description,
      credits: project.credits,
      url: project.url,
      status: project.status,
      assets: project.assets,
    }

    return data;
   } catch (error: any) {
      throw {
        code: error.code || 400,
        success: false,
        message: "error validate get project",
        data: error,
      }
   }
  }
    
}