var catalogParseCopy = window.catalog.slice();

for (var k = 0; k < catalogParseCopy.length; k++) {
    if (catalogParseCopy[k].discountedPrice !== catalogParseCopy[k].price){
        catalogParseCopy[k].category.push('sale');
    }
    if (catalogParseCopy[k].hasNew){
        catalogParseCopy[k].category.push('new');
    }
}

var htmlForCatalogPresentation = '';
var htmlForCatalogNew = '';

var isNew='';
var discount = 0;
var oldPrice = '';
var currentPrice = '';
var placeholder = '';

function setItemsHTMLPresentation(displayCatalog, category, container, quantity, outputHTML) {
    
    for(var i = 0; i < quantity; i++) {
        if(displayCatalog[i].category.some(function(value){return value === category})) {    

        if (displayCatalog[i].discountedPrice < window.catalog.price) {
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
        
        outputHTML += 
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
        container.innerHTML = outputHTML;
    }
}

var containerPresentation = document.querySelector('.catalog-presentation-wrapper')
setItemsHTMLPresentation(catalogParseCopy, 'presentation', containerPresentation, 6, htmlForCatalogPresentation); 

var containerPresentationNEW = document.querySelector('.catalog-new-wrapper')
setItemsHTMLPresentation(catalogParseCopy, 'new', containerPresentationNEW, 8, htmlForCatalogNew); 