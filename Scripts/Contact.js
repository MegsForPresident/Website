var main = document.getElementById('main');
if(localStorage.getItem('Appearance') == 'Light'){
    main.classList.add('ars');
    console.log("added");
}
else{
    main.classList.remove('ars');
}