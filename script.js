const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const music = new Audio("music.mp3");

let yesClickCount = 0;

yesBtn.addEventListener("click",() => {
  yesClickCount++;
  if (yesClickCount === 1) {
    question.innerHTML = "Em yêu anh hơn lol";
  setTimeout(() => {
    question.innerHTML = "Happi 3rd Anniversary <3";
  },3000);
  setTimeout(() => {
    question.innerHTML = "Em yêu anh hơn!!!<br><span style='display: block; text-align: center; font-size: 0.25em;'>Đồng ý mới được xem tiếp^^</span>";
  },7000);
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajNqdXB3eXJwenExMWh4N3Y4YzJ4dDVkbGtubXVyYXQ0bzZkb2V1NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KmxmoHUGPDjfQXqGgv/giphy.gif";
} else if (yesClickCount === 2) {
  music.play();
  document.querySelector('.btn-group').style.display = 'none';
    gif.style.display = 'none';
  displayPhotos();
}  
});

function displayPhotos() {
  question.innerHTML = "<span style='font-size: 0.80 em; display: block; margin-top: 25px; margin-bottom: 0px'>Thank you for coming into my life~</span>";

  const photos = [
    "img/firstmanzi.jpeg",
    "img/gelato.jpeg",
    "img/kiss.jpeg",
    "img/ams.jpeg",
    "img/haagen.jpeg",
    "img/montaukfilm.jpeg",
    "img/raawmirror.jpeg",
    "img/burger.jpeg",
    "img/cfphotobooth.jpg",
    "img/IMG_7439.jpg",
    "img/mubaohiem.jpeg",
    "img/croissant.jpeg",
    "img/pretty.jpeg",
    "img/pretty2.jpeg",
    'img/mcdonalds.jpeg',
    "img/happy.jpeg",
  ];

  let currentPhotoIndex = 0;

  const photoContainer = document.createElement("div");
  photoContainer.style.textAlign = "center";

  const img = document.createElement("img");
  img.style.width = "65%"; 
  img.style.marginTop = "0px";
  img.style.marginBottom ="10px";
  img.src = photos[currentPhotoIndex];
  photoContainer.appendChild(img)
  wrapper.appendChild(photoContainer);

  function nextPhoto() {
    currentPhotoIndex++;
    if (currentPhotoIndex >= photos.length) {
        clearInterval(slideshowInterval); 
        currentPhotoIndex = photos.length - 1; 
    } else {
        img.src = photos[currentPhotoIndex];
    }
}

  const slideshowInterval = setInterval(nextPhoto, 4000);
}


noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
