var navbar = document.getElementById('navvbar');
var main = document.getElementsByClassName('element');
function dark(){
    document.body.style.backgroundColor = "#0e122b";
    document.body.style.color = "white";
    var object = document.getElementById('dark');
    dark.backgroundColor = "0e122b";
    dark.color = "white";
    for(var i = 0;i < main.length;i++){
        main[i].style.color ="white";
    }
    // Saving the Preferred Mode Of the User
    localStorage.setItem('Appearance',"Dark");
    console.log('Dark');

    //Changing the lettering in the NavBar
    navbar.classList.add('dark');

    //
    
}
function light(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#0e122b"; 
    console.log("yes");
    localStorage.setItem('Appearance',"Light");
    console.log('Light');
    
    for(var i = 0;i < main.length;i++){
        main[i].style.color ="black";
    }

    navbar.classList.remove('Dark');
    
}

var mode = localStorage.getItem('Appearance');

if (mode === "Light"){
    light()
}
else{
    dark()
}




// function SelfCopy(copyText) 
// {
//       navigator.clipboard.writeText(copyText);
//       alert("You just copied this: (" + copyText + ")."); 
// }