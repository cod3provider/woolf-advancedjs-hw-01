import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

if (localStorage.getItem("videoplayer-current-time")) {
  const currentSeconds = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  player.setCurrentTime(currentSeconds).then(function(seconds) {
    console.log(`Current time of video are ${seconds} seconds`);
  }).catch(function(err) {
    switch (err.name) {
      case 'RangeError':
        console.log('the time was less than 0 or greater than the video’s duration');
        break;
      default:
        console.log('some other error occurred');
        break;
    }
  });
}

const onPlay = e => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));