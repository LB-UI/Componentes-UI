/* ==== Constants ==== */
const modal = document.getElementById('modal');
const activateModalBtn = document.getElementById('activateModal');
const closeModalBtn = document.getElementById('close_modal');
const cancel = document.getElementById('cancel');
const save = document.getElementById('save');

/* ==== Functions ==== */
const openModal = () => modal.showModal();
const closeModal = () => modal.close();

/* ==== Code Execution ==== */
activateModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
cancel.addEventListener('click', closeModal);
save.addEventListener('click', closeModal);