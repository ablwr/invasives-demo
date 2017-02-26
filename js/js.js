function floatimage() {
  $('img').each(function() {
     position_left = Math.floor((Math.random() * 100) + 1).toFixed(2) + '%';
     position_top = Math.floor((Math.random() * 100) + 1).toFixed(2) + '%';
     num = Math.floor((Math.random() * 10) + 1);
     $(this).addClass('x' + num);
     $(this).css({
    'left': position_left,
    'top' : position_top
    })
  });
}
floatimage();

function loadingimage() {
 $('img').each(function(index) {
    setTimeout(function(el) {
        el.show();
    }, index * 1800, $(this));
  });
}
loadingimage();
