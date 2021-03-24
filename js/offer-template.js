//Задание 5
let offerTemplate = document.querySelector('#card').content;

let newOfferTemplate = offerTemplate.querySelector('.popup');

let newOffer = function (testData) {
  for (let i = 0; i < testData.length; i++) {

    let offerTitle = newOfferTemplate.querySelector('.popup__title');
    let offerAddress = newOfferTemplate.querySelector('.popup__text--address');
    let offerPrice = newOfferTemplate.querySelector('.popup__text--price');
    let offerType = newOfferTemplate.querySelector('.popup__type');
    let offerRoomsAndGuests = newOfferTemplate.querySelector('.popup__text--capacity');
    let offerCheckinAndCheckout = newOfferTemplate.querySelector('.popup__text--time');
    let offerFeatures = newOfferTemplate.querySelector('.popup__features');
    let offerDiscription = newOfferTemplate.querySelector('.popup__description');
    let offerPhotos = newOfferTemplate.querySelector('.popup__photos');
    let offerPhoto = offerPhotos.querySelector('.popup__photo');
    let userAvatar = newOfferTemplate.querySelector('.popup__avatar');
    let mapCanvas = document.querySelector('.map__canvas');


    let clonedNewOfferTemplate = newOfferTemplate.cloneNode(true);
    // eslint-disable-next-line no-console
    console.log(testData[i], i);
    userAvatar.src = testData[i].author.avatar;
    offerTitle.textContent = testData[i].offer.title;
    offerAddress.textContent = testData[i].offer.address;
    offerPrice.textContent = testData[i].offer.price + ' ₽/ночь';
    // eslint-disable-next-line no-console
    console.log(offerPrice.textContent, i);
    switch (testData[i].offer.type) {
      case 'palace':
        offerType.textContent = 'Дворец';
        break;
      case 'flat':
        offerType.textContent = 'Квартира';
        break;
      case 'house':
        offerType.textContent = 'Дом'
        break;
      case 'bungalow':
        offerType.textContent = 'Бунгало'
        break;
    }
    offerRoomsAndGuests.textContent = 'Доступно ' + testData[i].offer.rooms + ' комнаты для '
      + testData[i].offer.guests + ' гостей';
    offerCheckinAndCheckout.textContent = 'Время заезда с ' + testData[i].offer.checkin
      + ',' + ' выезд до ' + testData[i].offer.checkout;
    offerFeatures.textContent = testData[i].offer.features;
    offerDiscription.textContent = testData[i].offer.description;
    offerPhoto.src = testData[i].offer.photos;
    mapCanvas.append(clonedNewOfferTemplate);
    // eslint-disable-next-line no-console
    console.log(offerTitle, offerAddress, offerPrice, offerType,
      offerRoomsAndGuests, offerCheckinAndCheckout, offerFeatures,
      offerDiscription, offerPhotos, userAvatar);
  }
  return;
}
// eslint-disable-next-line no-console
export { newOffer };