
function floatimage() {
  $('img').each(function() {
     position_left = Math.floor((Math.random() * 100) + 1).toFixed(2) + '%';
     position_top = Math.floor((Math.random() * 100) + 1).toFixed(2) + '%';
     num = Math.floor((Math.random() * 9) + 1);
     $(this).addClass('floating');
     $(this).css({
    'left'     : position_left,
    'top'      : position_top,
    'transform': 'scale( 0.' + num + ')',
    'animation-duration': '2' + num + 's, ' + num + 's'
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


$(".toolbar .button").click(function() {
  $(this).toggleClass("active");
  $(".icons").toggleClass("open");
});

$('#faster').click(function(){
  $('img').each(function(){
    num = Math.floor((Math.random() * 9) + 1);
    $(this).css({
      'animation-duration': num + 's'
    });
  });
})

$('#slower').click(function(){
  $('img').each(function(){
    num = Math.floor((Math.random() * 9) + 1);
    $(this).css({
      'animation-duration': '4' + num + 's'
    });
  });
})

$('#speed').click(function(){
  $('img').each(function(){
    num = Math.floor((Math.random() * 9) + 1);
    $(this).css({
      'animation-duration': '2' + num + 's'
    });
  });
})

$('#more_wind').click(function(){
  $('img').each(function(){
    $(this).css({
      'animation-name': 'animateBubble, more_sideWays'
    });
  });
})

$('#less_wind').click(function(){
  $('img').each(function(){
    src = $(this).attr('src')
    $(this).css({
      'animation-name': 'animateBubble, less_sideWays'
    });
  });
})

$('#wind').click(function(){
  $('img').each(function(){
    $(this).css({
      'animation-name': 'animateBubble, sideWays'
    });
  });
})

$('#magic').click(function(){
  $('img').each(function(){
    color = ['MediumOrchid','SlateBlue','Green','Salmon','Gold']
    src = $(this).attr('src')
    $(this).css({
      'background-color': color[Math.floor((Math.random() * color.length))],
      'mask-image': 'url(' + src + ')',
      'mask-position': 'center center'
    });
  });
})

$('#opacity').click(function(){
  $('img').each(function(){
    num = Math.floor((Math.random() * 9) + 1);
    $(this).css({
      'opacity': '0.' + num
    });
  });
})

$('#more').click(function(){
  $('img').each(function(){
    $(this).clone().appendTo('#container')
  });
})
