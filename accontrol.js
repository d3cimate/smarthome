import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { updateDoc, setDoc, collection, getFirestore, doc, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

window.controlAC = async function (roomnum)
{
    if(roomnum > 3)
        window.alert(`Invalid Room`);
    else
    {
        if(roomnum == 1)
        {
            const acRef = collection(db, "rooms");

            await updateDoc(doc(acRef, "Jdc3dSZ1AhHRGVIfzbyr"),
            {
                ACon: true
            });

            window.alert(`AC in bedroom 1 on.`);
        }

        else if(roomnum == 2)
        {
            const acRef = collection(db, "rooms");

            await updateDoc(doc(acRef, "pCFnQGYwz7o896ExOp3X"),
            {
                ACon: true
            });

            window.alert(`AC in bedroom 2 on.`);
        }

        else if(roomnum == 3)
        {
            const acRef = collection(db, "rooms");

            await updateDoc(doc(acRef, "wP1vfNSNrzbuVkgWpGZV"),
            {
                ACon: true
            });

            window.alert(`AC in living room on.`);
        }
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

// const doorData = doc(db, "doorrequests", "doorrequests");
// const doorSnap = await getDoc(doorData);
// console.log("Door 1 data: ", doorSnap.data());
// console.log("Door 1 Room Number: ", doorSnap.data().roomnum);
// console.log("Door 1 Locked: ", doorSnap.data().locked);