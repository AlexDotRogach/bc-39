function createTaskMarkup(text) {
  return `
    <div class="item">
    <div class="text">${text}</div>
    <button class="delete">remove</button>
  </div>`;
}

export default createTaskMarkup;
