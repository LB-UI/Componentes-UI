const toggleAccordion = e => {
   e.currentTarget.parentElement.classList.toggle('accordion--collapsed');
}

const accordions_group = document.querySelectorAll('.accordion__header');

accordions_group.forEach(accordion => {
   accordion.addEventListener('click', toggleAccordion);
});