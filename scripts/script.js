function criptografarTexto() {
    const userInput = document.getElementById('userInput'); 
    let userInputValue = userInput.value;

    userInputValue = userInputValue.replace(/[aeiou]/g, function(match) {
        const encrypt = {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat'
        };
        return encrypt[match];
    });

    document.getElementById('output').textContent = userInputValue;

    hideEncryptAreaDefault()
}
document.getElementById('buttonCriptografar').addEventListener('click', () => {
    criptografarTexto();
    unhideCopyButton();
    unhideOutput();
    errorMessage("criptografar");
})

function descriptografarTexto() {
    const userInput = document.getElementById('userInput'); 
    let userInputValue = userInput.value;

    const decrypt = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    }

    userInputValue = userInputValue.replace(/(ai|enter|imes|ober|ufat)/gi, match => decrypt[match])

    document.getElementById('output').textContent = userInputValue;
    
    hideEncryptAreaDefault()
}
document.getElementById('buttonDescriptografar').addEventListener('click', () => {
    descriptografarTexto();
    unhideCopyButton();
    unhideOutput();
    errorMessage("descriptografar");
})

function hideEncryptAreaDefault() {
    const encryptAreaDefault = document.querySelector('.encryptAreaDefault')
    encryptAreaDefault.style.display = 'none'
}

function unhideCopyButton() {
    const copyButton = document.getElementById('copyButton')
    const userInput = document.getElementById('userInput')
    if (userInput.value.trim() !== "") {
        copyButton.hidden = false
    }else{
        copyButton.hidden = true
    }
}

function unhideOutput() {
    const output = document.getElementById('output')
    output.hidden = false
}

document.getElementById('output').addEventListener('focus', function(event) {
    event.target.blur();
});

function errorMessage(action) {
    const userInput = document.getElementById('userInput')
    const encryptAreaDefault = document.querySelector('.encryptAreaDefault')
    const errorMessageDiv = document.querySelector('.errorMessage')
    if (action === "criptografar") {
        if (userInput.value.trim() === "") {
            encryptAreaDefault.style.display = 'none'
            errorMessageDiv.style.display = 'flex'
        } else {
            errorMessageDiv.style.display = 'none'
        }
    } else if (action === "descriptografar") {
        if (userInput.value.trim() === "") {
            encryptAreaDefault.style.display = 'none'
            errorMessageDiv.style.display = 'flex'
        } else {
            errorMessageDiv.style.display = 'none'
        }
    }
}