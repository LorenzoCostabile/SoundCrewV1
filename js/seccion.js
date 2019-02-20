$(document).ready(function(){
    
    
  
   
    $('#btn-toggle1').on('click',function(){
        
        
        if(var1==2){
        $('.seccionToggle2').slideToggle();
        var1=0;
        }

       
        if(var1==3){
        $('.seccionToggle3').slideToggle();
        var1=0; 
        }
        
        if(var1==4){
        $('.seccionToggle4').slideToggle();
            var1=0;
        }
        $('.seccionToggle1').slideToggle();
        if (var1==1){
            var1=0;    
        }
        else 
            var1=1;
        });
    
    $('#btn-toggle2').on('click',function(){
        
        
        
     
        
        
        
        
        if(var1==1){
        $('.seccionToggle1').slideToggle();
            var1=0;
        }

        if(var1==3){
        $('.seccionToggle3').slideToggle();
        var1=0; 
        }
        
        if(var1==4){
        $('.seccionToggle4').slideToggle();
            var1=0;
        }
        $('.seccionToggle2').slideToggle();
        
        if (var1==2){
            var1=0;    
        }
        else 
            var1=2;
    });
    
    $('#btn-toggle3').on('click',function(){
        
        if(var1==2){
        $('.seccionToggle2').slideToggle();
        var1=0;
        }

       
        if(var1==1){
        $('.seccionToggle1').slideToggle();
        var1=0;
        }
        
        if(var1==4){
        $('.seccionToggle4').slideToggle();
            var1=0;
        }
        
        
        if (var1==3){
            var1=0;    
        }
        else 
            var1=3;   
        $('.seccionToggle3').slideToggle();
    });
    
    $('#btn-toggle4').on('click',function(){
        
        if(var1==2){
        $('.seccionToggle2').slideToggle();
        var1=0;
        }

       
        if(var1==3){
        $('.seccionToggle3').slideToggle();
        var1=0; 
        }
        
        
        if(var1==1){
        $('.seccionToggle1').slideToggle();
        var1=0;
        }
        
        $('.seccionToggle4').slideToggle();
                
        if (var1==4){
            var1=0;    
        }
        else 
            var1=4;
        
    });
    
     $('#btn-toggle1arriba').on('click',function(){
        
        
        if(var1==2){
        $('.seccionToggle2').slideToggle();
        var1=0;
        }

       
        if(var1==3){
        $('.seccionToggle3').slideToggle();
        var1=0; 
        }
        
        if(var1==4){
        $('.seccionToggle4').slideToggle();
            var1=0;
        }
        $('.seccionToggle1').slideToggle();
        if (var1==1){
            var1=0;    
        }
        else 
            var1=1;
        });
    var1=0;
    $('#btn-toggle2arriba').on('click',function(){
        
        
        if(var1==1){
        $('.seccionToggle1').slideToggle();
        var1=0;
        }

        if(var1==3){
        $('.seccionToggle3').slideToggle();
        var1=0; 
        }
        
        if(var1==4){
        $('.seccionToggle4').slideToggle();
            var1=0;
        }
        $('.seccionToggle2').slideToggle();
        
        if (var1==2){
            var1=0;    
        }
        else 
            var1=2;
    });
    
    $('#btn-toggle3arriba').on('click',function(){
        
        if(var1==2){
        $('.seccionToggle2').slideToggle();
        var1=0;
        }

       
        if(var1==1){
        $('.seccionToggle1').slideToggle();
        var1=0;
        }
        
        if(var1==4){
        $('.seccionToggle4').slideToggle();
            var1=0;
        }
        
        $('.seccionToggle3').slideToggle();
        if (var1==3){
            contador=0;    
        }
        else 
            var1=3;       
    });
    $('#btn-toggle4arriba').on('click',function(){
        
        if(var1==2){
        $('.seccionToggle2').slideToggle();
        var1=0;
        }

       
        if(var1==3){
        $('.seccionToggle3').slideToggle();
        var1=0; 
        }
        
        
        if(var1==1){
        $('.seccionToggle1').slideToggle();
        var1=0;
        }
        
        $('.seccionToggle4').slideToggle();
                
        if (var1==4){
            var1=0;    
        }
        else 
            var1=4;
        
    });
    
    
    
});