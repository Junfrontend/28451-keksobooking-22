const createPhotoArray = function (boxForPhoto, arrayOFPhotos) {
  boxForPhoto.innerHTML = ''
  const newPhotos = document.createDocumentFragment();
  arrayOFPhotos.forEach((value) => {
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
  features.forEach((feature) => {
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

  card.querySelector('.popup__title').textContent = offer.title;
  card.querySelector('.popup__text--address').textContent = offer.address;
  card.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';
  let offerType = card.querySelector('.popup__type');

  card.querySelector('.popup__text--capacity').textContent = 'Доступно ' + offer.rooms + ' комнаты для ' + offer.guests + ' гостей';
  card.querySelector('.popup__text--time').textContent = 'Время заезда с ' + offer.checkin
    + ',' + ' выезд до ' + offer.checkout;

  getNewFeatures(offer.features, card)

  card.querySelector('.popup__description').textContent = offer.description;
  card.querySelector('.popup__avatar').src = author.avatar;

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