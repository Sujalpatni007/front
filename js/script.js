(function ($) {

	"use strict";

	//  TESTIMONIALS CAROUSEL HOOK
	$('#customers-testimonials').owlCarousel({
		loop: true,
		center: true,
		items: 3,
		margin: 0,
		autoplay: true,
		dots: true,
		autoplayTimeout: 5000,
		smartSpeed: 450,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1170: {
				items: 2
			}
		}
	});

	$('#ourClientSlider').owlCarousel({


		loop: true,
		center: true,
		items: 1,
		margin: 0,
		autoplay: true,
		dots: false,
		autoplayTimeout: 5000,
		smartSpeed: 450,
		nav: true,

	});

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($('.preloader').length) {
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($('.main-header').length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-top');
			if (windowpos >= 110) {
				siteHeader.addClass('fixed-header');
				scrollLink.addClass('open');
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.removeClass('open');
			}
		}
	}

	headerStyle();

	// dropdown menu
	var mobileWidth = 992;
	var navcollapse = $('.navigation li.dropdown');

	$(window).on('resize', function () {
		navcollapse.children('ul').hide();
	});

	navcollapse.hover(function () {
		if ($(window).innerWidth() >= mobileWidth) {
			$(this).children('ul').stop(true, false, true).slideToggle(300);
		}
	});

	//Submenu Dropdown Toggle
	if ($('.main-header .navigation li.dropdown ul').length) {
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

		//Dropdown Button
		$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
			$(this).prev('ul').slideToggle(500);
		});

		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function (e) {
			e.preventDefault();
		});
	}

	// Scroll to a Specific Div
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);

		});
	}

	// Elements Animation
	if ($('.wow').length) {
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	}

	//Contact Form Validation
	if ($('#contact-form').length) {
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}

	// Fact Counter
	function factCounter() {
		if ($('.fact-counter').length) {
			$('.fact-counter .column.animated').each(function () {

				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);

				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function () {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function () {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}

			});
		}
	}


	//LightBox / Fancybox
	if ($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect: 'fade',
			closeEffect: 'fade',
			helpers: {
				media: {}
			}
		});
	}

	//11.progressBarConfig
	function progressBarConfig() {
		var progressBar = $('.progress');
		if (progressBar.length) {
			progressBar.each(function () {
				var Self = $(this);
				Self.appear(function () {
					var progressValue = Self.data('value');

					Self.find('.progress-bar').animate({
						width: progressValue + '%'
					}, 100);

					Self.find('span.value').countTo({
						from: 0,
						to: progressValue,
						speed: 100
					});
				});
			})
		}
	}


	//three-column-carousel
	if ($('.three-column-carousel').length) {
		$('.three-column-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 2
				},
				1024: {
					items: 3
				}
			}
		});
	}

	//three-column-carousel-2
	if ($('.three-column-carousel-2').length) {
		$('.three-column-carousel-2').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: ['<span class="fas fa-arrow-left"></span>', '<span class="fas fa-arrow-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 2
				},
				1024: {
					items: 3
				}
			}
		});
	}

	//testimonial-carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			loop: true,
			center: true,
			items: 3,
			margin: 0,
			autoplay: true,
			dots: true,
			autoplayTimeout: 5000,
			smartSpeed: 450,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1170: {
					items: 3
				}
			}
		});
	}


	// testimonial-carousel-2
	if ($('.testimonial-carousel-2').length) {
		$('.testimonial-carousel-2').owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			smartSpeed: 2000,
			autoplay: true,
			navText: ['<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 1
				},
				800: {
					items: 1
				},
				1200: {
					items: 2
				}

			}
		});
	}


	//two-column-carousel
	if ($('.event-carousel').length) {
		$('.event-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			dots: false,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				600: {
					items: 3
				},
				800: {
					items: 5
				}
			}
		});
	}

	// Cousin Carousel
	if ($('.cuisines-carousel').length) {
		$('.cuisines-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: true,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 2
				},
				600: {
					items: 2
				},
				800: {
					items: 3
				}
			}
		});
	}

	//two-column-carousel
	if ($('.video-carousel').length) {
		$('.video-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			dots: false,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 1
				},
				800: {
					items: 1
				},
				1024: {
					items: 1
				}
			}
		});
	}



	//Main Slider Carousel
	if ($('.main-slider-carousel').length) {
		$('.main-slider-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			active: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1200: {
					items: 1
				}
			}
		});
	}


	// Four Item Carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: true,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 2
				},
				600: {
					items: 2
				},
				800: {
					items: 3
				},
				1024: {
					items: 4
				},
				1200: {
					items: 5
				}
			}
		});
	}


	//Custom Seclect Box
	if ($('.custom-select-box').length) {
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}

	//Search Box Toggle
	if ($('.search-toggle').length) {
		//Dropdown Button
		$('.search-toggle').on('click', function () {
			$(this).toggleClass('active');
			$(this).next('.search-box').toggleClass('now-visible');
		});
	}


	//Sortable Masonary with Filters
	function enableMasonry() {
		if ($('.sortable-masonry').length) {

			var winDow = $(window);
			// Needed variables
			var $container = $('.sortable-masonry .items-container');
			var $filter = $('.filter-btns');

			$container.isotope({
				filter: '*',
				masonry: {
					columnWidth: '.masonry-item.small-column'
				},
				animationOptions: {
					duration: 500,
					easing: 'linear'
				}
			});


			// Isotope Filter 
			$filter.find('li').on('click', function () {
				var selector = $(this).attr('data-filter');

				try {
					$container.isotope({
						filter: selector,
						animationOptions: {
							duration: 500,
							easing: 'linear',
							queue: false
						}
					});
				} catch (err) {

				}
				return false;
			});


			winDow.on('resize', function () {
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 500,
						easing: 'linear',
						queue: false
					}
				});
			});


			var filterItemA = $('.filter-btns li');

			filterItemA.on('click', function () {
				var $this = $(this);
				if (!$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}

	enableMasonry();


	/*	=========================================================================
	When document is Scrollig, do
	========================================================================== */

	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions
			progressBarConfig();
		})(jQuery);
	});



	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on('scroll', function () {
		headerStyle();
		factCounter();
	});



	/* ==========================================================================
   When document is loaded, do
   ========================================================================== */

	$(window).on('load', function () {
		handlePreloader();
		enableMasonry();
	});

	(function () {
		var options = {
			whatsapp: "+919019240587", // WhatsApp number
			call_to_action: "Message us", // Call to action
			button_color: "#FF6550",
			position: "left", // Position may be 'right' or 'left'
		};
		var proto = document.location.protocol,
			host = "getbutton.io",
			url = proto + "//static." + host;
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.async = true;
		s.src = url + '/widget-send-button/js/init.js';
		s.onload = function () {
			WhWidgetSendButton.init(host, proto, options);
		};
		var x = document.getElementsByTagName('script')[0];
		x.parentNode.insertBefore(s, x);
	})();

})(window.jQuery);

