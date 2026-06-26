(function(){
  var form=document.getElementById("registerForm");
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
      var username=document.getElementById("username").value.trim();
      var email=document.getElementById("email").value.trim();
      var pw=document.getElementById("password").value;
      var confirmPw=document.getElementById("confirmPassword").value;
      var agree=document.getElementById("agreeTerms").checked;

      if(!username){showToast("Vui lòng nhập tên hiển thị",true);return;}
      if(username.length<2){showToast("Tên hiển thị phải có ít nhất 2 ký tự",true);return;}
      if(!email){showToast("Vui lòng nhập email",true);return;}
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){showToast("Email không hợp lệ",true);return;}
      if(!pw){showToast("Vui lòng nhập mật khẩu",true);return;}
      if(pw.length<6){showToast("Mật khẩu phải có ít nhất 6 ký tự",true);return;}
      if(!/\d/.test(pw)||!/[a-zA-Z]/.test(pw)){showToast("Mật khẩu phải bao gồm cả chữ và số",true);return;}
      if(pw!==confirmPw){showToast("Mật khẩu xác nhận không khớp",true);return;}
      if(!agree){showToast("Vui lòng đồng ý với điều khoản dịch vụ",true);return;}

      showToast("Đăng ký thành công! Đang chuyển hướng...",false);
      setTimeout(function(){window.location.href="login.html";},1500);
    });
  }
})();
