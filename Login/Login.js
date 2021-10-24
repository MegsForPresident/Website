function storeCookie(name, password){
    const d = new Date();
    let expires = "expires="+ (getDay(d.getDay()) + " " +getMonth(d.getMonth()) + " 12:00:00 UTC")+";path=/Website/Cookies"
    console.log(expires);
    document.cookie = name + "=" + name + ";" + expires;
    //document.cookie = name+"password"+ "=" +password;
    //Sun Oct 24 2021 20:22:36 GMT+0530 (India Standard Time)
}
function getTime(d){
    return d.Date
}
function getDay(day){
    switch(day){
        case 0:
            return "Sun";
        case 1:
            return "Mon";
        case 2:
            return "Tue";
        case 3:
            return "Wed";
        case 4:
            return "Thu";
        case 5:
            return "Fri";
        case 6:
            return "Sat";
    }
}
function getMonth(month){
    switch(month){
        case 0:
            return "Jan";
        case 1:
            return "Feb";
        case 2:
            return "Mar";
        case 3:
            return "Apr";
        case 4:
            return "May";
        case 5:
            return "Jun";
        case 6:
            return "Jul";
        case 7:
            return "Aug";
        case 8:
            return "Sep";
        case 9:
            return "Oct";
        case 10:
            return "Nov";
        case 11:
            return "Dec";
    }
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
    storeCookie(name,password);
}
// var d = new Date();
// console.log(d.getDate() + " " + (d.getMonth()+1));
// console.log(d);

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
console.log(document.cookie);