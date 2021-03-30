const createPhotoArray = function (boxForPhoto, arrayOFPhotos) {
  boxForPhoto.innerHTML = ''
  const newPhotos = document.createDocumentFragment();
  arrayOFPhotos.forEach(function (value) {
    const newPhoto = document.createElement('img');
    newPhoto.classList.add('popup__photo');
    newPhoto.src = value;
    newPhoto.width = '70'
    newPhoto.height = '50'
    newPhoto.alt = 'Фотография жилья';
    newPhotos.appendChild(newPhoto);
  });
  return newPhotos;
};
let getNewFeatures = function (features, card) {
  let featuresList = card.querySelector('.popup__features');
  if (features.length > 0) {
    featuresList.innerHTML = '';
  } else {
    featuresList.classList.add('hidden');
  }
  features.forEach(function (feature) {
    let newFeature = document.createElement('li');
    let featureUniqueClass = 'popup__feature--' + feature;
    newFeature.classList.add('popup__feature', featureUniqueClass);
    featuresList.appendChild(newFeature);
  })
};

let cardTemplate = document.querySelector('#card').content;
let newCardTemplate = cardTemplate.querySelector('.popup');
let createCard = function ({ author, offer }) {
  let card = newCardTemplate.cloneNode(true);
  if (card.querySelector('.popup__title').textContent) {
    card.querySelector('.popup__title').textContent = offer.title;
  } else {
    card.querySelector('.popup__title').classList.add('hidden');
  }

  if (card.querySelector('.popup__text--address').textContent) {
    card.querySelector('.popup__text--address').textContent = offer.address;
  } else {
    card.querySelector('.popup__text--address').classList.add('hidden');
  }

  if (card.querySelector('.popup__text--price').textContent) {
    card.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';
  } else {
    card.querySelector('.popup__text--price').classList.add('hidden');
  }

  if (card.querySelector('.popup__text--capacity').textContent) {
    card.querySelector('.popup__text--capacity').textContent = 'Доступно ' + offer.rooms + ' комнаты для ' + offer.guests + ' гостей';
  } else {
    card.querySelector('.popup__text--capacity').classList.add('hidden');
  }

  if (card.querySelector('.popup__text--time').textContent) {
    card.querySelector('.popup__text--time').textContent = 'Время заезда с ' + offer.checkin
      + ',' + ' выезд до ' + offer.checkout;
  } else {
    card.querySelector('.popup__text--time').classList.add('hidden');
  }

  getNewFeatures(offer.features, card)
 
  if (card.querySelector('.popup__description').textContent) {
    card.querySelector('.popup__description').textContent = offer.description;
  } else {
    card.querySelector('.popup__description').classList.add('hidden');
  }
  
  if (card.querySelector('.popup__avatar').src.length > 0) {
    card.querySelector('.popup__avatar').src = author.avatar;
  } else {
    card.querySelector('.popup__avatar').classList.add('hidden');
  }

  let offerType = card.querySelector('.popup__type');
  switch (offer.type) {
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

  let cardPhotos = card.querySelector('.popup__photos');
  if (Array.isArray(offer.photos) && offer.photos.length) {
    cardPhotos.appendChild(createPhotoArray(cardPhotos, offer.photos));
  } else {
    cardPhotos.remove();
  }
  return card
}
export { createCard };