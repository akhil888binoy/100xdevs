function halts(ms) {
  return new Promise((resolve) => {
    const start = Date.now();
    while (Date.now() - start < ms) {
      console.log("busy halting");
    }
    resolve();
  });
}

let p = halts(3000);

function callback() {
  console.log("Done hitting");
}

p.then(callback);
