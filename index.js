$(document).ready(function () {
  const mediaQuery = window.matchMedia('(min-width: 992px)');

  if(mediaQuery.matches){
    // console.warn('logged',mediaQuery)
    // alert(mediaQuery)
    $(document).on('click',function() {
      if (!event.target.classList.contains('copy-link__inner')) {
        $('.side__icon').removeClass('active');
    }
    })
  
    // $(".copy-link__inner").on("click", function(){
    //   this.textContent = 'Copied! '
    //   console.log('this',this)
    // })
  
  
    $(".copy-link__inner").on("click", function() {
   
      // Copy the link to the clipboard
      const cleanLink = $(this).closest('li').find('.side__icon').data('link');
  
      // Copy the clean link to the clipboard
      navigator.clipboard.writeText(cleanLink).then(function() {
          console.log('Link copied to clipboard:', cleanLink);
      }).catch(function(err) {
          console.error('Error copying to clipboard:', err);
      });
  // coppying link
  
      const originalHTML = $(this).html();
      $(this).html('Copied! <i class="fa-solid fa-check"></i>');
      $(this).addClass('clicked')
      
     setTimeout(() => {
       $('.side__icon').removeClass('active')
     },1700)
      setTimeout(() => {
          $(this).html(originalHTML);
          $(this).removeClass("clicked")
      }, 2000);
  });
  }
  $("a.nav-link").on("click", function () {
    $("a.nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $('.btn-read-more').on('click', function() {

    const parent = $(this).closest('.card-text-wrapper')
    const cardText = parent.find('.card__text')

    if (!cardText.length) return;

    cardText.css({
      '-webkit-line-clamp': 'unset',
      'max-height':'100rem'
    })

    $(this).hide();

    console.log('click!',this)
  })




  $('.nav-item').on('click',function(){
    const offcanvasEl = $('.offcanvas').get(0);
    const offcanvasIns = bootstrap.Offcanvas.getInstance(offcanvasEl)
    console.log(offcanvasIns);
    if (offcanvasIns){
      offcanvasIns.hide();
      console.log('done!');
    }
  })
});
var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    // 768: {
    //   slidesPerView: 3,
    // },
    1024: {
      slidesPerView: 3,
    },
    1536: {
      slidesPerView: 4,
    }
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
  id: "profession",

  typeText: [
    "Programmer",
    "Devloper",
    "Astronaut",
    "Plumber",
    "Doctor",
    "bla bla bla",
  ],
  textColor: "white",
  cursorColor: "white",
}).init();


function toggleActive(el){
  const tags = document.querySelectorAll('.side__icon');

  tags.forEach( tag => {
    tag.classList.remove('active')
  })

  el.classList.toggle('active')
}
// const myExperience = new AutoTyping({
//   id: 'example', // Your HTML element id without #
//   typeText: [
//       `I am a front-end developer with a passion for creating responsive 
//       and user-friendly web interfaces. I enjoy learning from my 
//       surroundings and embracing new experiences. During my academic 
//       journey and internships, I worked on several projects that honed 
//       my skills in web development. Currently, I am in the first year of 
//       my MCA program, and my learning never stops as I strive to stay 
//       updated with the latest technologies and trends in the field.`
//   ], // Your paragraph as a single string
//   typeSpeed: 50, // Speed of typing (optional)
//   deleteSpeed: 0, // Skip deletion to type once (optional)
//   loop: false, // Do not loop typing (optional)
// }).init();
