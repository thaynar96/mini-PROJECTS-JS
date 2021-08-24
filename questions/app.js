const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
	const btn = question.querySelector(".question-btn");
	btn.addEventListener("click", function () {
		questions.forEach(function (item) {
			if (item !== question) {
				item.classList.remove("show-text");
				console.log(
					"esse é o question",
					question,
					"esse é o item",
					item
				);
			}
		});
		question.classList.toggle("show-text");
	});
});

// traversing the DOM
// const questionBtn = document.querySelectorAll(".question-btn");
// questionBtn.forEach(function (btn) {
// 	btn.addEventListener("click", function (e) {
// 		const parent = e.currentTarget.parentElement.parentElement;
// 		parent.classList.toggle("show-text");
// 	});
// });
