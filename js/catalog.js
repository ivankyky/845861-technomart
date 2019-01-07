var popup = document.querySelector(".modal-add-to-cart");
var close = popup.querySelector(".modal-close-x");
var retrn = popup.querySelector(".modal-close");
var buybtn = Array.prototype.slice.call(document.querySelectorAll('.buy'));

buybtn.forEach(function(buybtn) {
  buybtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
  });
});

retrn.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
