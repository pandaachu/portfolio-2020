$(document).ready(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ease: "power4"});

  gsap.utils.toArray(".js-bgScroll").forEach(function(section) {
    gsap.from(section, {
      // backgroundPosition: `center ${-innerHeight / 2}px`,
      backgroundPosition: '0% 100%',
      duration: 2,
      scrollTrigger: {
        trigger: section,
        // start: 'top 70%',
        // end: '+=100',
        // markers: true,
        toggleActions:'restart none none none',
        // scrub: true
      }
    });
  });


  // profile section animation

  gsap.to('.js-profileNameScroll', {
    opacity: 0,
    y: 100,
    duration: 2,
    scrollTrigger: {
      trigger: '.js-profileNameScroll',
      start: '50% 40%',
      end: '120%',
      // markers: true,
      scrub: true
    }
  });
  gsap.to('.js-profileScrollUp', {
    // opacity: 0,
    y: -100,
    duration: 2,
    scrollTrigger: {
      trigger: '.profile',
      start: '50% 40%',
      end: '120%',
      // markers: true,
      scrub: true
    }
  });

  // work section animation
  gsap.utils.toArray('.js-scrollUp').forEach(function(section) {
    gsap.from(section, {
      y: -100,
      opacity: 0,
      duration: 3,
      delay: 4,
      scrollTrigger: {
        trigger: section,
        // delay: 5,
        start: '50% bottom',
        // end: '400px',
        toggleActions:'restart none none none',
        // markers: true,
      }
    });
  });
  // work content animation
  gsap.utils.toArray('.work').forEach(section => {
    const elems = section.querySelectorAll('.js-scrollShow');
    const details = section.querySelectorAll('.work__details__item');
    
    // Set things up
    gsap.set(elems, { y: 50, opacity: 0 });
    
    ScrollTrigger.create({
      trigger: section,
      start: '50% bottom',
      onEnter: () => gsap.to(elems, {
        y: 0,
        opacity: 1,
        duration: 3,
        stagger: 0.5,
        // delay: 0.3,
        overwrite: 'auto'
      }),
      onLeaveBack: () => gsap.to(elems, {
        y: 50,
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        // delay: 0.3,
        overwrite: 'auto'
      })
    });
    gsap.from(details, {
      x: 200,
      opacity: 0,
      duration: 4,
      stagger: 0.2,
      scrollTrigger: {
        trigger: section,
        start: '50% bottom',
        toggleActions:'restart none none none',
      }
    });
  })

  // line animation
  // const line = document.querySelectorAll('.js-lineGrowRight')
  gsap.utils.toArray('.lineWrap').forEach(function(section) {
    gsap.to(section, {
      y:120,
      width: 50,
      scrollTrigger: {
        trigger: section,
        start: '-200 center',
        end: '200 top',
        // markers: true,
        scrub: true
      }
    });
  });

  gsap.utils.toArray('.work').forEach(section => {
    const elems = section.querySelectorAll('.js-lineGrowRight');
    
    // Set things up
    gsap.set(elems, { width:0, opacity: 0 });
    
    ScrollTrigger.create({
      trigger: section,
      start: '50% bottom',
      end: "+=500", // end after scrolling 500px beyond the start
      onEnter: () => gsap.to(elems, {
        width:110,
        opacity: 1,
        duration: 3,
        stagger: 0.2,
        delay: 0.5,
        overwrite: 'auto'
      }),
      onLeaveBack: () => gsap.to(elems, {
        width:0,
        opacity: 0,
        duration: 3,
        stagger: 0.2,
        // delay: 1,
        overwrite: 'auto'
      })
    });
  })
});