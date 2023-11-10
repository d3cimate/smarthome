import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { collection, getFirestore, doc, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

const firebaseConfig = 
{
  apiKey: "AIzaSyDODmshZ0BlzKFnHNIHj04ONoiPcobs-zI",
  authDomain: "smarthomesystem-bdef7.firebaseapp.com",
  databaseURL: "https://smarthomesystem-bdef7-default-rtdb.firebaseio.com",
  projectId: "smarthomesystem-bdef7",
  storageBucket: "smarthomesystem-bdef7.appspot.com",
  messagingSenderId: "769672858045",
  appId: "1:769672858045:web:361bfb300f4f7bad3fead4",
  measurementId: "G-RENK19Y55Z"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "rooms"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

const docRef = doc(db, "rooms", "Jdc3dSZ1AhHRGVIfzbyr");
const docSnap = await getDoc(docRef);
console.log("Document data: ", docSnap.data());

// async function getRooms(db) 
// {
//   const roomsCol = collection(db, 'rooms');
//   const roomSnapshot = await getDocs(roomsCol);
//   const roomList = roomSnapshot.docs.map(doc => doc.data());
//   return roomList;
// }