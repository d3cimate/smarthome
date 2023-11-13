import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { setDoc, collection, getFirestore, doc, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

window.turnOffLights = async function (roomnum)
{
    if(roomnum > 3)
        window.alert(`Invalid Room Number`);
    else
    {
        const lightRef = collection(db, "lightrequests");

        await setDoc(doc(lightRef, "lightrequests"), 
        {
            roomnum:roomnum, on: false, intensity: 0
        });

        window.alert(`Room ${roomnum} Lights Off`);
    }
}

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
// const analytics = getAnalytics(app);
const db = getFirestore(app);

const lightData = doc(db, "lightrequests", "lightrequests");
const lightSnap = await getDoc(lightData);
console.log("Light 1 data: ", lightSnap.data());
console.log("Light 1 Room Number: ", lightSnap.data().roomnum);
console.log("Light 1 On: ", lightSnap.data().on);
console.log("Light 1 Intensity: ", lightSnap.data().intensity);