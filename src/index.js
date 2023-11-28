document.addEventListener("DOMContentLoaded", () => {
  //find form button
  let taskForm = document.getElementById("create-task-form");
   // add event to form
   taskForm.addEventListener("submit", (e) => handleTaskSubmit(e));
 
  //event prevents default
  //event creates new p element
  // p element comes with an event listener to delete itself
  //add p
});

handleTaskSubmit = (e) => {
  //prevent default
  e.preventDefault();
  //create and style container
  const toDoEntry = document.createElement("li");
  toDoEntry.className = "to-do-item-container"

  const toDoText = document.createElement("p");
  toDoText.textContent = e.target.querySelector("#new-task-description").value;

  //create button
  const toDoButton = document.createElement("button");
  toDoButton.textContent = "X";
  toDoButton.className = "btn"

  //add listener to button
  toDoButton.addEventListener("click", (event) => {
    event.target.parentNode.remove();
  });

  toDoEntry.appendChild(toDoButton);
  toDoEntry.appendChild(toDoText);
  //push nodes to document
  let list = document.getElementsByTagName("ul")[0];
  list.appendChild(toDoEntry);
  //reset form
  e.target.reset();
}