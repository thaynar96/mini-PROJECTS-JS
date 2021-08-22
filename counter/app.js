// definindo a inicialização da conta
let count = 0;

// selecionando o id value e botões
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// btns vai retornar uma nodeList

btns.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		const styles = e.currentTarget.classList;
		if (styles.contains("decrease")) {
			count--;
		} else if (styles.contains("increase")) {
			count++;
		} else {
			count = 0;
		}
		if (count > 0) {
			value.style.color = "green";
		}
		if (count < 0) {
			value.style.color = "red";
		}
		if (count === 0) {
			value.style.color = "#222";
		}
		value.textContent = count;
	});
});

// btns.forEach(function (item) {
// 	if (item.classList.contains("decrease")) {
// 		item.addEventListener("click", function () {
// 			count--;
// 			value.textContent = count;
// 		});
// 	} else if (item.classList.contains("reset")) {
// 		item.addEventListener("click", function () {
// 			count = 0;
// 			value.textContent = 0;
// 		});
// 	} else {
// 		item.addEventListener("click", function () {
// 			count++;
// 			value.textContent = count;
// 		});
// 	}
// 	if (count > 0) {
// 		value.style.color = "green";
// 	}
// 	if (count < 0) {
// 		value.style.color = "red";
// 	}
// 	if (count === 0) {
// 		value.style.color = "#222";
// 	}
// });
