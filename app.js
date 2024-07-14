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

const renderArea = document.getElementById("render-area");
const generateBtn = document.getElementById("gen-btn");

//Creating the Password
let passwordLength = 15;
function getPasswords(length) {
    const randomArray = new Uint8Array(length);
    crypto.getRandomValues(randomArray);

    let result = "";
    for (let i = 0; i < length; i++) {
        let findRandomPosition = randomArray[i] % characters.length;
        result += characters[findRandomPosition];
    }
    return result;
}

//Displaying the password on click
const pass1area = document.getElementById("pass1-area");
const pass2area = document.getElementById("pass2-area");

generateBtn.addEventListener("click", () => {
    pass1area.value = getPasswords(passwordLength);
    pass2area.value = getPasswords(passwordLength);

    renderArea.style.visibility = "visible";
});

//click password to copy to clipboard feature
async function copyToClipboard(element) {
    try {
        await navigator.clipboard.writeText(element.value);

        let originalBackground = element.style.backgroundColor;
        element.style.backgroundColor = "#38bdf8";

        setTimeout(() => {
            element.style.backgroundColor = originalBackground;
        }, 260);
    } catch (err) {
        console.error("Error, something went wrong :(");
    }
}
pass1area.addEventListener("click", () => copyToClipboard(pass1area));
pass2area.addEventListener("click", () => copyToClipboard(pass2area));
