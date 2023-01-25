const openModalButton = document.querySelector('.home_btn');
const closeModalButton = document.querySelector('.modal_close');
const modal = document.getElementById('modal');
const fade = document.getElementById('fade');

const toggleModal = () => {
    [modal, fade].forEach((element) => element.classList.toggle("hide"));
}

[openModalButton, closeModalButton, fade].forEach((element) => {
    element.addEventListener("click", () =>toggleModal())
})