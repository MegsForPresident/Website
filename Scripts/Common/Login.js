function storeCookie(cname, name, password, exdays){
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + name + ";" + expires + ";path=/";
    document.cookie = name+"password"+ "=" +password;
}