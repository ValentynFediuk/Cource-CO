function productClick() {
  $('#myDropdown').toggleClass('show-dropdown');
  $('#overlay').toggleClass('show-overlay');
  $('#product-dropdown').toggleClass('menu__item--active');
  $('#underline').toggleClass('menu__link-underline--active');
  $('#hamburger').toggleClass('hamburger--padding');
}
function searchClick() {
  $('#search-input').addClass('buttons__search-input--active');
  $('#search-close').addClass('buttons__search-close--active');
}
function closeClick() {
  $('#search-input').removeClass('buttons__search-input--active');
  $('#search-close').removeClass('buttons__search-close--active');
}
function bookingClick() {
  $('#booking-wrapper').toggleClass('dropdown-content__icon-wrapper--active');
  $('#booking-title').toggleClass('dropdown-content__item-title--active');
  $('#dropdown-right').toggleClass('dropdown-content__right--active');
}
function dropdownItemClick() {
  $('#dropdown-item-wrapper').toggleClass('dropdown-content__item-wrapper--active');
  $('#booking-icon').toggleClass('dropdown-content__item-icon--active');
  $('#item-arrow-right').toggleClass('dropdown-content__item-arrow-right--active');
}
function chatClick() {
  $('#chat-close-icon').toggleClass('chat-widget__close-icon--active');
  $('#chat-icon').toggleClass('chat-widget__icon--disabled');
  $('#chat-widget-body').toggleClass('chat-widget__body--active');
}
function navBtnClick() {
  $('#hamburger').toggleClass('hamburger--active');
  $('#habmburger-overlay').toggleClass('show-overlay');
  $('#clients-item').toggleClass('menu__item--disabled');
  $('#company-item').toggleClass('menu__item--disabled');
}