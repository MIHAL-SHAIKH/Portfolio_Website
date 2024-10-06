


$(document).ready(function() {
  $("a.nav-link").on('click', function() {
    $("a.nav-link").removeClass('active');
    $(this).addClass('active');
  });
  
});
var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 4,
  spaceBetween: 0,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    },
  },
});
// AOS.init();

// const sections = document.getElementsByTagName('section');
// const sectionsArray = Array.from(sections)

// console.warn(sections,'sections')

// sectionsArray.forEach(section => {
  //     setInterval(()=>{
    //         section.classList.toggle('active-section');
    //         section.classList.toggle('deactive-section')
    //     },3000)
    //     console.log(section)
    // });
    const myText = new AutoTyping({
    
      id: 'profesion',
      
      typeText: ['Programmer','Devloper','Astronaut','Plumber','Doctor','bla bla bla'],
      textColor: 'white',
      cursorColor:'white',

      
      }).init();