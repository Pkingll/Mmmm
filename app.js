function toggleMenu(){
  document.getElementById("sidebar").classList.toggle("active");
}

function closeMenu(){
  document.getElementById("sidebar").classList.remove("active");
}

function openAdmin(){

  const pass = prompt("أدخل كلمة مرور الأدمن");

  if(pass === null){
    return; // إذا ضغط إلغاء
  }

  const password = pass.trim();

  if(password === "1997"){
    window.location.href = "./admin.html";
  }else{
    alert("كلمة المرور غير صحيحة");
  }
}
