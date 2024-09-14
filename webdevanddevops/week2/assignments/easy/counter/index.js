// function goUp() {
//   let counter = 0;
//   function incrementCounter() {
//     counter += 1;
//     console.log(counter);
//     setTimeout(incrementCounter, 1000);
//   }
//   incrementCounter();
// }

// goUp();

function goUp() {
  let counter = 0;
  setInterval(() => {
    counter += 1;
    console.log(counter);
  }, 1000);
}

goUp();
