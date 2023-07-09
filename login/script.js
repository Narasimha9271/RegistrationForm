document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
    });

var togglePasswordButtons = document.querySelectorAll(".toggle-password");
togglePasswordButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var targetId = this.getAttribute("data-target");
        var targetInput = document.getElementById(targetId);

        if (targetInput.type === "password") {
            targetInput.type = "text";
            this.innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            targetInput.type = "password";
            this.innerHTML = '<i class="fas fa-eye"></i>';
        }
    });
});
