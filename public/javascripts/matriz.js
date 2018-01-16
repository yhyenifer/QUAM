$(function () {
    
                //lista de epps
                $('.list-arrows button').click(function () {
                    var $button = $(this), actives = '';
                    if ($button.hasClass('move-left')) {
                        actives = $('.list-right1 ul li.active');
                        actives.clone().appendTo('.list-left1 ul');
                        actives.remove();
                    } else if ($button.hasClass('move-right')) {
                        actives = $('.list-left1  li.active');
                        actives.clone().appendTo('.list-right1 ul');
                        actives.remove();
                    }
                });
                $('.dual-list1 .selector').click(function () {
                    var $checkBox = $(this);
                    if (!$checkBox.hasClass('selected')) {
                        $checkBox.addClass('selected').closest('.well').find('ul li:not(.active)').addClass('active');
                        $checkBox.children('i').removeClass('fa-square-o').addClass('fa-check-square-o ');
                    } else {
                        $checkBox.removeClass('selected').closest('.well').find('ul li.active').removeClass('active');
                        $checkBox.children('i').removeClass('fa-check-square-o ').addClass('fa-square-o');
                    }
                });
                $('[name="SearchDualList"]').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9') return;
                    if (code == '27') $(this).val(null);
                    var $rows = $(this).closest('.dual-list1').find('.list-group li');
                    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
                    $rows.show().filter(function () {
                        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                        return !~text.indexOf(val);
                    }).hide();
                });


                
                //lista de admin
                $('.list-arrows button').click(function () {
                    var $button = $(this), actives = '';
                    if ($button.hasClass('move-left')) {
                        actives = $('.list-right2 ul li.active');
                        actives.clone().appendTo('.list-left2 ul');
                        actives.remove();
                    } else if ($button.hasClass('move-right')) {
                        actives = $('.list-left2  li.active');
                        actives.clone().appendTo('.list-right2 ul');
                        actives.remove();
                    }
                });
                $('.dual-list2 .selector').click(function () {
                    var $checkBox = $(this);
                    if (!$checkBox.hasClass('selected')) {
                        $checkBox.addClass('selected').closest('.well').find('ul li:not(.active)').addClass('active');
                        $checkBox.children('i').removeClass('fa-square-o').addClass('fa-check-square-o ');
                    } else {
                        $checkBox.removeClass('selected').closest('.well').find('ul li.active').removeClass('active');
                        $checkBox.children('i').removeClass('fa-check-square-o ').addClass('fa-square-o');
                    }
                });
                $('[name="SearchDualList"]').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9') return;
                    if (code == '27') $(this).val(null);
                    var $rows = $(this).closest('.dual-list2').find('.list-group li');
                    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
                    $rows.show().filter(function () {
                        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                        return !~text.indexOf(val);
                    }).hide();
                });


                
                //lista de ing
                $('.list-arrows button').click(function () {
                    var $button = $(this), actives = '';
                    if ($button.hasClass('move-left')) {
                        actives = $('.list-right3 ul li.active');
                        actives.clone().appendTo('.list-left3 ul');
                        actives.remove();
                    } else if ($button.hasClass('move-right')) {
                        actives = $('.list-left3  li.active');
                        actives.clone().appendTo('.list-right3 ul');
                        actives.remove();
                    }
                });
                $('.dual-list3 .selector').click(function () {
                    var $checkBox = $(this);
                    if (!$checkBox.hasClass('selected')) {
                        $checkBox.addClass('selected').closest('.well').find('ul li:not(.active)').addClass('active');
                        $checkBox.children('i').removeClass('fa-square-o').addClass('fa-check-square-o ');
                    } else {
                        $checkBox.removeClass('selected').closest('.well').find('ul li.active').removeClass('active');
                        $checkBox.children('i').removeClass('fa-check-square-o ').addClass('fa-square-o');
                    }
                });
                $('[name="SearchDualList"]').keyup(function (e) {
                    var code = e.keyCode || e.which;
                    if (code == '9') return;
                    if (code == '27') $(this).val(null);
                    var $rows = $(this).closest('.dual-list3').find('.list-group li');
                    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
                    $rows.show().filter(function () {
                        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                        return !~text.indexOf(val);
                    }).hide();
                });
    
            });

            var codEmpr=0;
