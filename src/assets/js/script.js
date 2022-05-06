'use strict';
document.addEventListener('DOMContentLoaded', () => {
    $('.menu-toggle-cont').click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('menu-toggle-cont_active')) { 
            $(this).addClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideDown(300); 
            $('body').addClass('hidd'); 
        } else { 
            $(this).removeClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideUp(300);
            $('body').removeClass('hidd');
        } 
    });
  
    $('.phones-button').click(function (e) {
        $(this).toggleClass('active');
        $('.header-top__phones_block').slideToggle();
        $('.header-top__schedule_block').hide();
        $('.schedule-button').removeClass('active');
    });

    $('.schedule-button').click(function (e) {
        $(this).toggleClass('active');
        $('.header-top__schedule_block').slideToggle();
        $('.header-top__phones_block').hide();
        $('.phones-button').removeClass('active');
    });    
    
    document.querySelector('body').addEventListener('click', e =>{
        if (e.target.closest('.search-button')) {
            document.querySelector('.search-block').classList.add('show');
        }
        if (!e.target.closest('.search-block') && !e.target.closest('.search-button')) {
            document.querySelector('.search-block').classList.remove('show');
        }
        if ( document.querySelector('.select-block-link')) {
            // e.preventDefault();
            const collectionLinks = document.querySelectorAll('.select-block-block__link');
            if (e.target.closest('.select-block-link')) {
                if(document.querySelector('.block-scroll')) {
                    const scroollInModal= new PerfectScrollbar('.block-scroll', {
                      wheelSpeed: 1.75,
                      wheelPropagation: false,
                    });
                }
                e.preventDefault();
                e.target.classList.toggle('select-block-link-active');
                document.getElementById('select-block-block').classList.toggle('select-block-block-show');
            } 
            if (e.target.closest('.select-block-block__link')) {
                e.preventDefault();
                collectionLinks.forEach(element => element.classList.remove('select-block-block__link-active'));
                document.getElementById('select-block-block').classList.remove('select-block-block-show');
                e.target.classList.add('select-block-block__link-active');
                document.querySelector('.select-block-link').classList.remove('select-block-link-active')
                document.querySelector('.select-block-link').textContent = e.target.textContent;
            }     
            if (!e.target.closest('.select-block')) {
                document.getElementById('select-block-block').classList.remove('select-block-block-show');
                document.querySelector('.select-block-link').classList.remove('select-block-link-active')
            }       
        }         

    });

    const mainSlider = new Swiper(".main-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: false,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },
    });

    const clinicSlider = new Swiper(".clinic-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: false,
        spaceBetween: 10,
        speed: 800,
        navigation: {
            nextEl: ".clinic-next",
            prevEl: ".clinic-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    const specialistsSlider = new Swiper(".specialists-slider", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: false,
        spaceBetween: 30,
        speed: 800,
        navigation: {
            nextEl: ".specialists-next",
            prevEl: ".specialists-prev",
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            }
        }
    });

    const specialistsSliderProgram = new Swiper(".specialists-slider-program", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: false,
        spaceBetween: 30,
        speed: 800,
        navigation: {
            nextEl: ".specialists-program-next",
            prevEl: ".specialists-program-prev",
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            }
        }
    });

    const licensesSlider = new Swiper(".licenses-slider", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: false,
        spaceBetween: 30,
        speed: 800,
        navigation: {
            nextEl: ".licenses-next",
            prevEl: ".licenses-prev",
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            }
        }
    });

    $('[data-role=toggle-block]').each(function() {
		var $block = $(this);
		$block.on('click.toggle', '[data-role=toggle-btn]', function() {
			var $btn = $(this);
			var $data = $block.find('[data-role=toggle-data]');

			// toggle $btn
			$btn.toggleClass('shown');
			// show/hide $data
			$data.slideToggle(200);
		});
	});

    const hospitalRightSlider = new Swiper(".hospital-right-slider", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        speed: 800,
        navigation: {
            nextEl: ".hospital-right-next",
            prevEl: ".hospital-right-prev",
        },
    });
    
    const hospitalLeftSlider = new Swiper(".hospital-left-slider", {
        allowTouchMove: true,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        speed: 800,
        navigation: {
            nextEl: ".hospital-left-next",
            prevEl: ".hospital-left-prev",
        },
    });
    
    const clinicContentSlider = new Swiper(".clinic-content-slider", {
        allowTouchMove: true,
        slidesPerView: '2',
        loop: false,
        spaceBetween: 30,
        speed: 800,
        navigation: {
            nextEl: ".clinic-content-next",
            prevEl: ".clinic-content-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            }
        }
    });
   
    $("#phone").mask("+9 (999) 999 - 99 - 99");
});