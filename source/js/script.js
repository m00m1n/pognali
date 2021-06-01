var headerNav = document.querySelector(".page-header__nav");
var navToggle = document.querySelector(".page-header__toggle");
var pageHeader = document.querySelector(".page-header");

if (pageHeader.classList.contains("page-header--nojs")) {
  headerNav.classList.remove("page-header__nav--nojs");
  pageHeader.classList.remove("page-header--nojs");
  navToggle.classList.remove("page-header__toggle--nojs");
  headerNav.classList.add("page-header__nav--closed");
  pageHeader.classList.add("page-header--dark");
  navToggle.classList.add("page-header__toggle--closed");
};

navToggle.addEventListener("click", function() {
  if (headerNav.classList.contains("page-header__nav--closed")) {
    headerNav.classList.remove("page-header__nav--closed");
    navToggle.classList.remove("page-header__toggle--closed");
    pageHeader.classList.remove("page-header--dark");
  } else {
    headerNav.classList.add("page-header__nav--closed");
    navToggle.classList.add("page-header__toggle--closed");
    pageHeader.classList.add("page-header--dark");
  }
});
