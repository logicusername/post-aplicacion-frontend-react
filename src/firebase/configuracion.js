// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlMkDQCQ0chocICjTrmEsi_yqjXijhBe8",
  authDomain: "fir-images-8607e.firebaseapp.com",
  projectId: "fir-images-8607e",
  storageBucket: "fir-images-8607e.appspot.com",
  messagingSenderId: "365558034163",
  appId: "1:365558034163:web:f8762c556b1a52622d1186",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function subirImagen(imagen) {
  const storageRef = ref(storage, v4());
  await uploadBytes(storageRef, imagen).then(snapshot =>{
    console.log(snapshot)
});
  const urlImagen = getDownloadURL(storageRef);
  return urlImagen;
}
export function verImagen(imagen){
  const datosimagen = ref(storage, "hola3")
  uploadBytes(datosimagen, imagen).then(snapshot =>{
      console.log(snapshot)
  })
}