$(document).ready(function () {
    
   
  
           //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);
    
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
    
   
    $('#chkeli').change(function(){
        var checkeado = $(this)['context']['checked'];
        if(checkeado) {
           $('#Eloptions').removeClass('hidden');
        } else {
            $('#Eloptions').addClass('hidden');
        }
    });
    $('#chsust').change(function(){
        var checkeado = $(this)['context']['checked'];
        if(checkeado) {
           $('#Suoptions').removeClass('hidden');
        } else {
            $('#Suoptions').addClass('hidden');
        }
    });
    $('#chctrling').change(function(){
        var checkeado = $(this)['context']['checked'];
        if(checkeado) {
           $('#CIoptions').removeClass('hidden');
        } else {
            $('#CIoptions').addClass('hidden');
        }
    });
    $('#chctrladm').change(function(){
        var checkeado = $(this)['context']['checked'];
        if(checkeado) {
           $('#CAoptions').removeClass('hidden');
        } else {
            $('#CAoptions').addClass('hidden');
        }
    });
    $('#chequi').change(function(){
        var checkeado = $(this)['context']['checked'];
        if(checkeado) {
           $('#Equioptions').removeClass('hidden');
        } else {
            $('#Equioptions').addClass('hidden');
        }
    });

    $('#rutinaria a').on('click', function(){
        var sel = $(this).data('title');
        var tog = $(this).data('toggle');
      
        $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
        $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
        
    $('#valRutinaria').val(sel);
    }); 
    
    reqLegal

$('#reqLegal a').on('click', function(){
    var sel = $(this).data('title');
    var tog = $(this).data('toggle');

   
    $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
    $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
    $('#valreqLegal').val(sel);
    
});
   


var cargar=cargarProcesos();

//cargar el proceso que se selecciono para continuar
setTimeout(function() {
    if (cargar){
        var pro=sessionStorage.getItem("proceso");
    
        $('#proceso').val(pro);
    }
}, 1000);


 

});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}
var peligros={
    'nombre' : ['Seleccione...'],
    'codigo' : [0],
    'peorConse': [],
    'posiefectos': []
};
var medInge={
    'codigo': [],
    'nombre': []
}
var medAdmini={
    'codigo': [],
    'nombre': []
}
var medEpps={
    'codigo': [],
    'nombre': []
}
var procesos={
    'codigo': [0],
    'nombre': ['Seleccione...'],
    'descripcion': [0]
}

function cargarProcesos() {
    console.log('procesos');
    var url= $('#url').val();
    codEmpr= $('#codEmpresa').val();
    //console.log(url);
    //console.log(codEmpr);
    $.ajax({
        url: url+'/procesos',
        method : 'post',
        data: {codEmp: codEmpr },
        success: function(proce){
            for (var i=0; i<proce.length; i++ ){
                procesos['nombre'][i+1]=proce[i].nombre;
                procesos['codigo'][i+1]=proce[i].codigo;
                procesos['descripcion'][i+1]=proce[i].descripcion;
            }
            $('#proceso').empty();
            for (var i=0; i<procesos['nombre'].length; i++) {
               $('#proceso').append('<option value="'+procesos['codigo'][i]+'">'+procesos['nombre'][i]+'</option>');
              }
             // $('#tableProcesos').empty();
            for (var i=1; i<procesos['nombre'].length; i++) {
                $('#tableProcesos').append('<tr> <td  class="hidden">'+procesos['codigo'][i]+'</td> <td >'+procesos['nombre'][i]+'</td> <td>'+procesos['descripcion'][i]+'</td>  <td class="text-center"><a class="btn btn-info btn-xs" onclick="cargarEditProceso('+procesos['codigo'][i]+')" href="#"><span class="glyphicon fa-edit fa"></span> Editar</a><a class="btn btn-danger btn-xs" onclick="deshabilitarProceso('+procesos['codigo'][i]+')" href="#"><span class="glyphicon fa-close fa"></span> Deshabilitar</a></td> </tr>');
               }
        }
    });
    
    return true;
}


