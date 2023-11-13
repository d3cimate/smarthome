import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { collection, getFirestore, doc, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

window.turnOffLights = async function (roomnum)
{
    if(roomnum > 3)
        window.alert(`Invalid Room Number`);
    else
        window.alert(`Room ${roomnum} Lights Off`);
}