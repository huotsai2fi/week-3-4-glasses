const pc = window.matchMedia('(min-width: 993px)');
const tablet = window.matchMedia('(min-width: 768px) and (max-width: 992px)');
const moblie = window.matchMedia('(max-width: 767px)');

//重設漢堡選單
function resetMenu(mql) {
  if (!mql.matches) {
    $('.toggleDropdown').children('span').text('menu');
    $('.dropdown').removeClass('active');
  }
}

resetMenu(moblie);
moblie.addEventListener('change', resetMenu);

//漢堡選單
$('.toggleDropdown').on('click', function () {
  $(this)
    .children('span')
    .text((i, text) => {
      return text === 'menu' ? 'close' : 'menu';
    });
  $('.dropdown').toggleClass('active');
});
