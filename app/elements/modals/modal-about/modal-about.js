/* var modalAboutMe = new Kmodal('#modal-about-me'); */
var num = 15;
var modalBtn = document.querySelector('.open');
var closeBtn = document.querySelector('.close');

var modalContainer = document.querySelector('.modals');
var modalContent = document.querySelector('.modal-content');
var holdModals = document.createDocumentFragment();

for (var i = 0; i < num; i++) {
  var div = document.createElement('div');
  div.classList.add('modal-drop');
  div.style.top = Math.floor((Math.random() * 100)) + 'vh';
  div.style.left = Math.floor((Math.random() * 100)) + 'vw';
  div.style.transitionDelay = Math.random() + 's';
  holdModals.appendChild(div);
}
console.log();
modalContainer.appendChild(holdModals);

modalBtn.addEventListener('click', function () {
  setTimeout(brin, 6000);
  document.body.style.overflow = 'hidden';
  modalContainer.style.display = 'flex';
  modalContent.scrollTop = 0;
  window.setTimeout(function () {
    modalContainer.classList.add('active');
  }, 0.4);

  document.addEventListener('mousedown', function (e) {
    if (e.target.closest('.modal-wrap') === null) {
      brinRemove();
      document.body.style.overflow = '';
      modalContainer.classList.remove('active');

      modalContainer.style.display = 'none';
    }
  });
});

closeBtn.addEventListener('click', function () {
  brinRemove();
  document.body.style.overflow = '';
  modalContainer.classList.remove('active');

  setTimeout(time, 3000);

});

function time() {
  modalContainer.style.display = 'none';
};

$('.brin').mouseenter(function () {
  brinRemove();
  setTimeout(brin, 2000);
});

function brin() {
  $('.brin').addClass('brin_active');
}

function brinRemove() {
  $('.brin').removeClass('brin_active');
}