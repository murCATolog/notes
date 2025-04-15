import ModalWindow from "./ModalWindow.js";

class Note extends ModalWindow {
  constructor(title, text, id) {
    super(title, text);
    this.id = id;
    this.currentDate = new Date().toLocaleString("uk-UA", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  createNote() {
    const parrentDiv = document.querySelector(".main");
    const note = document.createElement("div");
    note.className = "note";
    note.innerHTML = `
    <div class="note-header">
      <h2>${this.title}</h2>
      <span class="close-btn">&times;</span>
    </div>
    <p class="date">${this.currentDate}</p>
      <div class="content">
        ${this.text}
      </div>
    `;
    parrentDiv.appendChild(note);
  }
}
export default Note;
