const progressBar = document.querySelector('.progress-bar');
const progress = document.createElement('SPAN');

progress.className = 'progress-bar__progress';
progressBar.appendChild(progress);


let interval;
let width = 0;

const move = () => {
  if(width > 100) {
    clearInterval(interval);
    interval = null;
  } else {
    progress.style.width = `${width}%`;
    width++;
  }
}

if (!interval) {
  interval = setInterval(move, 100);
}

