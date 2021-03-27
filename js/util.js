const ALERT_SHOW_TIME = 5000;

function randomIntNumberFromTo(min, max) {
  if (min === max) {
    // eslint-disable-next-line no-console
    console.log('Введенный диапазон слишком узкий. Начальное число ' + min + ' равняется конечному числу диапазона ' + max);
  } else {
    if (min < 0 || max < 0) {
      // eslint-disable-next-line no-console
      console.log('Введите диапазон положительных чисел');
    } else {
      if (min > max) {
        let boxForNumber;
        boxForNumber = min;
        min = max;
        max = boxForNumber;
        // eslint-disable-next-line no-console
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
    // eslint-disable-next-line no-console
    console.log('Введенный диапазон слишком узкий. Начальное число ' + min + ' равняется конечному числу диапазона ' + max);
  } else {
    if (min < 0 || max < 0) {
      // eslint-disable-next-line no-console
      console.log('Введите диапазон положительных чисел');
    } else {
      if (min > max) {
        let boxForNumber;
        boxForNumber = min;
        min = max;
        max = boxForNumber;
        // eslint-disable-next-line no-console
        console.log('Числа введенного диапазона поменялись местами, так как начало диапазона больше конца! Это минимум: ' + min + ' Это максимум: ' + max)
      }

      let randomNumber = Math.random() * (max - min) + min;
      randomNumber = randomNumber.toFixed(digitAfterComma); //Округление до заданной точности после запятой
      return randomNumber;
    }
  }
}
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  
  alertContainer.textContent = message;
  
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export { randomIntNumberFromTo, randomNumberFromToWithFloat, showAlert };