let type = document.getElementById('type');

let minPrice = document.getElementById('price');

let changePrice = function () {
  let selectedType = type.options[type.selectedIndex].text;
  switch (selectedType) {
    case 'Дворец':
      minPrice.placeholder = 10000;
      if (minPrice.value === undefined) {
        minPrice.value = minPrice.placeholder
      }
      break;
    case 'Квартира':
      minPrice.placeholder = 1000;
      if (minPrice.value === undefined) {
        minPrice.value = minPrice.placeholder
      }
      break;
    case 'Дом':
      minPrice.placeholder = 5000;
      if (minPrice.value === undefined) {
        minPrice.value = minPrice.placeholder
      }
      break;
    case 'Бунгало':
      minPrice.placeholder = 0;
      if (minPrice.value === undefined) {
        minPrice.value = minPrice.placeholder
      }
      break;
  }
}

type.onchange = changePrice;


let checkInInputElement = document.getElementById('timein');
let checkOutInputElement = document.getElementById('timeout');

checkInInputElement.addEventListener('change', function () {
  checkOutInputElement.selectedIndex = checkInInputElement.selectedIndex;
});

checkOutInputElement.addEventListener('change', function () {
  checkInInputElement.selectedIndex = checkOutInputElement.selectedIndex;
});


