const swtch = document.querySelector('.switch');
const switchIcon = document.getElementById('switch-icon');

swtch.addEventListener('click', () => {
  swtch.classList.toggle('switch--on');
  if(swtch.classList.contains('switch--on')) {
    switchIcon.classList.replace('fa-close', 'fa-check');
  } else {
    switchIcon.classList.replace('fa-check', 'fa-close');
  }
});
