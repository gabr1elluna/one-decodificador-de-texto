function criptografarTexto() {
    const userInput = document.getElementById('userInput'); 
    let userInputValue = userInput.value;

    userInputValue = userInputValue.replace(/[aeiou]/g, function(match) {
        const encript = {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat'
        };
        return encript[match];
    });

    document.getElementById('output').textContent = userInputValue;

    hideEncriptAreaDefault()
}
document.getElementById('buttonCriptografar').addEventListener('click', () => {
    criptografarTexto();
    unhideCopyButton();
    unhideOutput();
})

function descriptografarTexto() {
    const userInput = document.getElementById('userInput'); 
    let userInputValue = userInput.value;

    const decript = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    }

    userInputValue = userInputValue.replace(/(ai|enter|imes|ober|ufat)/gi, match => decript[match])

    document.getElementById('output').textContent = userInputValue;
    
    hideEncriptAreaDefault()
}
document.getElementById('buttonDescriptografar').addEventListener('click', () => {
    descriptografarTexto();
    unhideCopyButton();
    unhideOutput();
})

function hideEncriptAreaDefault() {
    const encriptAreaDefault = document.querySelector('.encriptAreaDefault')
    encriptAreaDefault.style.display = 'none'
}

function unhideCopyButton() {
    const copyButton = document.getElementById('copyButton')
    copyButton.hidden = false
}

function unhideOutput() {
    const output = document.getElementById('output')
    output.hidden = false
}

document.getElementById('output').addEventListener('focus', function(event) {
    event.target.blur();
});
