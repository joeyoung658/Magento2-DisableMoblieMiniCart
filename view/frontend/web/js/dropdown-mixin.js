define([
    'jquery'
], function($){
    return function(){
        $.widget('mage.dropdownDialog', $.mage.dropdownDialog, {
            open:function(){
                var $cartLink = $('div.minicart-wrapper a.showcart');

                if (!$('.action.nav-toggle').is(":visible") || !$cartLink.length){
                    return this._super();
                } else {
                    window.location.href = $cartLink.attr("href");
                }
            }
        });

        return $.mage.dropdownDialog;
    };
});