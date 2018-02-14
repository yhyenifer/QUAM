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


//--------------------------SGSST-----------------------------------------------------------------
// EVALUACION INICIAL
router.get('/evaluacionInicial/:emp_id',AuthMiddleware.isLogged, controllers.SgsstController.evaluacionIni);
router.post('/crearEval',AuthMiddleware.isLogged, controllers.SgsstController.crearEvaluacion);
router.post('/crearRespuestas',AuthMiddleware.isLogged, controllers.SgsstController.crearRespuestas);
router.get('/evaluacionesIniciales/:emp_id',AuthMiddleware.isLogged, controllers.SgsstController.evaluacionlesIni);
router.post('/generarPlan',AuthMiddleware.isLogged, controllers.SgsstController.generarPlan);
router.get('/verPlan/:codEvalEmp',AuthMiddleware.isLogged, controllers.SgsstController.verPlan);
router.get('/estadisticas/:codEvalEmp',AuthMiddleware.isLogged, controllers.SgsstController.estadisticas);
router.get('/detalleEval/:codEvalEmp',AuthMiddleware.isLogged, controllers.SgsstController.detalleEvalIni);

// MATRIZ DE PELIGROS
router.get('/matriz/:emp_id',AuthMiddleware.isLogged, controllers.SgsstController.crearMatriz);
router.post('/cargarPel',AuthMiddleware.isLogged, controllers.SgsstController.cargarPeligro);
router.post('/procesos',AuthMiddleware.isLogged, controllers.SgsstController.cargarProcesos);
router.post('/guardarProceso',AuthMiddleware.isLogged, controllers.SgsstController.guardarProceso);
router.post('/modificarProceso',AuthMiddleware.isLogged, controllers.SgsstController.modificarProceso);
router.post('/deshabilitarProceso',AuthMiddleware.isLogged, controllers.SgsstController.deshabilitarProceso);
router.post('/guardarMatriz',AuthMiddleware.isLogged, controllers.SgsstController.guardarMatriz);
router.post('/guardarMatrizItem',AuthMiddleware.isLogged, controllers.SgsstController.guardarMatrizItem);
router.post('/guardarMedidasInter',AuthMiddleware.isLogged, controllers.SgsstController.guardarMedidasInter);
router.get('/detalleMatriz/:emp_id',AuthMiddleware.isLogged, controllers.SgsstController.detalleMatriz);




module.exports = router;
