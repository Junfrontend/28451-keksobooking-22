

function randomIntNumberFromTo(min, max) {
  if (min === max) {
    console.log('Введенный диапазон слишком узкий. Начальное число ' + min + ' равняется конечному числу диапазона ' + max);
  } else {
    if (min < 0 || max < 0) {
      console.log('Введите диапазон положительных чисел');
    } else {
      if (min > max) {
        let boxForNumber;
        boxForNumber = min;
        min = max;
        max = boxForNumber;
        console.log('Числа введенного диапазона поменялись местами, так как начало диапазона больше конца! Это минимум: ' + min + ' Это максимум: ' + max)
      }
      min = Math.ceil(min);
      max = Math.floor(max);
      let randomNumber = Math.floor(Math.random() * (max - min)) + min;
      return randomNumber;

    }
  }
}



function randomNumberFromToWithFloat(min, max, digitAfterComma) {
  if (min === max) {
    console.log('Введенный диапазон слишком узкий. Начальное число ' + min + ' равняется конечному числу диапазона ' + max);
  } else {
    if (min < 0 || max < 0) {
      console.log('Введите диапазон положительных чисел');
    } else {
      if (min > max) {
        let boxForNumber;
        boxForNumber = min;
        min = max;
        max = boxForNumber;
        console.log('Числа введенного диапазона поменялись местами, так как начало диапазона больше конца! Это минимум: ' + min + ' Это максимум: ' + max)
      }

      let randomNumber = Math.random() * (max - min) + min;
      randomNumber = randomNumber.toFixed(digitAfterComma); //Округление до заданной точности после запятой
      return randomNumber;
    }
  }
}

let author = {
  avatar: 'img/avatars/user0' + randomIntNumberFromTo(1, 8) + 'png',
}

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

let offer = {
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
}
let locationData = {
  x: randomNumberFromToWithFloat(35.65000, 35.70000, 5),
  y: randomNumberFromToWithFloat(139.70000, 139.80000, 5),
}

let getTestData = function () {
  let DataTestArray = [];
  for (let i = 0; DataTestArray.length < 10; i++) {
    getTestData[i] = [author, offer, locationData];
    DataTestArray.push(getTestData[i]);
  }
  return DataTestArray;
}
getTestData();