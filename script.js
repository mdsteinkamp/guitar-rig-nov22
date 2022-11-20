const h2 = document.createElement("h2");
h2.textContent = "This content added by Javascript";

document.querySelector("body").appendChild(h2);



document.addEventListener("click", function(e) {
    //invertBadCat();
});


function invertBadCat () {
    var amp = document.getElementById("pedalboard")
    if (amp.src.includes("bad_cat_close.jpg")) {
        amp.src = "./images/bad_cat_close_ud.jpg"
    }
    else {amp.src = "./images/bad_cat_close.jpg"}
}

function spookyBadCat () {
    var amp = document.getElementById("amplifier")
    if (amp.src.includes("bad_cat_close.jpg")) {
        amp.src = "./images/bad_cat_night_mode.jpg"
    }
    else {amp.src = "./images/bad_cat_close.jpg"}
}
