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


// function resourcesDropdown() {
//   $('#resourcesDropdown').toggleClass('show');
//   $('#overlay').toggleClass('show-overlay');
// }
