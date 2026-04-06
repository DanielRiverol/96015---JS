
const fs = require("fs");

fs.writeFile("./archivo.txt", "Hola como estas?", () => {
  try {
    console.log("Exito");
    fs.readFile("./archivo.txt", "utf-8", (error, result) => {
      try {
        console.log(result);
      } catch (error) {}
    });
  } catch (error) {
    console.error("Error", error.message);
  }
});


