( (d) => {
    const buttonNavigation = d.querySelector("#navbar__button-navigation")
    const content = d.querySelector(".navbar__content")
    buttonNavigation.addEventListener("click", () => content.classList.toggle('navbar__content--open') )
})(document)