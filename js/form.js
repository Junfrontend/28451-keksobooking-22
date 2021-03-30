import { resetFilters } from './filter.js'
import { resetMarkers, createFiltredPin, resetMap } from './map.js'
let type = document.getElementById('type');
let minPrice = document.getElementById('price');
const MIN_FLAT_PRICE = 1000;
const MIN_HOUSE_PRICE = 5000;
const MIN_PALACE_PRICE = 10000;
const MIN_BUNGALOW_PRICE = 0;

let changePrice = function () {
  let selectedType = type.options[type.selectedIndex].text;
  switch (selectedType) {
    case 'Дворец':
      minPrice.placeholder = MIN_PALACE_PRICE;
      minPrice.setAttribute('value', minPrice.placeholder);
      break;
    case 'Квартира':
      minPrice.placeholder = MIN_FLAT_PRICE;
      minPrice.setAttribute('value', minPrice.placeholder);
      break;
    case 'Дом':
      minPrice.placeholder = MIN_HOUSE_PRICE;
      minPrice.setAttribute('value', minPrice.placeholder);
      break;
    case 'Бунгало':
      minPrice.placeholder = MIN_BUNGALOW_PRICE;
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

let resetAll = function () {
  resetFilters();
  resetMarkers();
  resetMap();

}

let clearForm = function (cards) {
  minPrice.placeholder = 'Введите желаемую сумму'
  minPrice.removeAttribute('value');
  resetAll();
  createFiltredPin(cards);
}

export { clearForm }