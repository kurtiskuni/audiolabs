import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export function setupScrollTrigger() {
  if (typeof window !== 'undefined') {
    gsap.fromTo('.fade-in', 
      { opacity: 0 }, 
      { 
        opacity: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: '.fade-in',  // The element to trigger the animation
          start: 'top 80%',      // Trigger when the element is 80% from the top of the viewport
          end: 'bottom top',     // End the animation when the element exits the top
          scrub: true,           // Smooth scrubbing (optional)
        }
      }
    );
  }
}
