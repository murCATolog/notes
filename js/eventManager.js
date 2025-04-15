import Note from "./Note.js";
import ModalWindow from "./ModalWindow.js";

const newModalWindow = new ModalWindow();

document.addEventListener("click", (event) => {
  const target = event.target;

  if (target.id === "addNoteButton") {
    newModalWindow.addModalWindow();
  }
  if (target.className == "modal-close") {
    newModalWindow.closeModalWindow();
  }
  if (target.className == "add-note-btn modal-btn") {
    const inputTitle = document.getElementById("noteTitle").value;
    const inputText = document.getElementById("noteText").value;
    const newNote = new Note(inputTitle, inputText);
    newNote.createNote();
    newModalWindow.closeModalWindow();
  }
  if (target.className == "close-btn") {
    const removeNote = target.parentElement.parentElement;
    removeNote.remove();
  }
  const parentEl = target.parentElement.className;
  if (
    (target.tagName == "H2" && parentEl == "note-header") ||
    (target.className == "content" && parentEl == "note")
  ) {
    newModalWindow.addModalWindow();
    console.log(target.innerText);
  }
});
