const ALERT_SHOW_TIME = 5000;

let showAlert = function (message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '10000';
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
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

let showErrorMessage = function () {
  let errorMessage = document.querySelector('.error-message');
  if (errorMessage.classList.contains('hidden')) {
    errorMessage.classList.remove('hidden');
  }
}

let debounce = function (cb, timeout) {
  let timer;
  return () => {
    if (timer) {
      window.clearTimeout(timer);
    }
    timer = setTimeout(() => cb(), timeout)
  }
};

let showSuccessMessage = function () {
  let successMessageTemplate = document.getElementById('success').content;
  let mainContent = document.querySelector('main');
  mainContent.appendChild(successMessageTemplate);
  let successMessage = document.querySelector('.success')
  document.addEventListener('click', function () {
    if (successMessage) {
      successMessage.remove();
    }
  })
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      successMessage.remove();
    }
  })
}

export { showAlert, showErrorMessage, debounce, showSuccessMessage };