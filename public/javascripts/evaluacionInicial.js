
$(document).ready(function(){
    
    $('[data-toggle="myToolTip"]').tooltip();   
    
    });

$(function(){
  

    //crear evaluacion y guardar la respuesta de recursos
    $('#btn_Guardar_Recursos').click(function(e){
       e.preventDefault();
       $('#btn_Guardar_Recursos').attr('href','#tab_gestionInt');
       $('#btn_Guardar_Recursos').css('display','none');
       $('#liGesInt').addClass('active');
       $('#liRecursos').removeClass('active');
       var estadoEval= $('#evalCreada').val();
       var cantidad=$('#cantidad1').val(); 
       
       var inicio=1;
      
       if (estadoEval =="true"){
        crearRespuesta(inicio, cantidad);
     }
     else {
        crearEmprEvalRespu(inicio, cantidad);            
     }

    });
    //guardar la respuesta de gestion integral
    $('#btn-guardarGestInt').click(function(e){
        e.preventDefault();
        var estadoEval= $('#evalCreada').val();
         
        $('#btn-guardarGestInt').attr('href','#tab_gestion');
        $('#liGesCam').addClass('active');
        $('#liPlanear').removeClass('active');
        $('#btn-guardarGestInt').css('display','none');
        var cantidad=$('#cantidad2').val();
    
        var inicio=12;
        var fin= parseInt(inicio) + parseInt(cantidad-1);
        //alert('ini '+inicio+' fin '+fin+' estado '+estadoEval);
        if (estadoEval =="true"){
           crearRespuesta(inicio,fin);
        }
        else {
         crearEmprEvalRespu(inicio, fin);            
        }
 
     });
     // guardar la respuesta de gestion de la salud
     $('#btn_Guardar_GestSalud').click(function(e){
        e.preventDefault();
        var estadoEval= $('#evalCreada').val();
         
        $('#btn_Guardar_GestSalud').attr('href','#tab_gestionPel');
        $('#btn_Guardar_GestSalud').css('display','none');
       
        $('#li-peligros').addClass('active');
        $('#li-salud').removeClass('active');
        var cantidad=$('#cantidad3').val();
       
        var inicio=23;
        var fin= parseInt(inicio) + parseInt(cantidad-1);
        if (estadoEval =="true"){
           crearRespuesta(inicio, fin);
        }
        else {
          crearEmprEvalRespu(inicio, fin);            
        }
 
     });
     // guardar la respuesta de gestion de peligros
     $('#btn_GestionPeligros').click(function(e){
        e.preventDefault();
        var estadoEval= $('#evalCreada').val();
         
        $('#btn_GestionPeligros').attr('href','#tab_gestionAme');
        $('#btn_GestionPeligros').css('display','none');
        $('#li-amenazas').addClass('active');
        $('#li-peligros').removeClass('active');
        var cantidad=$('#cantidad4').val();
        var inicio=41;
        var fin= parseInt(inicio) + parseInt(cantidad-1);
       
        if (estadoEval =="true"){
           crearRespuesta(inicio, fin);
        }
        else {
           crearEmprEvalRespu(inicio, fin);            
        }
 
     });
        // guardar la respuesta de gestion de amenazas
        $('#btn_GestAmenazas').click(function(e){
            e.preventDefault();
            var estadoEval= $('#evalCreada').val();
             
            $('#btn_GestAmenazas').attr('href','#tab_verificar');
            $('#liVeri').addClass('active');
            $('#liGesCam').removeClass('active');
            $('#btn_GestAmenazas').css('display','none');
            var cantidad=$('#cantidad5').val();
            var inicio=51;
            var fin= parseInt(inicio) + parseInt(cantidad-1);
            
            if (estadoEval =="true"){
               crearRespuesta(inicio,fin);
            }
            else {
               crearEmprEvalRespu(inicio, fin);            
            }
     
         });
             // guardar la respuesta de verificar
        $('#btn_Verificar').click(function(e){
            e.preventDefault();
            var estadoEval= $('#evalCreada').val();
             
            $('#btn_Verificar').attr('href','#tab_actuar');
            $('#liActuar').addClass('active');
            $('#liVeri').removeClass('active');
            $('#btn_Verificar').css('display','none');
          
            var cantidad=$('#cantidad6').val();
            var inicio=53;
            var fin= parseInt(inicio) + parseInt(cantidad-1);
            if (estadoEval =="true"){
               crearRespuesta(inicio, fin);
            }
            else {
               crearEmprEvalRespu(inicio, fin);            
            }
     
         });
                 // guardar la respuesta de verificar
        $('#btn_finalizar').click(function(e){
            //e.preventDefault();
            var estadoEval= $('#evalCreada').val();
            var emp_id=$('#empr_cod').val(); 
            $('#btn_finalizar').attr('href','https://sgquam.herokuapp.com/evaluacionesIniciales/'+emp_id);
            var cantidad=$('#cantidad7').val();
            
            var inicio=57;
            var fin= parseInt(inicio) + parseInt(cantidad-1);
           
            if (estadoEval =="true"){
               crearRespuesta(inicio, fin);
            }
            else {
               crearEmprEvalRespu(inicio, fin);            
            }
            generarPlan();
             
           $('#btn_finalizar').css('display','none');
         });



         $('#verPlan').click(function(e){
         
            var elemento= $(this);
             var codEvalEmp= elemento.parent().parent().find('#codEval').text();
            $('#verPlan').attr('href','https://sgquam.herokuapp.com/verPlan/'+codEvalEmp);
     
         });

        //  $('#verEstadisticas').click(function(e){
            
        //        var elemento= $(this);
        //         var codEvalEmp= elemento.parent().parent().find('#codEval').text();
        //        $('#verEstadisticas').attr('href','https://sgquam.herokuapp.com/estadisticas/'+codEvalEmp);
        
        //     });
 

});
//crear evaluacion y guardar la respuesta de recursos
function crearEmprEvalRespu(ini, cant){
    var userCod=$('#user_cod').val();
    var emprCod=$('#empr_cod').val();
    var evalCreada=$('#evalCreada').val();
    
   
    
   //crear la evaluacion para la empresa
      $.ajax({
          url: 'https://sgquam.herokuapp.com/crearEval',
          method : 'post',
          data: {userCod: userCod, emprCod: emprCod },
          success: function(json){
              $('#idEmpEval').val(json.idEmpEval);
              $('#evalCreada').val(json.evalCreada);
              estadoEval= $('#evalCreada').val();
              if(estadoEval=='true'){
                 
                         //insertar la respuesta de recursos
                   for(i=ini; i<=cant; i++){
                         
                           var codEvalEmp=$('#idEmpEval').val();  
                           var codPregunta=$('#codigo'+i).val();
                           var estado=$('#est'+i).val();
                           var puntaje=0;     
                         if (estado=='T' || estado=='J'){
                             puntaje=$('#puntaje'+i).val();
                         } 
                        $.ajax({
                              url: 'https://sgquam.herokuapp.com/crearRespuestas',
                              method: 'post',
                              data: {codEvalEmp, codPregunta, estado, puntaje },
                              success: function(respCreada){
                                
                                  
                                 
                              }
                        });
                         
                   };      
             }
          }
      });
};

function crearRespuesta(ini,cant){
    for(i=ini; i<=cant; i++){
        
          var codEvalEmp=$('#idEmpEval').val();  
          var codPregunta=$('#codigo'+i).val();
          var estado=$('#est'+i).val();
          var puntaje=0;     
        if (estado=='T' || estado=='J'){
            puntaje=$('#puntaje'+i).val();
        } 
       $.ajax({
             url: 'https://sgquam.herokuapp.com/crearRespuestas',
             method: 'post',
             data: {codEvalEmp, codPregunta, estado, puntaje },
             success: function(respCreada){
               
                 
                
             }
       });
        
  };
}

function generarPlan(){
  
    var codEvalEmp= $('#idEmpEval').val();;

    $.ajax({
        url: 'https://sgquam.herokuapp.com/generarPlan',
        method : 'post',
        data: {codEvalEmp: codEvalEmp },
        success: function(){
           console.log('bien');
        }
    });
}