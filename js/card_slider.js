let swiper_card = new Swiper(".mySwiper1", {
   effect: "cards",
   grabCursor: true,
});

let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.swiper-slide__card'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup');



openPopupButtons.forEach((button) => { // Перебираем все кнопки
   button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active'); // И для самого окна


   })
});

closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
   popupBg.classList.remove('active'); // Убираем активный класс с фона
   popup.classList.remove('active'); // И с окна


});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
   if (e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна

   }
});

const cards = document.querySelectorAll(".swiper-slide__card");
cards.forEach((card) => {
   card.addEventListener("click", (e) => {
      let targetEl = e.target;
      let targetCardTitle = card.querySelector(".card__title");
      let targetCardImage = card.querySelector(".card__image");
      let targetCardText = card.querySelector(".card__text");
      document.querySelector(".popup__title").textContent = targetCardTitle.textContent;
      document.querySelector(".popup__text").textContent = targetCardText.textContent;
      document.querySelector(".popup__image").src = targetCardImage.src;
   });
});