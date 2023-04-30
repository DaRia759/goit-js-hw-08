import Player from '@vimeo/player';  
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

setCurrentTime();

const onPlay = function (event) {
    localStorage.setItem(CURRENT_TIME, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

function setCurrentTime() {
    if (localStorage.getItem(CURRENT_TIME)) {
        player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
    }
    return;
}
