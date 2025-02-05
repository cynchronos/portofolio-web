import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./init";

const storageRef = ref(storage);

const projectsRef = ref(storageRef, "projects");


export async function getUrlProjectsImagesProduction(filename) {
  try {
    const data = await getDownloadURL(ref(projectsRef, filename));

    return data;
  } catch (error) {
    if (error.code == "storage/object-not-found") {
      return false;
    }else{
      throw error;
    }
  }
}