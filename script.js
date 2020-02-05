const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video
const toggleVideoStatus = () => (video.paused ? video.play() : video.pause());

// Update play/pause icon
const updatePlayIcon = () =>
  video.paused
    ? (play.innerHTML = '<i class="fa fa-play fa-2x"></i>')
    : (play.innerHTML = '<i class="fa fa-pause fa-2x"></i>');

// Update progress and timestamp
const updateProgress = () => true;

// Set video progress
const setVideoProgress = () => true;

// Stop video
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
