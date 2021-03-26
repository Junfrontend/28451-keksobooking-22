/* global L:readonly */
import { getTestData } from './test-data.js'
import { randomIntNumberFromTo } from './util.js';
// import { newOffer } from './offer-template.js';

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

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const commonPin = L.icon({
  iconUrl: './img/pin.svg',
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

let address = document.querySelector('#address');


marker.on('moveend', (evt) => {
  address.value = evt.target.getLatLng().lat.toFixed(5) + ' ' + evt.target.getLatLng().lng.toFixed(5) + '';
});

let offerTemplate = document.querySelector('#card').content;

let newOfferTemplate = offerTemplate.querySelector('.popup');

let newOffer = function (testData) {
  for (let i = 0; i < testData.length; i++) {
    let clonedNewOfferTemplate = newOfferTemplate.cloneNode(true);
    let offerTitle = clonedNewOfferTemplate.querySelector('.popup__title');
    let offerAddress = clonedNewOfferTemplate.querySelector('.popup__text--address');
    let offerPrice = clonedNewOfferTemplate.querySelector('.popup__text--price');
    let offerType = clonedNewOfferTemplate.querySelector('.popup__type');
    let offerRoomsAndGuests = clonedNewOfferTemplate.querySelector('.popup__text--capacity');
    let offerCheckinAndCheckout = clonedNewOfferTemplate.querySelector('.popup__text--time');
    let offerFeatures = clonedNewOfferTemplate.querySelectorAll('.popup__feature');
    let offerDiscription = clonedNewOfferTemplate.querySelector('.popup__description');
    let offerPhotos = clonedNewOfferTemplate.querySelector('.popup__photos');
    let offerPhoto = offerPhotos.querySelector('.popup__photo');
    let userAvatar = clonedNewOfferTemplate.querySelector('.popup__avatar');
    let mapCanvas = document.querySelector('.map__canvas');

    userAvatar.src = testData[i].author.avatar;
    offerTitle.textContent = testData[i].offer.title;
    offerAddress.textContent = testData[i].offer.address;
    offerPrice.textContent = testData[i].offer.price + ' ₽/ночь';
    switch (testData[i].offer.type) {
      case 'palace':
        offerType.textContent = 'Дворец';
        break;
      case 'flat':
        offerType.textContent = 'Квартира';
        break;
      case 'house':
        offerType.textContent = 'Дом';
        break;
      case 'bungalow':
        offerType.textContent = 'Бунгало';
        break;
    }
    offerRoomsAndGuests.textContent = 'Доступно ' + testData[i].offer.rooms + ' комнаты для '
      + testData[i].offer.guests + ' гостей';
    offerCheckinAndCheckout.textContent = 'Время заезда с ' + testData[i].offer.checkin
      + ',' + ' выезд до ' + testData[i].offer.checkout;

    let randomFeatures = function (arr) {
      for (let j = 0; j < randomIntNumberFromTo(0, arr.length); j++) {
        arr[j].remove();
      }
    }
    randomFeatures(offerFeatures);

    offerDiscription.textContent = testData[i].offer.description;
    offerPhoto.src = testData[i].offer.photos;

    let arrayOfMarkers = [];
    arrayOfMarkers[i] = L.marker(
      {
        lat: testData[i].location.x,
        lng: testData[i].location.y,
      },
      {
        icon: commonPin,
      },
    );
    arrayOfMarkers[i].addTo(map).bindPopup(clonedNewOfferTemplate);
  }
}
newOffer(getTestData());