const popupClose = document.querySelector('.popup_close')
const popupOpen = document.querySelector('.popup_background-dark')

function openPopup() { //открытие popup
    popup.classList.add('course-card_button text-16 button-grey');
}

function closePopup() { //закрытие popup
    popup.classList.remove('popup_close');
}

editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);