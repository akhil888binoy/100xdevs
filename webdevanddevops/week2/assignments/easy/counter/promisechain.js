function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`wait1 completed after ${t}ms`), t);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`wait2 completed after ${t}ms`), t);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`wait3 completed after ${t}ms`), t);
  });
}

function calculateTime(t1, t2, t3) {
  const start = Date.now();

  return wait1(t1)
    .then((result1) => {
      console.log(result1);
      return wait2(t2);
    })
    .then((result2) => {
      console.log(result2);
      return wait3(t3);
    })
    .then((result3) => {
      console.log(result3);
      const end = Date.now();
      const totalTime = end - start;
      return totalTime;
    });
}

// Usage
calculateTime(3000, 4000, 5000).then((totalTime) => {
  console.log(`Total time taken: ${totalTime}ms`);
});
