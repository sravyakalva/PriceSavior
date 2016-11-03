/**
 * Created by sravyakalva on 11/1/16.
 */
$(function (){
    var avaliableItems=[];
    $.getJSON('https://api.shopstyle.com/api/v2/products?pid=uid3824-35982732-83&offset=0&limit=50',function(ssResults) {
        for (i=0;i< ssResults.products.length;i++)
        {
            avaliableItems.push(ssResults.products[i].unbrandedName);
            avaliableItems.push(ssResults.products[i].name);
            avaliableItems.push(ssResults.products[i].brandedName);
        }
    });
    $("#search").autocomplete({
        source:avaliableItems
    });
    console.log(avaliableItems);
});

function BrandSearch(){
    var search=document.getElementById('search').value;
    console.log(search);
    $.getJSON('https://api.shopstyle.com/api/v2/products?pid=uid3824-35982732-83&offset=0&limit=50',function(ssResults) {
        for (i=0;i< ssResults.products.length;i++)
        {
            console.log(ssResults.products[i].unbrandedName);
            //console.log((ssResults.products[i].image.sizes.Medium.url));
            if((ssResults.products[i].name)==search || (ssResults.products[i].brandedName)==search ||(ssResults.products[i].unbrandedName)==search)
            {
                var src=ssResults.products[i].image.sizes.Medium.url;
                var img=$('<img />',{
                    id:search,
                    src:src
                });
                img.appendTo($('#img'));
                //$('<br/>').appendTo(img);
                $('<p>').appendTo($('#img')).html(ssResults.products[i].description);
                $('<p>').appendTo($('#img')).html(ssResults.products[i].priceLabel);

            }

        }

    });
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
}