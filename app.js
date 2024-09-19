const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector(".list-container");
const addBtn = document.querySelector(".add-btn");

const addTask = () => {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    // create element li 
    let li = document.createElement("li");
    // set value which user give in input 
    li.innerText = inputBox.value;
    // add li as child in container 
    listContainer.appendChild(li);

    // creating span element 
    let span = document.createElement("span");
    // set attribute 
    span.setAttribute("class", "fa-solid fa-xmark");
    // add child element span in li 
    li.appendChild(span);
  }
//   after add task input box will be empty 
  inputBox.value = "";
  saveData();
};

addBtn.addEventListener("click", addTask);

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
// save teh data to teh local storage 
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
// fetch and show the existing data 
function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();
