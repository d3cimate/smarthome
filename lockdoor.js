import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { updateDoc, setDoc, collection, getFirestore, doc, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

window.lockDoor = async function (doornum)
{
    if(doornum > 3)
        window.alert(`Invalid Door Number`);
    else
    {
        const doorRef = collection(db, "doorrequests");

        await updateDoc(doc(doorRef, "doorrequests"), 
        {
            roomnum: doornum, locked: true
        });

        window.alert(`Door ${doornum} Locked`);
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

const doorData = doc(db, "doorrequests", "doorrequests");
const doorSnap = await getDoc(doorData);
console.log("Door 1 data: ", doorSnap.data());
console.log("Door 1 Room Number: ", doorSnap.data().roomnum);
console.log("Door 1 Locked: ", doorSnap.data().locked);