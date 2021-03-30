import {sendAdForm, clearForm} from'./form.js';
import { loadMap, disableMapFilters, disableAdForm, createFiltredPin} from './map.js';
import { applyFilters } from './filter.js';
import { getData} from './api.js';
import { debounce, showAlert } from './util.js'

const DEBOUNCE_DELAY = 500;

disableMapFilters();
disableAdForm();

getData((unfiltredCards) => {
  loadMap();
  createFiltredPin(unfiltredCards);
  applyFilters(debounce(() => createFiltredPin(unfiltredCards), DEBOUNCE_DELAY));
  sendAdForm(unfiltredCards, showAlert);
  clearForm(unfiltredCards)
});
