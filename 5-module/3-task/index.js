function initCarousel() {
  let arrowRight = document.getElementsByClassName("carousel__arrow_right")[0];
  let arrowLeft = document.getElementsByClassName("carousel__arrow_left")[0];
  let carousel = document.getElementsByClassName("carousel__inner")[0];
  let index = 0;
  arrowLeft.style.display = 'none';

  arrowRight.addEventListener("click", function() {
    index++;
    carousel.style.transform = `translateX(-${index * carousel.offsetWidth}px)`;

    arrowRight.style.display = index === 3 ? 'none' : '';
    arrowLeft.style.display = index === 0 ? 'none' : '';
  });

  arrowLeft.addEventListener("click", function() {
    index--;
    carousel.style.transform = `translateX(-${index * carousel.offsetWidth}px)`;

    arrowRight.style.display = index === 3 ? 'none' : '';
    arrowLeft.style.display = index === 0 ? 'none' : '';
  });
}
