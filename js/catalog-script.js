// Переменная на ссылку, которая будет открывать попап
var cartLink = document.querySelector(".catalog-card__button-popup--buy");

// Переменная с попапом добавления товара в корзину
var cartPopup = document.querySelector(".modal__cart");
// Переменная с кнопкой закрытия попапа добавления товара в корзину
var cartClose = cartPopup.querySelector(".button-close");
var cartContinue = cartPopup.querySelector(".modal__button-catalog--continue");

// Событие по клику на ссылку, которая будет открывать попап
cartLink.addEventListener("click", function (evt) {
  // Отменяет стандартное действие ссылки
  evt.preventDefault();
  // Добавляет попапу добавления товара в корзину класс, который отвечает за показ блока (изначально он скрыт)
  cartPopup.classList.add("modal-show");
});

// Фукнция, которая позволяет применять открытие попапа ко всем карточкам на странице
document.querySelectorAll(".catalog-card__button-popup--buy").forEach(function (el) {
  el.addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });
});

// Событие по клику на кнопку зыкрытия
cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

// Событие по клику на кнопку продолжить покупки
cartContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

// Отлавливает нажатие кнопки ESC и в случае, если модальное окно открыто, закрывает его
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});
