jQuery( function ( $ ) {

    wow = new WOW({
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {  }
    });
    wow.init();
    
    $('.navbar-toggler').click(function(){
    	$('#header-shadow').toggleClass('header-shadow--active');
    	$('.navbar-collapse').toggleClass('right');
    });
    
    $('#botaomobile').click(function(){ 
        $('#botaomobile').toggleClass('menuactive');
    });
    
    window.onscroll = function() {myFunction()};
    var header = document.getElementById("masthead");
    var sticky = header.offsetTop;
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("topheaderauto");
        } else {
            header.classList.remove("topheaderauto");
            /*if(document.getElementById("main-nav").classList.contains('show')){
                document.getElementById("main-nav").classList.remove("show");
            }*/
        }
    }

    var botaomobile = document.getElementById('botaomobile');
    var headermobile = document.getElementById("masthead");
    botaomobile.addEventListener('click', clicar);
        function clicar(){
        /*if(headermobile.className.indexOf('topheaderauto') != -1){
            header.classList.remove("topheaderauto");
        }else{*/
            headermobile.classList.add("topheaderauto");
        //}
    }

    function openSolution(evt, solutionName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(solutionName).style.display = "block";
      evt.currentTarget.className += " active";
    }

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;		
        $('html, body').animate({ 
          scrollTop: targetOffset - 75
        }, 500);
    });

    $(function(){ 
        var navMain = $(".navbar-collapse");
        navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
        });
    });

	    
    /*var owl = $('.owl-carousel-banner');
	owl.owlCarousel({
		margin: 0,
		loop: true,
		autoplay: true,
		dots: false,
		nav: false,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		items: 1,
	});*/
	
    var owl = $('.owl-carousel-host');
  	owl.owlCarousel({
      margin: 0,
	  center: true,
      loop: true,
      autoplay: false,
      dots: true,
      nav: false,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
	
	
    var owl = $('.owl-carousel-maislidos');
	owl.owlCarousel({
		margin: 30,
		loop: true,
		autoplay: true,
		dots: true,
		nav: false,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 2
			},
			700: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	});
	
  	var owl = $('.owl-carousel-galeria');
  	owl.owlCarousel({
      margin: 0,
      loop: true,
      autoplay: true,
      dots: false,
      nav: false,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 4
        },
        1000: {
          items: 6
        }
      }
    });

    var owl = $('.owl-carousel-depoimetos');
    owl.owlCarousel({
      margin: 0,
      loop: true,
      autoplay: true,
      dots: true,
      nav: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        }
      }
    });
  
    var owl = $('.owl-carousel-clientes');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 2
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
    });

    $("input.telefone")
    .mask("(99) 9999-9999?9")
    .focusout(function (event) { 
      var target, phone, element;  
      target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
      phone = target.value.replace(/\D/g, '');
      element = $(target);  
      element.unmask();  
      if(phone.length > 10) {  
              element.mask("(99) 99999-999?9");  
      } else {  
          element.mask("(99) 9999-9999?9");  
      }  
    });

});