function cargarPeligro(id) {
    $('#peorConse').val('');
    $('#posiblesEfectos').val('');
    var url= $('#url').val();
   // console.log(url);
    $.ajax({
        url: url+'/cargarPel',
        method : 'post',
        data: {codigoTpPeligro: id },
        success: function(json){
           
             for (var i=0; i<json.peligro.length; i++) {
                peligros['nombre'][i+1]=json.peligro[i].nombre; 
                peligros['codigo'][i+1]=json.peligro[i].codigo;
                peligros['peorConse'][i+1]=json.peligro[i].peorConse;
                peligros['posiefectos'][i+1]=json.peligro[i].posiblesEfectos;
                
             }
             $('#peligro').empty();
              for (var i=0; i<peligros['nombre'].length; i++) {
                 $('#peligro').append('<option value="'+peligros['codigo'][i]+'">'+peligros['nombre'][i]+'</option>');
                }
                //controles de ing
               if (json.medIng.length!=0){
                $('#ctrIng').removeClass('hidden');
                $('#texto1').html("<span>Seleccione las medidas de intervención de una lista y las pasa a la lista del frente</span>")
                
                console.log(json.medIng.length);
                 for(var i=0; i<json.medIng.length; i++){
                    // console.log(json.medIng[i].nombre);
                    medInge['nombre'][i]=json.medIng[i].nombre;
                    medInge['codigo'][i]=json.medIng[i].codigo;
        
                   }
                    $('#controlesIng').empty();
                   for (var i=0; i<medInge['nombre'].length; i++) {
                       $('#controlesIng').append(' <li class="list-group-item" id="'+medInge['codigo'][i]+'" >'+medInge['nombre'][i]+'</li>');
                       if(i==medInge['nombre'].length-1){
                        $('#controlesIng').append(' <li class="list-group-item" ><input placeholder="Digite Otro" style="color: black; background-color: #c2c2c7;"></li>');
                        
                       } 
                    }
                }else{
                    $('#ctrIng').addClass('hidden');
                    $('#texto1').html("<span>Este peligro no presenta controles de ingeniería</span>");                

                }           
                     //controles de administrativos
                     if (json.medAdmin.length!=0){
                        $('#ctrAdm').removeClass('hidden');
                        $('#texto2').html("<span>Seleccione las medidas de intervención de una lista y las pasa a la lista del frente</span>")
                        
                        console.log(json.medAdmin.length);
                         for(var i=0; i<json.medAdmin.length; i++){
                            // console.log(json.medIng[i].nombre);
                            medAdmini['nombre'][i]=json.medAdmin[i].nombre;
                            medAdmini['codigo'][i]=json.medAdmin[i].codigo;
                
                           }
                            $('#controlesAdmin').empty();
                           for (var i=0; i<medAdmini['nombre'].length; i++) {
                               $('#controlesAdmin').append(' <li class="list-group-item" id="'+medAdmini['codigo'][i]+'" >'+medAdmini['nombre'][i]+'</li>');
                               if(i==medAdmini['nombre'].length-1){
                                $('#controlesAdmin').append(' <li class="list-group-item" ><input placeholder="Digite Otro" style="color: black; background-color: #c2c2c7;"></li>');
                                
                               }  
                            }
                        }else{
                            $('#controlesAdmin').addClass('hidden');
                            $('#texto2').html("<span>Este peligro no presenta controles Administrativos</span>");                
        
                        }  
                   //controles de epp
                   if (json.medEpp.length!=0){
                    $('#ctrEpp').removeClass('hidden');
                    $('#texto3').html("<span>Seleccione las medidas de intervención de una lista y las pasa a la lista del frente</span>")
                    
                    console.log(json.medEpp.length);
                     for(var i=0; i<json.medEpp.length; i++){
                        // console.log(json.medIng[i].nombre);
                        medEpps['nombre'][i]=json.medEpp[i].nombre;
                        medEpps['codigo'][i]=json.medEpp[i].codigo;
            
                       }
                        $('#controlesEpp').empty();
                       for (var i=0; i<medEpps['nombre'].length; i++) {
                           $('#controlesEpp').append(' <li class="list-group-item" id="'+medEpps['codigo'][i]+'" >'+medEpps['nombre'][i]+'</li>');
                           if(i==medEpps['nombre'].length-1){
                            $('#controlesEpp').append(' <li class="list-group-item" ><input placeholder="Digite Otro" style="color: black; background-color: #c2c2c7;"></li>');
                            
                           } 
                        }
                    }else{
                        $('#ctrEpp').addClass('hidden');
                        $('#texto3').html("<span>Este peligro no presenta controles de EPP</span>");                
    
                    }          
             }
     
           
    });

    
}

function cargarDatosPeligro(id) {
   var codigo=parseInt(id);
   $('#peorConse').val('');
   $('#posiblesEfectos').val('');
   // console.log('datos '+id)
   
    $('#peorConse').val(peligros['peorConse'][peligros['codigo'].indexOf(codigo)]);
    $('#posiblesEfectos').val(peligros['posiefectos'][peligros['codigo'].indexOf(codigo)]);  
}

