function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    console.log(expires);
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function othername() {
    var input = document.getElementsByClassName("userInput");
    var name = input[0].value;
    var password = input[1].value;
    var cookie = name+password+name;
    alert(password);
    alert(name);
    alert(cookie);
    document.write("<p>"+name+"</p>");
    setCookie(name,password,30);
}
// var d = new Date();
// console.log(d.getDate() + " " + (d.getMonth()+1));
// console.log(d);

console.log(document.cookie);
alert(getCookie('a'));