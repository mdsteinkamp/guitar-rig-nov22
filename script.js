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

const caparison = "./images/caparison.jpeg";
const prs = "./images/prs.jpeg";
const jackson = "./images/jackson.jpeg";

const guitarPics = [caparison, jackson, prs];

//cycle thru guitars on click but skipping the second element in the array
function cycleGuitars() {
    let currentGuitar = document.getElementById("guitarPic");
        for (let i = 0; i < guitarPics.length; i++) {
        currentGuitar.src = guitarPics[i];
        console.log("blah");
    }
    return i = 0;
} 

function changeImage(fileName) {
    const img = document.querySelector("#guitarPic");
    img.setAttribute("src", fileName)
}

//this works to insert guitar into guitars div
//document.getElementById("guitars").appendChild(jackson);
