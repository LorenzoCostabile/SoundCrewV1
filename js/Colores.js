$(document).ready(function(){
    window.setInterval(function(){
     $('.logotipo,.map').addClass('first');
    $('.logotipo,.map').removeClass('fourth');
         
    },20000)
    
    setTimeout("window.setInterval(function(){$('.logotipo,.map').addClass('second');$('.logotipo,.map').removeClass('first');},2000);",5000);
    
    
    setTimeout("window.setInterval(function(){$('.logotipo,.map').addClass('third');$('.logotipo,.map').removeClass('second');},20000);",10000);
    
    setTimeout("window.setInterval(function(){$('.logotipo,.map').addClass('fourth');$('.logotipo,.map').removeClass('third');},20000);",15000);
    
        
});