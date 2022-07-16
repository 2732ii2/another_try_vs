
function ds()
{
    console.log('clicked!');
    var a=document.getElementById('dh');
    if (a.paused!=true)
    {
        a.pause();
        console.log("true");
    }
    else{
        a.play();
        console.log("false");
    }
    
}