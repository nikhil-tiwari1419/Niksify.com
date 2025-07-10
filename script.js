document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  // ✅ Hamburger toggle
  window.toggleSidebar = function () {
    sidebar.classList.toggle("open");
  };
});

const page = document.querySelector("body");
const btn = document.querySelector(".DayNight");
let flag = 0
btn.addEventListener("click", function () {
  btn.classList.add("fade");

  setTimeout(() => {

    if (flag == 0) {
      page.style.backgroundColor = "black";
      page.style.color = "white"
      console.log("ON");
      flag = 1
      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5"/>
      <g stroke="currentColor" stroke-width="2">
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </g>
      </svg>
      `;
    } else {
      page.style.backgroundColor = "transparent";
      page.style.color = "black"
      console.log("OFF");
      flag = 0;
      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
      </svg>
      `;
    }
    btn.classList.remove("fade")
  }, 300);
})

// let imgggg = document.querySelector(".img");
// let btnnn = document.querySelector("#silder");

let chitra = [
  "https://images.unsplash.com/photo-1744019960830-eb79b2528f8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjB8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1747134392453-751dfaed2aa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDh8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1749746797402-158123ec2d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTN8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG11c2ljfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1749498682646-45e7c11506ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzd8fHxlbnwwfHx8fHw%3D",
  " https://images.unsplash.com/photo-1743883986262-7b46a76c0261?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzh8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
  " https://plus.unsplash.com/premium_photo-1749666992906-f059c7d88139?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNDN8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1683140707316-42df87760f3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1724388471774-58ef5277d40d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWMlMjBlbnZpb3JubWVudHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1666777246899-053e06efdb35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJpcmR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1750609750908-a1e8e2a61efc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
];
let index = 0;
function changeimage() {
  document.getElementById("silder").src = chitra[index];
  index++;
  if (index >= chitra.length) {
    index = 0;
  }
  setTimeout(changeimage, 2000);
}
changeimage();

const btnn = document.querySelector(".toggleBtn");
const innerBox = document.getElementById("innerBox");

btnn.addEventListener("click", () => {
  innerBox.classList.toggle("open");
});

const togglBtn = document.getElementById("togglesvg");
const dropBox = document.getElementById("dropBox");
const arrowIcon = document.getElementById("arrowIcon");

togglBtn.addEventListener("click", () => {
  dropBox.classList.toggle("open");
  arrowIcon.classList.toggle("rotate");

});

let leftSong_arr = [
  {
    Name: "Fade",
    singer: "Allen Walker",
    coverimg: "images/NCS_Song.png",
    SongSrc: "audio/dashie - fade [NCS Release].mp3",
  },
  {
    Name: "Fade",
    singer: "Allen Walker",
    coverimg: "images/NCS_Song.png",
    SongSrc: "audio/dashie - fade [NCS Release].mp3",

  },
  {
    Name: "Heroes Tonight",
    singer: "Janji, Johnning",
    coverimg: "images/NCS_Song.png",
    SongSrc: "audio/Janji, Johnning - Heroes Tonight (feat. Johnning) [NCS Release].mp3",

  },
  {
    Name: "Invincible",
    singer: "Zeus X Crona",
    coverimg: "images/NCS_Song.png",
    SongSrc: "audio/Zeus X Crona - Invisible [NCS Release].mp3",
  },
  {
    Name: "Invincible",
    singer: "Zeus X Crona",
    coverimg: "images/NCS_Song.png",
    SongSrc: "audio/Zeus X Crona - Invisible [NCS Release].mp3",
  },
  {
    Name: "need you again",
    singer: "Sadbois, ROY KNOX, Jake Neumar ",
    coverimg: "images/NCS_Song.png",
    SongSrc: "audio/SadBois, ROY KNOX, Jake Neumar - Need You Again [NCS Release].mp3",
  },
  {
    Name: "Need you again",
    singer: "Sadbois, ROY KNOX, Jake Neumar ",
    coverimg: "images/NCS_Song.png",
    SongSrc: "audio/SadBois, ROY KNOX, Jake Neumar - Need You Again [NCS Release].mp3",
  },
  {
    Name: "Royalty",
    singer: "Maestro Chives, Egzod, Neoni",
    coverimg: "images/NCS_Song.png",
    SongSrc: "audio/Maestro Chives, Egzod, Neoni - Royalty [NCS Release].mp3",
  },
 
]

