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
  //create p element
  const toDoEntry = document.createElement("li");

  const toDoText = document.createElement("p");
  toDoText.textContent = e.target.querySelector("#new-task-description").value;

  const toDoButton = document.createElement("button");
  toDoButton.textContent = "X";
  //add listener to p element
  toDoButton.addEventListener("click", (event) => {
    event.target.parentNode.remove();
  });

  //push p element
  toDoEntry.appendChild(toDoText);
  toDoEntry.appendChild(toDoButton);
  let list = document.getElementsByTagName("ul")[0];
  list.appendChild(toDoEntry);
  //reset form
  e.target.reset();
}