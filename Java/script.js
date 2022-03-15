$(document).ready(function(){

    $('#calcular').click(function(){
        var peso = parseFloat($('#peso').val());       
        var altura = parseFloat($('#altura').val());
        if(peso && altura !=null){
        var imc = peso / (altura*altura);
        $('#calculado').html("Tu IMC es:"+Math.round(imc));

        if(imc <= 18.4){
            $('#clasificacion').css({
                'color':'yellow'
                
            });
            $('.clasificacion').html("<p> Te encuentras bajo peso</p>");
        
        }
        else if(imc <= 18.5 || imc <=24.9){
            $('#clasificacion').css({
                'color':'green'
                
            });
            $('.clasificacion').html("<p>Te encuentras en tu peso normal</p>");
        }
        else if(imc <=25.0 || imc<=29.9){
            $('#clasificacion').css({
                'color':'tomato'
                
            });
            $('.clasificacion').html("<p>Te encuentras en sobrepeso</p>");
        }
         else if(imc>=30.0){
            $('#clasificacion').css({
                'color':'red'
                
            });
            $('.clasificacion').html("<p>Te encuentras obeso</p>");
        }
    } else{
        $('#calculado').css({
            'color':'red'
            
        });
        $('#calculado').html("<p>Por favor ingresar valores para ser calculados.</p>");
    }
    });
});
