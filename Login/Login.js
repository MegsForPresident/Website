function storeCookie(name, password){
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + name + ";" + expires + ";path=/";
    document.cookie = name+"password"+ "=" +password;
}

function othername() {
    var input = document.getElementsByClassName("userInput");
    var name = input[0].value;
    var password = input[1].value;
    var cookie = name+password+name;
    alert(password);
    alert(name);
    alert(cookie);
}