const formEl = document.querySelector('form');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const delay = Number(formEl.elements.delay.value);
  const step = Number(formEl.elements.step.value);
  const amount = Number(formEl.elements.amount.value);

  ciclePromises(delay, step, amount);

});

function createPromise(position, delay) {

  return new Promise(function (resolve, reject) {
     const shouldResolve = Math.random() > 0.3;
    
    if (shouldResolve) {
      // Fulfill
      setTimeout(() => {
       resolve({ position, delay })
      }, delay);
  } else {
      // Reject
      setTimeout(() => {
      reject({position , delay})
      } , delay)
  }
  })

};


function ciclePromises(firstDelay , step , amount) {

  let counterDelay = firstDelay;

for (let i = 0; i < amount; i++) {
  createPromise(i, counterDelay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
    })
    .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  })

  counterDelay = counterDelay + step;
}
};