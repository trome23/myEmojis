const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.querySelector("#emoji-container")

for (let i = 0; i < myEmojis.length; i++) {
    let emojiList = ""
    for (let i = 0; i < myEmojis.length; i++) {
        // console.log(myEmojis[i])
        emojiList += `<span id = "emoji-span">${myEmojis[i]}</span>`
    }
    emojiContainer.innerHTML = emojiList
}