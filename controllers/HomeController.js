var mysql = require('mysql');
module.exports ={
    index : function(req, res, next){
        res.render('home', {message: '', authmessage: req.flash('authmessage')});
    },
    inicio : function(req, res, next){
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();
        var empresas = null;

        db.query('SELECT * FROM empresa WHERE estado = ? ','A',  function(err, rows, fields){
           
            if (err) throw err;
            empresas=rows;
            
            db.end();
            res.render('inicio', {
                isAuthenticated : req.isAuthenticated(),
                user : req.user,
                empresas: empresas
            });
        });
      
    },

    
}