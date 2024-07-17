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

const passArea = document.getElementById("pass-area");
const generateBtn = document.getElementById("gen-btn");
const copyBtn = document.getElementById("copy-btn");

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

generateBtn.addEventListener("click", () => {
    passArea.value = getPasswords(passwordLength);
    copyBtn.disabled = false;
});


const copyToClipboard = async () => {
    
    const originalPassword = passArea.value

    try {
        await navigator.clipboard.writeText(originalPassword);
        passArea.value = "Copied to clipboard!";
        setTimeout(() => {
            passArea.value = originalPassword;
        }, 800);
        copyBtn.disabled = true
    } catch (error) {
        console.error("Error, something went wrong");
    }
}

copyBtn.addEventListener("click", async () => {
    setTimeout(() => {
        copyBtn.disabled = true
    },900)
    await copyToClipboard()
    copyBtn.disabled = false
});

