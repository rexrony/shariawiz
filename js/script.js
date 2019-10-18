/**/
$(document).ready(function() {
    $(".slide-con").slick({
        dots: !1,
        arrows: !1,
        nextArrow: '<span class="arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
        prevArrow: '<span class="arrow-left"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        infinite: !0,
        autoplay: !1,
        autoplaySpeed: 3e3,
        customPaging: function(e, t) {
            return '<span class="cus_dot2"></span>'
        }
    }), $("#toggle").click(function() {
        $(this).toggleClass("active"), $("#overlay").toggleClass("open")
    }), $(".overlay-menu ul li a").click(function() {
        $("#overlay").removeClass("open")
    }), $("#searchform").submit(function(e) {
        $(this).find("#s").val($.trim($(this).find("#s").val())).val() || (e.preventDefault(), alert("Your search is empty!"), $("#s").focus())
    }), AOS.init({
        offset: 200,
        duration: 500,
        easing: "ease-out-cubic",
        delay: 100
    }), AOS.refresh();}), $(function() {
    $(".searchtoggle").on("click", function(e) {
        e.preventDefault(), $("#search").addClass("open"), $('#search > form > input[type="text"]').focus()
    }), $("#search, #search button.close, .close, .x-close").on("click keyup", function(e) {
        e.target != this && "close" != e.target.className && 27 != e.keyCode || $(this).removeClass("open")
    })
}), $(window).scroll(function() {
    $(this).scrollTop() > 250 ? $("header").addClass("sticky") : $("header").removeClass("sticky")
}), /*$(document).ready(function() {
   function pagescroll(e) {
        var t = $(document).scrollTop();
        $("#menu-mainmenu a").each(function() {
            var e = $(this),
                o = $(e.attr("href"));
            o.position().top <= t && o.position().top + o.height() > t ? ($("#menu-mainmenu ul li a").removeClass("active"), e.addClass("active")) : e.removeClass("active")
        })
    }

    $(document).on("scroll", pagescroll), $('#menu-mainmenu a[href^="#"]').on("click", function(e) {
        e.preventDefault(), $(document).off("scroll"), $("a").each(function() {
            $(this).removeClass("active")
        }), $(this).addClass("active");
        var t = this.hash;
        $target = $(t), $("html, body").stop().animate({
            scrollTop: $target.offset().top + 50
        }, 500, "swing", function() {
            window.location.hash = t, $(document).on("scroll", pagescroll)
        })
    })
})*/

$(document).ready(function() {
  
    var scrollLink = $('#menu-mainmenu a');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
    
    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      
      scrollLink.each(function() {
        
        var sectionOffset = $(this.hash).offset().top - 20;
        
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })
      
    })
    
  }),document.onreadystatechange = function() {
    var e = document.readyState;
    "interactive" == e ? document.getElementById("page").style.visibility = "hidden" : "complete" == e && setTimeout(function() {
        document.getElementById("interactive"), document.getElementById("load").style.visibility = "hidden", document.getElementById("page").style.visibility = "visible"
    }, 2e3)
}, $(document).ready(function() {
    $("#back-top").hide(), $(function() {
        $(window).scroll(function() {
            $(this).scrollTop() > 100 ? $("#back-top").fadeIn() : $("#back-top").fadeOut()
        }), $("#back-top a").click(function() {
            return $("body,html").animate({
                scrollTop: 0
            }, 800), !1
        })
    })
});


	
	 $('accordion .accordion-container .set:eq(0) a').addClass('active');
	 $('accordion .accordion-container .set:eq(0) .content').css("display", "block");
$('.set > a').on("click", function(){
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.content').slideUp(200);
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    }else{
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
    $(".set > a").removeClass("active");
    $(this).addClass("active");
    $('.content').slideUp(200);
    $(this).siblings('.content').slideDown(200);
    } 
  });