let singer = "";
leftSong_arr.forEach(function (elem, idx) {
  singer += ` <div class="songItems">
                  <img src="${elem.coverimg}" alt="1">
                  <span class="songname">${elem.Name} , ${elem.singer}</span>
                  <span class="songlistplay">
                      <i class="fa-regular fa-circle-play play-btn" data-index="${idx}"></i> 
                  </span>
              </div>`
});
document.querySelector("#innerBox").innerHTML = singer;

let audioElement = new Audio();
window.HTMLAudioElement = audioElement;
let currentPlaying = null;

document.querySelector("#innerBox").addEventListener("click", function (e) {
  if (e.target.classList.contains("play-btn")) {
    let idx = e.target.getAttribute("data-index");
    let song = leftSong_arr[idx];

    // Pause all other audios (including dynamic ones)
    pauseAllAudios(window.HTMLAudioElement);

    if (window.currentPlaying === idx && !window.HTMLAudioElement.paused) {
      window.HTMLAudioElement.pause();
      e.target.classList.remove("fa-circle-pause");
      e.target.classList.add("fa-circle-play");
      window.currentPlaying = null;
    } else {
      document.querySelectorAll(".play-btn").forEach(btn => {
        btn.classList.remove("fa-circle-pause");
        btn.classList.add("fa-circle-play");
      });

      window.HTMLAudioElement.src = song.SongSrc;
      window.HTMLAudioElement.play();
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      window.currentPlaying = idx;
    }
  }
});


let SongLibrary = [
  {
    href: "theLocalTrain.html",
    Img: "images/NCS_Song.png",
    album: "NCS 💀",

  },
  {
    href: "Atifaslam.html",
    Img: "images/Orange.png",
    album: "NCS 💀",

  },
  {
    href: "Arijitsingh.html",
    Img: "images/NCS_Song.png",
    album: "NCS 💀",

  },
  {
    href: "Anuvjain.html",
    Img: "images/purple_ncs.png",
    album: "NCS 💀",

  },
  {
    href: "OldSong.html",
    Img: "images/NCS_Song.png",
    album: "NCS 💀",

  },
  {
    href: "Randomsong.html",
    Img: "images/blue_Ncs.png",
    album: "NCS 💀",

  },
]

let albums = " ";
SongLibrary.forEach(function (elements, indx) {
  console.log(elements, indx);
  albums += `
                <div class="playlist-card">
                    <a href="#" class="album-link" data-href="${elements.href}"><img src="${elements.Img}" alt="${elements.album}"
                            class="singer-img"></a>
                    <p>${elements.album}</p>
                </div>`
})
let sidescroll = document.querySelector(".sidescroll").innerHTML = albums;

document.addEventListener("click", function (e) {
  if (e.target.closest(".album-link")) {
    e.preventDefault();// prevent  page relode 
    const url = e.target.closest(".album-link").dataset.href;

    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        document.querySelector("#content").innerHTML = data;

        // Attach play/pause logic for songs in #content
        document.querySelectorAll("#content .playBtn").forEach((btn) => {
          btn.addEventListener("click", function () {
            const audio = btn.parentElement.querySelector("audio");
            const icon = btn.querySelector("i");
            // Pause all other audios in #content
            pauseAllAudios(audio);

    if (audio.paused) {
      audio.play();
      icon.classList.remove("fa-circle-play");
      icon.classList.add("fa-circle-pause");
    } else {
      audio.pause();
      icon.classList.remove("fa-circle-pause");
      icon.classList.add("fa-circle-play");
    }
    audio.onended = function () {
      icon.classList.remove("fa-circle-pause");
      icon.classList.add("fa-circle-play");
            };
          });
        });
      })
      .catch((err) => {
        document.querySelector("#content").innerHTML = "<p> 🚫page not found </P>";
        console.error("Failed to load page: ", err);
      })
  }
});

function pauseAllAudios(exceptAudio = null) {
  // Pause all <audio> elements in the document except the one passed
  document.querySelectorAll("audio").forEach((audio) => {
    if (audio !== exceptAudio) {
      audio.pause();
      audio.currentTime = 0;
      // Reset play icon if present
      const icon = audio.parentElement.querySelector(".fa-circle-pause");
      if (icon) {
        icon.classList.remove("fa-circle-pause");
        icon.classList.add("fa-circle-play");
      }
    }
  });
  // Also pause the main audioElement if it's not the one playing
  if (window.HTMLAudioElement && window.HTMLAudioElement !== exceptAudio) {
    window.HTMLAudioElement.pause();
    window.HTMLAudioElement.currentTime = 0;
    document.querySelectorAll(".play-btn").forEach(btn => {
      btn.classList.remove("fa-circle-pause");
      btn.classList.add("fa-circle-play");
    });
    window.currentPlaying = null;
  }
}
