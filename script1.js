const form = document.getElementById('login-form');
const Username =  document.getElementById('username');
const errorMessage = document.getElementById('error-message');
document.getElementById('error-message').style.animation = ("p 3s linear infinite");
form.addEventListener('submit', (a) => {
    a.preventDefault();
    var c = '1010';
    var c1 = '2020';
    var c2 = '3030';
    var c3 = '4040';
    var c4 = '5050';
    var c5 = '6060';
    var c6 = '7070';
    var c7 = '8080';
    var c8 = '9090';
    const username = Username.value.trim();

    if (username === c | username === c1 | username === c2 | username === c3 | username === c4
        | username === c5 | username === c6 | username === c7 | username === c8) {
        errorMessage.textContent = "Full";
        window.location.href = 'index0.html';
    } else {
        errorMessage.textContent = "خطأ في دخول !";
    }
})

