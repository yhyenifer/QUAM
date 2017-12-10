var LocalSrategy = require('passport-local').Strategy;
var mysql = require('mysql');
var bcrypt = require('bcryptjs');

module.exports = function(passport){
  passport.serializeUser(function(user, done){
       done(null, user);
  });

  passport.deserializeUser(function(obj, done){
       done(null, obj);
  });

  passport.use(new LocalSrategy({
    passReqToCallback : true
  },
    function(req, username, password, done){
        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect;
        db.query('SELECT * FROM usuario WHERE identificacion =?', username, function(err, rows, fields){
                 
            if (err) throw err;
                db.end;
           
                if(rows.length > 0){
                    console.log('yh '+rows[0].contraseña);
                    var user = rows[0];
                    if(bcrypt.compareSync(password, user.contraseña)){
                        return done(null, {
                            nombres: user.nombres,
                            apellidos: user.apellidos,
                            codigo: user.codigo
                        });
                    }
                }
                return done(null, false, req.flash('authmessage', 'Los datos ingresados son incorrectos'));
        });
    

}));
};