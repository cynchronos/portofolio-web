import apiUrl from "../axios";

export async function getAllProjects (slug = null) {
  try {
    let response;

    if (slug) {
      response = await apiUrl.get(`/api/projects/${ slug }`);
    }else{
      response = await apiUrl.get('/api/projects/');
    }
     
     if (response.status !== 200) {
       throw new Error(response.message);
     }

     return response.data;
  } catch (error) {
    throw error;
  }
}