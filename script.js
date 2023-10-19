var users = {};

function showPopup() {
    $('#popup-container').modal('show');
}

function closePopup() {
    $('#popup-container').modal('hide');
}

function showRegisterForm() {
    hideAllContainers();
    $('#register-container').show();
}

function showLoginForm() {
    hideAllContainers();
    $('#login-container').show();
}

function showForgotPasswordForm() {
    hideAllContainers();
    $('#forgot-password-container').show();
}

function hideAllContainers() {
    var containers = ['login-container', 'register-container', 'forgot-password-container'];
    containers.forEach(container => {
        $('#' + container).hide();
    });
}

function login() {
    var username = $('#loginUsername').val();
    var password = $('#loginPassword').val();

    var user = users[username];

    if (user && user.password === password) {
        alert("Login successful!");
        $('#popup-container').modal('hide');
        window.location.href = 'dashboard.html'; 
    } else {
        alert("Login failed. Please check your username and password.");
    }
}

function register() {
    var username = $('#registerUsername').val();
    var password = $('#registerPassword').val();
    var confirmPassword = $('#confirmPassword').val();

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Registration successful!");
    users[username] = { username: username, password: password };
    showLoginForm();
}

function resetPassword() {
    var newPassword = $('#newPassword').val();
    var confirmNewPassword = $('#confirmNewPassword').val();

    if (newPassword !== confirmNewPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Implement password reset logic here
    alert("Password reset successful!");
}

function sendResetEmail() {
    var email = $('#email').val();
    // Implement email sending logic here
    alert("Password reset instructions sent to " + email);
}

function showRegisterForm() {
    hideAllContainers();
    document.getElementById('register-container').style.display = 'flex';
    showPopup();  // เรียกใช้ฟังก์ชัน showPopup เพื่อให้ Popup ป็อปอัพ
}

function sendResetEmail() {
    var email = document.getElementById("email").value;
    // ตรวจสอบ email และส่งอีเมลรีเซ็ตรหัสผ่าน
    // สามารถใช้ API หรือบริการส่งอีเมลต่าง ๆ ที่คุณมี
    alert("Password reset instructions sent to " + email);
}

function showForgotPasswordForm() {
    hideAllContainers();
    document.getElementById('forgot-password-container').style.display = 'flex';
    showPopup();  // เรียกใช้ฟังก์ชัน showPopup เพื่อให้ Popup ป็อปอัพ
}