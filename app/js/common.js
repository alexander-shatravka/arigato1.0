function initPreloader() {
	$(window).load(function() {
		setTimeout(function() {
			$('#preloader').fadeOut('slow', function() {});
		}, 0);
	});
} 

initPreloader();

$(document).ready(function(){
    initSlick();
    initBurgerMenu();
    //initSlickAutoplay();
    initFancybox();
    //initHeaderSlideLine();
    initPlayVideo();
    initPriceSlider();
    //initPagination();
    //initItemOpener();
    //initFixedHeader();
    //initAnchorsScrolling();
    initSelectFilters();
    initActiveOption();
    initItemCounter();
    initCartOpener();
    initJcf();
    initEnableFormOrder();
    initFormButtonToggler();
    initEnablePickers();
    destinationPicker();
    changeCursorPosition();
   // registerValidationRules();
    //initCustomScrollBar();    
});

function initJcf(){
    jcf.replaceAll();
};

function initBurgerMenu(){
    $('.menu-opener-block').on("click",function(){
        $(this).toggleClass('opened');
        $('#nav').toggleClass('open');
    });
    
    $(document).on('click', function (e) {
        var container = $("#nav");
        if (container.has(e.target).length === 0 && e.target.className !== 'menu-opener-block opened' && e.target.className !== 'menu-burger' && e.target.className !== 'b-line'){
            $('.menu-opener-block').removeClass('opened');
            $('#nav').removeClass('open');
        }
    });
}

function initAnchorsScrolling() {
    $(".main-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
            //showMenu.classList.remove('menu-icon-close');
    });
}

function initFixedHeader(){
    var headerMain = $('#wrapper>header');
    headerMain.removeClass("fixed");
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            headerMain.addClass("fixed");
        }
        if ($(this).scrollTop() > $(window).height()-150) {
            headerMain.addClass('slideDown');
        }
         else {
            headerMain.removeClass("fixed");
            headerMain.removeClass("slideDown");
        };
    });
}

function initPlayVideo() {
	$('.play-button').click(function(){
		$('.live-wrapper').toggleClass('play');
	})
}

function initHeaderSlideLine() {
    var j$ = jQuery,
        $nav = j$(".main-nav"),
        $slideLine = j$("#slide-line"),
        $currentItem = j$(".main-nav>.active");

    j$(function(){

        // Underline transition
        j$($nav).find("a").hover(
            // Hover on
            function(){
                $slideLine.css({
                    "width": j$(this).width(),
                    "left": j$(this).position().left
                });
            },
            // Hover out
            function(){
            	$slideLine.width(0);
            }
        );
    });
}

function initSlickAutoplay(){
    setTimeout(function() {
        initSlick();
    }, 3000);
    
}

function initSlick(){
	$('.slick-slider').slick({
        autoplay: true,
        vertical: false,
		autoplaySpeed: 6000,
		speed	: 1000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		pauseOnFocus: false,
		pauseOnHover: false,
        pauseOnClick: false,
        prevArrow: $('.slick-prev'),
		nextArrow: $('.slick-next'),
	});
}


function initItemInfoOnStart(){
    //alert($('.slick-current').attr('id'));
    $('.slick-slider').on('afterChange', function(){
        var id = $('.slick-current').attr('id');
        var infoHTML = '<li class="col">'+ window.catalog[id].title +'</li>\n'; 
        var itemInfo = window.catalog[id].info;
    
        var counter = 0;
        for (var key in itemInfo) { 
            var arrInfo = itemInfo[key].split(' ');
            var resultOfsecond = arrInfo[1] ? arrInfo[1]:'';
            infoHTML += '<li class="col"><b>'+ arrInfo[0] +'</b>'+ resultOfsecond +'<span>'+ key +'</span></li>\n'
            counter++;
            //alert(arrInfo);
        }

        $('.item-info').html(infoHTML);
    })
    

    //temprorary code
    function setFirst(){ 
        var id = 0;
        var infoHTML = '<li class="col">'+ window.catalog[id].title +'</li>\n'; 
        var itemInfo = window.catalog[id].info;
    
        var counter = 0;
        for (var key in itemInfo) { 
            var arrInfo = itemInfo[key].split(' ');
            var resultOfsecond = arrInfo[1] ? arrInfo[1]:'';
            infoHTML += '<li class="col"><b>'+ arrInfo[0] +'</b>'+ resultOfsecond +'<span>'+ key +'</span></li>\n'
            counter++;
            //alert(arrInfo);
        }  
        $('.item-info').html(infoHTML);
    }
    setTimeout(setFirst(),100);
}
initItemInfoOnStart();

