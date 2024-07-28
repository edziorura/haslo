const uppercaseLetters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
  
const lowercaseLetters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

const digits = [
     '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]

const specialCharacters = [
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.',
    '/', ':', ';', '=', '?', '@', '[', '\\', ']', '^', '_', 
    '{', '|', '}', '~'
]
const allCharacters = [...uppercaseLetters, ...lowercaseLetters, ...digits, ...specialCharacters]

function generate(e){
    document.querySelector(`#${e}`).value ? document.querySelector(`.${e}`).classList.add('focus') : document.querySelector(`.${e}`).classList.remove('focus')

    const site = document.getElementById("site").value
    const password = document.getElementById("password").value
    let endPassword = ""

    if(site.length>=2 && password.length>=2){
        endPassword += uppercaseLetters[password.charCodeAt(0) % uppercaseLetters.length]
        endPassword += lowercaseLetters[password.charCodeAt(1) % lowercaseLetters.length]
        endPassword += digits[(password.charCodeAt(0) + 21) % digits.length]
        endPassword += specialCharacters[(password.charCodeAt(1) + 10) % specialCharacters.length]
        endPassword += uppercaseLetters[site.charCodeAt(0) % uppercaseLetters.length]
        endPassword += lowercaseLetters[site.charCodeAt(1) % lowercaseLetters.length]
        endPassword += digits[(site.charCodeAt(0) +1) % digits.length]
        endPassword += specialCharacters[(site.charCodeAt(1) + 2) % specialCharacters.length]
        endPassword += uppercaseLetters[(password.charCodeAt(0) + 4) % uppercaseLetters.length]
        endPassword += lowercaseLetters[(password.charCodeAt(1) + 3) % lowercaseLetters.length]
        endPassword += digits[(password.charCodeAt(1) + 5) % digits.length]
        endPassword += specialCharacters[(password.charCodeAt(0) + 6) % specialCharacters.length]
    }
    document.querySelector(".end-password").innerHTML=endPassword

    document.querySelector(`.end-password`).textContent ? document.querySelector(`.hide`).classList.add('visible') : document.querySelector(`.hide`).classList.remove('visible')
}

function copyToClipboard() {
    document.querySelector('.ann').classList.remove("visble")
    const textToCopy = document.getElementById("textToCopy").textContent

    navigator.clipboard.writeText(textToCopy).then(function() {
        if(document.querySelector(".end-password").textContent){
            document.querySelector('.ann').classList.add("visible")

            setTimeout(() => {
                document.querySelector('.ann').classList.remove("visible")
            }, 1000)
        }
    })
}

function checkbox(){
    document.getElementById('textToCopy').classList.toggle('visible')
    document.querySelector(".hide").classList.toggle('show')
}
