const h2 = document.createElement("h2");
h2.textContent = "This content added by Javascript";

document.querySelector("body").appendChild(h2);



document.addEventListener("click", function(e) {
    //invertBadCat();
});


// switches the amp pic and plays a sweet lick... Meow!
function spookyBadCat() {
    const amp = document.getElementById("badCat");
    if (amp.src.includes("bad_cat_close.jpg")) {
        amp.src = "./images/bad_cat_night_mode.jpg";
        new Audio("./audio/prs_audio_01.m4a").play();
    }
    else {amp.src = "./images/bad_cat_close.jpg"};
}

// switches the bad cat from being right side up to upside down!
function invertBadCat() {
    const amp = document.getElementById("pedalboard")
    if (amp.src.includes("pedalboard.jpeg")) {
        amp.src = "./images/bad_cat_close_ud.jpg";
    }
    else {amp.src = "./images/pedalboard.jpeg"};
}

//const caparison = document.createElement("img");
caparison = "./images/caparison.jpeg";

//const prs = document.createElement("img");
prs = "./images/prs.jpeg";

//const jackson = document.createElement("img");
jackson = "./images/jackson.jpeg";


//this works to insert guitar into guitars div
//document.getElementById("guitars").appendChild(jackson);

const guitarPics = [caparison, jackson, prs];


function cycleGuitars() {
    const currentGuitar = document.getElementById("guitarPic");
        for (let i = 0; i < guitarPics.length; i++) {
        currentGuitar.src = guitarPics[i];
    }
} 
