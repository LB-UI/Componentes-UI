const dropdownLinks = document.querySelectorAll(".sidebar__link--dropdown")
const dropdown = document.querySelectorAll(".sidebar__dropdown")

dropdownLinks.forEach( dropdown => {
    dropdown.addEventListener("click", (e) => {

        (dropdown.dataset.dropdown === 'show')
            ? dropdown.setAttribute('data-dropdown', 'hidden')
            : dropdown.setAttribute('data-dropdown', 'show')

        
    })
});