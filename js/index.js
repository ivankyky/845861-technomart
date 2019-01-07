var map = document.querySelector(".contacts-map");
var mmb = document.querySelector(".modal-map-big");

var lost = document.querySelector(".write-us-btn");

var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close-x");
var closemap = mmb.querySelector(".modal-close-x");

var form = popup.querySelector("form");
var inputName = popup.querySelector("[name=name]");
var inputEmail = popup.querySelector("[name=email]");
var inputText = popup.querySelector("[name=message]");

lost.addEventListener("click", function(evt) {
  evt.preventDefault();

  popup.classList.add("modal-show");
  inputName.focus();
});


form.addEventListener("submit", function(evt) {
  if (!inputName.value || !inputEmail.value || !inputText.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

map.addEventListener("click", function(evt) {
  evt.preventDefault();
  mmb.classList.add("modal-show");
});

closemap.addEventListener("click", function(evt) {
  evt.preventDefault();
  mmb.classList.remove("modal-show");
});

lost.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
