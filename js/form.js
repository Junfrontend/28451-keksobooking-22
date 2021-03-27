import {showAlert} from './util.js'
let type = document.getElementById('type');

let minPrice = document.getElementById('price');

let changePrice = function () {
  let selectedType = type.options[type.selectedIndex].text;
  switch (selectedType) {
    case 'Дворец':
      minPrice.placeholder = 10000;
      minPrice.setAttribute('value', minPrice.placeholder);
      break;
    case 'Квартира':
      minPrice.placeholder = 1000;
      minPrice.setAttribute('value', minPrice.placeholder);
      break;
    case 'Дом':
      minPrice.placeholder = 5000;
      minPrice.setAttribute('value', minPrice.placeholder);
      break;
    case 'Бунгало':
      minPrice.placeholder = 0;
      minPrice.setAttribute('value', minPrice.placeholder);
      break;
  }
}

type.onchange = changePrice;


let checkInInputElement = document.getElementById('timein');
let checkOutInputElement = document.getElementById('timeout');

checkInInputElement.addEventListener('change', function () {
  checkOutInputElement.selectedIndex = checkInInputElement.selectedIndex;
});

checkOutInputElement.addEventListener('change', function () {
  checkInInputElement.selectedIndex = checkOutInputElement.selectedIndex;
});

let roomCount = document.getElementById('room_number');
let guestsCount = document.getElementById('capacity');

roomCount.addEventListener('change', function () {
  switch (roomCount.selectedIndex) {
    case 0:
      guestsCount.selectedIndex = 2;
      guestsCount.options[0].setAttribute('disabled', 'disabled');
      guestsCount.options[1].setAttribute('disabled', 'disabled');
      guestsCount.options[3].setAttribute('disabled', 'disabled');
      break;
    case 1:
      guestsCount.selectedIndex = 1;
      guestsCount.options[0].setAttribute('disabled', 'disabled');
      guestsCount.options[3].setAttribute('disabled', 'disabled');
      break;
    case 2:
      guestsCount.selectedIndex = 0;
      guestsCount.options[3].setAttribute('disabled', 'disabled');
      break;
    case 3:
      guestsCount.selectedIndex = 3;
      guestsCount.options[0].setAttribute('disabled', 'disabled');
      guestsCount.options[1].setAttribute('disabled', 'disabled');
      guestsCount.options[2].setAttribute('disabled', 'disabled');
      break;
  }
});

let showSuccessMessage = function () {
  let successMessageTemplate = document.getElementById('success').content;
  let mainContent = document.querySelector('main');
  mainContent.appendChild(successMessageTemplate);
  let successMessage = document.querySelector('.success')
  document.addEventListener('click', () => {
    if (successMessage) {
      successMessage.remove();
    }
    
  })
  document.addEventListener('keydown', (evt) => {
    if(evt.keyCode === 27) {
      successMessage.remove();
    }
  })
}

let clearForm = function () {
  let address = document.querySelector('#address');
  let offerTitle = document.querySelector('#title');
  minPrice.value = ''
  address.value = ''
  offerTitle.value = ''
}

let adForm = document.querySelector('.ad-form');
const sendAdForm = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      'https://22.javascript.pages.academy/keksobooking ',
      {
        method: 'POST',
        body: formData,
      },
    ).then((response) => {
      if (response.ok) {
        onSuccess();
        clearForm();
      } else {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
      .catch(() => {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      });
  })
}
sendAdForm(showSuccessMessage);