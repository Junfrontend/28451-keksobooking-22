import {showErrorMessage} from './util.js'
const GETURL = 'https://22.javascript.pages.academy/keksobooking/data';
const POSTURL = 'https://22.javascript.pages.academy/keksobooking';


let getData = function (doThisOnSuccsess) {
  fetch(GETURL)
    .then((response) => response.json())
    .then((cards) => doThisOnSuccsess(cards))
    .catch(() => showErrorMessage('Чтото пошло не так, коты ушли покушать и поспать. Потом вернутся. Наверое.'))
}

let sendData = function (doItOnSuccess, doItOnFail) {
  fetch(POSTURL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
    },
  )
    .then((response) => {
      if (response.ok) {
        doItOnSuccess();
      } else {
        doItOnFail(`Не удалось отправить форму. Попробуйте ещё раз. Код ошибки: ${response.status} ${response.statusText}.`);
      }
    })
    .catch(() => {
      doItOnFail('Не удалось отправить форму. Попробуйте ещё раз');
    })
};

export { getData, sendData }


