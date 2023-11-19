import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { collection, getFirestore, doc, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

window.getResults = async function () 
{
    try 
    {
        let ultrasonic1, ultrasonic2, ultrasonic3, openWindows = 0;
        let door1, door2, door3, openDoors = 0;

        ultrasonic1 = getRoom1Ultrasonic();
        ultrasonic2 = getRoom2Ultrasonic();
        ultrasonic3 = getLivingRoomUltrasonic();

        door1 = getRoom1Door();
        door2 = getRoom2Door();
        door3 = getLivingRoomDoor();

        if(ultrasonic1 < 10)
            openWindows=openWindows+1;

        if(ultrasonic2 < 10)
            openWindows=openWindows+1;

        if(ultrasonic3 < 10)
            openWindows=openWindows+1;

        if(!door1)
            openDoors=openDoors+1;

        if(!door2)
            openDoors=openDoors+1;

        if(!door3)
            openDoors=openDoors+1;

        console.log("Ultrasonic 1: ", ultrasonic1);
        console.log("Ultrasonic 2: ", ultrasonic2);
        console.log("Ultrasonic 3: ", ultrasonic3);

        console.log("Door 1: ", door1);
        console.log("Door 2: ", door2);
        console.log("Door 3: ", door3);

        document.getElementById('doors').textContent = `Number of unlocked doors: ${openDoors}`;
        document.getElementById('windows').textContent = `Number of open windows: ${openWindows}`;
    } 
    catch (error) 
    {
        console.error("Error fetching doors and windows:", error);
    }
};

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

// const querySnapshot = await getDocs(collection(db, "rooms"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

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

const user1Data = doc(db, "userpreferences", "3NyZsZpdckMgcLCF2Z3Z");
const user1Snap = await getDoc(user1Data);
console.log("User Preferences 1: ", user1Snap.data());

const user2Data = doc(db, "userpreferences", "RF8xj8x2bOVwBBO22VhA");
const user2Snap = await getDoc(user2Data);
console.log("User Preferences 2: ", user2Snap.data());

async function getRoom1Door()
{
  return room1Snap.data().locked;
}

async function getRoom2Door()
{
  return room2Snap.data().locked;
}

async function getLivingRoomDoor()
{
  return roomSnap.data().locked;
}

async function getRoom1Temp()
{
  return room1Snap.data().temperature;
}

async function getRoom1Hum()
{
  return room1Snap.data().humidity;
}

async function getRoom1Ultrasonic()
{
  return room1Snap.data().ultrasonic.value;
}

async function getRoom1Motion()
{
  return room1Snap.data().motion;
}

async function getRoom2Temp()
{
  return room2Snap.data().temperature;
}

async function getRoom2Hum()
{
  return room2Snap.data().humidity;
}

async function getRoom2Ultrasonic()
{
  return room2Snap.data().ultrasonic;
}

async function getRoom2Motion()
{
  return room2Snap.data().motion;
}

async function getLivingRoomTemp1()
{
  return roomSnap.data().temperature1;
}

async function getLivingRoomTemp2()
{
  return roomSnap.data().temperature2;
}

async function getLivingRoomHum1()
{
  return roomSnap.data().humidity1;
}

async function getLivingRoomHum2()
{
  return roomSnap.data().humidity2;
}

async function getLivingRoomUltrasonic()
{
  return roomSnap.data().ultrasonic;
}

async function getLivingRoomMotion()
{
  return roomSnap.data().motion;
}

// var button = document.getElementById("check");
// button.addEventListener("click", getTempHum);

// async function getTempHum(roomNum)
// {
  // if(roomNum == 1)
  // {
  //   document.body.innerHTML = getRoom1Temp();
  //   document.body.innerHTML = getRoom1Hum();
  //   window.print();
  // }
  
  // else if(roomNum == 2)
  // {
  //   document.body.innerHTML = getRoom2Temp();
  //   document.body.innerHTML = getRoom2Hum();
  //   window.print();
  // }
  
  // else if(roomNum == 3)
  // {
  //   document.body.innerHTML = getLivingRoomTemp1();
  //   document.body.innerHTML = getLivingRoomTemp2();
  //   document.body.innerHTML = getLivingRoomHum1();
  //   document.body.innerHTML = getLivingRoomHum2();
  //   window.print();
  // }
//   try 
//   {
//     let temperature, humidity;

//     if (roomNum == 1) 
//     {
//       temperature = await getRoom1Temp();
//       humidity = await getRoom1Hum();
//     } 
//     else if (roomNum == 2) 
//     {
//       temperature = await getRoom2Temp();
//       humidity = await getRoom2Hum();
//     } 
//     else if (roomNum == 3) 
//     {
//       temperature = await getLivingRoomTemp1();
//       humidity = await getLivingRoomHum1();
//     }

//     // Display the temperature and humidity on the page
//     document.body.innerHTML = `Temperature: ${temperature}, Humidity: ${humidity}`;
//     window.print();
//   } 
//   catch (error) 
//   {
//     console.error("Error fetching temperature and humidity:", error);
//   }
// }