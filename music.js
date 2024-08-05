/*let currentMusic = 0;

const music = document.querySelector('audio');

const bar = document.querySelector('.bar');
const songName = document.querySelector('.Song_name');
const artist = document.querySelector('.artist-name');
const disk = documemt.querySelector('.music_logo');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.playBtn');
const forwardBtn = document.querySelector('.nextBtn');
const backwardBtn = document.querySelector('.backBtn');

playBtn.addEventListener('click' , () => {
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
})*/

let currentMusic = 0;

const music = document.querySelector("#audio");

const bar = document.querySelector('.bar');
const songName = document.querySelector('.songName');
const artistName
 = document.querySelector('.Artist');
const disk = document.querySelector('.music_logo');
const currentTime = document.querySelector('.current-time');
//const musicTime = document.querySelector('.music-time');
const musicDuration = document.querySelector('.song-duration');
const playbtn = document.querySelector('.playBtn');
const forwardBtn = document.querySelector('.nextBtn');
const backwardBtn = document.querySelector('.backBtn');

playbtn.addEventListener('click' , ()=> {

    if(playbtn.className.includes('pause')){
        music.play();
    }else{
        music.pause();
    }     




    playbtn.classList.toggle('pause');
    disk.classList.toggle('play');

})
// Set Music Function

const setMusic = (i) => {
    bar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;
     currentTime.innerHTML = '00:00';
     setTimeout(() =>  {
        bar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
     },300);
}

setMusic(0);


const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if(min < 10){
        min = `0${min}`;
    }
    let sec = Math.floor(time %60);
    if(sec < 10){
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}



setInterval(() => {
      bar.vlaue = music.currentTime;
      currentTime.innerHTML = formatTime(music.currentTime);
      if(Math.floor(music.cuurentTime) == Math.floor(bar.max)){
        forwardBtn.click();
      }
}, 500)


bar.addEventListener('change', () => {
    music.currentTime = bar.value;
})

const playMusic = () => {
    music.play();
    playbtn.classList.remove('pause');
    disk.classList.add('play');
}

forwardBtn.addEventListener('click', () => {
    if(currentMusic >= songs.length - 1 ){
        currentMusic = 0;
    }else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();

})

backwardBtn.addEventListener('click', () => {
    if(currentMusic <= 0 ){
        currentMusic = songs.length - 1;
    }else{
        currentMusic-- ;
    }
    setMusic(currentMusic);
    playMusic();

})