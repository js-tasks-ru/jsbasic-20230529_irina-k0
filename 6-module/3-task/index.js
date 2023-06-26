import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.createCarousel();
  }

  createCarousel() {
    let carouselTemplate = `
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
      </div>`;

    let carousel = createElement(carouselTemplate);
    let carouselInner = createElement(`<div class="carousel__inner"></div>`);
    carousel.append(carouselInner);


    for (let slide of this.slides) {
      let carouselSlideTemplate = `
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`;

      let carouselSlide = createElement(carouselSlideTemplate);

      let button = carouselSlide.getElementsByClassName("carousel__button")[0];

      button.addEventListener("click", () => {
        let event = new CustomEvent("product-add", {
          detail: slide.id,
          bubbles: true
        });

        carouselSlide.dispatchEvent(event);
      });

      carouselInner.append(carouselSlide);
    }

    this.initArrows(carousel, this.slides.length);

    this.elem = carousel;
  }

  initArrows(carousel, slidesCount) {
    let arrowRight = carousel.getElementsByClassName("carousel__arrow_right")[0];
    let arrowLeft = carousel.getElementsByClassName("carousel__arrow_left")[0];
    let carouselInner = carousel.getElementsByClassName("carousel__inner")[0];
    let index = 0;
    arrowLeft.style.display = 'none';

    arrowRight.addEventListener("click", function () {
      index++;
      carouselInner.style.transform = `translateX(-${index * carouselInner.offsetWidth}px)`;

      arrowRight.style.display = index === slidesCount - 1 ? 'none' : '';
      arrowLeft.style.display = index === 0 ? 'none' : '';
    });

    arrowLeft.addEventListener("click", function () {
      index--;
      carouselInner.style.transform = `translateX(-${index * carouselInner.offsetWidth}px)`;

      arrowRight.style.display = index === slidesCount - 1 ? 'none' : '';
      arrowLeft.style.display = index === 0 ? 'none' : '';
    });
  }
}
