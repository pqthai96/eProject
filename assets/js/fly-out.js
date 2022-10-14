// Fly to cart

$(document).on('click', '.btn-add-to-cart', function(e){
    e.preventDefault();
    if($(this).hasClass('disable')){
        return false;
    }
    $(document).find('.btn-add-to-cart').addClass('disable');
    var parent = $(this).parents('.single_product');
    var src = parent.find('img').attr('ng-src');
    var parTop = parent.offset().top;
    var parLeft = parent.offset().left;
    var cart = $(document).find('#cart-shop');

    $('<img />',{
        class: 'img-product-fly',
        src: src
    }).appendTo('body').css({
        'top': parTop,
        'left': parseInt(parLeft) + parseInt(parent.width()) - 50
    });
    setTimeout(function(){
        $(document).find('.img-product-fly').css({
            'top': cart.offset().top,
            'left': cart.offset().left
        });
        setTimeout(function(){
            $(document).find('.img-product-fly').remove();
            var countItem = parseInt(cart.find('#count-item').data('count')) + 1;
            cart.find('#count-item').text(countItem + 'item').data('count', countItem);
            $(document).find('.btn-add-to-cart').removeClass('disable');

        }, 1000);
    },500);
})

// Fly to wishlist

$(document).on('click', '.btn-add-to-wishlist', function(e){
    e.preventDefault();
    if($(this).hasClass('disable')){
        return false;
    }
    $(document).find('.btn-add-to-wishlist').addClass('disable');
    var parent = $(this).parents('.single_product');
    var src = parent.find('img').attr('ng-src');
    var parTop = parent.offset().top;
    var parLeft = parent.offset().left;
    var cart = $(document).find('#wishlist');

    $('<img />',{
        class: 'img-product-fly',
        src: src
    }).appendTo('body').css({
        'top': parTop,
        'left': parseInt(parLeft) + parseInt(parent.width()) - 50
    });
    setTimeout(function(){
        $(document).find('.img-product-fly').css({
            'top': cart.offset().top,
            'left': cart.offset().left
        });
        setTimeout(function(){
            $(document).find('.img-product-fly').remove();
            var countItem = parseInt(cart.find('#count-item').data('count')) + 1;
            cart.find('#count-item').text(countItem + 'item').data('count', countItem);
            $(document).find('.btn-add-to-wishlist').removeClass('disable');

        }, 1000);
    },500);
})
