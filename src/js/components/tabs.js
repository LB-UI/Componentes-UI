//=== Functions ===//
const toggleBtnVisibility = (isHorizontal) => {
  // toggle button visivility according to TAB orientation
  if(isHorizontal) {
    (tabs_h.scrollLeft > 0) 
      ? backBtn_h.classList.add('tab__btn--visible')
      : backBtn_h.classList.remove('tab__btn--visible');

    (tabs_h.scrollLeft >= tabs_h.scrollWidth - tabs_h.offsetWidth) 
      ? nextBtn_h.classList.remove('tab__btn--visible')
      : nextBtn_h.classList.add('tab__btn--visible');
  } else {
    (tabs_v.scrollTop > 0) 
      ? backBtn_v.classList.add('tab__btn--visible')
      : backBtn_v.classList.remove('tab__btn--visible');

    (tabs_v.scrollTop >= tabs_v.scrollHeight - tabs_v.offsetHeight) 
      ? nextBtn_v.classList.remove('tab__btn--visible')
      : nextBtn_v.classList.add('tab__btn--visible');
  }
}

const horizontalTabFunc = () => {
  // Functionality for the horizontal tab
  toggleBtnVisibility(true);

  nextBtn_h.addEventListener('click', () => {
    tabs_h.scrollLeft += tabs_h.scrollWidth;
  });

  backBtn_h.addEventListener('click', () => {
    tabs_h.scrollLeft -= tabs_h.scrollWidth;
  });

  tabs_h.addEventListener('scroll', () => {
    toggleBtnVisibility(true);
  });
}

const verticalTabFunc = () => {
  // Functionality for the vertical tab
  toggleBtnVisibility(false);

  nextBtn_v.addEventListener('click', () => {
    tabs_v.scrollTop += tabs_v.scrollHeight;
  });

  backBtn_v.addEventListener('click', () => {
    tabs_v.scrollTop -= tabs_v.scrollHeight;
  });

  tabs_v.addEventListener('scroll', () => {
    toggleBtnVisibility(false);
  });
}

//=== Variables ===//
const tabs_h = document.querySelector('.tab--h .tab__tabs');
const nextBtn_h = document.querySelector('.tab--h .tab__nextBtn');
const backBtn_h = document.querySelector('.tab--h .tab__backBtn');

const tabs_v = document.querySelector('.tab--v .tab__tabs');
const nextBtn_v = document.querySelector('.tab--v .tab__nextBtn');
const backBtn_v = document.querySelector('.tab--v .tab__backBtn');

//=== Code execution ===//

if (tabs_h && tabs_v) {
  horizontalTabFunc();
  verticalTabFunc();
} else if (tabs_h) {
  horizontalTabFunc();
} else if (tabs_v) {
  verticalTabFunc();
} else console.log('There is no tab element');
