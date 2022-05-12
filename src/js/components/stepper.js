/* ----------------------
    ==== Constants ====
   --------------------- */
const form = document.querySelector('.form');

const formFirstPage = document.querySelectorAll('.form__page')[0];

const firstNextBtn = document.getElementById('firstNextBtn');

const secNextBtn = document.getElementById('secNextBtn');
const secPreBtn = document.getElementById('secPreBtn');

const thirdNextBtn = document.getElementById('thirdNextBtn');
const thirdPreBtn = document.getElementById('thirdPreBtn');

const gohomeBtn = document.getElementById('gohomeBtn');

const steps = document.querySelectorAll('.stepper__step');

/* ----------------------
    ==== Functions ====
   --------------------- */
const moveForward = margin => formFirstPage.style.marginLeft = margin;
const moveBackward = margin => formFirstPage.style.marginLeft = margin;

const placeCheckIcon = () => {
   // --- Changing the number by checked icon
   const completedStep = document.querySelectorAll('.stepper__step--completed');
   
   completedStep.forEach(coStep => {
      coStep.children[0].innerHTML = `<i class="fa-solid fa-check"></i>`;
   });

}

const nextStep = (currentStep, exeption) => {
   steps[currentStep].classList.replace(
      'stepper__step--active', 
      'stepper__step--completed'
   );
   
   currentStep++;

  if (exeption) {
    steps[currentStep].classList.add('stepper__step--completed');
  } else steps[currentStep].classList.add('stepper__step--active'); 

  placeCheckIcon();
}

const lastStep = (currentStep, txtContent) => {
  steps[currentStep].classList.remove('stepper__step--active'); 
  
  currentStep--;

  steps[currentStep].classList.replace(
    'stepper__step--completed',
    'stepper__step--active'
  );

  steps[currentStep].children[0].textContent = txtContent;
}

/* ----------------------
    ==== Code execution ====
   ---------------------   */
form.addEventListener('submit', e => e.preventDefault());

firstNextBtn.addEventListener('click', () => {
   moveForward('-24rem');
   nextStep(0);
});

secNextBtn.addEventListener('click', () => {
   moveForward('-48rem');
   nextStep(1);
});

thirdNextBtn.addEventListener('click', () => {
   moveForward('-72rem')
   nextStep(2, true);
});

gohomeBtn.addEventListener('click', () =>window.history.go(0));

secPreBtn.addEventListener('click', () => {
  moveBackward('0');
  lastStep(1, 1);
});

thirdPreBtn.addEventListener('click', () => {
  moveBackward('-24rem');
  lastStep(2, 2);
});
