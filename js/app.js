let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');
let containerPassword = document.querySelector('#containerPassword');
let bestElement = document.querySelector('.best');

let charset = '0123456799';
let novaSenha = '';
sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
	sizePassword.innerHTML = this.value;
};

function generatePassword() {
	let pass = '';
	for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
		pass += charset.charAt(Math.floor(Math.random() * n));
	}
	containerPassword.classList.remove('hide');
	password.innerHTML = pass;
	novaSenha = pass;
}

function copyPassword() {
	alert('senha Copiada');
	navigator.clipboard.writeText(novaSenha);
}
