const myEmojis = ["🧗‍♂️", "🐶", "👨‍👩‍👦"]
const emojiContainer = document.querySelector("#emoji-container")
const emojiInput = document.querySelector("#emoji-input")
const pushBtn = document.querySelector("#push-btn")
const unshiftBtn = document.querySelector("#unshift-btn")
const popBtn = document.querySelector("#pop-btn")
const shiftBtn = document.querySelector("#shift-btn")

function render() {
    emojiContainer.innerHTML = ""
    emojiList = ""
    for (let i = 0; i < myEmojis.length; i++) {
        emojiList += `<span id = "emoji-span">${myEmojis[i]}</span>`
    }
    emojiContainer.innerHTML = emojiList
}
render()

pushBtn.addEventListener('click', function() {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = "" 
        render()
    } 
})

unshiftBtn.addEventListener('click', function() {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = "" 
        render()
    } 
})

popBtn.addEventListener('click', function() {
    myEmojis.pop()
    render()   
})

shiftBtn.addEventListener('click', function() {
    myEmojis.shift()
    render()   
})