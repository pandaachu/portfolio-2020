$(document).ready(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".js-bgScroll").forEach(function(section) {
    gsap.to(section, {
      // backgroundPosition: `center ${-innerHeight / 2}px`,
      backgroundPosition: 'center 15%',
      ease: 'power4',
      duration: 2,
      scrollTrigger: {
        trigger: section,
        // start: 'top 70%',
        // end: '+=100',
        // markers: true,
        toggleActions:'restart none none none',
        scrub: true
      }
    });
  });

  gsap.to('.js-scroll--down', {
    y:'+=30',
    duration: 3,
    stagger: 0.5,
    ease: 'power4',
    scrollTrigger: {
      trigger: 'js-scroll',
      toggleActions:'restart none none none',
      // markers: true,
      scrub: true
    }
  });
  gsap.to('.js-scroll--up', {
    y:'-=50',
    duration: 3,
    stagger: 0.5,
    ease: 'power4',
    scrollTrigger: {
      trigger: '.js-scroll--up',
      toggleActions:'restart none none none',
      // markers: true,
      scrub: true
    }
  });
  gsap.to('.js-nameScroll', {
    opacity: 0,
    y: 100,
    duration: 2,
    ease: 'power4',
    scrollTrigger: {
      trigger: '.js-nameScroll',
      start: '50px 40%',
      end: '400px',
      // toggleActions:'restart none none none',
      markers: true,
      scrub: true
    }
  });

  // line animation
  const line = document.querySelectorAll('.js-lineToRight')
  gsap.utils.toArray(line).forEach(function(section) {
    gsap.to(section, {
      opacity: 1, 
      width:150,
      duration: 3,
      stagger: 0.5,
      ease: 'power4',
      scrollTrigger: {
        trigger: section,
        toggleActions:'restart none none none',
        // markers: true,
      }
    });
  });

  // gsap.utils.toArray(".js-lineToRight").forEach(function(section) {
  //   gsap.to(section, {
  //     // backgroundPosition: `center ${-innerHeight / 2}px`,
  //     width:150,
  //     ease: 'power4',
  //     duration: 1,
  //     // scrollTrigger: {
  //     //   trigger: section,
  //     //   // start: 'top top',
  //     //   // end: 'bottom bottom',
  //     //   markers: true,
  //     //   scrub: true
  //     // }
  //   });
  // });
});