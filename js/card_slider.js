let swiper_card = new Swiper(".mySwiper1", {
   effect: "cards",
   grabCursor: true,
});

let image = document.querySelectorAll('*[data-modal-img]');

for (let i = 0; i < image.length; i++) {
   image[i].addEventListener('click', function () {
      let name = image[i].getAttribute('data-modal-img');
      let modal = document.querySelector("[data-modal-window='" + name + "']");
      modal.style.display = "block";
      let close = modal.querySelector(".close_modal_window");
      close.addEventListener('click', function () {
         modal.style.display = "none";
      })
   })
}

window.onclick = function (e) {
   if (e.target.hasAttribute('data-modal-window')) {
      let modals = document.querySelectorAll("*[data-modal-window]")
      for (let i = 0; i < modals.length; i++) {
         modals[i].style.display = "none";
      }

   }
}