var deficiencia=0;
var exposicion=0;
var consecuencia=0;
var probabilidad=0;
function datoDeficiencia(defi) {
    console.log('defi');
    deficiencia=defi;
    console.log('def '+deficiencia);
    console.log('expo '+exposicion);
   
    calcularProbabilidad(deficiencia,exposicion);
    
}
function datoExposicion(exposi) {
    console.log('expos');
    exposicion=exposi;
    console.log('def '+deficiencia);
    console.log('expo '+exposicion);
    
    calcularProbabilidad(deficiencia,exposicion);
    
}

function datoConsecuencia(conse) {
    console.log('expos');
    consecuencia=parseInt(conse);
    console.log(consecuencia);
    calcularRiesgo(consecuencia,probabilidad);
}

function calcularProbabilidad(deficiencia, exposicion) {
    probabilidad=deficiencia*exposicion;
    if (probabilidad==0){
        $("#nivProbabilidad").val(exposicion);
        if(exposicion==0){
            $("#nivProbabilidad").val('');
        }
        probabilidad=exposicion;
    }else{
        $("#nivProbabilidad").val(probabilidad);
    }
    interpretarProbabilidad(probabilidad);
    calcularRiesgo(consecuencia,probabilidad);
    
}

function calcularRiesgo(conse, probabi) {
    console.log('calcularRiesgo');
    console.log(conse);
    console.log(probabi);
    
    var riesgo=conse*probabi;
    console.log(riesgo);
    if(riesgo==0){
     $('#nivRiesgo').val('');
    }else{
        $('#nivRiesgo').val(riesgo);
    }
    if (conse>0){
    interpretarRiesgo(riesgo);
    }
}

function interpretarProbabilidad(probabilidad) {
 console.log('interpretar pro');
 var nivelProbabilidad= parseInt(probabilidad);
 console.log(nivelProbabilidad);
 
    if((nivelProbabilidad>=24) && (nivelProbabilidad<=40)){
        $("#interpreProbabilidad").val('Muy Alto');
    }
    if((nivelProbabilidad>=10) && (nivelProbabilidad<=20)){
        $("#interpreProbabilidad").val('Alto');
    }
    if((nivelProbabilidad>=6) && (nivelProbabilidad<=8)){
        $("#interpreProbabilidad").val('Medio');
    }
    if((nivelProbabilidad>=2) && (nivelProbabilidad<=4)){
        $("#interpreProbabilidad").val('Bajo');
    }
    if(nivelProbabilidad==0){
        $("#interpreProbabilidad").val('');
        
    }
}

function interpretarRiesgo(valorRiesgo) {
    console.log('interpretar riesgo');    
    var nivelRiesgo=parseInt(valorRiesgo);
    console.log(nivelRiesgo);
    if((nivelRiesgo>=600) && (nivelRiesgo<=4000)){
        $("#interpreRiesgo").val('I');
        $("#interpreRiesgo").css('background-color','#f77373');
        
    }
    if((nivelRiesgo>=150) && (nivelRiesgo<=500)){
        $("#interpreRiesgo").val('II');
        $("#interpreRiesgo").css('background-color','#f7f77c');
        
    }
    if((nivelRiesgo>=40) && (nivelRiesgo<=120)){
        $("#interpreRiesgo").val('III');
        $("#interpreRiesgo").css('background-color','#6cc36c');
        
    }
    if( (nivelRiesgo<=20)&& (nivelRiesgo>0)){
        $("#interpreRiesgo").val('IV');
        $("#interpreRiesgo").css('background-color','#6cc36c');
        
    }

    aceptabilidad();
    
}

function aceptabilidad(){
    var aceptabilidad=  $("#interpreRiesgo").val();
    console.log('aceptabilidad');
    
   console.log(aceptabilidad);

   if(aceptabilidad=='I'){
    $("#aceptabilidad").val('No Aceptable.');
   }
   if(aceptabilidad=='II'){
    $("#aceptabilidad").val('No Aceptable o Aceptable con Control Específico.');
   }
   if(aceptabilidad=='III'){
    $("#aceptabilidad").val('Aceptable.');
   }
   if(aceptabilidad=='III'){
    $("#aceptabilidad").val('Aceptable.');
   }
}

//guardar y continuar
function refresh()
{   
    var proceso= $('#proceso').val();
    //guardamos en el almacenamiento del navegador
    sessionStorage.setItem("proceso", proceso);
    location.reload(true);
   
}

