var mysql= require('mysql');
var bcrypt= require('bcryptjs');


module.exports = {
    getSignUp : function(req, res, next){
       return res.render('users/signup');
    },

    postSignUp :function(req, res, next){
        console.log(req.body);
        
        var salt = bcrypt.genSaltSync(10); //hash
        var password = bcrypt.hashSync(req.body.password, salt);

        var user= {
            codigo: 2,
            nombres : req.body.nombres,
            apellidos: req.body.apellidos,
            identificacion: req.body.identificacion,
            tipo: 0,
            estado: 'A',
            contraseña: password
        };

        var config = require('.././database/config');

        var db= mysql.createConnection(config);
        db.connect();

        db.query('insert into usuario set ?', user, function(err,rows,fields){
           if (err) throw err;
           
           db.end();
        });
        req.flash('info', 'El registro ha sido exitoso, ya puede ingresar a QUAM');
        return res.redirect('/auth/signin');
    },

    getSignIn : function(req, res, next){
      return res.render('home.ejs', {message: req.flash('info'), authmessage: ''} );
    },

    logout : function(req, res, next){
     req.logout();
     res.redirect('/');
    }
}