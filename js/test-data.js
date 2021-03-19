import { randomIntNumberFromTo, randomNumberFromToWithFloat } from './util.js';

let typeOfAccommodaion = ['palace', 'flat', 'house', 'bungalow'];
let timeOfCheckinOut = ['12:00', '13:00', '14:00'];
let getRandomArrayOfFeatures = function () {
  let featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  for (let i = 0; i < randomIntNumberFromTo(0, featuresList.length - 1); i++) {
    featuresList.splice(featuresList[i], 1)
  }
  return featuresList;
}

let getSomePhotos = function () {
  let photosList = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  for (let i = 0; i <= randomIntNumberFromTo(0, photosList.length); i++) {
    photosList.splice(photosList[i], 1)
  }
  return photosList;
}


let getTestData = function () {
  let DataTestArray = [];
  for (let i = 0; DataTestArray.length < 10; i++) {
    getTestData[i] = {
      author: {
        avatar: 'img/avatars/user0' + randomIntNumberFromTo(1, 8) + 'png',
      },
      offer: {
        title: 'Самые мурчательные варианты размещения - Кексобукинг',
        address: 'X',
        price: randomIntNumberFromTo(1000, 8000),
        type: typeOfAccommodaion[randomIntNumberFromTo(0, typeOfAccommodaion.length - 1)],
        rooms: randomIntNumberFromTo(1, 14),
        guests: randomIntNumberFromTo(1, 14),
        checkin: timeOfCheckinOut[randomIntNumberFromTo(0, typeOfAccommodaion.length - 1)],
        checkout: timeOfCheckinOut[randomIntNumberFromTo(0, typeOfAccommodaion.length - 1)],
        features: getRandomArrayOfFeatures(),
        description: 'Обмурчательный вариант! Есть миска и лоток!',
        photos: getSomePhotos(),
      },
      location: {
        x: randomNumberFromToWithFloat(35.65000, 35.70000, 5),
        y: randomNumberFromToWithFloat(139.70000, 139.80000, 5),
      },
    };
    DataTestArray.push(getTestData[i]);
  }
  // eslint-disable-next-line no-console
  console.log('Работает!')
  return DataTestArray;
}
export { getTestData };