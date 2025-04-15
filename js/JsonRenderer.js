const fs = require("fs/promises"); // Модуль для роботи з файлами

class JsonRenderer {
  constructor(path = "./data/notes.json") {
    this.path = path;
  }

  async getData() {
    // метод із модуля fs/promises у Node.js, який асинхронно читає вміст файлу з диска.
    const response = await fs.readFile(this.path, "utf8");
    // сюди записується результат, тобто весь вміст файлу у вигляді рядка (string).
    const data = JSON.parse(response);
    return data;
  }
}

const newJson = new JsonRenderer().getData();
