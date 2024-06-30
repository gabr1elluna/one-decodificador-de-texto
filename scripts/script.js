function criptografarTexto() {
    const userInput = document.getElementById('userInputStyles'); 
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

    document.getElementById('resultado').textContent = userInputValue;
}
document.getElementById('buttonCriptografar').addEventListener('click', criptografarTexto);


function descriptografarTexto() {
    const userInput = document.getElementById('userInputStyles'); 
    let userInputValue = userInput.value;

    const decript = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    }

    userInputValue = userInputValue.replace(/(ai|enter|imes|ober|ufat)/gi, match => decript[match])

    document.getElementById('resultado').textContent = userInputValue;
}
document.getElementById('buttonDescriptografar').addEventListener('click', descriptografarTexto);
