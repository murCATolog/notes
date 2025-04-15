class ModalWindow {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }
  addModalWindow() {
    const mainDiv = document.querySelector(".main");
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content">
          <span class="modal-close">&times;</span>
          <h2>New Note</h2>
          <input type="text" id="noteTitle" placeholder="Title" class="modal-input" />
          <textarea id="noteText" placeholder="Text" class="modal-input"></textarea>
          <button class="add-note-btn modal-btn">Create Note</button>
        </div>
        `;
    mainDiv.appendChild(modal);
  }
  closeModalWindow() {
    const modalContent = document.querySelector(".modal");
    modalContent.remove();
  }
}

export default ModalWindow;
