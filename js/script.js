let tasks = [
	{
		name: "Shopping",
		image: "images/shopping2.jpg",
		description: "Shop for weekly groceries at Spar and Hofer",
		importance: 0,
		duration: 20,
	},
	{
		name: "Read Book",
		image: "images/readbook2.jpg",

		description: "Continue reading the book on your nightstand",
		importance: 0,
		duration: 60,
	},
	{
		name: "Clean up the apartment ",
		image: "images/cleaning.jpg",
		description: "Start the weekly cleaning of the apartment",
		importance: 0,
		duration: 30,
	},
	{
		name: "Clean up the apartment ",
		image: "images/cleaning2.jpg",
		description: "Start the weekly cleaning of the apartment",
		importance: 0,
		duration: 30,
	},
	{
		name: "Shopping",
		image: "images/shopping.jpg",
		description: "Shop for weekly groceries at Spar and Hofer",
		importance: 0,
		duration: 20,
	},
	{
		name: "Read Book",
		image: "images/readbook.jpg",

		description: "Continue reading the book on your nightstand",
		importance: 0,
		duration: 60,
	},
	{
		name: "Read Book",
		image: "images/readbook.jpg",

		description: "Reading the book on your bedside table",
		importance: 0,
		duration: 60,
	},
	{
		name: "Clean up the apartment ",
		image: "images/cleaning.jpg",
		description: "Start the weekly cleaning of the apartment",
		importance: 0,
		duration: 30,
	},
	{
		name: "Shopping",
		image: "images/shopping2.jpg",
		description: "Shop for weekly groceries at Spar and Hofer",
		importance: 0,
		duration: 20,
	},
];

// function to sort tasks by importance
function sortByImportancedown() {
	tasks.sort((a, b) => a.importance - b.importance);
	// update the display of sorted tasks
	updateTaskDisplay();
}

function sortByImportanceup() {
	tasks.sort((c, d) => d.importance - c.importance);
	// update the display of sorted tasks
	updateTaskDisplay();
}

// --- update the display of tasks
function updateTaskDisplay() {
	const resultElement = document.getElementById("result");
	resultElement.innerHTML = ""; // --- clear the current list

	for (let i = 0; i < tasks.length; i++) {
		const task = tasks[i];

		// --- create a new card
		const taskElement = document.createElement("div");
		taskElement.className = "card";
		taskElement.innerHTML = `
		<div class="card-header">
		  <h5 class="title">Task</h5>
		  <div class="right">
			<i class="fa-regular fa-bookmark"></i>
			<i class="fa-solid fa-ellipsis-vertical"></i>
		  </div>
		</div>
		<img src="${task.image}" class="card-img-top" alt="image not found" />
		<div class="card-body">
		  <h5 class="card-title">${task.name}</h5>
		  <p class="card-description">${task.description}</p>
		  <hr class="line" />
		  <p class="card-importance importanceBtn">
			<i class="fa-solid fa-triangle-exclamation"></i>
			Priority level:
			<button type="button" class="btn btn-success important-btn">
			  ${task.importance}
			</button>
		  </p>
		  <p class="card-deadline">
			<i class="fa-sharp fa-solid fa-calendar-days"></i> Deadline: 27.01.2022
		  </p>
		  <p class="card-duration">
			<i class="fa-sharp fa-regular fa-clock"></i> Duration: ${task.duration} min
		  </p>
		  <hr class="line" />
		  <button type="button" class="btn btn-danger">
			<i class="fa-solid fa-trash-can"></i> Delete
		  </button>
		  <button type="button" class="btn btn-success">
			<i class="fa-regular fa-circle-check"></i> Done
		  </button>
		</div>
	  `;

		// --- add card to the result
		resultElement.appendChild(taskElement);

		// --- add importancce button listener
		const btnSuccess = taskElement.querySelector(".important-btn");
		btnSuccess.addEventListener("click", function () {
			if (task.importance < 5) {
				task.importance++;
				btnSuccess.innerHTML = task.importance;
				changeBackgroundColor(task.importance, i);
			}
		});

		// --- update backgroundcolor by importance
		changeBackgroundColor(task.importance, i);

		const deleteButton = document.getElementsByClassName("btn-danger");
		console.log(deleteButton);
		for (let i = 0; i < deleteButton.length; i++) {
			let button = deleteButton[i];
			button.addEventListener("click", function (event) {
				let buttonClicked = event.target;
				buttonClicked.parentElement.parentElement.remove();
			});
		}
	}
}

// change the background color based on importance
function changeBackgroundColor(importance, index) {
	const btn = document.getElementsByClassName("important-btn")[index];
	if (importance >= 0 && importance <= 1) {
		btn.style.backgroundColor = "green";
		btn.style.color = "white";
	} else if (importance >= 2 && importance <= 3) {
		btn.style.backgroundColor = "yellow";
		btn.style.color = "black";
	} else {
		btn.style.backgroundColor = "red";
		btn.style.color = "white";
	}
}

// event listener to the sort button down
const sortButtondown = document.getElementById("sort-buttondown");
sortButtondown.addEventListener("click", sortByImportancedown);

// event listener to the sort button up
const sortButtonup = document.getElementById("sort-buttonup");
sortButtonup.addEventListener("click", sortByImportanceup);

// update the display of tasks
updateTaskDisplay();

//----------------------------------------
// so much to do --- so many notifications
//----------------------------------------

const numberElement = document.getElementById("badge");

let number = 0;

function incrementNumber() {
	number++;
	numberElement.textContent = number;
}

function getRandomInterval() {
	return Math.floor(Math.random() * 4000) + 1000;
}

setInterval(incrementNumber, getRandomInterval());
