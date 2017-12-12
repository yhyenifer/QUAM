
var mysql = require('mysql');
var dateFormat = require('dateformat');
module.exports ={
    evaluacionIni : function(req, res, next){
        var emp_id = req.params.emp_id;
        var config = require('.././database/config');
        
        var db = mysql.createConnection(config);
        
        db.connect();
        var empresa = null;
        var pregunPlan1 = null;
        var pregunPlan2 = null;
        var pregunGi1 = null;
        var pregunGi2 = null;
        var pregunGi3 = null;
        var pregunVeri=null;
        var pregunAct =null;
     
        var user = null;
        db.query('SELECT * FROM empresa WHERE codigo = ? ',emp_id,  function(err, rows, fields){
            if (err) throw err;
            empresa=rows;
            user=req.user;
                db.query('SELECT * FROM Preg_eval_ini WHERE categoria = ? and subcategoria= ?',['1','1'],  function(err, rows, fields){
                    pregunPlan1=rows;
                db.query('SELECT * FROM Preg_eval_ini WHERE categoria = ? and subcategoria= ?',['1','2'],  function(err, rows, fields){
                    pregunPlan2=rows;
                db.query('SELECT * FROM Preg_eval_ini WHERE categoria = ? and subcategoria= ?',['2','1'],  function(err, rows, fields){
                    pregunGi1=rows;
                db.query('SELECT * FROM Preg_eval_ini WHERE categoria = ? and subcategoria= ?',['2','2'],  function(err, rows, fields){
                    pregunGi2=rows;
                 db.query('SELECT * FROM Preg_eval_ini WHERE categoria = ? and subcategoria= ?',['2','3'],  function(err, rows, fields){
                 pregunGi3=rows;
                 db.query('SELECT * FROM Preg_eval_ini WHERE categoria = ? and subcategoria= ?',['3','1'],  function(err, rows, fields){
                    pregunVeri=rows;
                db.query('SELECT * FROM Preg_eval_ini WHERE categoria = ? and subcategoria= ?',['4','1'],  function(err, rows, fields){
                                    pregunAct=rows;
                                    db.end();
                                    res.render('sgsst/evaluacionIni',{
                                        isAuthenticated : req.isAuthenticated(),
                                        user : user,
                                        empresa: empresa,
                                        pregunPlanA: pregunPlan1,
                                        pregunPlanB: pregunPlan2,
                                        pregunGi1: pregunGi1,
                                        pregunGi2: pregunGi2,
                                        pregunGi3: pregunGi3,
                                        pregunVeri: pregunVeri,
                                        pregunAct: pregunAct
                                });         
                            });  
                           }); 
                        });   
                    });     
                });   
            }); 
        });
        
    });
    },

    crearEvaluacion: function(req, res, next){
        var userCod = req.body.userCod;
        var emprCod = req.body.emprCod;
        var fechaAct = new Date();
        var fecha= dateFormat(fechaAct, 'yyyy-mm-dd h:MM:ss');
        var evalEmpr = {
             codEmpr : emprCod,
             fechaCreacion: fecha,
             usuario : req.user.codigo
        }

        var config = require('.././database/config');
        var evalCreada=false;
        var idEmpEval=0;
        var db = mysql.createConnection(config);
       
        db.connect();
        db.query('INSERT INTO eval_empr set ?', evalEmpr, function(err, rows, filds){
                if (err) throw err;
                //db.end();
             db.query("SELECT MAX(codigo) id FROM  eval_empr WHERE codEmpr = ?",emprCod,function(err,rows,fields){
                idEmpEval=rows[0].id;
                db.end();
                evalCreada=true;
                res.json({idEmpEval,evalCreada});
             });
            
               
        } );
           
            
    },

    crearRespuestas : function(req, res, next){
        var codEvalEmp = req.body.codEvalEmp;
        var codPregunta = req.body.codPregunta;
        var estado = req.body.estado;
        var puntaje = req.body.puntaje;
        var respuesta = {
            codEvalEmp: codEvalEmp,
            codPregunta: codPregunta,
            estado: estado,
            puntaje: puntaje
        }
        var respCreada=false;
        var config = require('.././database/config');
        console.log(respuesta);
        var db = mysql.createConnection(config);
        db.connect();
        db.query('INSERT INTO eval_empr_resp set ?', respuesta, function(err, rows, filds){
            if (err) throw err;
            db.end(); 
            respCreada=true;
            res.json(respCreada);      
        });
    },

    evaluacionlesIni: function(req, res, next){
        var emp_id = req.params.emp_id;
        var config = require('.././database/config');
        
        var db = mysql.createConnection(config);
        
        db.connect();
        var empresa = null;
        var evaluaciones = null;
        user=req.user;
        
        db.query('SELECT * FROM empresa WHERE codigo = ? ',emp_id,  function(err, rows, fields){
            if (err) throw err;
            empresa=rows;
            db.query('SELECT ee.codigo, SUM( er.puntaje ) puntaje, ee.fechaCreacion FROM eval_empr ee, empresa e, eval_empr_resp er WHERE ee.codEmpr = e.codigo AND er.codEvalEmp = ee.codigo and ee.codEmpr = ?  GROUP BY (ee.codigo) ',
            emp_id,  function(err, rows, fields){
                if (err) throw err; 
             evaluaciones = rows; 
               db.end();
             res.render('sgsst/evaluacionesIniciales',{
                isAuthenticated : req.isAuthenticated(),
                user : user,
                empresa:empresa,
                evaluaciones: evaluaciones
            });


            });  
        });
     

    },

    generarPlan: function(req, res, next){
        var codEvalEmp = req.body.codEvalEmp;
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        
        var num= null;
        var codigoPregunta= null;
        var itemsPlan=null;
        db.connect();
        db.query('SELECT count(e.codigo)num FROM eval_empr_resp e WHERE e.puntaje =0  AND e.codEvalEmp = ? ',codEvalEmp,  function(err, rows, fields){
            if (err) throw err;
            num=rows[0].num;
         if (num!=0){
            db.query('SELECT e.codPregunta cod  FROM eval_empr_resp e WHERE e.puntaje =0  AND e.codEvalEmp = ? ',codEvalEmp,  function(err, rows, fields){
                if (err) throw err;
                codigoPregunta=rows;
                for (i=0; i<num; i++){
                    
                      db.query('SELECT * FROM plan_mejoramiento  WHERE codigo = ? ',codigoPregunta[i].cod,  function(err, rows, fields){                        
                          if (err) throw err;
                        itemsPlan=rows;
                          var fechaAct = new Date();
                          
                          var mes=itemsPlan[0].plazo;
                            var observaciones =itemsPlan[0].observaciones;
                            
                         if(observaciones==null){
                             observaciones="";
                          }
                       
                         fechaAct.setMonth(fechaAct.getMonth()+mes);
                         var fecha= dateFormat(fechaAct, 'yyyy-mm-dd h:MM:ss');
                        //console.log('fecha  '+fechaAct);
                        var plan = {
                        codEvalEmp: codEvalEmp,
                        actividad: itemsPlan[0].actividad,
                        fundamentos:  itemsPlan[0].fundamentos,
                         observaciones: observaciones,
                        plazo: fecha,
                        recursos: itemsPlan[0].recursos,
                        responsable: itemsPlan[0].responsable,
                        act_subsanar: itemsPlan[0].act_subsanar
                      }

                       //console.log('plan '+plan);
                      
                      db.query('INSERT INTO plan_mejoramiento_empr SET ? ',plan,  function(err, rows, fields){                        
                        if (err) throw err;
                       
                    });
                    });
               }
                 
           });
         }   
        
        
        });
            
    },

    verPlan: function(req, res, next){
        var codEvalEmp = req.params.codEvalEmp;
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        
        var num= null;
        var codigoEval= null;
        var itemsPlan=null;
        var planes=  null;
        var user=req.user;
       
        db.connect(); 
        
       db.query('SELECT * FROM plan_mejoramiento_empr  WHERE codEvalEmp = ? ',codEvalEmp,  function(err, rows, fields){
            if (err) throw err;
            
            planes=rows;
            db.end();
            //console.log(planes);
            res.render('sgsst/plan',{
                isAuthenticated : req.isAuthenticated(),
                user : user,
                planes: planes
            });
        });
        
       
    },

    estadisticas : function(req, res, next){
         var codEvalEmp=req.params.codEvalEmp;
         console.log(codEvalEmp);
         var user=req.user;
         var categoria1=null;
         var config = require('.././database/config');
         var db = mysql.createConnection(config);
         db.connect();
         db.query('SELECT   pe.subcategoria categoria, sum(pe.puntaje) esperado, sum(e.puntaje) obtenido FROM Preg_eval_ini pe, eval_empr_resp e where pe.categoria=1  and pe.codigo=e.codPregunta and e.codEvalEmp= ? group by (pe.subcategoria) ',codEvalEmp,  function(err, rows, fields){
            if (err) throw err;
            
            categoria1=rows;
         db.query('SELECT   pe.subcategoria categoria, sum(pe.puntaje) esperado, sum(e.puntaje) obtenido FROM Preg_eval_ini pe, eval_empr_resp e where pe.categoria=2  and pe.codigo=e.codPregunta and e.codEvalEmp= ? group by (pe.subcategoria) ',codEvalEmp,  function(err, rows, fields){
                if (err) throw err;
                
                categoria2=rows;

          db.query('SELECT   pe.subcategoria categoria, sum(pe.puntaje) esperado, sum(e.puntaje) obtenido FROM Preg_eval_ini pe, eval_empr_resp e where pe.categoria=3  and pe.codigo=e.codPregunta and e.codEvalEmp= ? group by (pe.subcategoria) ',codEvalEmp,  function(err, rows, fields){
                    if (err) throw err;
                    
                    categoria3=rows;
            db.query('SELECT   pe.subcategoria categoria, sum(pe.puntaje) esperado, sum(e.puntaje) obtenido FROM Preg_eval_ini pe, eval_empr_resp e where pe.categoria=4  and pe.codigo=e.codPregunta and e.codEvalEmp= ? group by (pe.subcategoria) ',codEvalEmp,  function(err, rows, fields){
                        if (err) throw err;
                        
                        categoria4=rows;

         res.render('sgsst/estadisticas',{
            isAuthenticated : req.isAuthenticated(),
            user : user,
            categoria1: categoria1,
            categoria2: categoria2,
            categoria3: categoria3,
            categoria4: categoria4
        });
        });
        });  
        });
    });
    }

    
        
}