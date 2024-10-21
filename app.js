const goalElement = document.getElementById("goal");
const buttonElement = document.getElementById("submit");
const listElement = document.getElementById("list");

// Element zu Liste Hinzufügen
function addGoal() {
  const goal = goalElement.value.trim();
  if (goal === "") {
    alert("Please enter a goal");
    return;
  }
  const liElement = document.createElement("li");
  liElement.textContent = goal;
  listElement.appendChild(liElement);
}

// buttonElement.addEventListener("click", addGoal); gleich wie unten
buttonElement.addEventListener("click", (_) => {
  const goal = goalElement.value.trim();
  if (goal === "") {
    alert("Please enter a goal");
    return;
  }
  const liElement = document.createElement("li");
  liElement.textContent = goal;
  listElement.appendChild(liElement);
});

// Element aus Liste erledigen
function markGoalDone(event) {
  const liElement = event.target;
  liElement.classList.toggle("done");
}

// listElement.addEventListener("click", markGoalDone); gleich wie unten
listElement.addEventListener("click", (event) => {
  const liElement = event.target;
  liElement.classList.toggle("done");
});
