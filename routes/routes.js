var express = require('express');
var router = express.Router();
var passport = require('passport');

var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth'); //urls protegidas
router.get('/', controllers.HomeController.index);
router.get('/inicio', AuthMiddleware.isLogged, controllers.HomeController.inicio, function(req, res, next){
  req.breadcrumbs('Inicio');
});

//rutas de usuario

router.get('/auth/signup', controllers.UserController.getSignUp);
router.post('/auth/signup', controllers.UserController.postSignUp);
router.get('/auth/signin', controllers.UserController.getSignIn);

router.post('/', passport.authenticate('local', {
    successRedirect : '/inicio',
    failureRedirect : '/',
    failureFlash : true
  } ) );
router.get('/auth/logout', controllers.UserController.logout);


//sgsst
router.get('/evaluacionInicial/:emp_id',AuthMiddleware.isLogged, controllers.SgsstController.evaluacionIni);
router.post('/crearEval',AuthMiddleware.isLogged, controllers.SgsstController.crearEvaluacion);
router.post('/crearRespuestas',AuthMiddleware.isLogged, controllers.SgsstController.crearRespuestas);
router.get('/evaluacionesIniciales/:emp_id',AuthMiddleware.isLogged, controllers.SgsstController.evaluacionlesIni);
router.post('/generarPlan',AuthMiddleware.isLogged, controllers.SgsstController.generarPlan);
router.get('/verPlan/:codEvalEmp',AuthMiddleware.isLogged, controllers.SgsstController.verPlan);
router.get('/estadisticas/:codEvalEmp',AuthMiddleware.isLogged, controllers.SgsstController.estadisticas);


module.exports = router;
