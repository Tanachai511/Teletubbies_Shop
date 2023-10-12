$(document).ready(function () {
    // Show login modal when the "Sign in" button is clicked
    $('.dropdown-item-signin').click(function () {
        $('#loginModal').modal('show');
        centerModal();

                // Show password reset modal when "Forgot Password" link is clicked
    $('#forgotPasswordLink').click(function () {
        $('#loginModal').modal('hide');
        $('#passwordResetModal').modal('show');
    });
    });
$(document).ready(function () {

    $('.dropdown-item-signup').click(function () {
        $('#signupModal').modal('show');
        centerModal(); 
    });

                // Show password reset modal when "Forgot Password" link is clicked
    $('#forgotPasswordLink').click(function () {
        $('#loginModal').modal('hide');
        $('#passwordResetModal').modal('show');
    });
    });

});

$(document).ready(function () {

    $('.forgotPasswordLink').click(function () {
    $('#signupModal').modal('show');
        centerModal(); 
    });

        // Show password reset modal when "Forgot Password" link is clicked
    $('#forgotPasswordLink').click(function () {
    $('#loginModal').modal('hide');
    $('#passwordResetModal').modal('show');
    });
    });
 










    // เมื่อเปลี่ยนรหัสผ่านสำเร็จ, ให้เปลี่ยนหน้าไปที่หน้าเปลี่ยนรหัสผ่านและซ่อนป็อปอัพล็อกอิน
    function passwordResetSuccess() {
    // สามารถเปลี่ยน URL ตามที่ต้องการ
    window.location.href = 'เปลี่ยนรหัสผ่าน.html';
    $('#loginModal').modal('hide');
}

// เมื่อยกเลิกการเปลี่ยนรหัสผ่าน, ให้ย้อนกลับไปที่หน้าเข้าสู่ระบบ
function cancelPasswordReset() {
    window.location.href = 'เข้าสู่ระบบ.html';
}