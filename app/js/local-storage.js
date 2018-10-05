function initSetDynamicItem(){
    $('.open-item').on('click', function(e){
        localStorage['openedItemID'] = $(this).parents('.item').attr('id') ? $(this).parents('.item').attr('id') : $(this).attr('id');
    })
}
initSetDynamicItem();
