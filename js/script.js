const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.prev',
      prevEl: '.next',
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