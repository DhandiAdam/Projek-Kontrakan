
// Tailwind Css
const navTriggerBtn = document.querySelector('#nav_trigger_btn');

const navMenu = document.querySelector('#nav_menu');

navTriggerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('nav-is-open');
});
    
// ReadText
function ReadText() {
  var moreText = document.getElementById("moreText");
  moreText.classList.toggle("hidden");

  var btnText = moreText.classList.contains("hidden") ? "More Detail" : "Less More";
  document.querySelector(".main_btn").innerText = btnText;
}
// Orderan
function Orderan() {
  var moreText = document.getElementById("orderan");
  moreText.classList.toggle("hidden");

  var btnText = moreText.classList.contains("hidden") ? "More Detail" : "Less More";
  document.querySelector(".Orderan").innerText = btnText;
}

// Reservasi
function Reservasi() {
  var moreText = document.getElementById("reservasi");
  moreText.classList.toggle("hidden");

  var btnText = moreText.classList.contains("hidden") ? "More Detail" : "Less More";
  document.querySelector(".Reservasi").innerText = btnText;
}


// Redirect to WhattsApp

document.getElementById("waButton").addEventListener("click", redirectToWhatsApp);

function redirectToWhatsApp() {
    var phoneNumber = '6285591450144'; 
    var message = 'Hello, saya ingin melakukan Sewa Kontrakan di H.Indu Berikut adalah detail reservasi saya:\n\nNama: \nTipe Kontrakan: \nTanggal Mulai: \nTanggal Berakhir: \n\nApakah Tersedia kontrakan?'; 
    var url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}   

function TempatMewah1(){
  var url = `https://maps.app.goo.gl/buotPV8pP76ZXpvX7`;
  window.open(url, '_blank');
}
function TempatMewah2(){
  var url = `https://maps.app.goo.gl/fSYnh6EbAcvmDfyS9`;
  window.open(url, '_blank');
}
function TempatMewah3(){
var url =`https://www.google.com/maps/dir/-6.3091354,106.8296376/Kontrakan+Depok+%22Grand+Sentosa%22+dekat+margonda+dan+jakarta+selatan/@-6.3342019,106.7960097,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e69ed06e0f38391:0x453402f29b46a2a2!2m2!1d106.8506387!2d-6.3688767?entry=ttu`;
  window.open(url, '_blank');
}
function TempatMewah4(){
var url =`https://www.google.com/maps?client=ms-android-xiaomi-rvo2&sca_esv=44aafcd442c2ff9c&sca_upv=1&biw=393&bih=772&sxsrf=ADLYWIKst0vZxF8x6Wtm8hph1Q3e8DoqfA:1720413493378&lsig=AB86z5XEO5oBDg7vnD2PjXgp4hwu&kgs=2e5399e5e638a728&shndl=-1&shem=lsp&um=1&ie=UTF-8&fb=1&gl=id&sa=X&geocode=KZtsBIPu7WkuMaf9TfQePVlb&daddr=Jl.+Fatimah+Blok+Masjid+No.11,+RT.02/RW.11,+Kemiri+Muka,+Kecamatan+Beji,+Kota+Depok,+Jawa+Barat+16423`;
  window.open(url, '_blank');
}
function Memesan() {
  var phoneNumber = '6285591450144'; 
  var message = 'Hello, saya ingin Memesan Paket yang ada diwebsite, bagaimana yah carannya?'; 
  var url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}  
function openPopup() {
  document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}

function sewaSekarang() {
  window.location.href = "KamarB.html";
}

// Kamar Tipe S
function TipeS() {
  document.getElementById('TipeS').classList.remove('hidden');
}

function closeTipeS() {
  document.getElementById('TipeS').classList.add('hidden');
}

function sewaSekarangS() {
  window.location.href = "KamarS.html";
}
// Kamar Tipe L
function TipeL() {
  document.getElementById('TipeL').classList.remove('hidden');
}

function closeTipeL() {
  document.getElementById('TipeL').classList.add('hidden');
}

function sewaSekarangL() {
  window.location.href = "KamarL.html";
}
// Kamar Tipe LL
function TipeLL() {
  document.getElementById('TipeLL').classList.remove('hidden');
}

function closeTipeLL() {
  document.getElementById('TipeLL').classList.add('hidden');
}

function sewaSekarangLL() {
  window.location.href = "KamarLL.html";
}

function tanyaAdmin() {
  var phoneNumber = '6285591450144'; 
  var message = 'Hello, saya ingin Memesan Paket yang ada diwebsite, bagaimana yah carannya?'; 
  var url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}







const swiper = new Swiper('.swiper',{
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 20,

  breakpoints:{
    320:{
      slidesPerView: 1,
      
    },
    960: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },

});

const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  // reset: true,
  delay: 600,
})

// Hero 
sr.reveal('.hero__text',{origin: 'top'});

// Step
sr.reveal('.steps__step',{distance: '100px', interval:100});
// About
sr.reveal('.about__text',{origin: 'left'});
sr.reveal('.about__img',{origin: 'right', delay: 800});
// Favorite
sr.reveal('.Favorite__bg',{delay: 800});
sr.reveal('.Favorite__title');
sr.reveal('.Favorite__slider',{delay: 1000});

// Reservasi
sr.reveal('.Reservasi__title');
sr.reveal('.Reservasi__subtitle', {delay:800});
sr.reveal('.Makanan__grid', {delay:1000});

// Stats
sr.reveal('.stats');
sr.reveal('.stats__item', {
  distance: '100px',
  interval: 100,
});
// Tempat Reservasi
sr.reveal('.Tempat__title');
sr.reveal('.Tempat__subtitle', {delay: 800});
sr.reveal('.Tempat__item', {
  distance: '100px',
  interval: 100,
  delay: 1000,
});

// Contact 

sr.reveal('.Contact__container');
sr.reveal('.Contact__text', {delay:800});

// Footer
sr.reveal('.footer__item', {
  distance: '100px',
  interval: 100,
  
});
sr.reveal('.footer__copyright');

