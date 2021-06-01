// открытие фильтра
var areaFilterBtn = document.querySelector(".area__toggle");
var areaFilter = document.querySelector(".area__wrapper");
var areaMinimizeBtn = document.querySelector(".area__btn--minimize");
var areaTabs = document.querySelector(".area__tabs");
var area = document.querySelector(".area");
var innerPageWrapper = document.querySelector(".inner-page__wrapper");

if (area.classList.contains("area--open")) {
  area.classList.remove("area--open");
  area.classList.add("area--js");
  innerPageWrapper.classList.add("inner-page__wrapper--js");
  areaFilter.classList.remove("area__wrapper--opened");
  areaFilter.classList.add("area__wrapper--closed");
  areaFilterBtn.classList.add("area__toggle--show")
  if (document.documentElement.clientWidth < 768) {
    areaTabs.classList.remove("area__tabs--opened");
  }

  areaFilterBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    if (areaFilter.classList.contains("area__wrapper--closed")) {
      areaFilter.classList.remove("area__wrapper--closed");
      areaFilter.classList.add("area__wrapper--opened");
      areaFilterBtn.classList.remove("area__toggle--show");
      if (document.documentElement.clientWidth < 768) {
        areaTabs.classList.add("area__tabs--opened");
      }
    } else {
      areaFilter.classList.remove("area__wrapper--opened");
      areaFilter.classList.add("area__wrapper--closed");
      areaFilterBtn.classList.add("area__toggle--show");
      if (document.documentElement.clientWidth < 768) {
        areaTabs.classList.remove("area__tabs--opened");
      }
    }
  });

  areaMinimizeBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    areaFilter.classList.remove("area__wrapper--opened");
    areaFilter.classList.add("area__wrapper--closed");
    areaFilterBtn.classList.add("area__toggle--show");
    if (document.documentElement.clientWidth < 768) {
      areaTabs.classList.remove("area__tabs--opened");
    }
  });
}
