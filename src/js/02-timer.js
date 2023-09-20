import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";



const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
let selectedDateTime;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate <= new Date()) {
      window.alert("Please choose a date in the future");
      return;
    }

    startBtn.disabled = false;
    selectedDateTime = selectedDate;
    
  },
};

flatpickr("#datetime-picker", options);

const timerData = {
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
};


function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;

  const timerId = setInterval(startTimer, 1000);

  function startTimer() {
    const currentDate = new Date();
    const timeDifference = selectedDateTime - currentDate;

    function timerReset(days, hours, minutes, seconds) {
    timerData.days.textContent = addLeadingZero(days);
    timerData.hours.textContent = addLeadingZero(hours);
    timerData.minutes.textContent = addLeadingZero(minutes);
    timerData.seconds.textContent = addLeadingZero(seconds);
  }

    if (timeDifference <= 0) {
      clearInterval(timerId);

      timerReset( 0, 0, 0, 0 );
      startBtn.disabled = false;
      return;
    }

    const fragmentTime = convertMs(timeDifference);
    const days = fragmentTime.days;
    const hours = fragmentTime.hours;
    const minutes = fragmentTime.minutes;
    const seconds = fragmentTime.seconds;
  
    timerReset(days, hours, minutes, seconds);
  };
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
};