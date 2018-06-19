/** prueba reportes */
$('#imprimir').on('click', function () {

  var evalCreada = $('#codEval').text();
  var foto =  getBase64Image(document.getElementById("imgEmpr"));
    //console.log(base64)
// console.log(foto);
  $.ajax({
    url: "/imprimirEva/" + evalCreada,
    method: 'get'
  }).then(function (data) {
    var fecha = data.detalles[0]['fechaCreacion'];
    
    var fin = Object.keys(data.totalEval).map(function (key) {
      var item = data.totalEval[key];

      return Object.keys(item).map(function (key) {
        return item[key]
      });
    });

    var empresa = Object.keys(data.empresa).map(function (key) {
      var item = data.empresa[key];

      return Object.keys(item).map(function (key) {
        return item[key]
      });
    });
   // console.log(empresa);
    var arr = Object.keys(data.detalles).map(function (key) {
      //return  data.detalles[key] ;
      var item = data.detalles[key];
    
      //item[0]['fechaCreacion'];
      delete item['codigo'];
      delete item['codPregunta'];
      delete item['empr_id'];
      delete item['fechaCreacion']
      return Object.keys(item).map(function (key) {
        return item[key]
      });
    });

    var title = [{
      text: 'Ciclo', bold: true
    }, { text: 'Estandar', bold: true }, { text: 'Item del Estandar', bold: true }, {
      text: 'Puntaje Esperado',
      bold: true
    }, { text: 'Puntaje Obtenido', bold: true }, { text: 'Respuesta', bold: true }];

    var resume = [" ", " ", {
      text: 'Total:',
      bold: true,
      alignment: 'right',

    }, fin[0][0], fin[0][1], ""];



    arr.splice(0, 0, title);
    arr.push(resume);
  
   // console.log(arr);
    var docDefinition = {
      info: {
        title: 'Evaluación Inicial',
        author: 'QUAM',
        subject: 'presentación del detalle de la evaluación inicial',
        keywords: 'QUAM, evaluación, inicial, sgsst, calidad',
      },

      header: 
      
        function (currentPage, pageCount) {
          
          return [
            {
              columns: [
               // firma del software
            {
              text:[ 'Documento generado por: ', { text: 'www.quam.com.co V1.0', bold: true}],
              alignment: 'left',
              margin: [5, 5, 7, 0],
              fontSize: 9,
            },
              {
              text: 'Pag ' + currentPage.toString() + ' de ' + pageCount,
              alignment: 'right',
              margin: [0, 5, 7, 0],
              fontSize: 9,
            }]
          },
            {
              columns: [

                
                {
                  width: 50,
                  image: foto,
                  margin: [70,0,0,0]

                },
                {
                  margin: [0,0,50,0], 
                  alignment: 'center',
                    text: [
                      {text: 'Evaluación Inicial - '+fecha+ '\n' , bold: true},
                        empresa[0][1] + '\n NIT: ' + empresa[0][2] ]
                }

             ]
            },
         
           
              

      
          ]
        },


      content: [

      //tabla
        {
        layout: 'lightHorizontalLines', // optional
        fontSize: 10,
        table: {
          body:
            arr

        }
      },
// firmas
      {
        bold: true,
        margin: [0,50,0,0],
        columns: [
          {
            width: '*',
            padding: '1px',
            text: '__________________________________ \n  Gerente '
          },
          {
            width: '*',
            text: '__________________________________ \n  Lider de SGSST '

          }
        ]
      }


      ],
      //margenes de la pagina
      pageMargins: [20,100,20,40]




    };

    pdfMake.createPdf(docDefinition).open();


  
    

    
  });



});
function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL();
  return dataURL;
}