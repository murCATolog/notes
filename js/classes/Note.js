import ModalWindow from "../classes/ModalWindow.js";

class Note extends ModalWindow {
  constructor(
    id,
    title,
    text,
    currentDate = new Date().toLocaleString("uk-UA", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  ) {
    super(title, text); // Передаємо тільки title і text у ModalWindow
    this.id = id; // Зберігаємо id у властивості Note
    this.currentDate = currentDate; // Зберігаємо дату
  }

  // Функція для генерації випадкового кольору
  getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  createNote() {
    const parentDiv = document.querySelector(".main");
    const note = document.createElement("div");
    note.className = "note";
    note.setAttribute("id", this.id); // Встановлюємо id для нотатки

    // Генеруємо випадковий колір для note-header
    const randomColor = this.getRandomColor();

    note.innerHTML = `
      <div class="note-header" style="background-color: ${randomColor};">
        <h2>${this.title}</h2>
        <span class="close-btn">&times;</span>
      </div>
      <p class="date">${this.currentDate}</p>
      <div class="content">
        ${this.text}
      </div>
      <button class="edit-btn">Edit</button>
    `;
    parentDiv.appendChild(note); // Додаємо нотатку в DOM
  }
}

export default Note;
