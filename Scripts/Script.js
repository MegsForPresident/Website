var navbar = document.getElementById('navvbar');
function dark(){
    document.body.style.backgroundColor = "#0e122b";
    document.body.style.color = "white";
    var object = document.getElementById('dark');
    dark.backgroundColor = "0e122b";
    dark.color = "white";
    
    // Saving the Preferred Mode Of the User
    localStorage.setItem('Appearance',"Dark");
    console.log('Dark');

    //Changing the lettering in the NavBar
    navbar.classList.add('daek');
}
function light(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#0e122b"; 
    console.log("yes");
    localStorage.setItem('Appearance',"Light");
    console.log('Light');
    navbar.classList.remove('Dark')
}

// function SelfCopy(copyText) 
// {
//       navigator.clipboard.writeText(copyText);
//       alert("You just copied this: (" + copyText + ").");
// }
var mode = localStorage.getItem('Appearance');

if (mode === "Light"){
    light()
}
else{
    dark()
}

