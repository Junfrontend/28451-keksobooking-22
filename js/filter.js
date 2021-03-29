import { renderingPin } from './map.js'
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



let pinsToRender = [];

let typeFilter = function (cards, evt) {
  let typeFilterElement = evt.target.options[evt.target.selectedIndex];
  pinsToRender = [];
  for (let i = 0; i < cards.length; i++) {
    if (typeFilterElement.value === ANY) {
      pinsToRender.push(cards[i]);
      renderingPin(pinsToRender);
    } else if (cards[i].offer.type === typeFilterElement.value) {
      pinsToRender.push(cards[i]);
      renderingPin(pinsToRender);
    }
  }
  return pinsToRender
}
let priceFilter = function (cards) {
  let price = document.querySelector('.map__filter-price');
  price.addEventListener('change', (evt) => {
    let priceFilterElement = evt.target.options[evt.target.selectedIndex];
    pinsToRender = [];
    for (let i = 0; i < cards.length; i++) {
      if (priceFilterElement.value === ANY) {
        pinsToRender.push(cards[i]);
        renderingPin(pinsToRender);
      } else if (priceFilterElement.value === LOW_PRICE && cards[i].offer.price <= MIN_PRICE) {
        pinsToRender.push(cards[i]);
        renderingPin(pinsToRender);
      } else if (priceFilterElement.value === MIDDLE_PRICE && cards[i].offer.price >= MIN_PRICE
        && cards[i].offer.price <= MAX_PRICE) {
        pinsToRender.push(cards[i]);
        renderingPin(pinsToRender);
      } else if (priceFilterElement.value === HIGH_PRICE && cards[i].offer.price > MAX_PRICE) {
        pinsToRender.push(cards[i]);
        renderingPin(pinsToRender);
      }
    }
  })
}


let roomsFilter = function (cards) {
  let rooms = document.querySelector('.map__filter-rooms');
  rooms.addEventListener('change', (evt) => {
    let roomsFilterElement = evt.target.options[evt.target.selectedIndex];
    pinsToRender = [];
    for (let i = 0; i < cards.length; i++) {
      if (roomsFilterElement.value === ANY) {
        pinsToRender.push(cards[i]);
        renderingPin(pinsToRender);
      } else if (Number(roomsFilterElement.value) === ONE_ROOM && cards[i].offer.rooms === ONE_ROOM) {
        pinsToRender.push(cards[i]);
        renderingPin(pinsToRender);
      } else if (Number(roomsFilterElement.value) === TWO_ROOM && cards[i].offer.rooms === TWO_ROOM) {
        pinsToRender.push(cards[i]);
        renderingPin(pinsToRender);
      } else if (Number(roomsFilterElement.value) === THREE_ROOM && cards[i].offer.rooms === THREE_ROOM) {
        pinsToRender.push(cards[i]);
        renderingPin(pinsToRender);
      }
    }
  })
}


let guestsFilter = function (cards) {
  let guests = document.querySelector('.map__filter-guests');
  guests.addEventListener('change', (evt) => {
    let guestsFilterElement = evt.target.options[evt.target.selectedIndex];
    pinsToRender = [];
    for (let i = 0; i < cards.length; i++) {
      if (guestsFilterElement.value === ANY) {
        pinsToRender.push(cards[i]);
        renderingPin(pinsToRender);
      } else if (Number(guestsFilterElement.value) === ONE_GUEST && cards[i].offer.guests === ONE_GUEST) {
        pinsToRender.push(cards[i]);
        renderingPin(pinsToRender);
      } else if (Number(guestsFilterElement.value) === TWO_GUESTS && cards[i].offer.guests === TWO_GUESTS) {
        pinsToRender.push(cards[i]);
        renderingPin(pinsToRender);
      } else if (Number(guestsFilterElement.value) === NOT_FOR_GUESTS && cards[i].offer.guests === NOT_FOR_GUESTS) {
        pinsToRender.push(cards[i]);
        renderingPin(pinsToRender);
      }
    }
  })
}



let featuresFilter = function (cards) {
  let mapFeatures = document.querySelector('.map__features');
  let arrayOfMapFeaturesFilterElement = [];
  mapFeatures.addEventListener('change', (evt) => {
    // eslint-disable-next-line no-console
    console.log(evt.target.value);
    if (arrayOfMapFeaturesFilterElement.includes(evt.target.value)) {
      const index = arrayOfMapFeaturesFilterElement.indexOf(evt.target.value);
      arrayOfMapFeaturesFilterElement.splice(index, 1);
    } else {
      arrayOfMapFeaturesFilterElement.push(evt.target.value);
    }
    pinsToRender = [];
    for (let i = 0; i < cards.length; i++) {
      // eslint-disable-next-line no-console
      console.log(cards[i].offer.features);
      if (cards[i].offer.features.includes(evt.target.value)) {
        // eslint-disable-next-line no-console
        console.log('тут есть ' + evt.target.value)
        pinsToRender.push(cards[i]);
        // eslint-disable-next-line no-console
        console.log(pinsToRender)
        renderingPin(pinsToRender);
      }
    }
  })
}

let getFiltredcards = function (unfiltredCards) {
  let mapFilters = document.querySelector('.map__filters-container')
  mapFilters.addEventListener('change', (evt) => {
    let afterType = typeFilter(unfiltredCards, evt);
    // eslint-disable-next-line no-console
    console.log(afterType);
    let forPrice = [];
    afterType.length > 0 ? forPrice = afterType : forPrice = unfiltredCards
    let afterPrice = priceFilter(forPrice);
    // eslint-disable-next-line no-console
    console.log(afterPrice);
    let forRooms = [];
    afterPrice.length > 0 ? forRooms = afterPrice : forRooms = unfiltredCards
    let afterRooms = roomsFilter(forRooms);
    // eslint-disable-next-line no-console
    console.log(afterRooms);
    let afterGuests = guestsFilter(afterRooms);
    // eslint-disable-next-line no-console
    console.log(afterGuests);
    let afterFeatures = featuresFilter(afterGuests)
    // eslint-disable-next-line no-console
    console.log(afterFeatures);
    return afterFeatures;
  })
  return
}

export { priceFilter, roomsFilter, guestsFilter, featuresFilter, typeFilter, getFiltredcards }


/*
1) Обработчик событий на изменения +
2) Записать объявления в переменную для сравнения
3) В случае если сравнение прошло - удаляем карточку с карты

*/