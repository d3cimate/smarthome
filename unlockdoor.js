import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { collection, getFirestore, doc, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

window.unlockDoor = async function (doornum)
{
    if(doornum > 3)
        window.alert(`Invalid Door Number`);
    else
        window.alert(`Door ${doornum} Unlocked`);
}