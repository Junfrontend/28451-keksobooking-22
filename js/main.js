import { loadMap, disableMapFilters, disableAdForm, createFiltredPin } from './map.js';
import { applyFilters } from './filter.js';
import { getData, sendAdForm } from './api.js';
import { debounce, showAlert } from './util.js'
import { clearForm } from './form.js';

const DEBOUNCE_DELAY = 500;
let resetButton = document.querySelector('.ad-form__reset');
disableMapFilters();
disableAdForm();

getData(function (unfiltredCards) {
  loadMap();
  createFiltredPin(unfiltredCards);
  applyFilters(debounce(function () {
    createFiltredPin(unfiltredCards), DEBOUNCE_DELAY
  }));
  sendAdForm(unfiltredCards, showAlert);
  resetButton.addEventListener('click', function () {
    clearForm(unfiltredCards)
  });
});

