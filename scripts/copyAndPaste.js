const copyText = document.querySelector('#output')
const copyButton = document.querySelector('#copyButton')
const pasteText = document.querySelector('#userInput')
const pasteButton = document.querySelector('#pasteTextButton')

function changeButtonText(button, text) {
    button.textContent = text;
    setTimeout(() => {
        button.textContent = 'Copiar';
    }, 800);
}

copyButton.addEventListener('click', async () => {
    await navigator.clipboard.writeText(copyText.value)
    changeButtonText(copyButton, 'Copiado!');
})

pasteButton.addEventListener('click', async () => {
    const read = await navigator.clipboard.readText()
    pasteText.value = read
})
