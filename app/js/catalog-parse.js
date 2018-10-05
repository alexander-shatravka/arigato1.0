var catalogCopy = window.catalog.slice();

for (var k = 0; k < catalogCopy.length; k++) {
    if (catalogCopy[k].discountedPrice !== catalogCopy[k].price){
        catalogCopy[k].category.push('sale');
    }
    if (catalogCopy[k].hasNew){
        catalogCopy[k].category.push('new');
    }
}

var ItemsHTML = "";
var isNew='';
var discount = 0;
var oldPrice = '';
var currentPrice = '';
var placeholder = '';
var hiddenContainer = document.querySelector('.hidden-container');

var cheapExpensive = catalogCopy.slice(); 
var expensiveCheap = catalogCopy.slice(); 
var popular = catalogCopy.slice();
var checkedFilters = [];
var activeFeatures = [];    
var allCategories = Array.from($(".category a"));
var allFeatures = Array.from($(".features a"));


function pushAllCategories(){
    for(var i = 1; i < allCategories.length; i++){
        checkedFilters.push(allCategories[i].text.toLowerCase());// for starts with 1  cause all exept 1st filter - 'all categories'
    }
} 
pushAllCategories();

function pushAllFeatures(){
    for(var i = 1; i < allFeatures.length; i++){
        activeFeatures.push(allFeatures[i].text.toLowerCase());
    }
} 
pushAllFeatures();

$(".category").on('click','a', function(e){
    checkedFilters.length = 0;
    if(e.target.id === 'all-categories'){
        for(var i = 1; i < allCategories.length; i++){
            checkedFilters.push(allCategories[i].text.toLowerCase());
        }
    }
    else {
        checkedFilters.push($(this).text().toLowerCase());
    }
    $('.category a').removeClass('active');

    checkedFilters.sort(function(a, b){
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    })

    /*for (var i = 0; i < checkedFilters.length; i++){
        if(checkedFilters[i] === checkedFilters[i+1]){
            checkedFilters.splice( checkedFilters.indexOf(checkedFilters[i]), 1 );
        }
    }*/
    setItemsHTML(popular);
})

$('.features').on('click', 'a', function(e){
    if(e.target.id === 'all-features'){
        $('.features a').removeClass('active');
        activeFeatures.push($(this).text());
    }
    else{
        if($('#all-features').hasClass('active')){ //before class active removed
            activeFeatures.length = 0;
        }
        $('#all-features').removeClass('active');
        activeFeatures.push($(this).text());
    }
})

function setSortCatalog() {
    popular.sort(function(a, b){
        return a.popularity - b.popularity;
    }) 
    cheapExpensive.sort(function(a, b){
        return a.discountedPrice - b.discountedPrice;
    })
    expensiveCheap.sort(function(a, b){
        return b.discountedPrice - a.discountedPrice;
    }) 
}
setSortCatalog(); 


function setItemsHTML(displayCatalog) {
            ItemsHTML = '';
            window.arrOfItemsHTML = [];
            
    for (var i = 0; i < displayCatalog.length; i++) {
        
        if(displayCatalog[i].category.some(function(val){if (checkedFilters.includes(val) || activeFeatures.includes(val)){return true}})) {
            
            if (displayCatalog[i].discountedPrice < displayCatalog.price) {
                discount = '- ' + Math.ceil((1 - (displayCatalog[i].discountedPrice / displayCatalog[i].price)) * 100) + '%';
                oldPrice = '' + (displayCatalog[i].price).toFixed(2);
            }
            else {
                discount = '';
                oldPrice = '';
            }
    
            if (displayCatalog[i].hasNew) {
                isNew = 'New'
            }
            else {
                isNew = ''      
            }
    
            if (displayCatalog[i].discountedPrice) {
                currentPrice = (displayCatalog[i].discountedPrice).toFixed(2);
            }
            else {
                currentPrice = ''
            }
    
            if (displayCatalog[i].placeholder) {
                placeholder = (displayCatalog[i].placeholder);
            }
            else {
                placeholder = ''
            }
    
            ItemsHTML += 
            '<div id="'+ displayCatalog[i].id  +'" class="item">\n'+
                '<a class="open-item" href="item.html">\n' +
                    '<div class="item-img">\n'+'<img src='+ displayCatalog[i].thumbnail +' alt=""></div>\n' +
                    '<a href = "item.html" class="descr-content open-item">\n'+
                        '<h6 class="title">' + displayCatalog[i].title + '</h6>\n' +
                        '<div class="details">\n' +
                            '<p><b>'+ displayCatalog[i].size +' шт</b></p>\n'+
                            '<p><b>'+ displayCatalog[i].weight +' гр</b></p>\n'+
                            '<p><b>'+ displayCatalog[i].ingredients +'</b></p>\n'+
                        '</div>\n' +
                        '<div class="item-price"><span class="current-price">' + currentPrice + '<span class="grn">грн.</span></span>\n' +
                            '<span class="old-price">' + oldPrice + '</span>\n' +
                            '<span class="discount">' + discount + '</span>\n' +
                        '</div>\n' +
                        //'<span class="new">' + isNew + '</span>\n' +
                        /*'<span class="placeholder">' + placeholder + '</span>\n' +*/
                        '<a href="" class="button btn-cart"><i class="fi flaticon-shopping-cart"></i></a>\n'+
                    '</a>\n'+
                '</a>\n' +
            '</div>'
        }
        document.querySelector('.items-container').innerHTML = ItemsHTML;
        var collectionOfItems = document.getElementsByClassName('item');
        var arrOfItems = Array.from(collectionOfItems);
        window.arrOfItemsHTML = Array.from(arrOfItems).map(function(i){return i.outerHTML});
        /*for(var k = 0; k < arrOfItems.length; k++){
            window.arrOfItemsHTML.push(arrOfItems[i].outerHTML)
        } */   
    }   
}

setItemsHTML(popular);

$('#sort-by').on('click','a', function (){
    setItemsHTML(expensiveCheap);
    switch($(this).text().toLocaleLowerCase()){
        case "дешевле":
            setItemsHTML(cheapExpensive);
            initSetDynamicItem();
            //initPagination();
            break;
        case "дороже":
            setItemsHTML(expensiveCheap);
            initSetDynamicItem();
            //initPagination();
            break;
        case "популярные":
            setItemsHTML(popular);
            initSetDynamicItem();
            //initPagination();
            break;        
    }
})

