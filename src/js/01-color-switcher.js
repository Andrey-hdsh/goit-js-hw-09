const btnStartColor = document.querySelector('.js-start-btn');
const btnStopColor = document.querySelector('.js-stop-btn');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

intervalColorId = null;
btnStopColor.disabled = true;

function startColorSwitching() {

  if (!intervalColorId) {
    btnStartColor.disabled = true;
    btnStopColor.disabled = false;
  
    intervalColorId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
} , 1000)
  } 
};

function stopColorSwitching() {

  if (intervalColorId) {
    btnStopColor.disabled = true;
    btnStartColor.disabled = false;
    
    clearInterval(intervalColorId);
    intervalColorId = null;

  }
};


btnStartColor.addEventListener('click', startColorSwitching);
btnStopColor.addEventListener('click', stopColorSwitching);