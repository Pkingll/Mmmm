function toggleMenu(){
document.getElementById("sidebar").classList.toggle("active");
}

function closeMenu(){
document.getElementById("sidebar").classList.remove("active");
}

/* 🔐 دخول الأدمن */
function openAdmin(){
let pass = prompt("1997");

/*
⚠️ هذه كلمة المرور الافتراضية
غيّريها أنتِ كما تريدين
مثال: ilm-admin-2026
*/

if(pass === "1997"){
window.location.href = "admin.html";
}else{
alert("كلمة المرور غير صحيحة");
}
}
