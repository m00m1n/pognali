var ratesLink = document.querySelector(".rates__link");
var ratesPopup = document.querySelector(".biz-rates");
var ratesCloseBtn = document.querySelector(".biz-rates__btn");

ratesLink.addEventListener("click", function(evt){
  evt.preventDefault();
  ratesPopup.classList.add("biz-rates--show");
});

ratesCloseBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  ratesPopup.classList.remove("biz-rates--show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    ratesPopup.classList.remove("biz-rates--show");
  }
});
