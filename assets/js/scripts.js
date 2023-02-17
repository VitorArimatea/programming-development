// Home Modal

const openModalButton = document.querySelector('.home_btn');
const closeModalButton = document.querySelector('.modal_close');
const modal = document.getElementById('modal');
const fade = document.getElementById('fade');

const toggleModal = () => {
    [modal, fade].forEach((element) => element.classList.toggle("hide"));
}

[openModalButton, closeModalButton, fade].forEach((element) => {
    element.addEventListener("click", () =>toggleModal());
})

//Dark theme

const checkbox = document.getElementById('checktheme');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('dark_text');
})
