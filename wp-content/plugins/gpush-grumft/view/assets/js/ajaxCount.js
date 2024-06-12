jQuery(document).ready(function($){
    var userAgentApp = navigator.userAgent;    
    $('a.contentpushrecirculacaoarticle').click(function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        var pushIdArticle =  document.getElementById('pushIdArticle').innerHTML;  
        localStorage.setItem("pushIdArticleClick", pushIdArticle);
        var anchor = document.createElement('a');
        anchor.href = url;
        if(!userAgentApp.match(/GMFT-App-24978314/)){
           anchor.target="_blank";
        }
        anchor.click();
    });

    if(localStorage.getItem("pushIdArticleClick")){

        var pushIdArticleClick = localStorage.getItem("pushIdArticleClick");
        $.ajax({
            url: ajax_object.ajax_url,
            data: {
                action: 'increment_counter',
                push_id: pushIdArticleClick
            },
            type: 'POST',
        })
        .done(function(){ 
            console.log('Save click Push Recirculation'); 
            localStorage.removeItem('pushIdArticleClick');
        })
        .fail(function(xhr){
            console.log(xhr);
        })
    }
});