function addProceso() {
    console.log('guardar proceso');
    var newProcesoNombre;
    var newProcesoDesc;
    var url= $('#url').val();
    
    newProcesoNombre= $('#nombreProceso').val();
    newProcesoDesc= $('#descProceso').val();
    console.log(newProcesoNombre+' '+newProcesoDesc);
    $.ajax({
        url: url+'/guardarProceso',
        method : 'post',
        data: {newProcesoNombre, newProcesoDesc },
        success: function(respuesta){
           if (respuesta==true){
               cargarProcesos();
                $('#tableProcesos').empty();
                $('#nombreProceso').val('');
                $('#descProceso').val('');
               $('#procesoModal').modal('hide');

           }
        }
    });

  
}
var codProceso= null;
function cargarEditProceso(idProceso, nombre)
 {

    console.log('cargar proceso '+idProceso);
     codProceso=idProceso;
    
    
     var index = procesos['codigo'].indexOf(codProceso);
    // console.log(index);
     $('#nombreProceso').val(procesos['nombre'][index]);
     $('#descProceso').val(procesos['descripcion'][index]);
     $('#guardarProceso').addClass('hidden');
     $('#editarProceso').removeClass('hidden');
     
}


function modificarProceso() {
   console.log('editar proceso');
    var url= $('#url').val();
     var editProcesoNombre;
     var editProcesoDesc;
     editProcesoNombre= $('#nombreProceso').val();
     editProcesoDesc= $('#descProceso').val();
    
     console.log(codProceso+' '+editProcesoNombre+' '+editProcesoDesc);
     $.ajax({
        url: url+'/modificarProceso',
        method : 'post',
        data: {codProceso,editProcesoNombre, editProcesoDesc },
        success: function(respuesta){
           if (respuesta==true){
               cargarProcesos();
                $('#tableProcesos').empty();
                $('#nombreProceso').val('');
                $('#descProceso').val('');
                $('#guardarProceso').removeClass('hidden');
                $('#editarProceso').addClass('hidden');
               //$('#procesoModal').modal('hide');

           }
        }
    });
}

function deshabilitarProceso(idProceso) {
    codProceso=idProceso;
    console.log('deshabilitar proceso '+ codProceso);
    var url= $('#url').val();
    $.ajax({
        url: url+'/deshabilitarProceso',
        method : 'post',
        data: {codProceso },
        success: function(respuesta){
           if (respuesta==true){
             procesos={
                'codigo': [0],
                'nombre': ['Seleccione...'],
                'descripcion': [0]
            }
               cargarProcesos();
                $('#tableProcesos').empty();
                $('#nombreProceso').val('');
                $('#descProceso').val('');
                //$('#procesoModal').modal('hide');

           }
        }
    });
    
}

function addItemMatriz() {
    //seccion 1
    var idProceso = $('#proceso').val();
    var actividad = $('#actividad').val();
    var tarea = $('#tarea').val();
    var zona = $('#zona').val();
    var rutinaria = $('#valRutinaria').val();
    var tipoPeligro = $('#tppeligro').val();
    var peligro = $('#peligro').val();
    var peor = $('#peorConse').val();
    var efectos = $('#posiblesEfectos').val();
    //seccion 2
    var fuente = $('#fuente').val();
    var medio = $('#medio').val();
    var individuo = $('#individuo').val();
    //seccion 3
    var deficiencia = $('#deficiencia').val();
    var exposicion = $('#exposicion').val();
    var probabilidad = $('#nivProbabilidad').val();
    var consecuencia = $('#consecuencia').val();
    var expuestos = $('#numExpuestos').val();
    var riesgo = $('#nivRiesgo').val();
    var interProba = $('#interpreProbabilidad').val();
    var interRiesgo = $('#interpreRiesgo').val();
    var aceptable = $('#aceptabilidad').val();
    var legal = $('#valreqLegal').val();
    //seccion 4
    var eliminacion = $('#valEliminacion').val();
    var sustitucion = $('#valSustitucion').val();

    console.log(idProceso);
    console.log(tarea);
    console.log(rutinaria);
    console.log(tipoPeligro);
    console.log(zona);
    console.log(peligro);
    console.log(peor);
    console.log(efectos);
    console.log(fuente);
    console.log(medio);
    console.log(actividad);
    console.log(individuo);
    console.log(deficiencia);
    console.log(exposicion);
    console.log(probabilidad);
    console.log(consecuencia);
    console.log(expuestos);
    console.log(riesgo);
    console.log(interProba);
    console.log(interRiesgo);
    console.log(aceptable);
    console.log(legal);
    console.log(eliminacion);
    console.log(sustitucion);
    
}