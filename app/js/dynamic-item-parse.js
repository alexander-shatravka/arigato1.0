var id = localStorage['openedItemID'];

var currentItemHTML = 
'<div class="item" id = "'+ id +'">\n'+	
    '<div class="item-img"><img src="'+ window.catalog[id].imgFull +'" alt=""></div>\n'+
    //'<div class="container">\n'+	
        '<div class="item-menu">\n'+
            '<div class="row">\n'+
                '<h6 class="title">'+ window.catalog[id].title +'</h6>\n'+
                '<span><b class="heading">Выход</b></span><span class="details weight">'+ window.catalog[id].weight +' гр</span>\n'+
            '</div>\n'+
            '<div class="row">\n'+
                '<p class="ingridients">'+ window.catalog[id].ingridients +'</p>\n'+
            '</div>\n'+
            '<div class="row">\n'+
                '<span><b class="heading">Количество</b></span>\n'+
                '<div class="counter"><span class="minus disabled">-</span><span class="quantity">1</span><span class="plus">+</span></div>\n'+
            '</div>\n'+
            '<div class="row">\n'+
                '<span><b class="heading">К оплате</b></span>\n'+
                '<span class="price"><span class="current-price"><b>'+ window.catalog[id].discountedPrice +'</b> грн</span></span>\n'+
            '</div>\n'+
            '<div class="row">	\n'+
                '<a href="" class="button btn-cart more-than-one-item">В корзину <i class="fi flaticon-shopping-cart"></i></a>\n'+
            '</div>\n'+
            '<a class="back-catalog" href="catalog.html">Продолжить покупки <span class="icon-tripple-arrow">›››</span></a>\n'+
        '</div>\n'+
        /*'<ul class="item-info">\n'+
            '<li class="col">150<span>грамм</span></li>\n'+
            '<li class="col">320<span>каллорий</span></li>\n'+
            '<li class="col">200<span>гр. рыбы</span></li>\n'+
            '<li class="col">50%<span>50%</span></li>\n'+
            '<li class="col">150<span>грн</span></li>\n'+
        '</ul>\n'+*/
    //'</div>\n'+
'</div>'

var infoHTML = '';
var itemInfo = window.catalog[id].info;

var counter = 0;
for (var key in itemInfo) {
     infoHTML += '<li class="col">'+ itemInfo[key] +'<span>'+ key +'</span></li>\n'
     counter++;
}

for (var key in itemInfo) {
    infoHTML += '<li class="col">'+ itemInfo[key] +'<span>'+ key +'</span></li>\n'
    counter++;
}

$('.item-section').html(currentItemHTML);
//$('.item-info').html(infoHTML);