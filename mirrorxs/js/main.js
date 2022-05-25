//slicknav
$(document).ready(function () {
   $('#lists-9JrT').slicknav({ prependTo: "#mobile_menu" });
});
$(document).ready(function () {
   $('.list-of-actions').slicknav({ prependTo: "#menu-2" });
});

// code for searching a photo
let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll('.image');
searchBox.oninput = () => {
   images.forEach(hide => hide.style.display = 'none');
   let value = searchBox.value;
   images.forEach(filter => {
      let title = filter.getAttribute('data-title');
      if (value == title) {
         filter.style.display = 'block';
      }
      if (searchBox.value == '') {
         filter.style.display = 'block';
      }
   });
};

//login popup 
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
   loginForm.style.marginLeft = "-50%";
   loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
   loginForm.style.marginLeft = "0%";
   loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
   signupBtn.click();
   return false;
});

// close button
document.querySelector(".login-popup-link").addEventListener("click", () => {
   document.querySelector(".wrapper").classList.add("active");
});
document.querySelector(".wrapper .close-btn").addEventListener("click", () => {
   document.querySelector(".wrapper").classList.remove("active");
});


