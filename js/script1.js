
$(document).ready(function(){
    //alert('Welcome user!')

    //////////// Selector: element(p, h1, ul), id, class, multiple, css or jquery

    //syntax
    //$('selector').hide()
  /*   $('p').hide(); */


   //id
    //$('#para1').hide();

    //class
   // $('.heading2').hide();


   //mulitple
  // $('p, h1, .heading2').hide();

  //hides first item in the list
  //$('#list li:first').hide();


  //hide last item of the list
  //$('#list li:last').hide();


  //Events: click, dbclick, keydown, load, mouseover, hover(mouseleave & mouseever)

  $('.btn1').click(function(){
      $('.para2').hide();
  });


  //Methods/Effects: hide(), show(), toggle(), slideUp(), slideDown(),
    // slideToggle, fadeIn, fadeOut, fadeToggle

  $('.btn2').click(function(){
        $('.para2').show();
  });
  $('.btn3').click(function(){
        $('.para2').toggle();
  });


  //parameters - fast, slow, 2000 = 2seconds

  $('.btn4').click(function(){
      $('#para1').fadeToggle(2000);
  });

  //animations: animate(), 

  $('.box').mouseover(function(){

        $(this).animate({'top':'300px'},2000);
  })
  $('.box1').mouseover(function(){

        $('.box1').animate({'left':'300px'},2000);
  })

  $('.box').mouseout(function(){
      $(this).animate({'top': '0'},2000);
  })

});