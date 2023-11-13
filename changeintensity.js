import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { collection, getFirestore, doc, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

window.changeIntensity = async function (roomnum, intensity)
{
    if(intensity > 100 | intensity < 0)
        window.alert("Invalid Intensity");
    if(roomnum > 3)
        window.alert(`Invalid Room Number`);
    else
        window.alert(`Room ${roomnum} Intensity changed to ${intensity}%`);
}