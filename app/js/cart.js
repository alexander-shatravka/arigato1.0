$(document).ready(function(){
    initCartItemsFromStorage();
    initEmptyCart();
    initShowNumberOfItems();
    initRemovingItems();
    initSetDynamicItem();
    initTotalPrice();
    //initSameItemCounter();
})

function initEmptyCart(){
    var cartContainer = $('.cart-items-container');
    var emptyHTML = '<div class="empty-heading"><span><b>В корзине пока нет товаров</b></span><a href="catalog.html" class="button btn-red">Перейти к покупкам</a></div>'
    if(cartContainer.find('.item').length === 0){
        cartContainer.html(emptyHTML);  
        //alert(emptyHTML);
        $('.cart-icon').addClass('empty');
        $('.order-block').removeClass('enable');
        initCartStorage();
    }
    else {
        $('.empty-heading').remove();
        initCartStorage();
    }
}

function initShowNumberOfItems(){
    if($('.cart-items-container .item').length > 0){
        $('.cart-icon').removeClass('empty');
        $('.items-in-bag').html($('.cart-items-container .item').length);  
        $('.order-block').addClass('enable');
    }
}

var itemsIds = [];
$('.btn-cart').on('click', function(e){
    e.preventDefault();
    var itemId = $(this).parents('.item').attr('id');
    var quantityOfItems = Number($(this).parents('.item').find('.quantity').text());

    if($(e.target).hasClass('more-than-one-item')){     
        for(var i = 0; i < quantityOfItems; i++){
            itemsIds.push(Number(itemId));
            initCartItemsHTML();
            setCartItemsHTML();
            initEmptyCart();
            initCartStorage();
            //initItemCounter();
            initRemovingItems();
            initSetDynamicItem();
            initTotalPrice();
            initShowNumberOfItems();
        }
    }
    else {
        itemsIds.push(Number(itemId));
        initCartItemsHTML();
        setCartItemsHTML();
        initEmptyCart();
        initCartStorage();
        //initItemCounter();
        initRemovingItems();
        initSetDynamicItem();
        initTotalPrice();
        initShowNumberOfItems();
    }
})
 
var cartItemsHTML = localStorage['cart-storage'] ? localStorage['cart-storage'] : '';
function initCartItemsHTML(){
    var lastItem = itemsIds[itemsIds.length-1];
    cartItemsHTML += 
        '<div class="item" id="' + window.catalog[lastItem].id + '">' +
            '<a href = "item.html" class="img-small open-item"><img src="'+ window.catalog[lastItem].thumbnail +'" alt=""></a>\n' +
            '<div class="row">\n'+
                '<a href = "item.html" class="open-item"><h6 class="title">'+ window.catalog[lastItem].title +'</h6></a><a class="icon-remove"></a>\n' +
                '<span class="details size">'+ window.catalog[lastItem].size +' шт</span><span class="details weight">'+ window.catalog[lastItem].weight +' гр</span>\n'+
            '</div>\n'+
            '<div class="row flex-row">\n'+
                //'<div class="counter"><span class="plus">+</span><span class="quantity-cart">1</span><span class="minus disabled">-</span></div>\n'+
                '<span class="price"><span class="current-price-cart"><b>'+ window.catalog[lastItem].discountedPrice +'</b> грн</span></span>\n'+
            '</div>\n'+
        '</div>';           
}

function setCartItemsHTML(){
    $('.cart-items-container').html(cartItemsHTML);
}

function initCartStorage(){
    if($('.cart-items-container').find('.item')){
        localStorage['cart-storage'] = $('.cart-items-container').html();    
    }
}

function initCartItemsFromStorage(){
    $('.cart-items-container').html(localStorage['cart-storage']);
}

function initRemovingItems() {
    $('.icon-remove').on('click', function(){
        for (var i = 0; i< itemsIds.length; i++){
            if(Number($(this).parents('.item').attr('id'))===itemsIds[i]){
                itemsIds.splice(itemsIds.indexOf(itemsIds.i), 1);
            }
        }

        $(this).parents('.item').remove();
        
        initEmptyCart();
        initTotalPrice();
        initCartStorage();
        initShowNumberOfItems();
        cartItemsHTML = localStorage['cart-storage'] ? localStorage['cart-storage'] : '';
    })   
}

function initTotalPrice(){
    var allPricesCollection = Array.from(document.querySelectorAll('.current-price-cart b'));
    var allPrices = allPricesCollection.map(function(item){return Number(item.innerHTML)});
    var totalPrice = (allPrices.reduce(function(sum, current) {
        return sum + current;
      }, 0)).toFixed(2);

    $('.total-price b').html(totalPrice);
}

function initSameItemCounter(){
    var arrOfItems = $('.cart-items-container .item').toArray();
    arrOfItems.sort(function(a,b){
        return a.id - b.id;
    })
    console.log(arrOfItems);
    for(var i = 0; i < arrOfItems.length; i ++){
        if(arrOfItems[i] == arrOfItems[i+1]){
            arrOfItems.splice(arrOfItems[i],0);
        }            
    }
}






