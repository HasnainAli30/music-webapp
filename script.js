// Query selectors
const music = document.querySelector("audio");
const songName = document.querySelector("h1");
const singerName = document.querySelector("p");
const thumbnail = document.querySelector("img");


// ID elements
const play = document.getElementById("play");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

// Song details

const songs = [
    {
    name: "Vibez",
    singer: "Zayn Malik",
    song: "ZAYN-Vibez-Official-Video",
    pic: "vibez-thumbnail"
},

{
    name: "Girls Like You",
    singer: "Maroon-5 ft. Cardi B",
    song: "Maroon-5-Girls-Like-You-ft-Cardi",
    pic: "maroon-5-girls-like-you-thumbnail"
},

{
    name: "Night Changes",
    singer: "One Direction",
    song: "One-Direction-Night-Changes",
    pic: "one-direction-night-changes-thumbnail"
},

{
    name: "Lasting Lover",
    singer: "Sigala, James Arthur",
    song: "Sigala-James-Arthur-Lasting-Love",
    pic: "lasting-lover-thumbnail"
},

{
    name: "Days I Will Remember",
    singer: "Tyrone Wells",
    song: "Tyrone-Wells-Days-I-Will-Remembe",
    pic: "days-I-will-remember"
}

];


let isPlaying = false;

// For playing the song
const playMusic = () =>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
};

// For pausing the song

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
};

play.addEventListener("click",() =>{
    if(isPlaying){ 
        pauseMusic();
    }else{
        playMusic();
    }
});

// changing the songs

const loadSong = (songs) => {
    songName.textContent = songs.name;
    singerName.textContent= songs.singer;
    music.src = "Songs/" + songs.song + ".mp3";
    thumbnail.src = "Thumbnails/" + songs.pic + ".jpg";

}

songIndex = 0;


const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const previousSong = () => {
    songIndex = (songIndex - 1  + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};



next.addEventListener("click",nextSong);
previous.addEventListener("click",previousSong);







