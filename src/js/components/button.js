const btnDropdown = document.querySelector('.btn--dropdown');
const dropdownList = document.querySelector('.btn--dropdown .btn__dropdown');

// Functions
const toggleState = () => {
  btnDropdown.classList.toggle('dropdown-opened');
  dropdownList.classList.toggle('btn__dropdown--unfolded');
}

// Code execution
btnDropdown.addEventListener('click', toggleState);
