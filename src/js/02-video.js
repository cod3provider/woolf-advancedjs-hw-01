import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const localItems = localStorage.getItem(LOCALSTORAGE_KEY);

if (localItems) {
  const currentSeconds = JSON.parse(localItems);
  player.setCurrentTime(currentSeconds);
}

const onPlay = e => {
  localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));