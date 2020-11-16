"use strict";

$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({
    ease: "power4"
  });
  gsap.from('.scrollLine', {
    scrollTrigger: {
      trigger: 'body',
      scrub: true,
      start: 'top top',
      end: 'bottom bottom'
    },
    scaleY: 0,
    transformOrigin: 'top center',
    ease: 'none'
  });
  gsap.utils.toArray(".js-bgScroll").forEach(function (section) {
    gsap.from(section, {
      backgroundPosition: '0% 100%',
      duration: 2,
      scrollTrigger: {
        trigger: section,
        // start: 'top 70%',
        // end: '+=100',
        // markers: true,
        toggleActions: 'restart none none none' // scrub: true

      }
    });
  }); // profile section animation

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
  }); // line animation
  // const line = document.querySelectorAll('.js-lineGrowRight')

  gsap.utils.toArray('.lineWrap').forEach(function (section) {
    gsap.to(section, {
      // y:120,
      y: 'random(50, 120)',
      width: 'random(50, 100)',
      scrollTrigger: {
        trigger: section,
        start: '-200 center',
        end: '200 top',
        // markers: true,
        scrub: true
      }
    });
  }); // line growing
  // gsap.utils.toArray('.work').forEach(section => {
  //   const elems = section.querySelectorAll('.js-lineGrowRight');
  //   gsap.set(elems, { width:0, opacity: 0 });
  //   ScrollTrigger.create({
  //     trigger: section,
  //     start: '50% bottom',
  //     end: "+=500",
  //     onEnter: () => gsap.to(elems, {
  //       width:110,
  //       opacity: 1,
  //       duration: 3,
  //       stagger: 0.2,
  //       delay: 0.5,
  //       overwrite: 'auto'
  //     }),
  //     onLeaveBack: () => gsap.to(elems, {
  //       width:0,
  //       opacity: 0,
  //       duration: 3,
  //       stagger: 0.2,
  //       // delay: 1,
  //       overwrite: 'auto'
  //     })
  //   });
  // })

  gsap.utils.toArray('.work').forEach(function (section) {
    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: '50% bottom',
        // end: "+=500",
        // markers: true,
        toggleActions: 'play reset play reset'
      }
    }).to(section.querySelectorAll('.js-lineGrowRight'), {
      width: 110,
      duration: 1.5,
      stagger: 0.2,
      opacity: 1,
      ease: 'back'
    }).from(section.querySelector('.js-scrollUp'), {
      y: -100,
      opacity: 0,
      duration: 3
    }, '-=1.3').from(section.querySelectorAll('.js-scrollShowItem'), {
      y: -100,
      opacity: 0,
      duration: 4,
      stagger: 0.2
    }, '-=3.3').add('detailsItem', '-=3.2').from(section.querySelectorAll('.work__details--even .work__details__item'), {
      x: -100,
      opacity: 0,
      duration: 3,
      stagger: 0.2
    }, 'detailsItem').from(section.querySelectorAll('.work__details--odd .work__details__item'), {
      x: 100,
      opacity: 0,
      duration: 3,
      stagger: 0.2
    }, 'detailsItem');
  });
});
//# sourceMappingURL=all.js.map
