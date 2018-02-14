$(document).ready(function () {

    var url = $('#url').val();


    $('.empresa').on('click', function () {
        var elemento = $(this);
        var id = elemento.parent().parent().find('#codigo').text();

        var nombre = elemento.parent().parent().find('#nombre').text();
        $("#empresa_id").val(id);
        $("#empresa_nom").val(nombre);
    });


    $('body').on('click', '.list-group .list-group-item', function () {
        $(this).addClass('active').siblings().removeClass('active');

    });

    $('#input-search').on('keyup', function () {
        var rex = new RegExp($(this).val(), 'i');
        $('.searchable-container .items').hide();
        $('.searchable-container .items').filter(function () {
            return rex.test($(this).text());
        }).show();
    });


    $("#evalini").click(function () {
        var emp_id = $("#empresa_id").val();
        if (emp_id != '') {

            $('#evalini').attr('href', url + '/evaluacionInicial/' + emp_id);
        } else {
            alert("Debe seleccionar una empresa");
        }
    });
    $("#verEval").click(function () {
        var emp_id = $("#empresa_id").val();

        if (emp_id != '') {

            $('#verEval').attr('href', url + '/evaluacionesIniciales/' + emp_id);
        } else {
            alert("Debe seleccionar una empresa");
        }
    });
    $("#verEval1").click(function () {
        var emp_id = $("#empresa_id").val();

        if (emp_id != '') {

            $('#verEval1').attr('href', url + '/evaluacionesIniciales/' + emp_id);
        } else {
            alert("Debe seleccionar una empresa");
        }
    });

    $("#hacerMatriz").click(function () {
        var emp_id = $("#empresa_id").val();

        if (emp_id != '') {

            $('#hacerMatriz').attr('href', url + '/matriz/' + emp_id);
        } else {
            alert("Debe seleccionar una empresa");
        }
    });

    $("#verMatriz").click(function () {
        var emp_id = $("#empresa_id").val();

        if (emp_id != '') {

            $('#verMatriz').attr('href', url + '/detalleMatriz/' + emp_id);
        } else {
            alert("Debe seleccionar una empresa");
        }
    });

    $("#evalinii").click(function () {
        var emp_id = $("#empresa_id").val();

        if (emp_id != '') {

            $('#evalinii').attr('href', url + '/evaluacionInicial/' + emp_id);
        } else {
            alert("Debe seleccionar una empresa");
        }
    });
    $('#radioBtnC a').on('click', function () {
        var cod = $(this).data('parent');
        var sel = $(this).data('title');
        var tog = $(this).data('toggle');
        $('#est' + cod).prop('value', sel);
        if (sel == 'NC') {
            $('#justifica' + cod).removeClass('hidden');
            $('#est' + cod).prop('value', 'J');
        }
        if (sel == 'T') {
            $('#justifica' + cod).addClass('hidden');
            $('#est' + cod).prop('value', 'T');
        }
        $('a[data-toggle="' + tog + '"]').not('[data-title="' + sel + '"]').removeClass('active').addClass('notActive');
        $('a[data-toggle="' + tog + '"][data-title="' + sel + '"]').removeClass('notActive').addClass('active');

    });

    $('#radioBtnJ a').on('click', function () {
        var cod = $(this).data('parent');
        var sel = $(this).data('title');
        var tog = $(this).data('toggle');

        $('#est' + cod).prop('value', sel);

        $('a[data-toggle="' + tog + '"]').not('[data-title="' + sel + '"]').removeClass('active').addClass('notActive');
        $('a[data-toggle="' + tog + '"][data-title="' + sel + '"]').removeClass('notActive').addClass('active');
    });

    /* prueba reportes */
    $('#imprimir').on('click', function () {
        console.log('imprimir ' + url);

        $('.table.table-striped.custab tbody > tr').each(function () {
            console.log($(this).text());
        });
        var docDefinition = {
            content: [
                {
                    layout: 'lightHorizontalLines', // optional
                    table: {

                        headerRows: 1,
                        widths: ['*', 'auto', 100, '*'],

                        body: [
                            ['First', 'Second', 'Third', 'The last one'],
                            ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
                            [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4']
                        ]
                    }
                }
            ]
        };

        pdfMake.createPdf(docDefinition).open();


    });


















});


