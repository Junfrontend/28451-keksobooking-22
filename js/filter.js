const ANY = 'any'
const LOW_PRICE = 'low';
const MIDDLE_PRICE = 'middle';
const HIGH_PRICE = 'high';
const MIN_PRICE = 10000;
const MAX_PRICE = 50000;
const ONE_ROOM = 1;
const TWO_ROOM = 2;
const THREE_ROOM = 3;
const ONE_GUEST = 1;
const TWO_GUESTS = 2;
const NOT_FOR_GUESTS = 0;
const FILTER_VALUE = /filter-/;
const MAX_CARD_COUNT = 10;

let type = document.querySelector('.map__filter-type');
let price = document.querySelector('.map__filter-price');
let rooms = document.querySelector('.map__filter-rooms');
let guests = document.querySelector('.map__filter-guests');
let mapFeatures = document.querySelector('.map__features');
let mapFilters = document.querySelector('.map__filters');

let wifiFeature = document.querySelector('#filter-wifi');
let dishwasherFeature = document.querySelector('#filter-dishwasher');
let parkingFeature = document.querySelector('#filter-parking');
let washerFeature = document.querySelector('#filter-washer');
let elevatorFeature = document.querySelector('#filter-elevator');
let conditionerFeature = document.querySelector('#filter-conditioner');

let typeFilter = function (card) {
  return type.value === ANY ? true : card.offer.type === type.value;
};
let priceFilter = function (card) {
  if (price.value === ANY) {
    return true
  } else if (price.value === LOW_PRICE && card.offer.price <= MIN_PRICE) {
    return true
  } else if (price.value === MIDDLE_PRICE && card.offer.price >= MIN_PRICE
    && card.offer.price <= MAX_PRICE) {
    return true
  } else if (price.value === HIGH_PRICE && card.offer.price > MAX_PRICE) {
    return true
  }
}
let roomsFilter = function (card) {
  if (rooms.value === ANY) {
    return true
  } else if (Number(rooms.value) === ONE_ROOM && card.offer.rooms === ONE_ROOM) {
    return true
  } else if (Number(rooms.value) === TWO_ROOM && card.offer.rooms === TWO_ROOM) {
    return true
  } else if (Number(rooms.value) === THREE_ROOM && card.offer.rooms === THREE_ROOM) {
    return true
  }
}
let guestsFilter = function (card) {
  if (guests.value === ANY) {
    return true
  } else if (Number(guests.value) === ONE_GUEST && card.offer.guests === ONE_GUEST) {
    return true
  } else if (Number(guests.value) === TWO_GUESTS && card.offer.guests === TWO_GUESTS) {
    return true
  } else if (Number(guests.value) === NOT_FOR_GUESTS && card.offer.guests === NOT_FOR_GUESTS) {
    return true
  }
}
let featuresFilter = function (card, feature) {
  let featureName = feature.getAttribute('id').replace(FILTER_VALUE, '');
  return feature.checked === false ? true : card.offer.features.includes(featureName);
};

let getFiltredCards = function (unfiltredCards) {
  let filtredCards = [];
  for (let i = 0; i < unfiltredCards.length; i++) {
    featuresFilter(unfiltredCards[i], wifiFeature)
    if (typeFilter(unfiltredCards[i]) &&
      priceFilter(unfiltredCards[i]) &&
      roomsFilter(unfiltredCards[i]) &&
      guestsFilter(unfiltredCards[i]) &&
      featuresFilter(unfiltredCards[i], wifiFeature) &&
      featuresFilter(unfiltredCards[i], dishwasherFeature) &&
      featuresFilter(unfiltredCards[i], parkingFeature) &&
      featuresFilter(unfiltredCards[i], washerFeature) &&
      featuresFilter(unfiltredCards[i], elevatorFeature) &&
      featuresFilter(unfiltredCards[i], conditionerFeature)) {
      filtredCards.push(unfiltredCards[i]);
    }
    if (filtredCards.length >= MAX_CARD_COUNT) {
      break;
    }
  }
  return filtredCards
}

let applyFilters = function (doThisFunction) {
  mapFilters.addEventListener('change', doThisFunction)
  mapFeatures.addEventListener('change', doThisFunction)
};
let resetFilters = function () {
  mapFilters.reset()
}
export { getFiltredCards, resetFilters, applyFilters }
