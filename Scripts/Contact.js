var main = document.getElementById('main');
if(localStorage.getItem('Appearance') == 'Light'){
    main.classList.add('a-colours');
    console.log("added");
}
else{
    main.classList.remove('a-colours');
}