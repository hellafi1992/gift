const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const error1Message = document.getElementById('error1-message');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const username = usernameInput.value.trim();
	const password = passwordInput.value.trim();

	if (username === 'admin' && password === 'password') {
		// Login successful, redirect to admin dashboard
		window.location.href = 'index0.html';
	} else {
		errorMessage.textContent = 'تم الارسال بنجاح !';
		error1Message.textContent ='Horse 00:59M !';
	}
});