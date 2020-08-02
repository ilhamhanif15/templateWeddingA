$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  gutter: 10
});

$('.grid').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});