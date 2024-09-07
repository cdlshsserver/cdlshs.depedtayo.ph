window.onload = function() {
  // Show the cookie consent popup after 3 seconds
  setTimeout(function() {
      document.getElementById('cookieConsent').style.display = 'block';
  }, 3000);

  // Handle Accept button click
  document.getElementById('acceptBtn').onclick = function() {
      document.getElementById('cookieConsent').style.display = 'none';
      // You can add your logic for accepting cookies here
      console.log("Cookies accepted");
  };

  // Handle Decline button click
  document.getElementById('declineBtn').onclick = function() {
      document.getElementById('cookieConsent').style.display = 'none';
      // You can add your logic for declining cookies here
      console.log("Cookies declined");
  };

  // Close button logic (just hides the consent without saving choice)
  document.getElementById('closeBtn').onclick = function() {
    document.getElementById('cookieConsent').style.display = 'none';
    console.log("Popup closed without making a choice");
  };
};

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-fill");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-fill");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns_button", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".contents__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
