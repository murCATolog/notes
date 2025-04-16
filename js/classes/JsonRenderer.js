class JsonReader {
  constructor(filePath = "./data/notes.json") {
    this.filePath = filePath; // Шлях до JSON-файлу
  }

  async readJson() {
    try {
      const response = await fetch(this.filePath); // Завантажуємо JSON-файл через fetch
      // якщо запит не успішний, то видаємо помилку
      if (!response.ok) {
        // Перевіряємо статус відповіді
        throw new Error(`HTTP error! status: ${response.status}`); // Обробляємо помилки
      }
      const parsedData = await response.json(); // Розпарсили JSON у JavaScript-об'єкт
      return parsedData;
    } catch (error) {
      console.error("Error reading JSON file:", error); // Лог помилки
      return []; // Повертаємо порожній масив у разі помилки
    }
  }
}

const reader = new JsonReader(); // Створили читача JSON
let notes = []; // Масив для збереження нотаток

const loadNotes = async () => {
  notes = await reader.readJson(); // Завантажуємо нотатки в масив
};

await loadNotes(); // Завантажуємо нотатки при ініціалізації

export default notes; // Експортуємо масив нотаток
