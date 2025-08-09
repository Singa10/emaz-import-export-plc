const navlinks=document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton=document.getElementById("menu-open-button");
const menuCloseButton=document.getElementById("menu-close-button");


menuOpenButton.addEventListener("click",()=>{
  document.body.classList.toggle("show-mobile-menu")  
})

menuCloseButton.addEventListener("click",()=>menuOpenButton.click());

navlinks.forEach(link=>{
    link.addEventListener("click",()=>menuOpenButton.click());
  })


  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.querySelector('input[placeholder="Your Name"]').value;
      const email = form.querySelector('input[placeholder="Your Email"]').value;
      const message = form.querySelector('textarea[placeholder="Your Message"]').value;
  
      const subject = encodeURIComponent(`New message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage:\n${message}`);
  
      const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=emazimportexport@gmail.com&su=${subject}&body=${body}`;

  
      window.open(gmailURL, "_blank");
    });
  });
  

  const blogSwiper = new Swiper('.blog-images', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true,
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 3 },
      1440: {slidesPerView: 3 },
    }
  });
  