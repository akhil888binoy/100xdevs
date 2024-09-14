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

  return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then((results) => {
    const end = Date.now();
    const totalTime = end - start;
    console.log(results); // Log the results from each wait function
    return totalTime;
  });
}

// Usage
calculateTime(3000, 4000, 5000).then((totalTime) => {
  console.log(`Total time taken: ${totalTime}ms`);
});
