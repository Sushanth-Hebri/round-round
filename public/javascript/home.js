document.addEventListener('DOMContentLoaded', function () {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach(slider => {
    const nextButton = slider.querySelector('.next');
    const prevButton = slider.querySelector('.prev');
    const cards = slider.querySelector('.card-content');

    nextButton.addEventListener('click', function () {
      cards.scrollLeft = cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
    });

    prevButton.addEventListener('click', function () {
      cards.scrollLeft = cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
    });
  });
});
