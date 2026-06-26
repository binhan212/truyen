(function(){
  if(typeof TienAuth==="undefined"){alert("Lỗi: auth.js chưa được tải");return;}

  var form=document.getElementById("loginForm");
  var toast=document.getElementById("toast");
  var togglePw=document.getElementById("togglePw");
  var pwInput=document.getElementById("password");

  function showToast(msg,error){
    if(!toast)return;
    toast.textContent=msg;
    toast.className="toast "+(error?"error":"");
    setTimeout(function(){toast.classList.add("show");},10);
    clearTimeout(toast._timeout);
    toast._timeout=setTimeout(function(){toast.classList.remove("show");},3000);
  }

  if(togglePw&&pwInput){
    togglePw.addEventListener("click",function(){
      var isPw=pwInput.type==="password";
      pwInput.type=isPw?"text":"password";
      togglePw.innerHTML=isPw?'<iconify-icon icon="heroicons:eye-slash-20-solid" width="18" height="18"></iconify-icon>':'<iconify-icon icon="heroicons:eye-20-solid" width="18" height="18"></iconify-icon>';
    });
  }

  if(form){
    form.addEventListener("submit",function(e){
      e.preventDefault();
      var email=document.getElementById("email").value.trim();
      var pw=document.getElementById("password").value;
      if(!email){showToast("Vui lòng nhập email",true);return;}
      if(!pw){showToast("Vui lòng nhập mật khẩu",true);return;}
      var result=TienAuth.login(email,pw);
      if(!result.success){showToast(result.error,true);return;}
      showToast("Đăng nhập thành công! Đang chuyển hướng...",false);
      setTimeout(function(){window.location.href="index.html";},1000);
    });
  }

  if(TienAuth.isLoggedIn()){window.location.href="index.html";return;}

  document.querySelectorAll(".social-btn").forEach(function(b){
    b.addEventListener("click",function(){
      showToast("Tính năng đăng nhập mạng xã hội đang phát triển",true);
    });
  });
})();
