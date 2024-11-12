import Lenis from 'lenis';

const lenis = new Lenis();

// Remove explicit `Event` type so TypeScript can infer it correctly
lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time: DOMHighResTimeStamp) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);