/* global L:readonly */
import { getData } from './fetch.js'
import { createCard } from './create-card.js'
import { getFiltredcards } from './filter.js'

let disableAdForm = function () {
  let adForm = document.querySelector('.ad-form');

  if (adForm.classList.contains('ad-form--disabled')) {
    adForm.classList.remove('ad-form--disabled');
    let adFormElements = adForm.querySelectorAll('fieldset');
    for (let i = 0; i < adFormElements.length; i++) {
      adFormElements[i].removeAttribute('disabled');
    }
  } else {
    adForm.classList.add('ad-form--disabled');
    let adFormElements = adForm.querySelectorAll('fieldset');
    for (let i = 0; i < adFormElements.length; i++) {
      adFormElements[i].setAttribute('disabled', 'disabled');
    }
  }
}

let disableMapFilters = function () {
  let mapFilters = document.querySelector('.map__filters');

  if (mapFilters.classList.contains('map__filters--disabled')) {
    mapFilters.classList.remove('map__filters--disabled');
    let mapFiltersElements = mapFilters.querySelectorAll('select');
    for (let i = 0; i < mapFiltersElements.length; i++) {
      mapFiltersElements[i].removeAttribute('disabled', 'disabled');
    }
  } else {
    mapFilters.classList.add('map__filters--disabled');
    let mapFiltersElements = mapFilters.querySelectorAll('select');
    for (let i = 0; i < mapFiltersElements.length; i++) {
      mapFiltersElements[i].setAttribute('disabled', 'disabled');
    }

  }
}

disableMapFilters();
disableAdForm();

const commonPin = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
let arrOfPins = []; // Хранилище для пинов
let renderingPin = function (filteredPin) { // Функция отрисовщик пинов на карте
  arrOfPins.forEach((marker) => {
    map.removeLayer(marker);
  })
  filteredPin.forEach((card) => {
    let markers = L.marker(
      {
        lat: card.location.lat,
        lng: card.location.lng,
      },
      {
        icon: commonPin,
        keepInView: true,
      });
    markers.addTo(map).bindPopup(createCard(card));
    arrOfPins.push(markers);
  })
}
const map = L.map('map-canvas')
  .on('load', () => {
    disableMapFilters();
    disableAdForm();
  })
  .setView([35.67, 139.76], 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const createMainPin = function () {
  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });
  const marker = L.marker(
    {
      lat: 35.67,
      lng: 139.76,
    },
    {
      icon: mainPinIcon,
      draggable: true,
    },
  );
  marker.addTo(map);

}

let createFiltredPin = function (unfiltredCards) {
  let unfiltredPin = getFiltredcards (unfiltredCards);
  renderingPin(unfiltredPin);
}
getData();
createMainPin();
export {  renderingPin, createFiltredPin }