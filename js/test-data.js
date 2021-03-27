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




let latX = randomNumberFromToWithFloat(34, 36, 5);
let lngX = randomNumberFromToWithFloat(138, 140, 5);
let coordinate = [latX, lngX]

let getTestData = function () {

  let DataTestArray = [];
  for (let i = 0; DataTestArray.length < 10; i++) {

    const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel2.jpg ',
      'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

    const getRandomValue = function (min, max) {
      return Math.round(Math.random() * (max - min) + min);
    };

    const getRandomItemNoRepeat = function (arr) {
      let randomElement = getRandomValue(0, arr.length - 1);
      let randomElementItem = [arr[randomElement]];
      //arr.splice(randomElement, 1);
      return randomElementItem;
    };

    getTestData[i] = {
      author: {
        avatar: 'img/avatars/user0' + randomIntNumberFromTo(1, 8) + '.png',
      },
      offer: {
        title: 'Самые мурчательные варианты размещения - Кексобукинг',
        address: coordinate,
        price: randomIntNumberFromTo(1000, 8000),
        type: typeOfAccommodaion[randomIntNumberFromTo(0, typeOfAccommodaion.length - 1)],
        rooms: randomIntNumberFromTo(1, 3),
        guests: randomIntNumberFromTo(1, 4),
        checkin: timeOfCheckinOut[randomIntNumberFromTo(0, typeOfAccommodaion.length - 1)],
        checkout: timeOfCheckinOut[randomIntNumberFromTo(0, typeOfAccommodaion.length - 1)],
        features: getRandomArrayOfFeatures(),
        description: 'Обмурчательный вариант! Есть миска и лоток!',
        photos: getRandomItemNoRepeat(PHOTOS),
      },
      location: {
        lat: randomNumberFromToWithFloat(35.65000, 35.70000, 5),
        lng: randomNumberFromToWithFloat(139.70000, 139.80000, 5),
      },
    };
    DataTestArray.push(getTestData[i]);
  }
  return DataTestArray;
}
export { getTestData };