// lightbox init
function initFancybox() {
	jQuery('a.lightbox-opener, [data-fancybox]').fancybox({
		parentEl: 'body',
		margin: [50, 0],
		smallBtn: false,
		closeClickOutside: true,
		touch: true,
		speed: 400,
		overlayOpacity: 0.2,
	});
	jQuery('a.lightbox-opener, [data-fancybox]').on('click', function() {
		jQuery(this).closest('html').toggleClass('fancybox-enabled');
	})
}

function initItemOpener(){
	$('.open-item').on('click', function(){
		$(this).parent().toggleClass('opened-item');
		$('body').toggleClass('scroll-off');
	})
}

function initPriceSlider() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 2000,
        values: [ 75, 2000 ],
        slide: function( event, ui ) {
        $( "#amount" ).val( "грн " + ui.values[ 0 ] + " - грн " + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "грн " + $( "#slider-range" ).slider( "values", 0 ) +
        " - грн " + $( "#slider-range" ).slider( "values", 1 ) );
};


function template(data) {
    var html = '';
    $.each(data, function(index, item){
        html += item;
    });
    return html;
}

function initPagination() {
    var items = document.getElementsByClassName('item');
	$('.pagination').pagination({
        pageSize: 9,
        dataSource: window.arrOfItemsHTML,
        prevText: 'пред.',
        nextText: 'след.',

        callback: function(data, pagination) {
            // template method of yourself
            var html = template(data);
            $('.items-container').html(html);
        },
    })
    return items;
}

function initSelectFilters(){
    $('.category').on('click','a', function(){
        $(this).addClass('active');
    })

    $('.features').on('click','a', function(){
        $(this).toggleClass('active');
    })
}

function initActiveOption(){
    $('.dropdown').on('click','a', function(){
        $('.dropdown a').removeClass('active');
        $(this).addClass('active');
        $('.select-block .selected').html($(this).html());
    })
}
var priceOfSet = Number($('.current-price b').text());
function initItemCounter(){
    $('.counter').on('click', 'span', function(e){
        var quantity = $(this).parents('.counter').find('.quantity');
        var quantityValue = Number($(this).parents('.counter').find('.quantity').text());
        if($(this).hasClass('plus')){
            quantity.text(quantityValue + 1);
            quantityValue ++;
            initUpdateItemMenu($(this));
            setInputToolsQuantity();
        }
        if($(this).hasClass('minus') && ($(this).hasClass('disabled')) === false){
            quantity.text(quantityValue - 1);
            quantityValue --;
            initUpdateItemMenu($(this));
            setInputToolsQuantity();
        }
        if(quantityValue === 1){
            $(this).parents('.counter').find('.minus').addClass('disabled');
        }
        else{
            $(this).parents('.counter').find('.minus').removeClass('disabled');
        }
        
        function initUpdateItemMenu(parent) {
            //$('.size').text((sizeOfSet * quantityValue) + ' шт');
            //$('.weight').text((weightOfSet * quantityValue) + ' гр'); 
           parent.parents('.item-menu').find('.current-price b').text((priceOfSet * quantityValue)); 
        }

        function setInputToolsQuantity() {
            var toolsQuantity = $('.tools-quantity .quantity').text();
            $('#tools-quantity').val(toolsQuantity); 
        }
    })
}


function initCartOpener(){
    $('.cart-icon').on('click', function(e){
        e.preventDefault();
        $('.cart-container').toggleClass('open');
    })

    $('.icon-close').on('click', function(){
        $('.cart-container').removeClass('open');
    })

    $(document).mouseup(function (e) {
        var container = $(".cart-container");
        if (container.has(e.target).length === 0 && e.target.className !== 'cart-container open' && e.target.className !== 'btn-cart'){
            $('.cart-container').removeClass('open');
        }
    });

    $('.btn-cart').on('click', function(e){
        $('.cart-container').toggleClass('open');
    })
}

function initEnableFormOrder(){
    $('.btn-open-form').on('click', function(){
        $('.form-block').addClass('enable');
        initOrderButton();
        setInputCartHTML();
    })
    $('.form-closer').on('click', function(){
        $('.form-block').removeClass('enable');
        initOrderButton();
    })
}

