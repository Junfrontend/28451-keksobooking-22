import { showErrorMessage, showSuccessMessage } from './util.js'
import { clearForm } from './form.js'
const GETURL = 'https://22.javascript.pages.academy/keksobooking/data';
const POSTURL = 'https://22.javascript.pages.academy/keksobooking';

let adForm = document.querySelector('.ad-form');

let getData = function (doThisOnSuccsess) {
  fetch(GETURL)
    .then((response) => response.json())
    .then((cards) => doThisOnSuccsess(cards))
    .catch(() => showErrorMessage('Чтото пошло не так, коты ушли покушать и поспать. Потом вернутся. Наверое.'))
}


let sendData = function (doItOnSuccess, doItOnFail, formData) {
  fetch(POSTURL,
    {
      method: 'POST',
      body: formData,
    },
  )
    .then(function (response) {
      if (response.ok) {
        doItOnSuccess();
      } else {
        doItOnFail(`Не удалось отправить форму. Попробуйте ещё раз. Код ошибки: ${response.status} ${response.statusText}.`);
      }
    })
    .catch(function () {
      doItOnFail('Не удалось отправить форму. Попробуйте ещё раз');
    })
}

let sendAdForm = function (cards, alert) {
  adForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let formData = new FormData(evt.target);
    sendData(showSuccessMessage, alert, formData);
    clearForm(cards);
    adForm.reset()
  });
};
export { getData, sendAdForm }


