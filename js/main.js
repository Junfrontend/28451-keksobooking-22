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
      console.log(randomNumber);
      
    }
  }
}
randomIntNumberFromTo(10, 0);



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
      console.log(randomNumber);
    }
  }
}
randomNumberFromToWithFloat(100, 1.240, 3);