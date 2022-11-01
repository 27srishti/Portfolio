import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAi4VFKTeleLtUMALvi7fbdodS1sVv7wZU",
    authDomain: "portfolio-4b67b.firebaseapp.com",
    projectId: "portfolio-4b67b",
    storageBucket: "portfolio-4b67b.appspot.com",
    messagingSenderId: "707202947221",
    appId: "1:707202947221:web:388e8c6e622e95b2e4a39c",
    measurementId: "G-6ZL26TLSSS"
};
const app = initializeApp(firebaseConfig);
export const storage =getStorage(app)
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
