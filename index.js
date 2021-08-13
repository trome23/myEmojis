const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.querySelector("#emoji-container")
const pushBtn = document.querySelector("#push-btn")
const emojiInput = document.querySelector("#emoji-input")
const unshiftBtn = document.querySelector("#unshift-btn")

let emojiList = ""
    for (let i = 0; i < myEmojis.length; i++) {
        emojiList += `<span id = "emoji-span">${myEmojis[i]}</span>`
    }
    emojiContainer.innerHTML = emojiList

function render() {
    let emojiList = ""
    for (let i = 0; i < myEmojis.length; i++) {
        emojiList += `<span id = "emoji-span">${myEmojis[i]}</span>`
    }
    emojiContainer.innerHTML = emojiList
}


pushBtn.addEventListener('click', function() {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = "" 
        emojiContainer.innerHTML = ""
        render()
    } 
})

unshiftBtn.addEventListener('click', function() {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = "" 
        emojiContainer.innerHTML = ""
        render()
    } 
})