function setTimeoutProimisified(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

// function callback() {
//   console.log("callback");
// }

// setTimeoutProimisified(30000).then(callback);

// setTimeoutProimisified(3000)
//   .then(() => {
//     console.log("hello");
//     return setTimeoutProimisified(4000);
//   })
//   .then(() => {
//     console.log("hello hi");
//     return setTimeoutProimisified(50000);
//   })
//   .then(() => {
//     console.log("hi there");
//   });

async function solve() {
  await setTimeoutProimisified(1000);
  console.log("hi");
  await setTimeoutProimisified(2000);
  console.log("hello");
  await setTimeoutProimisified(4000);
  console.log("hi there");
}

console.log("weiiii");

// Callback hell
// setTimeout(() => {
//   console.log("hi");
//   setTimeout(() => {
//     console.log("hello");
//     setTimeout(() => {
//       console.log("hello there");
//     }, 5000);
//   }, 3000);
// }, 1000);
