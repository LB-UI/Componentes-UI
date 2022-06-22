const selectFloat = document.querySelector('.select-float');
const selectFloatInput = selectFloat.querySelector('.select-float__inputEl');
const optionsLi = [...selectFloat.querySelectorAll('.select-float__option')];
const noMatches = selectFloat.querySelector('.select-float__nomatches');

// == Functions ==  //

const hideOptions = () => {
  selectFloat.classList.remove('select-float--open');
}

const showOptions = () => {
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
  hideOptions();
}

const resetSelectedElement = () => {
  // Reset the selected Li element
  optionsLi.forEach(option => {
    option.classList.remove('select-float__option--selected');
  });
}

const nothingSelected = () => {
  selectFloat.dataset.selected = false;
  hideOptions();
}

const toNormalForm = (str) => {
  // convers accent marked letters into normal
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const searchOption = (input) => {
  const matches = optionsLi.filter(option => {
    const optionTextContent = toNormalForm(option.children[1].textContent.toLowerCase().trim());
    const toSearch = toNormalForm(input.toLowerCase().trim());

    if ( optionTextContent.includes(toSearch) ) {
      return option;
    } else {
      option.classList.remove('select-float__option--filtered');
      return null;
    }
  });


  if(matches.length == 0) {
    noMatches.style.display = 'block';
  } else {
    matches.forEach(match => {
      match.classList.add('select-float__option--filtered');
      noMatches.style.display = 'none';
    });
  }

}

// == Code execution == //

optionsLi.forEach(option => {
  option.addEventListener('click', putOption);
});


selectFloatInput.addEventListener('keyup', (e) => {
  if(e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 97 && e.keyCode <= 122) {
    // If a letter character is pressed
    showOptions();
  } else if (selectFloatInput.value == '') {
    nothingSelected();
    resetSelectedElement();
  }
  
});

selectFloatInput.addEventListener('input', () => {
  searchOption(selectFloatInput.value);
});
