"use strict";
var switcher = document.querySelector(".btn");
switcher.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  var className = document.body.className;
  if (className == "light-theme") {
    this.textContent = "Dark";
  } else if (className == "dark-theme"){
    this.textContent = "Light";
  }else{
    this.textContent = "Dark";
  }
  console.log('current class name:' + className);
}
);
