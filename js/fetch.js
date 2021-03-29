import {showErrorMessage} from './util.js'
import {createFiltredPin} from './map.js'
const GETURL = 'https://22.javascript.pages.academy/keksobooking/data'



let getData = async function () {
  fetch(GETURL)
    .then((response) => response.json())
    .then((cards) => createFiltredPin(cards))
    .catch(() => showErrorMessage())
}

export { getData }


