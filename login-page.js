const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => 
{
    e.preventDefault();
    const ipaddress = loginForm.ipaddress.value;
    const password = loginForm.password.value;

    if (ipaddress === "192.168.1.100" && password === "raspberry")
    {
        alert("You have successfully logged in.");
        location.reload();
    }
    else
    {
        loginErrorMsg.style.opacity = 1;
    }
})