function myFunction() {
  $('#myDropdown').toggleClass('show');
  $('#overlay').toggleClass('show-overlay');
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
}
function dropdownItemClick() {
  $('#dropdown-item-wrapper').toggleClass('dropdown-content__item-wrapper--active');
  $('#booking-icon').toggleClass('dropdown-content__item-icon--active');

}

// function resourcesDropdown() {
//   $('#resourcesDropdown').toggleClass('show');
//   $('#overlay').toggleClass('show-overlay');
// }
