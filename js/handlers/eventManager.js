import Note from "../classes/Note.js"; // Імпортуємо клас для створення нотаток
import ModalWindow from "../classes/ModalWindow.js"; // Імпортуємо клас для роботи з модальним вікном
import notesLength from "./notesParser.js";

let count = notesLength;

const newModalWindow = new ModalWindow(); // Створюємо об'єкт модального вікна
let noteToDelete = null; // Змінна для збереження нотатки, яку потрібно видалити

// Слухаємо всі кліки на сторінці
document.addEventListener("click", (event) => {
  const target = event.target; // Елемент, на який натиснули

  // Якщо натиснули на кнопку "Add Note"
  if (target.id === "addNoteButton") {
    newModalWindow.addModalWindow(); // Відкриваємо модальне вікно
  }

  // Якщо натиснули на хрестик у модальному вікні
  if (target.className == "modal-close") {
    newModalWindow.closeModalWindow(); // Закриваємо модальне вікно
  }

  // Якщо натиснули на кнопку "Create Note" у модальному вікні
  if (target.className == "add-note-btn modal-btn") {
    const inputTitle = document.getElementById("noteTitle").value; // Отримуємо текст із поля "Title"
    const inputText = document.getElementById("noteText").value; // Отримуємо текст із поля "Text"

    // Якщо є нотатка для видалення, видаляємо її
    if (noteToDelete) {
      noteToDelete.remove();
      noteToDelete = null; // Скидаємо змінну
    }

    const newNote = new Note(++count, inputTitle, inputText); // Створюємо нову нотатку
    newNote.createNote(); // Додаємо нотатку на сторінку
    newModalWindow.closeModalWindow(); // Закриваємо модальне вікно після створення нотатки
  }

  // Якщо натиснули на хрестик у нотатці
  if (target.className == "close-btn") {
    const removeNote = target.closest(".note"); // Знаходимо нотатку, яку потрібно видалити
    removeNote.remove(); // Видаляємо нотатку
    --count;
  }

  // Якщо натиснули на кнопку "Edit"
  if (target.className === "edit-btn") {
    const noteElement = target.closest(".note"); // Знаходимо батьківський елемент нотатки
    const noteTitle = noteElement.querySelector(".note-header h2").innerText; // Отримуємо текст заголовка
    const noteText = noteElement.querySelector(".content").innerText; // Отримуємо текст нотатки

    // Зберігаємо нотатку, яку потрібно видалити
    noteToDelete = noteElement;

    newModalWindow.addModalWindow(noteTitle, noteText); // Відкриваємо модальне вікно з даними нотатки
  }
});
