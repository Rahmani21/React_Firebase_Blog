import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBW5ulWbcAXA4XOKVqxhhY8iZtBG-8OTdc",
  authDomain: "react-blog-app-f7ca7.firebaseapp.com",
  projectId: "react-blog-app-f7ca7",
  storageBucket: "react-blog-app-f7ca7.appspot.com",
  messagingSenderId: "545210805057",
  appId: "1:545210805057:web:28d02d7c3e9dbeaf50cfc0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)


export {auth,db,storage} 

