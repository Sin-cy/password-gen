const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];
const generateBtn = document.getElementById("gen-btn");
const pass1area = document.getElementById("pass1-area");
const pass2area = document.getElementById("pass2-area");

function getCharacters() {
    const getRandomCharacters = Math.floor(Math.random() * characters.length);
    return characters[getRandomCharacters];
}

function passwordCreator(length) {
    let passwordHolder = "";
    for (let i = 0; i < length; i++) {
        passwordHolder += getCharacters();
    }
    console.log(passwordHolder);
    console.log(passwordHolder.length);
    return passwordHolder;
}
generateBtn.addEventListener("click", () => {
    const passwordLength = 15;

    pass1area.style.visibility = "visible";
    pass2area.style.visibility = "visible";

    console.log("password generated");
    const password1 = passwordCreator(passwordLength);
    const password2 = passwordCreator(passwordLength);

    pass1area.value = password1;
    pass2area.value = password2;
});

async function copyToClipboard(element) {
    try {
        await navigator.clipboard.writeText(element.value);

        // Provide visual feedback
        const originalBackground = element.style.backgroundColor;
        element.style.backgroundColor = "#38bdf8"; // Green background to indicate success
        setTimeout(() => {
            element.style.backgroundColor = originalBackground;
        }, 300);
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
}

pass1area.onclick = function () {
    copyToClipboard(this);
};
pass2area.onclick = function () {
    copyToClipboard(this);
};
