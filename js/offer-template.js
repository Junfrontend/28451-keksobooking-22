//Задание 5
let offerTemplate = document.querySelector('#card').content;

let newOfferTemplate = offerTemplate.querySelector('.popup');

let newOffer = function (testData) {
  for (let i = 0; i < 1; i++) {
    let clonedNewOfferTemplate = newOfferTemplate.cloneNode(true);
    let offerTitle = clonedNewOfferTemplate.querySelector('.popup__title');
    let offerAddress = clonedNewOfferTemplate.querySelector('.popup__text--address');
    let offerPrice = clonedNewOfferTemplate.querySelector('.popup__text--price');
    let offerType = clonedNewOfferTemplate.querySelector('.popup__type');
    let offerRoomsAndGuests = clonedNewOfferTemplate.querySelector('.popup__text--capacity');
    let offerCheckinAndCheckout = clonedNewOfferTemplate.querySelector('.popup__text--time');
    let offerFeatures = clonedNewOfferTemplate.querySelector('.popup__features');
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

  
    offerFeatures.textContent = testData[i].offer.features;
    offerFeatures.classList.add(testData[i].offer.features);
    offerDiscription.textContent = testData[i].offer.description;
    offerPhoto.src = testData[i].offer.photos;
    mapCanvas.append(clonedNewOfferTemplate);
  }

}
export { newOffer, newOfferTemplate };