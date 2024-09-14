const fs = require("fs");

// Function to process file data
function processData(err, data) {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Remove extra spaces
  const cleanedData = data.split(" ").filter(Boolean).join(" ");

  // Write the cleaned data back to the file
  fs.writeFile("a.txt", cleanedData, (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
    } else {
      console.log("File cleaned successfully!");
    }
  });
}

// Read the file and process it
fs.readFile("a.txt", "utf-8", processData);
