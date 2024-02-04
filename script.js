document.addEventListener("DOMContentLoaded", () => {
    const playBtn = document.getElementById("play-video")

    const videoBg = document.createElement("div")
    videoBg.id = "video-bg"

    const playerWrapper = document.createElement("div")
    playerWrapper.id = "player-wrapper"

    const player = document.createElement("iframe")
    player.allowFullscreen = true
    player.allow = "autoplay; fullscreen"
    player.src = "https://www.youtube-nocookie.com/embed/edm4V2Tg8fE?html5=1&rel=0&playsinline=1&autoplay=1"
    player.style.border = "0px"
    player.style.position = "absolute"
    player.style.width = "100%"
    player.style.height = "100%"
    player.style.top = "0"
    player.style.left = "0"


    playerWrapper.appendChild(player)

    videoBg.appendChild(playerWrapper)

    playBtn.addEventListener("click", () => {
        document.body.appendChild(videoBg)
    })

    videoBg.addEventListener("click", () => {
        videoBg.remove()
    })
})