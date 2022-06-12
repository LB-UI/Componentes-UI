  // == Variables == //

const select = document.querySelector('.select');
const selectBtn = select.querySelector('.select__btn');
const optionsLi = [...select.querySelectorAll('.select__option')];
const selectPlaceholder = select.querySelector('.select__placeholder');
const inputSearch = select.querySelector('.select__input-search');
const noMatches = select.querySelector('.select__nomatches');

// == Functions ==  //


const toggleOptionsVisibility = () => {
  select.classList.toggle('select--open');
}

const putOption = (e) => {
  const target = e.currentTarget;
  const targetOption = target.children[1];

  // reset the selected element
  optionsLi.forEach(option => {
    option.classList.remove('select__option--selected');
  });

  // add the selected state
  target.classList.add('select__option--selected');

  selectPlaceholder.textContent = targetOption.textContent;

  // change the data-value
  select.dataset.value = target.textContent.trim();

  // hide the options
  toggleOptionsVisibility();
}

const toNormalForm = (str) => {
  // convers accent marked letters into normal
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const searchOption = (input) => {
  const matches = optionsLi.filter(option => {
    const optionTextContent = toNormalForm(option.children[1].textContent.toLowerCase().trim());
    const toSearch = toNormalForm(input.toLowerCase().trim());

    // hide all the options before search to only show matches
    option.style.display = 'none';

    if ( optionTextContent.includes(toSearch) ) {
      return option;
    } else {
      return null;
    }
  });


  if(matches.length == 0) {
    noMatches.style.display = 'block';
  } else {
    noMatches.style.display = 'none';
    matches.forEach(match => {
      match.style.display = 'flex';
    });
  }
  
  console.log(matches);

}

  // == Code execution == //

selectBtn.addEventListener('click', toggleOptionsVisibility);

optionsLi.forEach(option => {
  option.addEventListener('click', putOption);
});

inputSearch.addEventListener('input', () => {
  searchOption(inputSearch.value);
})
