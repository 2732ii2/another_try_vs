
function ds()
{
    console.log('clicked!');
    var a=document.getElementById('dh');
    if (a.paused!=true )
    {
        a.pause();
        console.log("true");
        
    }
    else{
        a.play();
        console.log("false");
        
    }
    var c= document.getElementsByTagName('button')[1];
    if(c.innerText=="play_arrow")
    {
        console.log("yes it is true");
        c.innerText = "play_disabled";
    }
    else{
        c.innerText = "play_arrow";
    }
}