function setInputCartHTML(){
    var cartText = $('.cart-items-container').text();
    var cartItems = cartText.split('грн').join('грн <br>');
    var cartOutput = cartItems + '<br>' + $('.order-block .total-row').text();
    $('#cart-content').val(cartOutput);
}


function initEnablePickers(){
    $('input[name="pickup-destination"]').on('click', function(e){
        //alert($(this).attr('id'));
        e.preventDefault();
        $('.destination-picker').addClass('show');
    })
    /*$('input[name="date"]').on('click', function(e){
        e.preventDefault();
        $('.date-picker').addClass('show');
    })
    $('input[name="time"]').on('click', function(e){
        e.preventDefault();
        $('.time-picker').addClass('show');
    })*/

    $('.picker-closer').on('click', function(e){
        $(this).parents('.picker').removeClass('show');
        e.stopPropagation();
    })
}

function initFormButtonToggler(){
    $('.button-row').on('click', '.button', function(){
        $(this).parents('.button-row').find('.button').removeClass('active');
        $(this).addClass('active');
        initFormActiveFields($(this));
    })
}

function initFormActiveFields(button){
    var buttonID = button.attr('id');
    //alert(buttonID);
    if(buttonID === 'delivery'){
        $("#pickup-address").removeClass('active');
        $("#delivery-address").addClass('active');
    }
    
    if(buttonID === 'self-pickup'){ 
        $("#delivery-address").removeClass('active');
        $("#pickup-address").addClass('active');
    }

    if(buttonID === 'pick-date'){
        $("#datepicker").addClass('active');
    }

    if(buttonID === 'delivery-now'){
        $("#datepicker").removeClass('active');
    }
    
}

function initOrderButton(){
    var formOpenerButtonHTML = '<a class="button btn-red btn-open-form">Заказать</a>';
    var orderButtonHTML = '<a class="button btn-red" id="submit" type="submit" form="order" value="подтвердить заказ">подтвердить заказ</a>';

    if($('.form-block').hasClass('enable')){
        $('.cart-button-block').html(orderButtonHTML);
    }
    else $('.cart-button-block').html(formOpenerButtonHTML);
    initEnableFormOrder();
    ajaxSendForm();
}

function destinationPicker(){
    $('.destination-picker').on('click', 'li', function(){
        $('.destination-picker a').removeClass('active');
        $(this).find('a').addClass('active');
        $(this).parents('div').find('.btn-red').removeClass('disabled');
    })

    $('.destination-picker').on('click', '.btn-red', function(){
        if($(this).hasClass('disabled') === false){
            $('input[name="pickup-destination"]').val('');
            $('input[name="pickup-destination"]').val($('.destination-picker  .active').text());
            $('input[name="address"]').val($('.destination-picker  .active').text());
            //alert($('.destination-picker li .active').text());
            $(this).parents('.picker').removeClass('show');
        }
    })
}

function datePicker(){
    $('.date-picker').on('click', 'li', function(){
        $('.date-picker a').removeClass('active');
        $(this).find('a').addClass('active');
        $(this).parents('div').find('.btn-red').removeClass('disabled');
    })

    $('.destination-picker').on('click', '.btn-red', function(){
        if($(this).hasClass('disabled') === false){
            $('input[name="pickup-destination"]').val('');
            $('input[name="pickup-destination"]').val($('.destination-picker  .active').text());
            //alert($('.destination-picker li .active').text());
            $(this).parents('.picker').removeClass('show');
        }
    })
}


function changeCursorPosition() {
	jQuery('#phone').click(function(){
		if (!jQuery(this).val()) {
			jQuery(this).val('+38')//.caretTo('+38');	
		}
	});
}

// function registerValidationRules() {
	
// 	jQuery.validator.addMethod("onlyLetter", function(value, element) {
// 		return this.optional(element) || /^[а-яА-ЯёЁіІїЇєЄґҐa-zA-Z \-, ]+$/i.test(value);
// 	});
// 	jQuery.validator.addMethod("phoneValidate", function(value, element) {
// 		return this.optional(element) || /^\+38 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/i.test(value);
// 	});
// 	jQuery.validator.addMethod("dateValidate", function(value, element) {
// 		return this.optional(element) || value.match(/^(0?[1-9]|[12][0-9]|3[0-1])[/., -](0?[1-9]|1[0-2])[/., -](19|20)?\d{2}$/);
// 	});
// }


// function initValidation() {
//     $('#order').validate({
//         rules: {
//             email: {
//                 required: true,
//                 email: true,
//             }
//         }
//     })
// }




