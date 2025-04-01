// Start at 1:44:09 time stamp from https://www.youtube.com/watch?v=ldwlOzRvYOU

function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

function showModal(imageSrc, altText) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('img01');
    var captionText = document.getElementById('caption');

    modalImg.src = "./assets/Art-Work/car_wireframe.png";
    modalImg.alt = altText;
    captionText.innerHTML = altText;
    modal.style.display = 'block';
  }

  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }


  function showModal1(imageSrc, altText) {
    var modal = document.getElementById('myModal1');
    var modalImg = document.getElementById('img02');
    var captionText = document.getElementById('caption1');

    modalImg.src = "./assets/Art-Work/wine_wireframe.png";
    modalImg.alt = altText;
    captionText.innerHTML = altText;
    modal.style.display = 'block';
  }

  function closeModal1() {
    var modal = document.getElementById('myModal1');
    modal.style.display = 'none';
  }

  
  function showModal2(imageSrc, altText) {
    var modal = document.getElementById('myModal2');
    var modalImg = document.getElementById('img03');
    var captionText = document.getElementById('caption2');

    modalImg.src = "./assets/Art-Work/house_wireframe.png";
    modalImg.alt = altText;
    captionText.innerHTML = altText;
    modal.style.display = 'block';
  }

  function closeModal2() {
    var modal = document.getElementById('myModal2');
    modal.style.display = 'none';
  }


    
  function showModal3(imageSrc, altText) {
    var modal = document.getElementById('myModal3');
    var modalImg = document.getElementById('img04');
    var captionText = document.getElementById('caption3');

    modalImg.src = "./assets/Art-Work/kitchen_wireframe.png";
    modalImg.alt = altText;
    captionText.innerHTML = altText;
    modal.style.display = 'block';
  }

  function closeModal3() {
    var modal = document.getElementById('myModal3');
    modal.style.display = 'none';
  }


  function showModal4(imageSrc, altText) {
    var modal = document.getElementById('myModal4');
    var modalImg = document.getElementById('img05');
    var captionText = document.getElementById('caption4');

    modalImg.src = "./assets/Art-Work/andriod_wireframe.png";
    modalImg.alt = altText;
    captionText.innerHTML = altText;
    modal.style.display = 'block';
  }

  function closeModal4() {
    var modal = document.getElementById('myModal4');
    modal.style.display = 'none';
  }

  function showModal5(imageSrc, altText) {
    var modal = document.getElementById('myModal5');
    var modalImg = document.getElementById('img06');
    var captionText = document.getElementById('caption5');

    modalImg.src = "./assets/Art-Work/terrain_wireframe.png";
    modalImg.alt = altText;
    captionText.innerHTML = altText;
    modal.style.display = 'block';
  }

  function closeModal5() {
    var modal = document.getElementById('myModal5');
    modal.style.display = 'none';
  }

  function showModal6(imageSrc, altText) {
    var modal = document.getElementById('myModal6');
    var modalImg = document.getElementById('img07');
    var captionText = document.getElementById('caption6');

    modalImg.src = "./assets/Art-Work/home_wireframe.png";
    modalImg.alt = altText;
    captionText.innerHTML = altText;
    modal.style.display = 'block';
  }

  function closeModal6() {
    var modal = document.getElementById('myModal6');
    modal.style.display = 'none';
  }

// Splash
const splash = document.querySelector('.splash');

function closeSplash() {
  splash.classList.add('display-none');
}


document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
      splash.classList.add('display-none');
  }, 15000);
});

// Mute the rocket boost video
document.getElementById('videoFrame').addEventListener('load', function () {
  const iframe = document.getElementById('videoFrame');
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  // Try to mute the video if the iframe content is accessible
  if (iframeDoc) {
    const video = iframeDoc.querySelector('video');
    if (video) video.muted = true;
  }
});

const header = document.querySelector('.header');

window.onscroll = function(){
  var top = window.scrollY;
  console.log(top);
  if(top>=50){
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }
}



  