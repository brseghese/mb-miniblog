import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSWEDN-9IAOTBL9Fb1bg9IBxHbyk73yIk",
  authDomain: "miniblog-8307f.firebaseapp.com",
  projectId: "miniblog-8307f",
  storageBucket: "miniblog-8307f.appspot.com",
  messagingSenderId: "205752174223",
  appId: "1:205752174223:web:973536069b5a57d30252fa",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
