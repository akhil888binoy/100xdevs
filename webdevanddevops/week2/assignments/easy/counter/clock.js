function wait(n) {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });
}

let p = wait(3);

function callback() {
  console.log("function called after n seconds passed");
}
p.then(callback);
