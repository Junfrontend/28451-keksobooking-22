import {sendData} from './api.js';
import {showAlert} from './util.js'
import {resetFilters} from './filter.js'
import {resetMarkers, createFiltredPin} from './map.js'
let type = document.getElementById('type');
let resetButon = document.querySelector('.ad-form__reset');
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
let adForm = document.querySelector('.ad-form');

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
    if (evt.keyCode === 27) {
      successMessage.remove();
    }
  })
}


let resetAll = function (cards) {
  clearForm();
  resetFilters();
  resetMarkers();
  createFiltredPin(cards);
}

let clearForm = function (cards) {
  resetButon.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetAll(cards);
  })
}
let sendAdForm = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    new FormData(evt.target);
    sendData(() => {
      showSuccessMessage();
      resetAll(onSuccess);
    },
    () => showAlert(),
    new FormData(evt.target),
    );
  });
};
export {sendAdForm, clearForm}