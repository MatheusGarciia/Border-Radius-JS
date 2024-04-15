let box = document.querySelector('.box')
let allSides = document.querySelector('#property')
let pixels = '0'
let clipboard = document.querySelector('#clipboard')
let copyButton = document.querySelector('#copy')


allSides.addEventListener('keyup', () => {
    pixels = allSides.value
    box.style.borderRadius = pixels
    clipboard.value = `element {
    border-radius: ` + pixels + `;
}`
    return text = clipboard.value
})


copyButton.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(text);
          alert("Copied the text: " + text)
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      }
)





