const sliders = document.querySelectorAll('.slider__range');

sliders.forEach(slider => {

  slider.addEventListener("input", () => {
    let val = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.backgroundImage = `linear-gradient(to right, var(--france-500) ${val}%, var(--france-100) ${val}%`;
  });

});
