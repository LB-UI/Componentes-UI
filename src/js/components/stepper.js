/* ----------------------
    ==== Functions ====
   --------------------- */

const placeCheckIcon = () => {
   // --- Changing the number by checked icon
   const completedStep = document.querySelectorAll('.stepper__step--completed');
   
   completedStep.forEach(coStep => {
      coStep.children[0].innerHTML = `<i class="fa-solid fa-check"></i>`;
   });

}

const resetStepValue = () => {
  if (currentStep < 0) currentStep = 0;
  if (currentStep > 3) currentStep = 3;
}  
  

const nextStep = () => {
  if(currentStep >= 3) resetStepValue(); 
  else {

    steps[currentStep].classList.replace(
     'stepper__step--active',
      'stepper__step--completed'
    );
    
    currentStep++;

    if (currentStep == 3) {
      steps[3].classList.add('stepper__step--completed');
    } else {
      steps[currentStep].classList.add('stepper__step--active');
    }

    placeCheckIcon();

  }
}

const lastStep = () => {
  if(currentStep <= 0) resetStepValue(); 
  else {

    if(currentStep == 3) {
      steps[currentStep].classList.remove('stepper__step--completed');
      steps[currentStep].children[0].textContent = `${currentStep + 1}`
    } else {
      steps[currentStep].classList.remove('stepper__step--active');
    }

    currentStep--;
    
    steps[currentStep].classList.replace(
     'stepper__step--completed',
     'stepper__step--active'
    );
    
    steps[currentStep].children[0].textContent = `${currentStep + 1}`

  }
}

/* ----------------------
    ==== Constants ====
   --------------------- */
const nextBtn = document.getElementById('nextBtn');
const lastBtn = document.getElementById('lastBtn');

const steps = document.querySelectorAll('.stepper__step');

/* ----------------------
    ==== variables ====
   --------------------- */
let currentStep = 0;
/* ----------------------
    ==== Code execution ====
   ---------------------   */
nextBtn.addEventListener('click', nextStep);
lastBtn.addEventListener('click', lastStep);

