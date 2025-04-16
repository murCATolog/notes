import notes from "../classes/JsonRenderer.js";
import Note from "../classes/Note.js";

notes.map((el) => {
  const newNote = new Note(el.id, el.title, el.text, el.date);
  newNote.createNote();
});

const notesLength = notes.length;

export default notesLength;
