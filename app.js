function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

function closeMenu() {
    document.getElementById("sidebar").classList.remove("active");
}

/* 🔐 دخول الأدمن */
function openAdmin() {

    let pass = prompt("أدخل كلمة المرور:");

    if (pass === "1997") {
        window.location.href = "admin.html";
    } else {
        alert("كلمة المرور غير صحيحة");
    }
}
