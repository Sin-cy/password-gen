const genBtn = document.getElementById("gen-btn");
const renderBtn = document.getElementById("render-btn");

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

//Grab each Characters using array position
function getCharacters() {
    const storePassword = Math.floor(Math.random() * characters.length);
    console.log(characters[storePassword]);
    return characters[storePassword];
}

//Arranging each character into a single 15character string
function generatePassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += getCharacters();
    }
    console.log(length);
    console.log(password);
    return password;
}

const passwordLength = 15;
function copyToClipboard() {
    const password1 = generatePassword(passwordLength);
    const password2 = generatePassword(passwordLength);

    renderBtn.innerHTML = `
    <button id="pass1-btn" class="pass1-btn"> ${password1} </button>
    <button id="pass2-btn" class="pass2-btn"> ${password2} </button>
    `;

    const passwordCopyBtn1 = document.getElementById("pass1-btn");
    const passwordCopyBtn2 = document.getElementById("pass2-btn");

    function copyPassword(password, copyButton) {
        navigator.clipboard
            .writeText(password)
            .then(() => {
                console.log("Password copied successfully");
                const originalText = copyButton.textContent;
                copyButton.textContent = "Copied!";
                setTimeout(() => {
                    copyButton.textContent = originalText;
                }, 1500);
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
                copyButton.textContent = "Copy failed";
                setTimeout(() => {
                    copyButton.textContent = password;
                }, 1500);
            });
    }

    passwordCopyBtn1.addEventListener("click", () =>
        copyPassword(password1, passwordCopyBtn1)
    );
    passwordCopyBtn2.addEventListener("click", () =>
        copyPassword(password2, passwordCopyBtn2)
    );
}

// Generate Btn
genBtn.addEventListener("click", () => {
    console.log("clicked");
    copyToClipboard();
});
