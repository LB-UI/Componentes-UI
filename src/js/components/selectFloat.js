const selectFloat = document.querySelector('.select-float');
const selectFloatInput = selectFloat.querySelector('.select-float__inputEl');
const optionsLi = selectFloat.querySelectorAll('.select-float__option');


// == Functions ==  //

const hideOptionsVisibility = () => {
  selectFloat.classList.remove('select-float--open');
}

const showOptionsVisibility = () => {
  selectFloat.classList.add('select-float--open');
}

const putOption = (e) => {
  const target = e.currentTarget;
  const targetOption = target.children[1];

  resetSelectedElement();

  // Add the selected state
  target.classList.add('select-float__option--selected');

  // Putting inside the input the selected value
  selectFloatInput.value = targetOption.textContent;

  // Changin dataset
  selectFloat.dataset.value = targetOption.textContent;
  selectFloat.dataset.selected = true;
  hideOptionsVisibility();
}

const resetSelectedElement = () => {
  // Reset the selected Li element
  optionsLi.forEach(option => {
    option.classList.remove('select-float__option--selected');
  });
}

const nothingSelected = () => {
  selectFloat.dataset.selected = false;
  hideOptionsVisibility();
}

// == Code execution == //
optionsLi.forEach(option => {
  option.addEventListener('click', putOption);
});

selectFloatInput.addEventListener('focus', showOptionsVisibility);

selectFloatInput.addEventListener('keyup', (e) => {
  if (e.keyCode == 8 || e.keyCode == 46 || e.keyCode == 17) {
    if (selectFloatInput.value == '') {
      nothingSelected(); 
      resetSelectedElement();
    }
  } 
  else showOptionsVisibility();
});

