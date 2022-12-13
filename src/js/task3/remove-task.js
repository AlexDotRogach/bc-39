function removeTask(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
}

export default removeTask;
