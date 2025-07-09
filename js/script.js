function honk() {
    const audio = document.getElementById('honk-sound');
    audio.currentTime = 0; // Reset audio to start
    audio.play();
}