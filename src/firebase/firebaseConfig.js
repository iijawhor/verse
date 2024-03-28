import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAdfbJCoCZlvjlcjfROf3P4weI5a3QY_8M",
  authDomain: "verse-3282b.firebaseapp.com",
  projectId: "verse-3282b",
  storageBucket: "verse-3282b.appspot.com",
  messagingSenderId: "806290686436",
  appId: "1:806290686436:web:ec25b07fd2b8ed5ee5c7f1",
  measurementId: "G-2V5QXDVVFV"
};
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseFirestore = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
