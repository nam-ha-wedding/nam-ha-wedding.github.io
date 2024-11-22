
(function() {
    document.getElementById("play").onclick = () => {
        let audio = document.getElementById("playAudio");
        console.log(audio.paused);
        if(audio.paused){
            audio.play();
            document.getElementById("play").className = 'fa fa-volume-off icon-play'
        } else {
            audio.pause()
            document.getElementById("play").className = 'fa fa-volume-up icon-play'
        }
    }
 })();