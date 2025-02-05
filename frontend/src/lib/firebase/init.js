// import sdk
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import firebaseConfig from './configuration';

// init firebase storage
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
