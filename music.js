const music = document.getElementById("bg-muzak");
music.volume = 0.3;

function startMusic() {
    music.play();
    document.removeEventListener("click", startMusic);
}

document.addEventListener("click", startMusic);