$(document).ready(function(){
    
    cadVariables = location.search.substring(1,location.search.length);
    arrVariables = cadVariables.split("&");
    for (i=0; i<arrVariables.length; i++) {
        arrVariableActual = arrVariables[i].split("=");
  if (isNaN(parseFloat(arrVariableActual[1])))
    eval(arrVariableActual[0]+"='"+unescape(arrVariableActual[1])+"';");
  else
    eval(arrVariableActual[0]+"="+arrVariableActual[1]+";");
    }
     var contador2=0;
    
    
    if(contador2==0){
        if(var2==2){
        $('.seccionToggle2').slideToggle();
        var1=2;
        }

       
        if(var2==3){
        $('.seccionToggle3').slideToggle();
        var1=3;
        }
        
        if(var2==4){
        $('.seccionToggle4').slideToggle();
           var1=4;
        }
        
        if (var2==1){
            $('.seccionToggle1').slideToggle();
            var1=1;
        }
   var2=0;
   contador2=1;
       
   }
    
    $('#btn-toggle1').on('click',function(){
        
        
        
        if(var2==2){
        $('.seccionToggle2').slideToggle();
        }

       
        if(var2==3){
        $('.seccionToggle3').slideToggle();
        }
        
        if(var2==4){
        $('.seccionToggle4').slideToggle();
        }
        
        if (var2==1){
            $('.seccionToggle1').slideToggle();
        }
    })
    
     $('#btn-toggle2').on('click',function(){
        
        
        
        if(var2==2){
        $('.seccionToggle2').slideToggle();
        }

       
        if(var2==3){
        $('.seccionToggle3').slideToggle();
        }
        
        if(var2==4){
        $('.seccionToggle4').slideToggle();
        }
        
        if (var2==1){
            $('.seccionToggle1').slideToggle();
        }
    })
    
     $('#btn-toggle3').on('click',function(){
        
        
        
        if(var2==2){
        $('.seccionToggle2').slideToggle();
        }

       
        if(var2==3){
        $('.seccionToggle3').slideToggle();
        }
        
        if(var2==4){
        $('.seccionToggle4').slideToggle();
        }
        
        if (var2==1){
            $('.seccionToggle1').slideToggle();
        }
    })
    
     $('#btn-toggle4').on('click',function(){
        
        
        
        if(var2==2){
        $('.seccionToggle2').slideToggle();
        }

       
        if(var2==3){
        $('.seccionToggle3').slideToggle();
        }
        
        if(var2==4){
        $('.seccionToggle4').slideToggle();
        }
        
        if (var2==1){
            $('.seccionToggle1').slideToggle();
        }
    })
                         
          
    

});