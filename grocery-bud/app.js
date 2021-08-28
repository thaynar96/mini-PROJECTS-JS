// ****** SELECT ITEMS **********

const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);
// clear values
clearBtn.addEventListener("click", clearItems);
// teste
list.addEventListener("click", (e) => {
	const teste = e.target.parentElement.classList;
	if (teste.contains("edit-btn")) {
		editItem(e);
	}
	if (teste.contains("delete-btn")) {
		deleteItem(e);
	}
});
// ****** FUNCTIONS **********
function addItem(e) {
	e.preventDefault();
	const value = grocery.value;
	const id = new Date().getTime().toString();
	if (value && !editFlag) {
		const element = document.createElement("article");

		element.classList.add("grocery-item");
		const attr = document.createAttribute("data-id");
		attr.value = id;
		element.setAttributeNode(attr);
		element.innerHTML = `<p class="title">${value}</p>
						<div class="btn-container">
							<button type="button" class="edit-btn">
								<i class="fas fa-edit"></i>
							</button>
							<button type="button" class="delete-btn">
								<i class="fas fa-trash"></i>
							</button>
						</div>`;
		list.appendChild(element);
		// mostrando alert depois de adicionar
		displayAlert("item added to the list", "success");
		// mostrando container com o item adicionado
		container.classList.add("show-container");
		// adicionanddo a local storage
		addToLocalStorage(id, value);
		// voltar ao padrão inicial
		setBackToDefault();
	} else if (value && editFlag) {
		editElement.innerHTML = value;
		displayAlert("value changed", "success");
		editLocalStorage(editID, value);
		setBackToDefault();
	} else {
		displayAlert("prease enter value", "danger");
	}
}

function displayAlert(text, action) {
	alert.textContent = text;
	alert.classList.add(`alert-${action}`);
	// remove alert
	setTimeout(function () {
		alert.textContent = "";
		alert.classList.remove(`alert-${action}`);
	}, 1000);
}

function clearItems() {
	const items = document.querySelectorAll(".grocery-item");
	if (items.length > 0) {
		items.forEach(function (item) {
			list.removeChild(item);
		});
	}
	container.classList.remove("show-container");
	displayAlert("empty list", "danger");
	setBackToDefault();
	// localStorage.removeItem("list");
}

function editItem(e) {
	const element = e.target.parentElement.parentElement.parentElement;
	editElement = e.target.parentElement.parentElement.previousElementSibling;
	grocery.value = editElement.innerHTML;
	editFlag = true;
	editID = element.dataset.id;
	submitBtn.textContent = "edit";
}

function deleteItem(e) {
	const element = e.target.parentElement.parentElement.parentElement;
	const id = element.dataset.id;
	console.log(element);
	list.removeChild(element);
	if (list.children.length === 0) {
		container.classList.remove("show-container");
	}
	displayAlert("item removed", "danger");
	setBackToDefault();
	removeFromLocalStorage(id);
}

// voltando para o padrão inical
function setBackToDefault() {
	grocery.value = "";
	editFlag = false;
	editId = "";
	submitBtn.textContent = "submit";
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
	console.log("added to local storage");
}

function removeFromLocalStorage(id) {}
function editLocalStorage(id, value) {}
// ****** SETUP ITEMS **********
