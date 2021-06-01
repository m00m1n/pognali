var formBtn = document.querySelectorAll(".pref-form__title");

if(formBtn.length) {
  for (var i = 0; i < formBtn.length; i++) {
    formBtn[i].addEventListener("click", function (evt) {
      evt.preventDefault();
    });
  }
}
