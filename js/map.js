/* global L:readonly */
import { createCard } from './create-card.js'
import { getFiltredCards } from './filter.js'
const LATITUDE_OF_CENTER_TOKYO = 35.67000;
const LONGITUDE_OF_CENTER_TOKYO = 139.76000;

const map = L.map('map-canvas')
const commonPin = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

let addressField = document.querySelector('#address');

let fillAddressField = function (x, y) {
  addressField.setAttribute('value', x + ' ' + y);
}

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

let arrOfPins = []; // Хранилище для пинов
let renderingPin = function (filteredPin) { // Функция отрисовщик пинов на карте
  arrOfPins.forEach(function (marker) {
    map.removeLayer(marker);
  })
  filteredPin.forEach(function (card) {
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

let loadMap = function () {
  map.on('load', function () {
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
}
fillAddressField(LATITUDE_OF_CENTER_TOKYO.toFixed(5), LONGITUDE_OF_CENTER_TOKYO.toFixed(5));
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
let marker = L.marker(
  {
    lat: LATITUDE_OF_CENTER_TOKYO,
    lng: LONGITUDE_OF_CENTER_TOKYO,
  },
  {
    icon: mainPinIcon,
    draggable: true,
  },
);
marker.addTo(map);
marker.on('moveend', function (evt) {
  fillAddressField(evt.target.getLatLng().lat.toFixed(5), evt.target.getLatLng().lng.toFixed(5));
});

let markers = L.layerGroup().addTo(map);
let resetMarkers = function () {
  markers.clearLayers();
};
let resetMap = function () {
  marker.setLatLng([LATITUDE_OF_CENTER_TOKYO, LONGITUDE_OF_CENTER_TOKYO]).update();
  fillAddressField(LATITUDE_OF_CENTER_TOKYO.toFixed(5), LONGITUDE_OF_CENTER_TOKYO.toFixed(5));
};

let createFiltredPin = function (unfiltredCards) {
  let unfiltredPin = getFiltredCards(unfiltredCards);
  renderingPin(unfiltredPin);
}

export {
  renderingPin, createFiltredPin, resetMarkers, loadMap, disableMapFilters,
  disableAdForm, fillAddressField, resetMap
}