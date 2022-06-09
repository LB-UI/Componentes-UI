  // == Variables == //

const select = document.querySelector('.select');
const selectBtn = select.querySelector('.select__btn');
const options = select.querySelectorAll('.select__opt-value');
const selectPlaceholder = select.querySelector('.select__placeholder');


// == Functions ==  //


const toggleOptionsVisibility = () => {
  select.classList.toggle('select--open');
}

const putOption = (e) => {
  const target = e.currentTarget;
  const targetParent = target.parentElement;

  // reset the selected element
  options.forEach(option => {
    option.parentElement.classList.remove('select__option--selected');
  });

  // add the selected state
  targetParent.classList.add('select__option--selected');

  selectPlaceholder.textContent = target.textContent;

  // change the data-value
  select.dataset.value = target.textContent;
}

  // == Code execution == //

selectBtn.addEventListener('click', toggleOptionsVisibility);

options.forEach(option => {
  option.addEventListener('click', putOption);
});
