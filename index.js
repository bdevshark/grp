const passwordBox = document.getElementById("password-box");
const generateBtn = document.getElementById("generate-btn");
const copyPassword = document.querySelector(".copy-password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "@#$%^&*()_+~!|{}[]></-=";

function createPassword(){
    let password = '';
    allChars = upperCase + numbers + symbols + lowerCase ;
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    while(password.length < length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

generateBtn.addEventListener("click", function() {
    createPassword();
});

copyPassword.addEventListener("click", function() {
    // passwordBox.select();
    // document.execCommand("copy"); depricated command
    copyToClipboard(passwordBox.value);
})

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Text copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}
