const select = document.querySelector('.select-float');
const selectInput = select.querySelector('.select-float__inputEl');
const optionsLi = select.querySelectorAll('.select-float__option');


// == Functions ==  //

const toggleOptionsVisibility = () => {
  select.classList.toggle('select-float--open');
}

const hideOptionsVisibility = () => {
  select.classList.remove('select-float--open');
}

const showOptionsVisibility = () => {
  select.classList.add('select-float--open');
}

const putOption = (e) => {
  const target = e.currentTarget;
  const targetOption = target.children[1];

  // Reset the selected element
  optionsLi.forEach(option => {
    option.classList.remove('select-float__option--selected');
  });

  // Add the selected state
  target.classList.add('select-float__option--selected');

  // Putting inside the input the selected value
  selectInput.value = targetOption.textContent;

  // Changin dataset
  select.dataset.value = targetOption.textContent;
  select.dataset.selected = true;
  hideOptionsVisibility();
}

// == Code execution == //
optionsLi.forEach(option => {
  option.addEventListener('click', putOption);
});

selectInput.addEventListener('focus', showOptionsVisibility);

selectInput.addEventListener('keyup', (e) => {
  if (e.keyCode == 8 || e.keyCode == 46) {
    if (selectInput.value == '') {
      select.dataset.selected = false;
      hideOptionsVisibility();
    }
  } else showOptionsVisibility();
});
