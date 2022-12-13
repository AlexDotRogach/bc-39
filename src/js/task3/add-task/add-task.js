import createTaskMarkup from './create-task-markup';

function addTask(e, { items }) {
  e.preventDefault();
  const { elements } = e.currentTarget;
  // const {currentTarget : {elements : {text : {value}}}} = e;
  const {
    text: { value: textValue },
  } = elements;
  if (!textValue) return '';
  items.insertAdjacentHTML('beforeend', createTaskMarkup(textValue));
  e.currentTarget.reset();
}

export default addTask;
