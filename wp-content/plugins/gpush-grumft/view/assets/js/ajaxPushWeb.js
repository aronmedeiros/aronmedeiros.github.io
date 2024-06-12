jQuery(document).ready(function($){
    var tokenWebPush = localStorage.getItem('currentTokenWeb');
    $.ajax({
        url: ajax_object.ajax_url,
        data: {
            action: 'setTokenApiPushWeb',
            currentTokenWeb: tokenWebPush
        },
        type: 'POST',
    })
});
