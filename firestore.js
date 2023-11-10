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

const room1Data = doc(db, "rooms", "Jdc3dSZ1AhHRGVIfzbyr");
const room1Snap = await getDoc(room1Data);
console.log("Bedroom 1 data: ", room1Snap.data());
console.log("Bedroom 1 Temperature: ", room1Snap.data().temperature);
console.log("Bedroom 1 Humidity: ", room1Snap.data().humidity);
console.log("Bedroom 1 Ultrasonic Sensor: ", room1Snap.data().ultrasonic);
console.log("Bedroom 1 Motion Sensor: ", room1Snap.data().motion);

const room2Data = doc(db, "rooms", "pCFnQGYwz7o896ExOp3X");
const room2Snap = await getDoc(room2Data);
console.log("Bedroom 2 data: ", room2Snap.data());
console.log("Bedroom 2 Temperature: ", room2Snap.data().temperature);
console.log("Bedroom 2 Humidity: ", room2Snap.data().humidity);
console.log("Bedroom 2 Ultrasonic Sensor: ", room2Snap.data().ultrasonic);
console.log("Bedroom 2 Motion Sensor: ", room2Snap.data().motion);

const roomData = doc(db, "rooms", "wP1vfNSNrzbuVkgWpGZV");
const roomSnap = await getDoc(roomData);
console.log("Living Room data: ", roomSnap.data());
console.log("Living Room Temperature 1: ", roomSnap.data().temperature1);
console.log("Living Room Temperature 2: ", roomSnap.data().temperature2);
console.log("Living Room Humidity 1: ", roomSnap.data().humidity1);
console.log("Living Room Humidity 2: ", roomSnap.data().humidity2);
console.log("Living Room Ultrasonic Sensor: ", roomSnap.data().ultrasonic);
console.log("Living Room Motion Sensor: ", roomSnap.data().motion);

// const rulesData = doc(db, "automationrules", "QMmCsnunrXfwXeQH1svW");
// const rulesSnap = await getDoc(rulesData);
// console.log("Automation Rules: ", rulesSnap.data());

const user1Data = doc(db, "automationrules", "QMmCsnunrXfwXeQH1svW");
const user1Snap = await getDoc(user1Data);
console.log("User Preferences 1: ", user1Snap.data());

const user2Data = doc(db, "automationrules", "QMmCsnunrXfwXeQH1svW");
const user2Snap = await getDoc(user2Data);
console.log("User Preferences 2: ", user2Snap.data());

// async function getRooms(db) 
// {
//   const roomsCol = collection(db, 'rooms');
//   const roomSnapshot = await getDocs(roomsCol);
//   const roomList = roomSnapshot.docs.map(doc => doc.data());
//   return roomList;
// }