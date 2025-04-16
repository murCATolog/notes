class ModalWindow {
  constructor(title = "", text = "") {
    this.title = title;
    this.text = text;
  }

  addModalWindow(title = this.title, text = this.text) {
    const mainDiv = document.querySelector(".main");
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content">
          <span class="modal-close">&times;</span>
          <h2>New Note</h2>
          <input type="text" id="noteTitle" placeholder="Title" class="modal-input" value="${title}" />
          <textarea id="noteText" placeholder="Text" class="modal-input">${text}</textarea>
          <button class="add-note-btn modal-btn">Create Note</button>
        </div>
        `;
    mainDiv.appendChild(modal);
  }

  closeModalWindow() {
    const modalContent = document.querySelector(".modal");
    if (modalContent) modalContent.remove();
  }
}

export default ModalWindow;
