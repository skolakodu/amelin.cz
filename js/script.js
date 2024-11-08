const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },

  });

document.addEventListener("DOMContentLoaded", function() {
  const steps = document.querySelectorAll(".singleStep");

  steps.forEach((step, index) => {
    step.addEventListener("click", () => {
      // Remove active class from all steps
      steps.forEach(s => s.classList.remove("active"));
      
      // Add active class to the clicked step
      step.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const steps = document.querySelectorAll(".faq-item");

  steps.forEach((step, index) => {
    step.addEventListener("click", () => {
      // Remove active class from all steps
      steps.forEach(s => s.classList.remove("active"));
      
      // Add active class to the clicked step
      step.classList.add("active");
    });
  });
});

window.addEventListener('scroll', () => {
  const fixedElement = document.querySelector('.header');

  if (window.scrollY > 0) {
      fixedElement.classList.add('scrolled');
  } else {
      fixedElement.classList.remove('scrolled');
  }
});

document.getElementById('burger').addEventListener('click', function() {
  const menu = document.getElementById('menu');
  this.classList.toggle('active');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', (e) => {
    
    // Close the menu
    document.getElementById('menu').style.display = 'none';
    document.getElementById('burger').classList.remove('active');

    // Smoothly scroll to the target section
    const targetId = link.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 30; // Offset in pixels
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

document.querySelector('.logo').addEventListener('click', function(event) {
  event.preventDefault();  // Prevents any default link behavior if the logo is a link
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  // Smooth scrolling effect
  });
});

document.querySelector('.footer-logo').addEventListener('click', function(event) {
  event.preventDefault();  // Prevents any default link behavior if the logo is a link
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  // Smooth scrolling effect
  });
});

// Selecting elements
const openPopupButton = document.querySelector('.open-popup');
const popupOverlay = document.querySelector('.video-modal');
const closePopupButton = document.querySelector('.button-modal');
const playerContainer = document.querySelector('.player');

// Function to create and add the iframe to the DOM
function addIframe() {
  const iframe = document.createElement('iframe');
  iframe.src = "https://www.youtube.com/embed/BVhwqX0TIqk?si=Vglc8quNRz2_s8aj";
  iframe.title = "YouTube video player";
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;

  playerContainer.appendChild(iframe);
}

// Function to open the popup
function openPopup() {
  popupOverlay.style.display = 'flex';
  addIframe();
}

// Function to close the popup and remove the iframe
function closePopup() {
  popupOverlay.style.display = 'none';

  // Remove iframe from the DOM
  playerContainer.innerHTML = '';
}

// Event listeners
openPopupButton.addEventListener('click', openPopup);
popupOverlay.addEventListener('click', closePopup);
closePopupButton.addEventListener('click', closePopup);

// Prevent closing popup when clicking inside the content area
popupOverlay.querySelector('.video-modal').addEventListener('click', function(event) {
  event.stopPropagation();
});
