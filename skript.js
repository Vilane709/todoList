document.querySelector('.input').onkeypress = function(event) {
	let inputValue = document.querySelector('.input').value;

	if (event.keyCode == 13) {
		if (inputValue) {
			let li = document.createElement('li');
			let span = document.createElement("span");
			let img = document.createElement("img");

			span.innerHTML = inputValue;
			img.setAttribute("src", "garbage.svg");
			li.appendChild(img);
			li.appendChild(span);
			document.querySelector('ul').appendChild(li);
			document.querySelector('.input').value = "";
		};
	};
};

document.querySelector('ul').onclick = function(event) {
	let target = event.target;

	if (target.tagName == 'LI') {
		target.classList.toggle('chek');
	} else if (target.tagName === "IMG") {
		target.parentElement.remove();
	};
};

document.querySelector('.clear').onclick = function() {
	let li = document.querySelectorAll('li');

	for (let i = 0; i < li.length; i++) {
		li[i].remove();
	};	
};

document.querySelector('.check').onclick = function() {
	let li = document.querySelectorAll('li');

	for (let i = 0; i < li.length; i++) {
		li[i].classList.add('chek');
	}
}

// let names = ["вова", "Ваня", "Таня"];

// for (let i = 0; i < names.length; i++) {
// 	console.log(names[i]);
// }