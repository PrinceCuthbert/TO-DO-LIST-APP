// Get the list container
const list = document.getElementById("list");

// Add a new task
const addRecord = document.getElementById("addOneRecordButton");
addRecord.addEventListener("click", function () {
  const taskInput = document.getElementById("fruitInput");
  const taskName = taskInput.value.trim();
  if (taskName) {
    const li = document.createElement("li");
    li.textContent = taskName;
    list.prepend(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
});

// Replace content with a preset template (not actively used)
function replaceContent() {
  const recordInput = document.getElementById("fruitInput");
  const recordValue = recordInput.value;

  console.log(`User typed: `, recordValue);
  list.innerHTML =
    "<li>Clean the house</li>" +
    "<li>Finish homework</li>" +
    `<li>${recordValue}</li>`;
}

// Delete a task that matches the input
function deleteContent() {
  const taskInput = document.getElementById("fruitInput");
  const taskValue = taskInput.value.trim().toLowerCase();
  const listItems = list.getElementsByTagName("li");
  const notFound = document.getElementById("demo");
  let found = false;

  for (let i = 0; i < listItems.length; i++) {
    const liText = listItems[i].textContent.trim().toLowerCase();
    if (liText === taskValue) {
      list.removeChild(listItems[i]);
      found = true;
      break;
    }
  }

  if (!found) {
    // alert("This task does not exist in the list.");
    notFound.innerHTML = "This task does not exist in the list.";
    notFound.style.color = "red";
  }

  taskInput.value = "";
}

// Clear the list and prompt for new tasks
function newRecipe() {
  document.getElementById("demo").innerHTML =
    "Please enter a new list of tasks.";
  list.innerHTML = "";
}
