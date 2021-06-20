function toggleState(item) {
  // alert(item.checked)

  if (item.checked === true) {
    document.getElementById("annually").classList.toggle("checked");
    document.getElementById("monthly").classList.toggle("checked");
    //document.getElementById("monthly").classList.remove("checked");
  } else {
    document.getElementById("annually").classList.toggle("checked");
    document.getElementById("monthly").classList.toggle("checked");
  }
}
function changeCharges(item) {
  let element = document.getElementById("switch__input");
  let a = item.classList.contains("checked");
  let p = document.getElementsByClassName("charges__table");
  let id = item.id;

  if (a == false) {
    if (id == "monthly") {
      element.checked = false;
    } else {
      element.checked = true;
    }
    for (let i of p) {
      i.classList.toggle("checked");
    }
  }

 
}




  (function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);

   
 

  $(window).scroll(function(event) {  
   

    $("section").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        let m = $(this).attr("class");
        //alert(m);
        let cl = m;
        if(m.search(" ") != -1)
        {
          cl = m.substr(0, m.indexOf(" "));
        }
       // alert(cl);
       if(cl != undefined){
          el.removeClass(cl + "__animation"); 
          el.addClass(cl + "__animation"); 
          if(cl.length > 0){
            //$(".menu__item").removeClass("active");
           //alert(cl);
           $(".menu__link:contains("+ cl + ")").parent().addClass("active");
          }

       }
       }


         


    });
    ////------menu scroll with section---------   

    // $(".banner").each(function(i, el) {
    //   var el = $(el);
    //   if (el.visible(true)) {
    //     el.addClass("banner__animation"); 
    //   } 
    // });
    // $(".trusted").each(function(i, el) {
    //     var el = $(el);
    //     if (el.visible(true)) {
    //       el.addClass("trusted__animation"); 
    //     } 
    //   });
      // $(".features").each(function(i, el) {
      //   var el = $(el);
      //   if (el.visible(true)) {
      //     el.addClass("features__animation"); 
      //     let cl = '.features'
      //     $(".menu__item:contains("+ cl + ")").addClass("active");
      //   } 
      // });
  
    // $(".charges").each(function(i, el) {
    //   var el = $(el);
    //   if (el.visible(true)) {
    //     el.addClass("charges__animation"); 
    //   } 
    // });
    // $(".client").each(function(i, el) {
    //   var el = $(el);
    //   if (el.visible(true)) {
    //     el.addClass("fade-in"); 
        
    //   } 
    // });
    
  });

  //----------------------
  
  $(document).ready(function(){
     // jQuery methods go here...
  

 

  $('.faq__question').click(function(){    
   
    if( $(this).next().css("display") == 'none' ){
      $(".faq__answer").slideUp(); 
      $(".faq__question").removeClass('accordion--close');
      $(".faq__question").addClass('accordion--open');
      //$(this).hide();
      $(this).next().slideDown();
      
      $(this).toggleClass('accordion--open'); ///f2d1
      $(this).toggleClass('accordion--close');
    
  }
  else{

    $(this).next().slideUp();
    $(this).toggleClass('accordion--open'); 
    $(this).toggleClass('accordion--close');
  }
});



  function showItem(n){
    var i;
    var x = $(".client__item");
   
    if(n > x.length){
      itemIndex = 1;
    }
    if(n < 1){itemIndex = x.length;}
    for(i = 0; i < x.length; i++)
    {
      x.eq(i).hide(); 
    }
    x.eq(itemIndex - 1).show();
  }

  function autoItem(){ 

       itemIndex++
    showItem(itemIndex); 

    $(".client__item").removeClass("client__animation-prew");
    $(".client__item").addClass("client__animation-next");   
   
    setTimeout(autoItem, 10000);   
  }
  //--------auto--------
  var itemIndex = 0;
  //showItem(itemIndex);
  autoItem();
  //------------------
  $("#next").click(function(){
    $(".client__item").removeClass("client__animation-prew");
    $(".client__item").addClass("client__animation-next");
    showItem(itemIndex += 1); 
    
  });
  $("#prew").click(function(){ 
    
    $(".client__item").removeClass("client__animation-next");
    $(".client__item").addClass("client__animation-prew");

      showItem(itemIndex -= 1);
      // setTimeout(() => {
      //   resolve(10000);
      // }, delayInms);

 
});



$('.menu a').click(function(event) {
  event.preventDefault();
  
  part = $(this).attr('href'); // lấy id của thẻ tương ứng 
  
  position = $(part).offset().top - 90; // tìm vị trí thẻ 
  let text = $(this).text();
  
  $(".menu__item").removeClass("active");
  $(this).parent().toggleClass("active");
  $(".menu__item:contains("+ text + ")").addClass("active");

  $('html, body').animate({scrollTop: position},1400);
  });
  

    
    
 //----------------
});


