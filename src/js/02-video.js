import Player from '@vimeo/player';
import { throttle } from 'lodash';

const player = new Player('vimeo-player', {
    width: 640
})

document.addEventListener('DOMContentLoaded',  setPrevTime())

player.on('timeupdate', throttle(() => {
    player.getCurrentTime().then(res => localStorage.setItem("videoplayer-current-time", res))
}, 1000))

function setPrevTime() {
    let savedTime = localStorage.getItem("videoplayer-current-time")
    if (!savedTime) {
        return
    }

    player.setCurrentTime(savedTime)
}

