window.unlockDoor = async function (doornum)
{
    if(doornum > 3)
        window.alert(`Invalid Door Number`);
    else
        window.alert(`Door ${doornum} Unlocked`);
}