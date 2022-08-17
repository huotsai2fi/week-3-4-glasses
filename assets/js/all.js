"use strict";

var pc = window.matchMedia('(min-width: 993px)');
var tablet = window.matchMedia('(min-width: 768px) and (max-width: 992px)');
var moblie = window.matchMedia('(max-width: 767px)'); //重設漢堡選單

function resetMenu(mql) {
  if (!mql.matches) {
    $('.toggleDropdown').children('span').text('menu');
    $('.dropdown').removeClass('active');
  }
}

resetMenu(moblie);
moblie.addEventListener('change', resetMenu); //漢堡選單

$('.toggleDropdown').on('click', function (e) {
  e.preventDefault();
  $(this).children('span').text(function (i, text) {
    return text === 'menu' ? 'close' : 'menu';
  });
  $('.dropdown').toggleClass('active');
});
//# sourceMappingURL=all.js.map
