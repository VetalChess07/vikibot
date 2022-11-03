let swiper_card = new Swiper(".mySwiper1", {
   effect: "cards",
   grabCursor: true,
});

btnOff = document.querySelectorAll('.swiper-slide__card'),
   btnOn = document.querySelectorAll('.close-popup'),
   body = document.body;

btnOff.forEach(b => b.addEventListener('click', (b) => {
   disableScroll();
   // b.currentTarget.style.pointerEvents = 'none';
   // btnOn.style.pointerEvents = 'auto';
}));

btnOn.forEach(b => b.addEventListener('click', (b) => {
   enableScroll();
   // b.currentTarget.style.pointerEvents = 'none';
   // btnOff.style.pointerEvents = 'auto';
}));

let disableScroll = function () {
   let pagePosition = window.scrollY;
   document.body.classList.add('active');
   document.body.dataset.position = pagePosition;
   document.body.style.top = -pagePosition + 'px';
}


let enableScroll = function () {
   let pagePosition = parseInt(document.body.dataset.position, 10);
   document.body.style.top = 'auto';
   document.body.classList.remove('active');
   window.scroll({ top: pagePosition, left: 0 });
   document.body.removeAttribute('active');
}




let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.swiper-slide__card'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup');
// let body = document.body;
// console.log(body)




openPopupButtons.forEach((button) => { // Перебираем все кнопки
   button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active'); // И для самого окна
      body.classList.add('active')

   })
});

closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
   popupBg.classList.remove('active'); // Убираем активный класс с фона
   popup.classList.remove('active'); // И с окна
   body.classList.remove('active');

});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
   if (e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна
      body.classList.remove('active');

   }
});

cards = document.querySelectorAll(".swiper-slide__card");
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

let burgerBtn = document.querySelector(".burger-btn")

burgerBtn.addEventListener('click', (e) => {
   let burger = document.querySelector('.burger')
   burger.classList.toggle("open");
   burgerBtn.classList.toggle("open");
   let burgerInner = document.querySelector('.burger__inner')
   burgerInner.classList.toggle("open");
   // let burgerItem = document.querySelectorAll('.burger__item')
   // burgerItem.classList.toggle("class");
});

// const header = document.querySelector('.header');
// const first = document.querySelector('.gallery');

// const headerHeight = header.offsetHeight;
// const firstHeight = first.offsetHeight;
// let lastScrollTop = 0;
// console.log(header)
// console.log(first)
// console.log(headerHeight)
// console.log(firstHeight)

// window.addEventListener('scroll', () => {
//    let scrollDistance = window.scrollY;

//    if (scrollDistance >= firstHeight) {
//       header.classList.add('fixed');
//       first.style.marginTop = `${headerHeight}px`;
//    } else {
//       header.classList.remove('fixed');
//       first.style.marginTop = null;
//    }

//    if (scrollDistance >= lastScrollTop) {
//       header.classList.remove('fixed');
//       first.style.marginTop = null;
//    } else {
//       header.classList.add('fixed');
//       first.style.marginTop = `${headerHeight}px`;
//    }

//    if (scrollDistance === 0) {
//       header.classList.remove('fixed');
//       first.style.marginTop = null;
//    }

//    lastScrollTop = scrollDistance;
// });
