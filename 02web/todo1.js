function addTodo() {
  let inputElement = window.document.getElementById("input");
  let inputValue = inputElement.value;

  //create text in order to append label element
  let textNote = window.document.createTextNode(inputValue);

  //create li element
  let liElement = window.document.createElement("li");

  //create checkbox element
  let checkboxElement = window.document.createElement("input");
  checkboxElement.type = "checkbox";
  checkboxElement.setAttribute("id", "check");

  //create label
  let labelElement = window.document.createElement("label");
  labelElement.appendChild(textNote);

  //append text and checkbox into li
  liElement.appendChild(checkboxElement);
  liElement.appendChild(labelElement)
  liElement.className='mycheck';

  //insert li element into ul
  let ulElement = window.document.getElementById("list");
  ulElement.insertBefore(liElement, ulElement.childNodes[0])
  ulElement.className = 'visual'

  //set value = empty
  inputElement.value = "";
}