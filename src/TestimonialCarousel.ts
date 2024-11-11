class TestimonialCarousel {
  items: NodeListOf<Element>;
  dots: NodeListOf<Element>;
  currentIndex: number;
  transitioning: boolean;

  constructor() {
    this.currentIndex = 0;
    this.items = document.querySelectorAll('.testimonial-item');
    this.dots = document.querySelectorAll('.dot');
    this.transitioning = false;

    document.querySelector('.prev-arrow')?.addEventListener('click', () => this.prevItem());
    document.querySelector('.next-arrow')?.addEventListener('click', () => this.nextItem());

    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.showItem(index));
    });
    
    this.showItem(this.currentIndex);
  }

  showItem(index: number) {
    if (this.transitioning) return;
    this.transitioning = true;

    const currentItem = this.items[this.currentIndex];
    const nextItem = this.items[index];

    currentItem.classList.remove('active-testimonial', 'fade-in-testimonial');
    currentItem.classList.add('fade-out-testimonial');

    nextItem.classList.add('active-testimonial', 'fade-in-testimonial');

    setTimeout(() => {
      currentItem.classList.remove('fade-out-testimonial');
      this.transitioning = false;
    }, 500);

    this.dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    this.currentIndex = index;
  }

  prevItem() {
    const index = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.showItem(index);
  }

  nextItem() {
    const index = (this.currentIndex + 1) % this.items.length;
    this.showItem(index);
  }
}

export default TestimonialCarousel;
