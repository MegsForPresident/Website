var elements = document.getElementsByTagName("a")
if(localStorage.getItem('Appearance') == "Dark"){
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.color="white";
    }
    console.log("Yess")
}
else{
    element.style.color = "#0e122b";
    console.log("Noo")
}