function changeRadio() {
	var checkval = $('input[name="flexRadioDefault"]:checked').val();
	if (checkval == "Event Services") {
		$('#cmpname').hide();
		$('#name').removeClass()
		$('#name').addClass("form-group col-lg-12 col-md-12 col-sm-12")
	} else {
		$('#cmpname').show();
		$('#name').removeClass()
		$('#name').addClass("form-group col-lg-6 col-md-6 col-sm-12")
	}
}

$("#ourClientSlider")
	.on("initialized.owl.carousel changed.owl.carousel", function (e) {
		if (!e.namespace) {
			return;
		}
		$("#counter").text(
			e.relatedTarget.relative(e.item.index) + 1 + "/" + e.item.count
		);
	});

$("div[id^='myModal']").each(function () {

	var currentModal = $(this);

	//click next
	currentModal.find('.btn-next').click(function () {
		currentModal.modal('hide');
		currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show');
	});

	//click prev
	currentModal.find('.btn-prev').click(function () {
		currentModal.modal('hide');
		currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show');
	});

});

// //FAQ Toggler
// $('#FAQ').on('hide.bs.collapse show.bs.collapse', '.quesans', toggleIcon);
// function toggleIcon(e) {
//     //console.log($(e.target).prev().find("i"));
//     $(e.target)
//         .prev()
//         .find("i")
//         .toggleClass('fa-minus fa-plus');
// }

// $(".panelHead span").click(function () {
// 	$(this).toggleClass("showPanelData");
//   });

// //Read more question
// function loadMoreQuestions() {
//     if (displayCount <= actualData.length) {
//         displayCount += 6;
//         displayItems = actualData.slice(displayCount - 6, displayCount);
//         displayItems.forEach(listPopulate);
//         if (displayCount >= actualData.length) {
//             $(".viewmore.more").css('display', 'none');
//             $(".viewmore.less").css('display', 'block');
//         }
//     }
// }

// function loadLessQuestions() {
//     $('#FAQ').html('');
//     if (displayCount > 6) {
//         displayCount -= 6;
//         displayItems = actualData.slice(0, displayCount);
//         displayItems.forEach(listPopulate);
//         if (displayCount <= 6) {
//             $(".viewmore.more").css('display', 'block');
//             $(".viewmore.less").css('display', 'none');
//         }
//     }
// }

function expandCollapseDescription() {
	var moredesc = document.querySelector('.moredesc');
	var readmorelink = document.getElementById('readmorelink');

	if (moredesc.style.display === 'none') {
		moredesc.style.display = 'block';
		readmorelink.textContent = 'Read Less';
	} else {
		moredesc.style.display = 'none';
		readmorelink.textContent = 'Read More';
	}

}

