import Player from '@vimeo/player';  
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const time = localStorage.getItem('videoplayer-current-time');

  
player.setCurrentTime(time).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
});