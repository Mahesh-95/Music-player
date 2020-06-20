/* Play and pause button */
var play=document.getElementById('play');
var pause=document.getElementById('pause');
var audio=document.getElementById('aud');
var songIndex=0;
var songs=['songs/song1.mp3', 'songs/song2.mp3', 'songs/song3.mp3', 'songs/song4.mp3', 'songs/song5.mp3', 'songs/song6.mp3', 'songs/song7.mp3', 'songs/song8.mp3', 'songs/song9.mp3'];
var thumbnails=['images/cover1.png', 'images/cover2.png', 'images/cover3.jpg', 'images/cover4.png', 'images/cover5.jpg', 'images/cover6.jpg', 'images/cover7.jpg', 'images/cover8.png', 'images/cover9.jpg'];
var songArtists=['Dua lipa','Era Istrefi','Illenium','Marshmello ft. Bastille','Zedd & Alessia Cara','Two Feet','Tones and I','Daddy Yankee & Snow','benny blanco, Halsey & Khalid'];
var songTitles=["Don't Start Now",'Bonbon','Fractures','Happier','Stay',"I Feel Like I'm Drowning",'Dance Monkey','Con Calma', 'Eastside'];
var thumbnail=document.getElementById('thumbnail');
var songArtist=document.getElementById('songArtist');
var songTitle=document.getElementById('songTitle');

audio.src = songs[songIndex];
thumbnail.src = thumbnails[songIndex];
songArtist.innerHTML = songArtists[songIndex];
songTitle.innerHTML = songTitles[songIndex];

/* Play and Pause button */
play.addEventListener('click',function playSong(){
    audio.play();
    play.style.display="none";
    pause.style.display="block";
});

pause.addEventListener('click', function pauseSong(){
    audio.pause();
    pause.style.display="none";
    play.style.display="block";
});

/* Progress bar */
audio.addEventListener('loadedmetadata', function(){
    var duration=audio.duration;
    var currentTime=audio.currentTime;
    document.getElementById("duration").textContent=convertElaspedtime(duration);
    document.getElementById("current-time").textContent=convertElaspedtime(currentTime);
    canvas.fillRect(0,0, canvasWidth, 27.5);
});

function convertElaspedtime(input){
    var sec=Math.floor(input%60);
    if (sec<10){
        sec="0"+sec;
    }
    var minutes=Math.floor(input/60);
    return minutes + ":" + sec;
}

var canvas=document.getElementById('progress').getContext('2d');
var canvasWidth=340;
function updateBar(){
    canvas.clearRect(0,0, canvasWidth, 27.5);
    canvas.fillStyle="#d8d8d8";
    canvas.fillRect(0,0, canvasWidth, 27.5);

    var currentTime=aud.currentTime;
    var duration= aud.duration;

    if(currentTime==duration){
        aud.pause();
        pause.style.display="none";
        play.style.display="block";
        
        
    }
    document.getElementById("current-time").textContent=convertElaspedtime(currentTime);
    var per=currentTime/duration;
    var progress=(canvasWidth*per);
    canvas.fillStyle="#87ceeb";
    canvas.fillRect(0,0,progress, 27.5);

    
}

/* Volume button */
const slider=document.getElementById('volumeSlider');
slider.oninput= (e) =>{
    const volume = e.target.value;
    aud.volume=volume;
}

var volume=document.getElementById('volume');
var sound=document.getElementById('sound');
volume.addEventListener("click", function(){
    sound.classList.toggle("sound1");
});

/* Repeat button*/
var repeat=document.getElementById("repeat");
repeat.addEventListener("click", function(){
    if(aud.loop){
        aud.loop=false; 
        repeat.style.color="gray";
    }
    else{
        aud.loop=true;
        repeat.style.color="black";
    }
});

/* Next and Previous button */
var next1 =document.getElementById('next');
var prev1 =document.getElementById('prev');

next1.addEventListener('click', function() {
    songIndex++;
    if (songIndex > (songs.length-1)) {
        songIndex = 0;
    }
    audio.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    audio.play();
    play.style.display="none";
    pause.style.display="block";

});
prev1.addEventListener('click', function() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length-1;
    }
    audio.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    audio.play();
    play.style.display="none";
    pause.style.display="block";
});

/*Song selection */
var musicList= document.getElementById('musicbox');
musicList.addEventListener('click', function(){
    var e =event.target;
    songIndex=parseInt(e.id);
    audio.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    audio.play();
    play.style.display="none";
    pause.style.display="block";

});


