var users = {};

function showPopup() {
    $('#popup-container').modal('show');
}

function closePopup() {
    $('#popup-container').modal('hide');
}

function showLoginForm() {
    hideAllContainers();
    $('#login-container').show();
    $('#loggedInUserSpan').text('My Account');
}

function showRegisterForm() {
    hideAllContainers();
    $('#register-container').show();
    $('#loggedInUserSpan').text('My Account');
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
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    var user = users[username];

    if (user && user.password === password) {
        alert("Login successful!");

        // บันทึกข้อมูลผู้ใช้ที่ Login ลง sessionStorage
        var loggedInUser = { username: username, email: "example@example.com" };
        sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

        // ปิด Popup
        closePopup();

        // อัพเดทชื่อใน My Account
        updateLoggedInUserName();

        // ไปที่หน้าหลัก
        window.location.href = 'index.html'; // หรือไปที่หน้าอื่นที่คุณต้องการ
    } else {
        alert('Invalid username or password. Please try again.');
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

function updateLoggedInUserName() {
    var loggedInUserSpan = document.getElementById('loggedInUserSpan');
    var loggedInUser = sessionStorage.getItem('loggedInUser');

    if (loggedInUser) {
        var user = JSON.parse(loggedInUser);
        loggedInUserSpan.textContent = user.username; // เปลี่ยนที่นี่เพื่อให้แสดงชื่อผู้ใช้
    }
}

function logout() {
    sessionStorage.removeItem('loggedInUser');
    updateLoggedInUserName();
    $('#loggedInUserSpan').text('My Account'); // ตั้งค่าใหม่ที่นี่
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function () {
    updateLoggedInUserName();
});

function isValidUser(username, password) {
    // Replace this with your actual user validation logic
    // For example, you might check against a backend or hardcoded credentials
    return users[username] && users[username].password === password;
}

function showProfile() {
    window.location.href = 'profile.html';
}
