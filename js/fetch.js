import {newOffer} from './map.js'
let showErrorMessage = function () {
  let errorMessage = document.querySelector('.error-message');
  if (errorMessage.classList.contains('hidden')) {
    errorMessage.classList.remove('hidden');
  }

}

let testArr = []
let getData = function () {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offerData) => {
      // eslint-disable-next-line no-console
      console.log('Начало цикла')
      for (let i = 0; i < offerData.length; i++) {
        // eslint-disable-next-line no-console
        console.log('Идет цикл')
        testArr.push(offerData[i])
      }
      // eslint-disable-next-line no-console
      console.log(testArr)
      // eslint-disable-next-line no-console
      console.log('Конец цикла')
    })
    .catch(() => showErrorMessage())
}

setTimeout(getData, 500);
let getOfferData = function () {
  newOffer(testArr);
}

export { getOfferData }

