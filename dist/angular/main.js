(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_reds_por_persona_reds_por_persona_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/reds-por-persona/reds-por-persona.component */ "./src/app/components/reds-por-persona/reds-por-persona.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_add_red_add_red_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-red/add-red.component */ "./src/app/components/add-red/add-red.component.ts");
/* harmony import */ var _components_agregar_recurso_agregar_recurso_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/agregar-recurso/agregar-recurso.component */ "./src/app/components/agregar-recurso/agregar-recurso.component.ts");
/* harmony import */ var _components_detalle_recurso_detalle_recurso_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/detalle-recurso/detalle-recurso.component */ "./src/app/components/detalle-recurso/detalle-recurso.component.ts");
/* harmony import */ var _components_detalle_red_detalle_red_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/detalle-red/detalle-red.component */ "./src/app/components/detalle-red/detalle-red.component.ts");
/* harmony import */ var _components_proyectos_red_proyectos_red_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/proyectos-red/proyectos-red.component */ "./src/app/components/proyectos-red/proyectos-red.component.ts");
/* harmony import */ var _components_red_recursos_detalle_red_recursos_detalle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/red-recursos-detalle/red-recursos-detalle.component */ "./src/app/components/red-recursos-detalle/red-recursos-detalle.component.ts");
/* harmony import */ var _components_red_recursos_red_recursos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/red-recursos/red-recursos.component */ "./src/app/components/red-recursos/red-recursos.component.ts");
/* harmony import */ var _components_red_asignaciones_red_asignados_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/red/asignaciones/red-asignados.component */ "./src/app/components/red/asignaciones/red-asignados.component.ts");
/* harmony import */ var _components_reds_relacionados_reds_relacionados_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/reds-relacionados/reds-relacionados.component */ "./src/app/components/reds-relacionados/reds-relacionados.component.ts");
/* harmony import */ var _components_ver_avance_red_ver_avance_red_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/ver-avance-red/ver-avance-red.component */ "./src/app/components/ver-avance-red/ver-avance-red.component.ts");
/* harmony import */ var _components_ver_version_red_ver_version_red_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/ver-version-red/ver-version-red.component */ "./src/app/components/ver-version-red/ver-version-red.component.ts");
/* harmony import */ var _components_version_red_revision_version_red_revision_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/version-red-revision/version-red-revision.component */ "./src/app/components/version-red-revision/version-red-revision.component.ts");
/* harmony import */ var _components_comentar_imagen_comentar_imagen_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/comentar-imagen/comentar-imagen.component */ "./src/app/components/comentar-imagen/comentar-imagen.component.ts");
/* harmony import */ var _components_red_crear_version_red_crear_version_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/red-crear-version/red-crear-version.component */ "./src/app/components/red-crear-version/red-crear-version.component.ts");
/* harmony import */ var _components_buscar_red_buscar_red_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/buscar-red/buscar-red.component */ "./src/app/components/buscar-red/buscar-red.component.ts");
/* harmony import */ var _components_comentarios_version_video_comentarios_version_video_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/comentarios-version-video/comentarios-version-video.component */ "./src/app/components/comentarios-version-video/comentarios-version-video.component.ts");
/* harmony import */ var _components_HabilitarUsuario_Habilitar_Usuario_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/HabilitarUsuario/Habilitar-Usuario.component */ "./src/app/components/HabilitarUsuario/Habilitar-Usuario.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _guards_autenticacion_autenticacion_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./guards/autenticacion/autenticacion.guard */ "./src/app/guards/autenticacion/autenticacion.guard.ts");
/* harmony import */ var _guards_no_autenticado_no_autenticado_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./guards/no-autenticado/no-autenticado.guard */ "./src/app/guards/no-autenticado/no-autenticado.guard.ts");
/* harmony import */ var _components_buscar_recurso_buscar_recurso_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/buscar-recurso/buscar-recurso.component */ "./src/app/components/buscar-recurso/buscar-recurso.component.ts");
/* harmony import */ var _components_red_comentar_pdf_red_comentar_pdf_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/red-comentar-pdf/red-comentar-pdf.component */ "./src/app/components/red-comentar-pdf/red-comentar-pdf.component.ts");




























var routes = [
    {
        path: 'red/version/:idVersion/archivo/:idRecurso/comentar',
        component: _components_comentar_imagen_comentar_imagen_component__WEBPACK_IMPORTED_MODULE_18__["ComentarImagenComponent"],
        canActivate: [_guards_autenticacion_autenticacion_guard__WEBPACK_IMPORTED_MODULE_24__["AutenticacionGuard"]]
    },
    {
        path: 'buscarRed',
        component: _components_buscar_red_buscar_red_component__WEBPACK_IMPORTED_MODULE_20__["BuscarRedComponent"],
    },
    { path: 'test',
        component: _components_red_asignaciones_red_asignados_component__WEBPACK_IMPORTED_MODULE_13__["RedAsignadosComponent"],
        canActivate: [_guards_no_autenticado_no_autenticado_guard__WEBPACK_IMPORTED_MODULE_25__["NoAutenticadoGuard"]]
    },
    { path: 'red/:idRed/proyecto/agregar',
        component: _components_add_red_add_red_component__WEBPACK_IMPORTED_MODULE_6__["AddRedComponent"],
        canActivate: [_guards_autenticacion_autenticacion_guard__WEBPACK_IMPORTED_MODULE_24__["AutenticacionGuard"]]
    },
    { path: 'red/:idRed/detalle',
        component: _components_detalle_red_detalle_red_component__WEBPACK_IMPORTED_MODULE_9__["DetalleREDComponent"],
        canActivate: [_guards_autenticacion_autenticacion_guard__WEBPACK_IMPORTED_MODULE_24__["AutenticacionGuard"]]
    },
    { path: 'reds/:idUsuario',
        component: _components_red_asignaciones_red_asignados_component__WEBPACK_IMPORTED_MODULE_13__["RedAsignadosComponent"],
        canActivate: [_guards_autenticacion_autenticacion_guard__WEBPACK_IMPORTED_MODULE_24__["AutenticacionGuard"]]
    },
    { path: 'asignaciones',
        component: _components_reds_por_persona_reds_por_persona_component__WEBPACK_IMPORTED_MODULE_2__["RedsPorPersonaComponent"],
    },
    { path: 'red/version/:idVersion/recurso/:idRecurso/comentarios',
        component: _components_comentarios_version_video_comentarios_version_video_component__WEBPACK_IMPORTED_MODULE_21__["ComentariosVersionVideoComponent"],
        canActivate: [_guards_autenticacion_autenticacion_guard__WEBPACK_IMPORTED_MODULE_24__["AutenticacionGuard"]]
    },
    { path: 'habilitarusuario',
        component: _components_HabilitarUsuario_Habilitar_Usuario_component__WEBPACK_IMPORTED_MODULE_22__["HabilitarUsuarioComponent"],
    },
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"],
        canActivate: [_guards_no_autenticado_no_autenticado_guard__WEBPACK_IMPORTED_MODULE_25__["NoAutenticadoGuard"]]
    },
    {
        path: 'red/:idRed/version/:version',
        component: _components_version_red_revision_version_red_revision_component__WEBPACK_IMPORTED_MODULE_17__["VersionRedRevisionComponent"],
        canActivate: [_guards_autenticacion_autenticacion_guard__WEBPACK_IMPORTED_MODULE_24__["AutenticacionGuard"]]
    },
    {
        path: 'red/:idRed/proyectos',
        component: _components_proyectos_red_proyectos_red_component__WEBPACK_IMPORTED_MODULE_10__["ProyectosRedComponent"],
        canActivate: [_guards_autenticacion_autenticacion_guard__WEBPACK_IMPORTED_MODULE_24__["AutenticacionGuard"]]
    },
    {
        path: 'red/:idRed/relacionados',
        component: _components_reds_relacionados_reds_relacionados_component__WEBPACK_IMPORTED_MODULE_14__["RedsRelacionadosComponent"],
        canActivate: [_guards_autenticacion_autenticacion_guard__WEBPACK_IMPORTED_MODULE_24__["AutenticacionGuard"]]
    },
    {
        path: 'red/:idRed/recursos',
        component: _components_red_recursos_red_recursos_component__WEBPACK_IMPORTED_MODULE_12__["RedRecursosComponent"],
        canActivate: [_guards_autenticacion_autenticacion_guard__WEBPACK_IMPORTED_MODULE_24__["AutenticacionGuard"]]
    },
    {
        path: 'red/:id/recursos/:idrecurso',
        component: _components_red_recursos_detalle_red_recursos_detalle_component__WEBPACK_IMPORTED_MODULE_11__["RedRecursosDetalleComponent"]
    },
    {
        path: 'red/:idRed/recursos/agregar',
        component: _components_agregar_recurso_agregar_recurso_component__WEBPACK_IMPORTED_MODULE_7__["AgregarRecursoComponent"],
        canActivate: [_guards_autenticacion_autenticacion_guard__WEBPACK_IMPORTED_MODULE_24__["AutenticacionGuard"]]
    },
    // {
    //   path: 'red/:id/recursos/:idrecurso',
    //   component: RedRecursosDetalleComponent
    // },
    {
        path: 'red/:idRed/recursos/:id',
        component: _components_detalle_recurso_detalle_recurso_component__WEBPACK_IMPORTED_MODULE_8__["DetalleRecursoComponent"],
    },
    {
        path: 'getRecurso/:id',
        component: _components_detalle_recurso_detalle_recurso_component__WEBPACK_IMPORTED_MODULE_8__["DetalleRecursoComponent"],
    },
    {
        path: 'reds/:idRed/avance',
        component: _components_ver_avance_red_ver_avance_red_component__WEBPACK_IMPORTED_MODULE_15__["VerAvanceRedComponent"],
        canActivate: [_guards_autenticacion_autenticacion_guard__WEBPACK_IMPORTED_MODULE_24__["AutenticacionGuard"]]
    },
    {
        path: 'reds/:id/comentar-pdf',
        component: _components_red_comentar_pdf_red_comentar_pdf_component__WEBPACK_IMPORTED_MODULE_27__["RedComentarPdfComponent"]
    },
    {
        path: 'red/version/:idVersion',
        component: _components_ver_version_red_ver_version_red_component__WEBPACK_IMPORTED_MODULE_16__["VerVersionRedComponent"],
        canActivate: [_guards_autenticacion_autenticacion_guard__WEBPACK_IMPORTED_MODULE_24__["AutenticacionGuard"]]
    },
    {
        path: 'buscarRecurso',
        component: _components_buscar_recurso_buscar_recurso_component__WEBPACK_IMPORTED_MODULE_26__["BuscarRecursoComponent"],
        canActivate: [_guards_autenticacion_autenticacion_guard__WEBPACK_IMPORTED_MODULE_24__["AutenticacionGuard"]]
    },
    {
        path: 'crearVersion/:idRed',
        component: _components_red_crear_version_red_crear_version_component__WEBPACK_IMPORTED_MODULE_19__["RedCrearVersionComponent"],
        canActivate: [_guards_autenticacion_autenticacion_guard__WEBPACK_IMPORTED_MODULE_24__["AutenticacionGuard"]]
    },
    { path: '**',
        component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"],
        canActivate: [_guards_autenticacion_autenticacion_guard__WEBPACK_IMPORTED_MODULE_24__["AutenticacionGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <app-header *ngIf=\"autenticado && usuario\" [usuario]=\"usuario\"></app-header>\r\n  <!-- Left side column. contains the logo and sidebar -->\r\n  <app-side-bar *ngIf=\"autenticado && usuario\" [usuario]=\"usuario\"></app-side-bar>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <app-footer *ngIf=\"autenticado && usuario\"></app-footer>\r\n\r\n  <!-- Control Sidebar -->\r\n  <aside class=\"control-sidebar control-sidebar-dark\" *ngIf=\"autenticado && usuario\">\r\n    <!-- Create the tabs -->\r\n    <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\r\n      <li>\r\n        <a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a>\r\n      </li>\r\n    </ul>\r\n    <!-- Tab panes -->\r\n    <app-tab-panes *ngIf=\"autenticado && usuario\"></app-tab-panes>\r\n  </aside>\r\n  <!-- /.control-sidebar -->\r\n  <!-- Add the sidebar's background. This div must be placed\r\n       immediately after the control sidebar -->\r\n  <div class=\"control-sidebar-bg\" *ngIf=\"autenticado && usuario\"></div>\r\n</div>\r\n<!-- ./wrapper -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(document, r, meta, autenticationService) {
        this.autenticationService = autenticationService;
        this.autenticado = false;
        this.title = 'SISRED-Frontend';
        this.autenticado = this.autenticationService.autenticado();
        if (this.autenticado) {
            this.usuario = this.autenticationService.obtenerDatosUsuario();
        }
        r.addClass(document.body, 'skin-blue');
        r.addClass(document.body, 'sidebar-mini');
        r.addClass(document.body, 'hold-transition');
        meta.addTags([
            { charset: 'utf-8' },
            { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
            {
                content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
                name: 'viewport'
            }
        ], true);
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"],
            _services_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacionService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_spin_kit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-spin-kit */ "./node_modules/ng-spin-kit/dist/spinners.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_add_red_add_red_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/add-red/add-red.component */ "./src/app/components/add-red/add-red.component.ts");
/* harmony import */ var _components_agregar_recurso_agregar_recurso_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/agregar-recurso/agregar-recurso.component */ "./src/app/components/agregar-recurso/agregar-recurso.component.ts");
/* harmony import */ var _components_detalle_recurso_detalle_recurso_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/detalle-recurso/detalle-recurso.component */ "./src/app/components/detalle-recurso/detalle-recurso.component.ts");
/* harmony import */ var _components_detalle_red_detalle_red_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/detalle-red/detalle-red.component */ "./src/app/components/detalle-red/detalle-red.component.ts");
/* harmony import */ var _components_proyectos_red_proyectos_red_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/proyectos-red/proyectos-red.component */ "./src/app/components/proyectos-red/proyectos-red.component.ts");
/* harmony import */ var _components_red_recursos_detalle_red_recursos_detalle_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/red-recursos-detalle/red-recursos-detalle.component */ "./src/app/components/red-recursos-detalle/red-recursos-detalle.component.ts");
/* harmony import */ var _components_red_asignaciones_red_asignados_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/red/asignaciones/red-asignados.component */ "./src/app/components/red/asignaciones/red-asignados.component.ts");
/* harmony import */ var _components_reds_por_persona_reds_por_persona_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/reds-por-persona/reds-por-persona.component */ "./src/app/components/reds-por-persona/reds-por-persona.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_red_recursos_red_recursos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/red-recursos/red-recursos.component */ "./src/app/components/red-recursos/red-recursos.component.ts");
/* harmony import */ var _components_reds_relacionados_reds_relacionados_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/reds-relacionados/reds-relacionados.component */ "./src/app/components/reds-relacionados/reds-relacionados.component.ts");
/* harmony import */ var _components_ver_avance_red_ver_avance_red_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/ver-avance-red/ver-avance-red.component */ "./src/app/components/ver-avance-red/ver-avance-red.component.ts");
/* harmony import */ var _services_recurso_agregar_agregar_recurso_client_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/recurso/agregar/agregar-recurso-client.service */ "./src/app/services/recurso/agregar/agregar-recurso-client.service.ts");
/* harmony import */ var _services_recurso_detalle_resource_details_rest_client_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/recurso/detalle/resource-details-rest-client.service */ "./src/app/services/recurso/detalle/resource-details-rest-client.service.ts");
/* harmony import */ var _components_dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/dashboard/header/header.component */ "./src/app/components/dashboard/header/header.component.ts");
/* harmony import */ var _components_dashboard_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/dashboard/side-bar/side-bar.component */ "./src/app/components/dashboard/side-bar/side-bar.component.ts");
/* harmony import */ var _components_dashboard_footer_footer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/dashboard/footer/footer.component */ "./src/app/components/dashboard/footer/footer.component.ts");
/* harmony import */ var _components_dashboard_tab_panes_tab_panes_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/dashboard/tab-panes/tab-panes.component */ "./src/app/components/dashboard/tab-panes/tab-panes.component.ts");
/* harmony import */ var _components_comentar_imagen_comentar_imagen_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/comentar-imagen/comentar-imagen.component */ "./src/app/components/comentar-imagen/comentar-imagen.component.ts");
/* harmony import */ var _components_red_crear_version_red_crear_version_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/red-crear-version/red-crear-version.component */ "./src/app/components/red-crear-version/red-crear-version.component.ts");
/* harmony import */ var _components_buscar_red_buscar_red_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/buscar-red/buscar-red.component */ "./src/app/components/buscar-red/buscar-red.component.ts");
/* harmony import */ var _components_ver_version_red_ver_version_red_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/ver-version-red/ver-version-red.component */ "./src/app/components/ver-version-red/ver-version-red.component.ts");
/* harmony import */ var _services_version_version_red_revision_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/version/version-red-revision.service */ "./src/app/services/version/version-red-revision.service.ts");
/* harmony import */ var _components_comentarios_version_video_comentarios_version_video_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/comentarios-version-video/comentarios-version-video.component */ "./src/app/components/comentarios-version-video/comentarios-version-video.component.ts");
/* harmony import */ var _components_buscar_recurso_buscar_recurso_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/buscar-recurso/buscar-recurso.component */ "./src/app/components/buscar-recurso/buscar-recurso.component.ts");
/* harmony import */ var _components_HabilitarUsuario_Habilitar_Usuario_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/HabilitarUsuario/Habilitar-Usuario.component */ "./src/app/components/HabilitarUsuario/Habilitar-Usuario.component.ts");
/* harmony import */ var _services_HabilitarUsuario_habilita_usuario_client_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/HabilitarUsuario/habilita-usuario-client.service */ "./src/app/services/HabilitarUsuario/habilita-usuario-client.service.ts");
/* harmony import */ var _components_version_red_revision_version_red_revision_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/version-red-revision/version-red-revision.component */ "./src/app/components/version-red-revision/version-red-revision.component.ts");
/* harmony import */ var _components_red_comentar_pdf_red_comentar_pdf_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/red-comentar-pdf/red-comentar-pdf.component */ "./src/app/components/red-comentar-pdf/red-comentar-pdf.component.ts");
/* harmony import */ var _common_pdf_viewer_click_outside_directive_directive__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./common/pdf-viewer/click-outside-directive.directive */ "./src/app/common/pdf-viewer/click-outside-directive.directive.ts");
/* harmony import */ var _common_pdf_viewer_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./common/pdf-viewer/pdf-viewer.component */ "./src/app/common/pdf-viewer/pdf-viewer.component.ts");













































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _components_reds_por_persona_reds_por_persona_component__WEBPACK_IMPORTED_MODULE_19__["RedsPorPersonaComponent"],
                _components_add_red_add_red_component__WEBPACK_IMPORTED_MODULE_12__["AddRedComponent"],
                _components_red_asignaciones_red_asignados_component__WEBPACK_IMPORTED_MODULE_18__["RedAsignadosComponent"],
                _components_detalle_red_detalle_red_component__WEBPACK_IMPORTED_MODULE_15__["DetalleREDComponent"],
                _components_proyectos_red_proyectos_red_component__WEBPACK_IMPORTED_MODULE_16__["ProyectosRedComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _components_reds_relacionados_reds_relacionados_component__WEBPACK_IMPORTED_MODULE_24__["RedsRelacionadosComponent"],
                _components_red_recursos_detalle_red_recursos_detalle_component__WEBPACK_IMPORTED_MODULE_17__["RedRecursosDetalleComponent"],
                _components_red_recursos_red_recursos_component__WEBPACK_IMPORTED_MODULE_23__["RedRecursosComponent"],
                _components_detalle_recurso_detalle_recurso_component__WEBPACK_IMPORTED_MODULE_14__["DetalleRecursoComponent"],
                _components_ver_avance_red_ver_avance_red_component__WEBPACK_IMPORTED_MODULE_25__["VerAvanceRedComponent"],
                _components_agregar_recurso_agregar_recurso_component__WEBPACK_IMPORTED_MODULE_13__["AgregarRecursoComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__["NotFoundComponent"],
                _components_version_red_revision_version_red_revision_component__WEBPACK_IMPORTED_MODULE_41__["VersionRedRevisionComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _components_dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_28__["HeaderComponent"],
                _components_dashboard_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_29__["SideBarComponent"],
                _components_dashboard_footer_footer_component__WEBPACK_IMPORTED_MODULE_30__["FooterComponent"],
                _components_dashboard_tab_panes_tab_panes_component__WEBPACK_IMPORTED_MODULE_31__["TabPanesComponent"],
                _components_comentar_imagen_comentar_imagen_component__WEBPACK_IMPORTED_MODULE_32__["ComentarImagenComponent"],
                _components_ver_version_red_ver_version_red_component__WEBPACK_IMPORTED_MODULE_35__["VerVersionRedComponent"],
                _components_red_crear_version_red_crear_version_component__WEBPACK_IMPORTED_MODULE_33__["RedCrearVersionComponent"],
                _components_buscar_red_buscar_red_component__WEBPACK_IMPORTED_MODULE_34__["BuscarRedComponent"],
                _components_comentarios_version_video_comentarios_version_video_component__WEBPACK_IMPORTED_MODULE_37__["ComentariosVersionVideoComponent"],
                _components_HabilitarUsuario_Habilitar_Usuario_component__WEBPACK_IMPORTED_MODULE_39__["HabilitarUsuarioComponent"],
                _components_HabilitarUsuario_Habilitar_Usuario_component__WEBPACK_IMPORTED_MODULE_39__["HabilitarUsuarioComponent"],
                _components_dashboard_tab_panes_tab_panes_component__WEBPACK_IMPORTED_MODULE_31__["TabPanesComponent"],
                _components_buscar_recurso_buscar_recurso_component__WEBPACK_IMPORTED_MODULE_38__["BuscarRecursoComponent"],
                _common_pdf_viewer_click_outside_directive_directive__WEBPACK_IMPORTED_MODULE_43__["ClickOutsideDirectiveDirective"],
                _components_red_comentar_pdf_red_comentar_pdf_component__WEBPACK_IMPORTED_MODULE_42__["RedComentarPdfComponent"],
                _common_pdf_viewer_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_44__["PdfViewerComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                ng_spin_kit__WEBPACK_IMPORTED_MODULE_8__["NgSpinKitModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__["PdfViewerModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__["CKEditorModule"]
            ],
            providers: [_services_recurso_agregar_agregar_recurso_client_service__WEBPACK_IMPORTED_MODULE_26__["AgregarRecursoClientService"], _services_recurso_detalle_resource_details_rest_client_service__WEBPACK_IMPORTED_MODULE_27__["ResourceDetailsRestClientService"], _services_version_version_red_revision_service__WEBPACK_IMPORTED_MODULE_36__["VersionRedRevisionService"], _services_HabilitarUsuario_habilita_usuario_client_service__WEBPACK_IMPORTED_MODULE_40__["HabilitarUsuarioClientService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/pdf-viewer/click-outside-directive.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/common/pdf-viewer/click-outside-directive.directive.ts ***!
  \************************************************************************/
/*! exports provided: ClickOutsideDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirectiveDirective", function() { return ClickOutsideDirectiveDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClickOutsideDirectiveDirective = /** @class */ (function () {
    function ClickOutsideDirectiveDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ClickOutsideDirectiveDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClickOutsideDirectiveDirective.prototype, "clickOutside", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event', '$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent, HTMLElement]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ClickOutsideDirectiveDirective.prototype, "onClick", null);
    ClickOutsideDirectiveDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[clickOutside]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ClickOutsideDirectiveDirective);
    return ClickOutsideDirectiveDirective;
}());



/***/ }),

/***/ "./src/app/common/pdf-viewer/pdf-viewer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/common/pdf-viewer/pdf-viewer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-pdf\">\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"list\">\r\n\r\n      <div class=\"box list-row\" *ngFor=\"let list of areaInfo; let i = index\">\r\n        <div class=\"col-sm-12\" (click)=\"moveTo(list); $event.stopPropagation();\">ver comentario</div>\r\n        <div class=\"box-header row col-sm-11\">\r\n          <div class=\"col-sm-6 info text-bold\">{{comentariosPdf[i].UsuarioComentario}}</div>\r\n          <div class=\"col-sm-6 info right\">{{comentariosPdf[i].fechaCreacion | date : 'dd MMM yyyy HH:mm:ss'}}</div>\r\n        </div>\r\n        <div>\r\n          <div class=\"row col-sm-12 ContenidoPrincipal\" [innerHTML]=\"list.comment\"></div>\r\n          <p>\r\n            <div class=\"col-sm-12\">\r\n              <ckeditor [editor]=\"Editor\" [(ngModel)]=\"list.text\">Ingresar comentario</ckeditor>\r\n              <br>\r\n          <div class=\"col-sm-8\"></div>\r\n          <div class=\"col-sm-4\">\r\n              <button type=\"button\" [disabled]=\"!list.text\" class=\"btn btn-primary\"\r\n                (click)=\"addComment(i)\">Comentar</button>\r\n            </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row col-sm-12 center-block ComentariosHijos\" *ngFor=\"let comment of list.commentsChildren; let x = index \">\r\n              <div class=\"col-sm-6 ContenidoHijo\">{{comment.UsuarioComentario }}</div>\r\n              <div class=\"col-sm-6 DateComment\">{{comment.fechaCreacion | date:'yyyy-MM-dd HH:mm:ss' }}</div>\r\n              <div class=\"col-sm-12 ContenidoHijo\" [innerHTML]=\"comment.contenido\"></div>\r\n\r\n            </div>\r\n          <div class=\"col-sm-6 left bottom\"></div>\r\n          <div class=\"col-sm-6 right\">\r\n            <button type=\"button\" *ngIf=\"comentariosPdf[i].cerrado==false\" (click)=\"seleccionarComentarioCerrado(i)\" class=\" btn btn-primary right\" data-toggle=\"modal\" data-target=\"#myModal\">Cerrar comentario</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"box-footer margin\">\r\n\r\n          <div class=\"col-sm-8 left bottom\">\r\n            <button *ngIf=\"comentariosPdf[i].cerrado==true\" type=\"button\" class=\"btn btn-primary btn-sm btn-block \"\r\n              [className]=\"comentariosPdf[i].resuelto==true ? 'Resuelto' : 'SinResolver'\">{{comentariosPdf[i].resuelto ? \"Cerrado resuelto\" : \"Cerrado sin resolver\" }}</button>\r\n          </div>\r\n          <div class=\"col-sm-4 right bottom\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-sm-9 \">\r\n        <div>Comentarios abiertos: {{CantidadAbiertos}}</div>\r\n        <div>Comentarios cerrados: {{CantidadCerrados}}</div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div #pdfContainer class=\"container-pdf__right-side\" (mousemove)=\"mouseEvent($event)\" (mousedown)=\"mouseEvent($event)\"\r\n    (mouseup)=\"mouseEvent($event)\">\r\n    <pdf-viewer *ngIf=\"loadData\" [src]=\"rutaArchivo\" [stick-to-page]=\"false\"\r\n      [render-text]=\"true\" (page-rendered)=\"pageRendered($event)\" style=\"display: block;\">\r\n    </pdf-viewer>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"js-popper popper\" [style.display]=\"getStyle()\">\r\n  <pre>\r\n                <div class=\"icons\">\r\n\r\n                <input id=\"name\" type=\"text\" [(ngModel)]=\"comment\" />\r\n                <button class=\"fas fa-plus\" [disabled]=\"!comment\" (click)=\"save()\"></button>\r\n                <button class=\"fas fa-close\" (click)=\"cancel($event)\"></button>\r\n            </div>\r\n        </pre>\r\n</div>\r\n<div class=\"container\">\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header color-back\">\r\n          <h4>Cerrar comentario</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <ckeditor [editor]=\"Editor\" (change)=\"onComentarioChange($event)\"></ckeditor>\r\n          <input type=\"radio\" id=\"Radresuelto\" checked [(ngModel)]=\"myRadio\" name=\"cerrar\" value=\"resuelto\"> resuelto\r\n          <input type=\"radio\" id=\"RadSinResolver\" [(ngModel)]=\"myRadio\" name=\"cerrar\" value=\"noResuelto\"> sin\r\n          resolver<br>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" (click)=\"CerrarComentario()\" class=\"btn btn-primary\" data-dismiss=\"modal\"\r\n            data-toggle=\"modal\" [disabled]=\"!this.comentario\" data-target=\"#myModalPass\">Aceptar</button>\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancelar</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"container\">\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModalPass\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header color-back\">\r\n          <h4>Cerrar comentario</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>{{MensajeModal}}</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/pdf-viewer/pdf-viewer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/common/pdf-viewer/pdf-viewer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-pdf {\n  display: flex;\n  width: 100%;\n  height: 100%; }\n  .container-pdf__left-side {\n    width: 30%;\n    border-right: 1px solid black;\n    display: flex;\n    flex-direction: column; }\n  .container-pdf__right-side {\n    width: 65%; }\n  .rectangle {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden; }\n  .rectangle.move-to {\n    background-color: red; }\n  .popper {\n  background-color: #ffffff; }\n  .popper .icons {\n    display: flex;\n    align-items: center; }\n  .popper .icons .icon {\n      cursor: pointer; }\n  .popper .icons .icon-apply {\n        color: #1e88e5; }\n  .popper .icons .icon-close {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: #ff0000;\n        border: 1px solid #ff0000;\n        font-size: 18px;\n        width: 18px;\n        height: 18px; }\n  .header h2 {\n  padding: 10px;\n  color: #37474f; }\n  .header .link {\n  border-bottom: 1px solid black;\n  padding: 10px;\n  font-size: 11px; }\n  .header .link a {\n    color: #673ab7; }\n  .list {\n  display: flex;\n  flex-direction: column; }\n  .list-row {\n    padding: 10px;\n    border-bottom: 1px solid black;\n    cursor: pointer;\n    position: relative; }\n  .list-row:hover {\n      background-color: #d5d5d5; }\n  .list-row .delete-btn {\n      position: absolute;\n      top: 0;\n      right: 0; }\n  .list-row .delete-btn .icon {\n        font-size: 16px; }\n  .list-row pre .pre-title {\n      text-align: left; }\n  .list-row .page-number {\n      text-align: right;\n      font-size: 12px; }\n  .Resuelto {\n  background-color: #4CAF50;\n  border: none;\n  color: white;\n  padding: 10px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  margin: 2px 2px;\n  cursor: pointer;\n  width: 150px;\n  height: 32px; }\n  .SinResolver {\n  background-color: #FFF033;\n  border: none;\n  color: black;\n  padding: 12px 12px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  margin: 4px 2px;\n  cursor: pointer;\n  width: 150px;\n  height: 32px; }\n  .ContenidoPrincipal {\n  margin: 2px 5px; }\n  .ComentariosHijos {\n  margin: 2px 2px;\n  border-width: 5px;\n  border: 1px solid #71CAE5; }\n  .ContenidoHijo {\n  text-align: left;\n  padding: 5px 5px; }\n  .ComentariosHijos:hover {\n  background: #71CAE5;\n  padding: 5px 5px;\n  border-color: #71CAE5; }\n  .DateComment {\n  text-align: right; }\n  .color-back {\n  background-color: #3c8dbc;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3BkZi12aWV3ZXIvQzpcXFVzZXJzXFxzZXB1bHZlY1xcRG9jdW1lbnRzXFx1bmlhbmRlc1xcU0lTUkVELUZyb250ZW5kL3NyY1xcYXBwXFxjb21tb25cXHBkZi12aWV3ZXJcXHBkZi12aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVksRUFBQTtFQUNaO0lBQ0ksVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFFMUI7SUFDSSxVQUFVLEVBQUE7RUFJbEI7RUFDSSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQixFQUFBO0VBTnBCO0lBUVEscUJBQXFCLEVBQUE7RUFJN0I7RUFDSSx5QkFBeUIsRUFBQTtFQUQ3QjtJQUdRLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQUozQjtNQU1ZLGVBQWUsRUFBQTtFQU4zQjtRQVFnQixjQUFjLEVBQUE7RUFSOUI7UUFXZ0IsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsV0FBVztRQUNYLFlBQVksRUFBQTtFQU01QjtFQUVRLGFBQWE7RUFDYixjQUFjLEVBQUE7RUFIdEI7RUFNUSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGVBQWUsRUFBQTtFQVJ2QjtJQVVZLGNBQWMsRUFBQTtFQUsxQjtFQUNJLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQUN0QjtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGtCQUFrQixFQUFBO0VBSnJCO01BTU8seUJBQXlCLEVBQUE7RUFOaEM7TUFTTyxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLFFBQVEsRUFBQTtFQVhmO1FBYVcsZUFBZSxFQUFBO0VBYjFCO01Ba0JXLGdCQUFnQixFQUFBO0VBbEIzQjtNQXNCTyxpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0VBSzNCO0VBQ0MseUJBQXlCO0VBQ3hCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFHZDtFQUNHLHlCQUF5QjtFQUMxQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWSxFQUFBO0VBR2Q7RUFDRSxlQUFlLEVBQUE7RUFHakI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QixFQUFBO0VBRTNCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBO0VBR2xCO0VBQXlCLG1CQUFxQjtFQUFDLGdCQUFnQjtFQUFFLHFCQUFxQixFQUFBO0VBQ3RGO0VBQWEsaUJBQWlCLEVBQUE7RUFFOUI7RUFDSSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3BkZi12aWV3ZXIvcGRmLXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItcGRmIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgICZfX2xlZnQtc2lkZSB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAmX19yaWdodC1zaWRlIHtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmVjdGFuZ2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmLm1vdmUtdG8ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLmljb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICYtYXBwbHkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxZTg4ZTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgaDIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICMzNzQ3NGY7XHJcbiAgICB9XHJcbiAgICAubGluayB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzY3M2FiNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgJi1yb3cge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWQ1ZDU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWxldGUtYnRuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHJlIHtcclxuICAgICAgICAgICAgLnByZS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLW51bWJlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uUmVzdWVsdG97XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDJweCAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5TaW5SZXNvbHZlcntcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjAzMztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEycHggMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiA0cHggMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4uQ29udGVuaWRvUHJpbmNpcGFsIHtcclxuICBtYXJnaW46IDJweCA1cHg7XHJcbn1cclxuXHJcbi5Db21lbnRhcmlvc0hpam9zIHtcclxuICBtYXJnaW46IDJweCAycHg7XHJcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzcxQ0FFNTtcclxufVxyXG4uQ29udGVuaWRvSGlqb3tcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDVweCA1cHg7XHJcblxyXG59XHJcbi5Db21lbnRhcmlvc0hpam9zOmhvdmVyIHtiYWNrZ3JvdW5kOiAjNzFDQUU1ICA7cGFkZGluZzogNXB4IDVweDsgYm9yZGVyLWNvbG9yOiAjNzFDQUU1fVxyXG4uRGF0ZUNvbW1lbnR7dGV4dC1hbGlnbjogcmlnaHQ7fVxyXG5cclxuLmNvbG9yLWJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M4ZGJjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/common/pdf-viewer/pdf-viewer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/pdf-viewer/pdf-viewer.component.ts ***!
  \***********************************************************/
/*! exports provided: PdfViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfViewerComponent", function() { return PdfViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var popper_js_dist_umd_popper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popper.js/dist/umd/popper.js */ "./node_modules/popper.js/dist/umd/popper.js");
/* harmony import */ var popper_js_dist_umd_popper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(popper_js_dist_umd_popper_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_comentario_comentario_multimedia_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/comentario/comentario-multimedia.model */ "./src/app/services/comentario/comentario-multimedia.model.ts");






var PdfViewerComponent = /** @class */ (function () {
    function PdfViewerComponent() {
        this.comentarioPadre = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.CerrarComentario_Aceptar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.comentarioHijo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__;
        this.loadData = false;
        this.indiceCerrarComentario = 0;
        this.comentario = "";
        this.areaInfo = [];
        this.title = "ng-pdf-highlighter";
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
        this.lastMousePosition = { x: 0, y: 0 };
        this.canvasPosition = { x: 0, y: 0 };
        this.mousePosition = { x: 0, y: 0 };
        this.mouseDownFlag = false;
        this.pagePosition = { x: 0, y: 0 };
        this.element = null;
        // added new div when pages rendered
        this.indexOfPage = 1;
        this.showPopup = false;
        this.listRectangleId = "";
    }
    PdfViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadData = false;
        var x = 1;
        setTimeout(function () {
            debugger;
            _this.calcularTotales();
            _this.comentariosPdf.forEach(function (data) {
                if (data.coordenadas.x1 != 0) {
                    _this.areaInfo.push({
                        rectangleId: "rectangle-" + x,
                        pageNumber: x,
                        rect: {
                            x1: Number(data.coordenadas.x1),
                            y1: Number(data.coordenadas.y1),
                            x2: Number(data.coordenadas.x2),
                            y2: Number(data.coordenadas.y2),
                            width: Number(data.width),
                            height: Number(data.height)
                        },
                        comment: data.contenido,
                        commentsChildren: data.comentariosHijos,
                        isDelete: false,
                        text: ""
                    });
                }
                console.log(_this.areaInfo);
                debugger;
                x++;
                _this.rutaArchivo = _this.comentariosPdf[0].rutaArchivo;
                _this.loadData = true;
            });
        }, 2000);
    };
    PdfViewerComponent.prototype.mouseEvent = function (event) {
        if (!this.showPopup) {
            if (event.type === "mousemove") {
                this.mousePosition = {
                    x: event.clientX - this.pagePosition.x,
                    y: event.clientY - this.pagePosition.y
                };
                if (this.mouseDownFlag) {
                    var width = this.mousePosition.x - this.lastMousePosition.x;
                    var height = this.mousePosition.y - this.lastMousePosition.y;
                    this.rect = {
                        x1: this.lastMousePosition.x,
                        y1: this.lastMousePosition.y,
                        x2: this.mousePosition.x,
                        y2: this.mousePosition.y,
                        width: width,
                        height: height
                    };
                    if (this.element != null) {
                        this.element.style.width = width + "px";
                        this.element.style.height = height + "px";
                        if (this.rect.width > 0 && this.rect.height > 0) {
                            document
                                .getElementsByClassName("to-draw-rectangle")[this.dataPageNumber - 1].appendChild(this.element);
                        }
                    }
                }
            }
            if (event.type === "mousedown") {
                this.mouseDownFlag = true;
                var eventPath = event.path.find(function (p) { return p.className == "page"; });
                if (typeof eventPath !== "undefined") {
                    this.dataPageNumber = parseInt(eventPath.getAttribute("data-page-number")); // get id of page
                    var toDrawRectangle = document.getElementsByClassName("to-draw-rectangle");
                    var pageOffset = toDrawRectangle[this.dataPageNumber - 1].getBoundingClientRect();
                    this.pagePosition = {
                        x: pageOffset.left,
                        y: pageOffset.top
                    };
                    this.lastMousePosition = {
                        x: event.clientX - this.pagePosition.x,
                        y: event.clientY - this.pagePosition.y
                    };
                    var rectId = document.getElementsByClassName("rectangle").length + 1;
                    this.element = document.createElement("div");
                    this.element.className = "rectangle";
                    this.element.id = "rectangle-" + rectId;
                    this.element.style.position = "absolute";
                    this.element.style.border = "2px solid #0084FF";
                    this.element.style.borderRadius = "3px";
                    this.element.style.left = this.lastMousePosition.x + "px";
                    this.element.style.top = this.lastMousePosition.y + "px";
                }
            }
            if (event.type === "mouseup") {
                this.mouseDownFlag = false;
                if (this.rect.height > 0 && this.rect.width > 0) {
                    var popper = document.querySelector(".js-popper");
                    new popper_js_dist_umd_popper_js__WEBPACK_IMPORTED_MODULE_3__(this.element, popper, {
                        placement: "top-end"
                    });
                    this.showPopup = true;
                }
            }
        }
    };
    PdfViewerComponent.prototype.pageRendereds = function (e) {
        console.log("(page-rendered)", e.source.div);
        console.log(e.composedPath[0].page);
    };
    PdfViewerComponent.prototype.pageRendered = function (event) {
        var _this = this;
        var elem = document.createElement("div");
        elem.className = "to-draw-rectangle";
        elem.style.position = "absolute";
        elem.style.left = 0 + "px";
        elem.style.top = 0 + "px";
        elem.style.right = 0 + "px";
        elem.style.bottom = 0 + "px";
        elem.style.cursor = "crosshair";
        // elem.style.background = 'red';
        // elem.style.opacity = '0.4';
        event.source.div.appendChild(elem);
        jquery__WEBPACK_IMPORTED_MODULE_2__(".textLayer").addClass("disable-textLayer");
        var rectElem = this.areaInfo.find(function (f) { return f.pageNumber === _this.indexOfPage; });
        if (typeof rectElem !== "undefined") {
            var rectId = document.getElementsByClassName("rectangle").length + 1;
            var rect = document.createElement("div");
            rect.className = "rectangle";
            rect.id = "rectangle-" + rectId;
            rect.style.position = "absolute";
            rect.style.border = "2px solid #0084FF";
            rect.style.borderRadius = "3px";
            rect.style.left = rectElem.rect.x1 + "px";
            rect.style.top = rectElem.rect.y1 + "px";
            rect.style.width = rectElem.rect.width + "px";
            rect.style.height = rectElem.rect.height + "px";
            //get to-draw-rectangle div and add rectangle
            event.source.div.children[2].appendChild(rect);
        }
        this.indexOfPage++;
    };
    PdfViewerComponent.prototype.getStyle = function () {
        if (this.showPopup) {
            return "block";
        }
        else {
            return "none";
        }
    };
    PdfViewerComponent.prototype.save = function () {
        var areaInfo = {
            rectangleId: this.element.id,
            pageNumber: this.dataPageNumber,
            rect: this.rect,
            isDelete: false,
            comment: this.comment,
            commentsChildren: [],
            text: "",
            escierre: false,
            resuelto: false,
            cerrado: false,
            UsuarioComentario: "",
            fechaCreacion: new Date()
        };
        this.areaInfo.push(areaInfo);
        this.showPopup = false;
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
        this.comment = "";
        this.comentarioPadre.emit({
            coordenadas: areaInfo.rect,
            comentario: areaInfo.comment
        });
        debugger;
        var idComentario = localStorage.getItem("idComentario");
        var coord = new _services_comentario_comentario_multimedia_model__WEBPACK_IMPORTED_MODULE_5__["ComentarioMultimedia"]();
        coord.id = Number(localStorage.getItem("coordenadas"));
        coord.x1 = areaInfo.rect.x1;
        coord.y1 = areaInfo.rect.y1;
        coord.x2 = areaInfo.rect.x2;
        coord.y2 = areaInfo.rect.y2;
        this.comentariosPdf.push({
            id: idComentario,
            contenido: this.comment,
            coordenadas: coord,
            fechaCreacion: areaInfo.fechaCreacion,
            version: "",
            idUsuario: "",
            width: "",
            height: "",
            rutaArchivo: "",
            comentariosHijos: null,
            esCierre: false,
            cerrado: false,
            resuelto: false,
            UsuarioComentario: ""
        });
        this.calcularTotales();
        // logica para agregar comentario
    };
    PdfViewerComponent.prototype.addComment = function (posicionPadre) {
        this.comentarioHijo.emit({
            idComentarioPadre: this.comentariosPdf[posicionPadre].coordenadas.id,
            comentario: this.areaInfo[posicionPadre].text
        });
        this.areaInfo[posicionPadre].commentsChildren.push({
            id: "",
            contenido: this.areaInfo[posicionPadre].text,
            text: "",
            fechaCreacion: new Date(),
            version: "",
            idUsuario: "1",
            esCierre: false,
            UsuarioComentario: ""
        });
        this.areaInfo[posicionPadre].text = "";
    };
    PdfViewerComponent.prototype.cancel = function (event) {
        var rectId = this.element.getAttribute("id");
        jquery__WEBPACK_IMPORTED_MODULE_2__("#" + rectId).remove();
        this.showPopup = false;
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
    };
    PdfViewerComponent.prototype.seleccionarComentarioCerrado = function (i) {
        this.indiceCerrarComentario = i;
        this.seleccionado = this.comentariosPdf[i];
        console.log("i");
        console.log(i);
        console.log("i");
    };
    PdfViewerComponent.prototype.moveTo = function (list) {
        if (this.listRectangleId != "") {
            if (document.getElementById(this.listRectangleId)) {
                document.getElementById(this.listRectangleId).style.background =
                    "transparent";
                document.getElementById(this.listRectangleId).style.opacity = "1";
            }
        }
        if (this.listRectangleId !== list.rectangleId) {
            document
                .getElementById(list.rectangleId)
                .scrollIntoView({ block: "start", behavior: "smooth" });
            document.getElementById(list.rectangleId).style.background = "red";
            document.getElementById(list.rectangleId).style.opacity = "0.4";
            this.listRectangleId = list.rectangleId;
        }
    };
    PdfViewerComponent.prototype.seleccionarComentario = function (comentario) {
        this.seleccionado = comentario;
    };
    PdfViewerComponent.prototype.onComentarioChange = function (comentario) {
        this.comentario = comentario.editor.getData();
    };
    PdfViewerComponent.prototype.calcularTotales = function () {
        debugger;
        this.CantidadAbiertos = this.comentariosPdf.filter(function (x) { return x.cerrado === false && x.coordenadas.id != 0; }).length;
        this.CantidadCerrados = this.comentariosPdf.filter(function (x) { return x.cerrado === true && x.coordenadas.id != 0; }).length;
    };
    PdfViewerComponent.prototype.CerrarComentario = function () {
        debugger;
        this.coomentCierre = this.seleccionado;
        this.seleccionado.cerrado = true;
        if (this.myRadio == "resuelto") {
            this.coomentCierre.resuelto = true;
        }
        else {
            this.coomentCierre.resuelto = false;
        }
        this.coomentCierre.cerrado = true;
        console.log("coomentario cierre");
        this.coomentCierre.coordenadas = this.comentariosPdf[this.indiceCerrarComentario].coordenadas;
        console.log(this.coomentCierre);
        console.log("coomentario cierre");
        this.CerrarComentario_Aceptar.emit({
            seleccionado: this.coomentCierre,
            comentario: this.comentario
        });
        this.addCommentCierre(this.indiceCerrarComentario, this.comentario);
        this.MensajeModal = "Operacion realizada con exito";
        this.calcularTotales();
    };
    PdfViewerComponent.prototype.getItemComentario = function (i) {
        console.log(this.comentariosPdf[i]);
        return this.comentariosPdf[i];
    };
    PdfViewerComponent.prototype.addCommentCierre = function (posicionPadre, Comment) {
        this.areaInfo[posicionPadre].commentsChildren.push({
            id: "",
            contenido: Comment,
            text: "",
            fechaCreacion: new Date(),
            version: "",
            idUsuario: "1",
            esCierre: false,
            UsuarioComentario: "User actual"
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PdfViewerComponent.prototype, "comentariosPdf", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PdfViewerComponent.prototype, "comentarioPadre", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PdfViewerComponent.prototype, "CerrarComentario_Aceptar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PdfViewerComponent.prototype, "comentarioHijo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PdfViewerComponent.prototype, "Mensaje", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("pdfContainer"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PdfViewerComponent.prototype, "pdfContainer", void 0);
    PdfViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-pdf-viewer",
            template: __webpack_require__(/*! ./pdf-viewer.component.html */ "./src/app/common/pdf-viewer/pdf-viewer.component.html"),
            styles: [__webpack_require__(/*! ./pdf-viewer.component.scss */ "./src/app/common/pdf-viewer/pdf-viewer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PdfViewerComponent);
    return PdfViewerComponent;
}());



/***/ }),

/***/ "./src/app/components/HabilitarUsuario/Habilitar-Usuario.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/HabilitarUsuario/Habilitar-Usuario.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-margin{\r\n   margin-bottom: 20px;\r\n}\r\n\r\n.metadata-padding{\r\n  padding: 2px;\r\n}\r\n\r\n.spaceDer{\r\n  margin-right: 15px\r\n}\r\n\r\n.h3 {\r\n  font-size: 10px;\r\n}\r\n\r\n.Resultado{\r\n  font-size: 10;\r\n  color: orange;\r\n}\r\n\r\n.position{\r\n    float: right;\r\n}\r\n\r\n.color-back{\r\n    background-color: #3c8dbc;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9IYWJpbGl0YXJVc3VhcmlvL0hhYmlsaXRhci1Vc3VhcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxtQkFBbUI7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtBQUNGOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9IYWJpbGl0YXJVc3VhcmlvL0hhYmlsaXRhci1Vc3VhcmlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtbWFyZ2lue1xyXG4gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubWV0YWRhdGEtcGFkZGluZ3tcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5zcGFjZURlcntcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHhcclxufVxyXG4uaDMge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uUmVzdWx0YWRve1xyXG4gIGZvbnQtc2l6ZTogMTA7XHJcbiAgY29sb3I6IG9yYW5nZTtcclxufVxyXG4ucG9zaXRpb257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmNvbG9yLWJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M4ZGJjO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/HabilitarUsuario/Habilitar-Usuario.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/HabilitarUsuario/Habilitar-Usuario.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"marginH content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Habilitar usuario\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Agregar proyecto RED</li>\r\n      <li class=\"\">Habilitar usuario</li>\r\n    </ol>\r\n  </section>\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <!-- left column -->\r\n      <div class=\"col-md-12\">\r\n        <!-- general form elements -->\r\n\r\n        <div class=\"box box-primary\">\r\n          <form role=\"form\" [formGroup]=\"HabilitarForm\">\r\n            <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Para habilitar usuario en SISRED, favor ingrese la identificación</h3>\r\n            </div>\r\n            <div class=\"box-body\">\r\n              <input type=\"text\" class=\"col-sm-3 form-control\" id=\"usuario\" formControlName=\"usuario\">\r\n              <div class=\"col-sm-2\">\r\n                <button type=\"button\" (click)=\"User_Buscar()\"   class=\"btn btn-primary btn-sm btn-block\">Buscar</button>\r\n              </div>\r\n            </div>\r\n\r\n              <div class=\"box-body\">\r\n                <h3 class=\"box-title\">Información del usuario</h3>\r\n              </div>\r\n\r\n              <div class=\"box-body\">\r\n                  <table class=\"table table-bordered\">\r\n                    <tr>\r\n                      <td>Nombre</td>\r\n                      <td>\r\n                          <h3>{{usermodel?.first_name + ' ' + usermodel?.lastname}}</h3>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Correo</td>\r\n                        <td>\r\n                            <h3>{{usermodel?.email}}</h3>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n\r\n                        <td>\r\n                            <h3 class=\"Resultado\" *ngIf=\"UsuarioHabilitado===true\">El usuario ya se encuentra habilitado</h3>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n\r\n                        <td>\r\n                            <h3 class=\"Resultado\" *ngIf=\"UsuarioEncontrado===false\">no se encontraron usuarios asociados al Numero de identificación ingresado</h3>\r\n                        </td>\r\n                    </tr>\r\n                  </table>\r\n                <div class=\"col-sm-2\">\r\n                <button  *ngIf=\"showInputText===true\" type=\"button\" class=\"btn btn-primary btn-sm btn-block\" data-toggle=\"modal\" data-target=\"#myModal\">\r\n                    Habilitar\r\n                  </button>\r\n              </div>\r\n              </div>\r\n\r\n            </div>\r\n            <!-- /.box-body -->\r\n          </form>\r\n          <!-- /.box -->\r\n        </div>\r\n        <!-- /.box primary-->\r\n      </div>\r\n      <!--/.col (left) -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n  <div class=\"container\">\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header color-back\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>¿Está seguro de habilitar el usuario?</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" (click)=\"User_Habilitar()\"  class=\"btn btn-primary\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#myModalPass\">Aceptar</button>\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n  <div class=\"container\">\r\n    <!-- Modal -->\r\n    <div class=\"modal fade\" id=\"myModalPass\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header color-back\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <p>Usuario habilitado con exito</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n<!-- /.content-wrapper -->\r\n"

/***/ }),

/***/ "./src/app/components/HabilitarUsuario/Habilitar-Usuario.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/HabilitarUsuario/Habilitar-Usuario.component.ts ***!
  \****************************************************************************/
/*! exports provided: HabilitarUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HabilitarUsuarioComponent", function() { return HabilitarUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_HabilitarUsuario_habilita_usuario_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/HabilitarUsuario/habilita-usuario-client.service */ "./src/app/services/HabilitarUsuario/habilita-usuario-client.service.ts");




/**
 * Componente encargado del Detalle de un RED en especifico.
 */
var HabilitarUsuarioComponent = /** @class */ (function () {
    function HabilitarUsuarioComponent(habilitarUsuarioClientService) {
        this.habilitarUsuarioClientService = habilitarUsuarioClientService;
        this.showInputText = false;
        this.UsuarioHabilitado = false;
        this.UsuarioEncontrado = false;
        this.UsuarioHabilitado = false;
        this.UsuarioEncontrado = true;
        this.showInputText = false;
    }
    HabilitarUsuarioComponent.prototype.User_Habilitar = function () {
        var _this = this;
        this.showInputText = false;
        this.habilitarUsuarioClientService.User_Habilitar(this.usermodel.numero_identificacion).subscribe(function (response) {
            _this.usermodel = response[0];
        }, function (error) {
            console.log(error);
            alert('Usuario no pudo ser habilitado. ocurrió un error durante el proceso; favor comunicarse con el administrador del sistema ');
            _this.showInputText = false;
        });
    };
    HabilitarUsuarioComponent.prototype.User_Buscar = function () {
        var _this = this;
        this.UsuarioHabilitado = false;
        this.UsuarioEncontrado = true;
        this.showInputText = false;
        var UsuarioId = this.HabilitarForm.get('usuario').value;
        this.habilitarUsuarioClientService.User_Buscar(UsuarioId).subscribe(function (response) {
            _this.usermodel = response[0];
            _this.UsuarioEncontrado = true;
            if (_this.usermodel.estado == "1") {
                if (_this.usermodel.estado_sisred != "1") {
                    _this.showInputText = true;
                    _this.UsuarioHabilitado = false;
                }
                else {
                    _this.showInputText = false;
                    _this.UsuarioHabilitado = true;
                }
            }
            else {
                _this.showInputText = false;
            }
        }, function (error) {
            console.log(error);
            _this.UsuarioEncontrado = false;
            _this.showInputText = false;
            _this.usermodel = { "username": "",
                "email": "",
                "first_name": "",
                "lastname": "",
                "numero_identificacion": "",
                "estado": "",
                "estado_sisred": ""
            };
        });
    };
    HabilitarUsuarioComponent.prototype.ngOnInit = function () {
        this.HabilitarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            usuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.usermodel = { "username": "",
            "email": "",
            "first_name": "",
            "lastname": "",
            "numero_identificacion": "",
            "estado": "",
            "estado_sisred": ""
        };
        setup();
    };
    HabilitarUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-Habilitar-Usuario',
            template: __webpack_require__(/*! ./Habilitar-Usuario.component.html */ "./src/app/components/HabilitarUsuario/Habilitar-Usuario.component.html"),
            styles: [__webpack_require__(/*! ./Habilitar-Usuario.component.css */ "./src/app/components/HabilitarUsuario/Habilitar-Usuario.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_HabilitarUsuario_habilita_usuario_client_service__WEBPACK_IMPORTED_MODULE_3__["HabilitarUsuarioClientService"]])
    ], HabilitarUsuarioComponent);
    return HabilitarUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/components/add-red/add-red.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/add-red/add-red.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spaceDer{\r\n  margin-right: 15px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcmVkL2FkZC1yZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1yZWQvYWRkLXJlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlRGVye1xyXG4gIG1hcmdpbi1yaWdodDogMTVweFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/add-red/add-red.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/add-red/add-red.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Agregar proyecto RED        \r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>        \r\n      <li class=\"active\">Agregar proyecto RED</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <!-- left column -->\r\n      <div class=\"col-md-12\">\r\n        <!-- general form elements -->\r\n        <div class=\"box box-primary\">            \r\n          <!-- form start -->\r\n          <form role=\"form\" [formGroup]=\"addRedForm\">\r\n            <div class=\"box\">\r\n                <div class=\"box-header with-border\">\r\n                  <h3 class=\"box-title\">Ingrese la información del proyecto</h3>\r\n                </div>\r\n                <!-- /.box-header -->\r\n                <div class=\"box-body\">\r\n                  <table class=\"table table-bordered\">                      \r\n                    <tr>                    \r\n                      <td>Nombre</td>\r\n                      <td>\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n                      </td>                        \r\n                    </tr>\r\n                    <tr>                    \r\n                        <td>Tipo</td>\r\n                        <td>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"type\">\r\n                        </td>                        \r\n                    </tr>\r\n                    <tr>                    \r\n                      <td>Autor</td>\r\n                      <td>\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"author\">\r\n                      </td>                        \r\n                    </tr>                    \r\n                    <tr>                    \r\n                        <td>Fecha de creación</td>\r\n                        <td>\r\n                            <div class=\"input-group date\">\r\n                                <div class=\"input-group-addon\">\r\n                                  <i class=\"fa fa-calendar\"></i>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control pull-right\" id=\"datepickerdisabled\">\r\n                              </div>\r\n                        </td>                        \r\n                    </tr> \r\n                    <tr>                    \r\n                        <td>Descripción</td>\r\n                        <td>\r\n                            <textarea class=\"form-control\" rows=\"3\" placeholder=\"Ingrese la descripción\" formControlName=\"description\"></textarea>\r\n                        </td>                        \r\n                    </tr>\r\n                    <tr>                    \r\n                        <td>Seleccionar carpeta</td>\r\n                        <td>         \r\n                            <input\r\n                            #folderInput\r\n                            type=\"file\"\r\n                            webkitDirectory>                                                                         \r\n                        </td>                          \r\n                    </tr>\r\n                    <tr>                    \r\n                        <td>Carpeta</td>\r\n                        <td>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"folder\">\r\n                        </td>                        \r\n                    </tr>                                                        \r\n                  </table>\r\n                </div>\r\n                <!-- /.box-body -->            \r\n              </div>\r\n              <!-- /.box -->\r\n\r\n            <div class=\"box-footer\">\r\n              <button type=\"button\" (click)=\"goBack()\" class=\"btn btn-default spaceDer\">Cancelar</button>\r\n              <button type=\"submit\" class=\"btn btn-info\" (click)=\"filesPickedToArray(folderInput.files)\">Guardar</button>            \r\n            </div>\r\n            <!-- /.box-footer -->\r\n          </form>\r\n        </div>\r\n        <!-- /.box -->        \r\n      </div>\r\n      <!--/.col (left) -->\r\n      <!-- /.row -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->\r\n<ngx-spinner bdOpacity = 0.9bd Color = \"rgba(34,31,31,0)\" size = \"medium\"color = \"#000000\" type = \"ball-spin\" fullScreen = \"true\">\r\n<p style=\"color: white\" > Guardando... </p>\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/components/add-red/add-red.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/add-red/add-red.component.ts ***!
  \*********************************************************/
/*! exports provided: AddRedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRedComponent", function() { return AddRedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_proyectoRed_add_red_add_red_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/proyectoRed/add-red/add-red.service */ "./src/app/services/proyectoRed/add-red/add-red.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dropbox */ "./node_modules/dropbox/dist/Dropbox-sdk.min.js");
/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dropbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");








var AddRedComponent = /** @class */ (function () {
    function AddRedComponent(route, addRedService, location, spinner) {
        this.route = route;
        this.addRedService = addRedService;
        this.location = location;
        this.spinner = spinner;
    }
    AddRedComponent.prototype.ngOnInit = function () {
        setup();
        this.addRedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            folder: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            filetest: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    };
    AddRedComponent.prototype.addRed = function () {
        var result = this.addRedService.addRed(this.addRedForm.get('name').value, this.addRedForm.get('type').value, this.addRedForm.get('author').value, this.addRedForm.get('description').value, this.addRedForm.get('folder').value, this.route.snapshot.params.idRed);
    };
    //Método para subir un archivo individual
    AddRedComponent.prototype.uploadFile = function () {
        var ACCESS_TOKEN = 'I0Ng9kItu5AAAAAAAAAAHR16cYlxD2zh7tyDcSjg7cRFs0brDmSS088zp6kwqIEx';
        var dbx = new dropbox__WEBPACK_IMPORTED_MODULE_4__["Dropbox"]({ accessToken: ACCESS_TOKEN });
        var fileInput = document.getElementById('filetest');
        var file = fileInput.files[0];
        dbx.filesUpload({ path: '/' + file.name, contents: file })
            .then(function (response) {
            var results = document.getElementById('results');
            results.appendChild(document.createTextNode('File uploaded!'));
            console.log(response);
        })
            .catch(function (error) {
            console.error(error);
        });
        return false;
    };
    //Método que recibe un listado de archivos de una carpeta y crea un array
    AddRedComponent.prototype.filesPickedToArray = function (files) {
        var filesArray = new Array();
        var pathsArray = new Array();
        this.spinner.show();
        for (var i = 0; i < files.length; i++) {
            filesArray.push(files.item(i));
            pathsArray.push('files/');
            console.log(pathsArray[i]);
        }
        this.uploadFiles(filesArray, pathsArray);
    };
    //Método recursivo que recibe un array de archivos y los envía a una cuenta de dropbox referenciada por ACCESS_TOKEN
    AddRedComponent.prototype.uploadFiles = function (files, paths) {
        var ACCESS_TOKEN = '0Fz8QkIBsGAAAAAAAAAAC1NmfSLYluZgmCZCjfO8K18eQMH9GHRDQfQfUEuR0pqQ';
        var dbx = new dropbox__WEBPACK_IMPORTED_MODULE_4__["Dropbox"]({ accessToken: ACCESS_TOKEN });
        var newFiles = files.slice(0, files.length - 1);
        var newPaths = paths.slice(0, files.length - 1);
        if (files.length > 0) {
            for (var i = 0; i < files.length - 1; i++) {
                var file = files[i];
                newFiles.push();
            }
            console.log('/proyectored/' + files[files.length - 1].name);
            if (files[files.length - 1].name != '.DS_Store') {
                dbx.filesUpload({ path: '/' + this.addRedForm.get('folder').value + '/' + files[files.length - 1].name, contents: files[files.length - 1] })
                    .then(function (response) {
                    console.log(response);
                    if (files.length - 1 > 0) {
                        return this.uploadFiles(newFiles, newPaths);
                    }
                    else {
                        this.spinner.hide();
                        this.addRed();
                    }
                }.bind(this))
                    .catch(function (error) {
                    this.spinner.hide();
                    console.error(error);
                });
            }
            else {
                if (files.length - 1 > 0) {
                    return this.uploadFiles(newFiles, newPaths);
                }
                else {
                    this.spinner.hide();
                    this.addRed();
                }
            }
        }
        return;
    };
    AddRedComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddRedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-red',
            template: __webpack_require__(/*! ./add-red.component.html */ "./src/app/components/add-red/add-red.component.html"),
            styles: [__webpack_require__(/*! ./add-red.component.css */ "./src/app/components/add-red/add-red.component.css")]
        })
        /**
         * Componente con la lógica para agregar Proyectos al RED.
         */
        ,
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_proyectoRed_add_red_add_red_service__WEBPACK_IMPORTED_MODULE_2__["AddRedService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], AddRedComponent);
    return AddRedComponent;
}());



/***/ }),

/***/ "./src/app/components/agregar-recurso/agregar-recurso.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/agregar-recurso/agregar-recurso.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Agregar un Recurso      \r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>        \r\n      <li class=\"active\">Agregar un Recurso</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n<div class=\"container\">  \r\n  <form name=\"\" class=\"card\" [formGroup]=\"registerForm\">\r\n    <h2 #title name=\"title\">Agregar un Recurso</h2>\r\n    <p name=\"Loading\" [hidden]=\"!uploading\">Subiendo Archivo</p>\r\n    <p name=\"Loading\" [hidden]=\"!uploadSuccessful\">Finalizado exitosamente</p>\r\n    <button class=\"btn btn-primary\" type=\"button\" id=\"file btn\" [disabled]=\"FileSelected\" (click)=\"addFiles()\">Seleccionar Archivo</button>   \r\n    <input class=\"form-control\" type=\"file\" #file style=\"display: none\" (change)=\"onFilesAdded()\"/>\r\n    <table class=\"table form-horizontal\">\r\n        <tbody>\r\n            <tr>\r\n              <th scope=\"row\"></th>\r\n              <td><label for=\"nombre\" class=\"col-xs-6 control-label\">Nombre</label></td>\r\n              <td><input type=\"text\" class=\"col-xs-8 form-control\" id=\"nombre\" formControlName=\"nombre\"></td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\"></th>\r\n              <td><label for=\"tipo\" class=\"col-xs-6 control-label\">Tipo</label></td>\r\n              <td><input type=\"text\" class=\"col-xs-8 form-control\" id=\"tipo\" formControlName=\"tipo\"></td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\"></th>\r\n              <td><label for=\"autor\" class=\"col-xs-6 control-label\">Autor</label></td>\r\n              <td><input type=\"text\" class=\"col-xs-8 form-control\" id=\"autor\" formControlName=\"autor\"></td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\"></th>\r\n              <td><label for=\"fechaCreacion\" class=\"col-xs-6 control-label\">Fecha creación</label></td>\r\n              <td><input type=\"text\" class=\"col-xs-8 form-control\" id=\"fechaCreacion\" formControlName=\"fechaCreacion\"></td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\"></th>\r\n              <td><label for=\"descripcion\" class=\"col-xs-6 control-label\">Descripción</label></td>\r\n              <td><input type=\"textarea\" rows=\"4\" cols=\"50\" class=\"col-xs-8 form-control\" id=\"descripcion\" formControlName=\"descripcion\"></td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\"></th>\r\n              <td><button type=\"button\" class=\"btn btn-primary btn-md\" [disabled]=\"!registerForm.valid\" id=\"send\" name=\"send\" type=\"submit\" (click)=\"register()\">Guardar</button></td>\r\n              <td><button type=\"button\" class=\"btn btn-secondary btn-md\" (click)=\"goBack()\">Cancelar</button></td>\r\n            </tr>\r\n          </tbody>\r\n      </table>\r\n  </form>\r\n</div>\r\n</div>\r\n<!-- /.content-wrapper -->"

/***/ }),

/***/ "./src/app/components/agregar-recurso/agregar-recurso.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/agregar-recurso/agregar-recurso.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -o-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility; }\n\n.container {\n  max-width: 600px;\n  width: 100%;\n  margin: 0 auto;\n  position: relative; }\n\n#file {\n  visibility: hidden; }\n\n.card {\n  background: #F9F9F9;\n  padding: 25px;\n  margin: 20px 0;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); }\n\nh2 {\n  text-align: center;\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZ3JlZ2FyLXJlY3Vyc28vQzpcXFVzZXJzXFxzZXB1bHZlY1xcRG9jdW1lbnRzXFx1bmlhbmRlc1xcU0lTUkVELUZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhZ3JlZ2FyLXJlY3Vyc29cXGFncmVnYXItcmVjdXJzby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsa0NBQWtDLEVBQUE7O0FBRXRDO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQVEsa0JBQWtCLEVBQUE7O0FBRzFCO0VBQ0ksbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixjQUFjO0VBQ2QsMEVBQTBFLEVBQUE7O0FBRzlFO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZ3JlZ2FyLXJlY3Vyc28vYWdyZWdhci1yZWN1cnNvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtby1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNmaWxlIHsgdmlzaWJpbGl0eTogaGlkZGVuOyB9XHJcblxyXG5cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogI0Y5RjlGOTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/agregar-recurso/agregar-recurso.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/agregar-recurso/agregar-recurso.component.ts ***!
  \*************************************************************************/
/*! exports provided: AgregarRecursoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarRecursoComponent", function() { return AgregarRecursoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_recurso_agregar_agregar_recurso_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/recurso/agregar/agregar-recurso-client.service */ "./src/app/services/recurso/agregar/agregar-recurso-client.service.ts");







var AgregarRecursoComponent = /** @class */ (function () {
    function AgregarRecursoComponent(router, route, location, agregarRecursoRestClientService) {
        this.router = router;
        this.route = route;
        this.location = location;
        this.agregarRecursoRestClientService = agregarRecursoRestClientService;
        this.files = new Set();
        this.FileSelected = false;
        this.uploading = false;
        this.uploadSuccessful = false;
        this.today = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'dd/MM/yyyy', 'en-US');
        this.IdRed = this.route.snapshot.params['idRed'];
    }
    AgregarRecursoComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            autor: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            fechaCreacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
    };
    AgregarRecursoComponent.prototype.addFiles = function () {
        this.file.nativeElement.click();
    };
    AgregarRecursoComponent.prototype.onFilesAdded = function () {
        var files = this.file.nativeElement.files;
        for (var key in files) {
            if (!isNaN(parseInt(key))) {
                this.files.add(files[key]);
                this.FileSelected = true;
                this.registerForm.get('tipo').setValue(files[key].type);
                this.registerForm.get('fechaCreacion').setValue(this.today);
                this.registerForm.get('autor').setValue('Francisco Perneth');
                this.registerForm.controls.autor.disable();
                this.registerForm.controls.fechaCreacion.disable();
                this.registerForm.controls.tipo.disable();
                this.url = 'https://content.dropboxapi.com/2/files/download/' + files[key].name;
            }
        }
    };
    //function to upload file resource and register on database  related information
    AgregarRecursoComponent.prototype.register = function () {
        var _this = this;
        this.uploadSuccessful = false;
        var nombre = this.registerForm.get('nombre').value;
        var tipo = this.registerForm.get('tipo').value;
        var autor = this.registerForm.get('autor').value;
        var descripcion = this.registerForm.get('descripcion').value;
        var url = this.url;
        debugger;
        var recurso = { 'nombre': nombre, 'archivo': url, 'thumbnail': 'urlThumbnail',
            'tipo': tipo, 'descripcion': descripcion, 'autor': 1, 'idRed': this.IdRed };
        console.log(recurso);
        // set the component state to "uploading"
        this.uploading = true;
        // start the upload and save the progress map
        this.agregarRecursoRestClientService.register(recurso).subscribe(function (response) {
            console.log(response);
            _this.progress = _this.agregarRecursoRestClientService.upload(_this.files);
            // convert the progress map into an array
            var allProgressObservables = [];
            for (var key in _this.progress) {
                allProgressObservables.push(_this.progress[key].progress);
            }
            // When all progress-observables are completed...
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(allProgressObservables).subscribe(function (end) {
                if (end[0] === 100) {
                    _this.uploadSuccessful = true;
                    // ... and the component is no longer uploading
                    _this.uploading = false;
                    _this.registerForm.reset();
                    _this.files.clear();
                    _this.FileSelected = false;
                    _this.registerForm.controls.autor.enable();
                    _this.registerForm.controls.fechaCreacion.enable();
                    _this.registerForm.controls.tipo.enable();
                }
            });
        }, function (error) {
            console.log(error);
            _this.uploadSuccessful = false;
            _this.uploading = false;
            alert('Formulario Invalido');
            _this.registerForm.reset();
        });
    };
    ;
    AgregarRecursoComponent.prototype.goBack = function () {
        this.location.back();
    };
    ;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AgregarRecursoComponent.prototype, "file", void 0);
    AgregarRecursoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agregar-recurso',
            template: __webpack_require__(/*! ./agregar-recurso.component.html */ "./src/app/components/agregar-recurso/agregar-recurso.component.html"),
            styles: [__webpack_require__(/*! ./agregar-recurso.component.scss */ "./src/app/components/agregar-recurso/agregar-recurso.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            src_app_services_recurso_agregar_agregar_recurso_client_service__WEBPACK_IMPORTED_MODULE_6__["AgregarRecursoClientService"]])
    ], AgregarRecursoComponent);
    return AgregarRecursoComponent;
}());



/***/ }),

/***/ "./src/app/components/buscar-recurso/buscar-recurso.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/buscar-recurso/buscar-recurso.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVzY2FyLXJlY3Vyc28vYnVzY2FyLXJlY3Vyc28uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/buscar-recurso/buscar-recurso.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/buscar-recurso/buscar-recurso.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Buscar Recursos\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Buscar Recursos</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <!-- left column -->\r\n      <div class=\"col-md-12\">\r\n        <!-- general form elements -->\r\n        <div class=\"box box-primary\">\r\n          <!-- form start -->\r\n          <form role=\"form\" [formGroup]=\"buscarRecursoForm\">\r\n            <div class=\"box\">\r\n                <div class=\"box-header with-border\">\r\n                  <h3 class=\"box-title\">Complete los filtros de búsqueda</h3>\r\n                </div>\r\n                <!-- /.box-header -->\r\n                <div class=\"box-body\">\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"nombre\">Nombre</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"nombre\" formControlName=\"nombre\">\r\n                  </div>\r\n                  <div class=\"form-group\" style=\"display: flex; align-items: center;\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"fechaDesde\">Fecha creación desde</label>\r\n                      <div class=\"input-group date\" (click)=\"d1.open()\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" ngbDatepicker #d1=\"ngbDatepicker\" formControlName=\"fechaDesde\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"fechaHasta\">Fecha creación hasta</label>\r\n                      <div class=\"input-group\" (click)=\"d2.open()\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" ngbDatepicker #d2=\"ngbDatepicker\" formControlName=\"fechaHasta\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"tag\">Tag metadata</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"tag\" formControlName=\"tag\">\r\n                  </div>\r\n                </div>\r\n                <!-- /.box-body -->\r\n              </div>\r\n              <!-- /.box -->\r\n\r\n            <div class=\"box-footer\">\r\n              <button type=\"submit\" (click)=\"buscarRecurso()\" class=\"btn btn-default\">Buscar</button>\r\n            </div>\r\n            <!-- /.box-footer -->\r\n          </form>\r\n\r\n          <div class=\"box\">\r\n            <div class=\"box-header\">\r\n              <h3 class=\"box-title\">Resultados de la búsqueda</h3>\r\n            </div>\r\n            <div class=\"box-body\">\r\n              <div *ngIf=\"recursos.length !== 0\">\r\n                <table class=\"table\" >\r\n                  <thead>\r\n                    <tr>\r\n                      <th scope=\"col\">Nombre del Recurso</th>\r\n                      <th scope=\"col\">Descripción</th>\r\n                      <th scope=\"col\">Fecha de creación</th>\r\n                      <th scope=\"col\">Tipo</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let recurso of recursosSinRepetir.slice((pagina-1)*paginaSize, pagina*paginaSize)\">\r\n                      <td>{{recurso.nombre}}</td>\r\n                      <td>{{recurso.descripcion}}</td>\r\n                      <td>{{recurso.fecha_creacion}}</td>\r\n                      <td>{{recurso.tipo}}</td>\r\n                      <td>\r\n                        <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/getRecurso/' + recurso.id]\">\r\n                          Ver detalle\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <ngb-pagination class=\"d-flex justify-content-center\" *ngIf=\"recursos.length > paginaSize\" [collectionSize]=\"recursosSinRepetir.length\" [(page)]=\"pagina\" [maxSize]=\"5\" [pageSize]=\"paginaSize\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n              </div>\r\n              <span *ngIf=\"recursos.length === 0\">Sin Resultados</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- /.box -->\r\n      </div>\r\n      <!--/.col (left) -->\r\n      <!-- /.row -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->\r\n<ngx-spinner bdOpacity = 0.9bd Color = \"rgba(34,31,31,0)\" size = \"medium\" color = \"#000000\" type = \"ball-spin\" fullScreen = \"true\">\r\n  <p style=\"color: white\"> Cargando... </p>\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/components/buscar-recurso/buscar-recurso.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/buscar-recurso/buscar-recurso.component.ts ***!
  \***********************************************************************/
/*! exports provided: BuscarRecursoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarRecursoComponent", function() { return BuscarRecursoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_recurso_buscar_recurso_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/recurso/buscar-recurso.service */ "./src/app/services/recurso/buscar-recurso.service.ts");





var BuscarRecursoComponent = /** @class */ (function () {
    function BuscarRecursoComponent(buscarRecursoService, spinner) {
        this.buscarRecursoService = buscarRecursoService;
        this.spinner = spinner;
        this.recursos = [];
        this.recursosSinRepetir = [];
        this.pagina = 1;
        this.paginaSize = 5;
        this.cargando = false;
    }
    BuscarRecursoComponent.prototype.ngOnInit = function () {
        setup();
        this.buscarRecursoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            fechaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            tag: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    };
    BuscarRecursoComponent.prototype.buscarRecurso = function () {
        var _this = this;
        this.recursos = [{
                id: '1',
                nombre: 'mi red',
                archivo: 'mi red',
                thumbnail: 'esta es una descripción',
                fecha_creacion: '2019-02-12',
                fecha_ultima_modificacion: '2019-04-22',
                tipo: 'string',
                descripcion: '1',
                metadata: '3',
                autor: 'string',
                usuario_ultima_modificacion: '1',
            },];
        console.log({
            fecha_creacion: this.buscarRecursoForm.get('fechaDesde').value,
            nombre: this.buscarRecursoForm.get('nombre').value,
        });
        this.cargando = true;
        this.spinner.show();
        this.buscarRecursoService.buscarRecursos(this.buscarRecursoForm.get('nombre').value, this.formatFecha(this.buscarRecursoForm.get('fechaDesde').value), this.formatFecha(this.buscarRecursoForm.get('fechaHasta').value), this.buscarRecursoForm.get('tag').value)
            .then(function (recursos) {
            console.log(recursos);
            _this.spinner.hide();
            _this.recursos = recursos;
            _this.eliminarRepetidos();
        })
            .catch(function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    BuscarRecursoComponent.prototype.formatFecha = function (fecha) {
        var res = null;
        if (fecha !== null) {
            var year = fecha.year;
            var month = fecha.month < 10 ? "0" + fecha.month : fecha.month;
            var day = fecha.day < 10 ? "0" + fecha.day : fecha.day;
            res = year + "-" + month + "-" + day;
        }
        return res;
    };
    BuscarRecursoComponent.prototype.eliminarRepetidos = function () {
        this.recursosSinRepetir = [];
        var _loop_1 = function (recurso) {
            if (this_1.recursosSinRepetir.filter(function (r) { return r.id === recurso.id; }).length === 0) {
                this_1.recursosSinRepetir.push(recurso);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.recursos; _i < _a.length; _i++) {
            var recurso = _a[_i];
            _loop_1(recurso);
        }
    };
    BuscarRecursoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buscar-recurso',
            template: __webpack_require__(/*! ./buscar-recurso.component.html */ "./src/app/components/buscar-recurso/buscar-recurso.component.html"),
            styles: [__webpack_require__(/*! ./buscar-recurso.component.css */ "./src/app/components/buscar-recurso/buscar-recurso.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_recurso_buscar_recurso_service__WEBPACK_IMPORTED_MODULE_4__["BuscarRecursoService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], BuscarRecursoComponent);
    return BuscarRecursoComponent;
}());



/***/ }),

/***/ "./src/app/components/buscar-red/buscar-red.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/buscar-red/buscar-red.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVzY2FyLXJlZC9idXNjYXItcmVkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/buscar-red/buscar-red.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/buscar-red/buscar-red.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Buscar REDs\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>        \r\n      <li class=\"active\">Buscar REDs</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <!-- left column -->\r\n      <div class=\"col-md-12\">\r\n        <!-- general form elements -->\r\n        <div class=\"box box-primary\">            \r\n          <!-- form start -->\r\n          <form role=\"form\" [formGroup]=\"buscarRedForm\">\r\n            <div class=\"box\">\r\n                <div class=\"box-header with-border\">\r\n                  <h3 class=\"box-title\">Complete los filtros de búsqueda</h3>\r\n                </div>\r\n                <!-- /.box-header -->\r\n                <div class=\"box-body\">\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"fechaInicio\">fecha inicio</label>\r\n                    <div class=\"input-group date\" (click)=\"d1.open()\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" ngbDatepicker #d1=\"ngbDatepicker\" formControlName=\"fechaInicio\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"fechaCierre\">fecha cierre</label>\r\n                    <div class=\"input-group\" (click)=\"d2.open()\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" ngbDatepicker #d2=\"ngbDatepicker\" formControlName=\"fechaCierre\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"palabra\">texto</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"texto\" formControlName=\"palabra\">\r\n                  </div>\r\n                </div>\r\n                <!-- /.box-body -->            \r\n              </div>\r\n              <!-- /.box -->\r\n\r\n            <div class=\"box-footer\">\r\n              <button type=\"submit\" class=\"btn btn-default\" (click)=\"buscarRed()\">Buscar</button>            \r\n            </div>\r\n            <!-- /.box-footer -->\r\n          </form>\r\n\r\n          <div class=\"box\">\r\n            <div class=\"box-header\">\r\n              <h3 class=\"box-title\">Resultados de la búsqueda</h3>\r\n            </div>\r\n            <div class=\"box-body\">\r\n              <div *ngIf=\"reds.length !== 0\">\r\n                <table class=\"table\" >\r\n                  <thead>\r\n                    <tr>\r\n                      <th scope=\"col\">Nombre del RED</th>\r\n                      <th scope=\"col\">Descripción</th>\r\n                      <th scope=\"col\">Fecha de inicio</th>\r\n                      <th scope=\"col\">Fecha de cierre</th>\r\n                      <th scope=\"col\">Tipo</th>\r\n                      <th scope=\"col\">Detalle</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let red of redsSinRepetir.slice((pagina-1)*paginaSize, pagina*paginaSize)\">\r\n                      <td>{{red.nombre}}</td>\r\n                      <td>{{red.descripcion}}</td>\r\n                      <td>{{red.fechaInicio}}</td>\r\n                      <td>{{red.fechaCierre}}</td>\r\n                      <td>{{red.tipo}}</td>\r\n                      <td>\r\n                        <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/red/' + red.id + '/detalle']\">\r\n                          Ver detalle\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <ngb-pagination class=\"d-flex justify-content-center\" *ngIf=\"reds.length > paginaSize\" [collectionSize]=\"redsSinRepetir.length\" [(page)]=\"pagina\" [maxSize]=\"5\" [pageSize]=\"paginaSize\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n              </div>\r\n              <span *ngIf=\"reds.length === 0\">Sin Resultados</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- /.box -->        \r\n      </div>\r\n      <!--/.col (left) -->\r\n      <!-- /.row -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->\r\n<ngx-spinner bdOpacity = 0.9bd Color = \"rgba(34,31,31,0)\" size = \"medium\" color = \"#000000\" type = \"ball-spin\" fullScreen = \"true\">\r\n  <p style=\"color: white\"> Cargando... </p>\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/components/buscar-red/buscar-red.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/buscar-red/buscar-red.component.ts ***!
  \***************************************************************/
/*! exports provided: BuscarRedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarRedComponent", function() { return BuscarRedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _services_red_buscar_reds_buscar_reds_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/red/buscar-reds/buscar-reds.service */ "./src/app/services/red/buscar-reds/buscar-reds.service.ts");





var BuscarRedComponent = /** @class */ (function () {
    function BuscarRedComponent(buscarRedsService, spinner) {
        this.buscarRedsService = buscarRedsService;
        this.spinner = spinner;
        this.userId = 5;
        this.reds = [];
        this.redsSinRepetir = [];
        this.pagina = 1;
        this.paginaSize = 5;
    }
    BuscarRedComponent.prototype.ngOnInit = function () {
        setup();
        this.buscarRedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fechaInicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            fechaCierre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            palabra: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    };
    BuscarRedComponent.prototype.buscarRed = function () {
        var _this = this;
        this.spinner.show();
        this.buscarRedsService.buscarReds(this.userId, this.formatFecha(this.buscarRedForm.get('fechaInicio').value), this.formatFecha(this.buscarRedForm.get('fechaCierre').value), this.buscarRedForm.get('palabra').value)
            .then(function (reds) {
            console.log(reds);
            _this.spinner.hide();
            _this.reds = reds;
            _this.eliminarRepetidos();
            _this.pagina = 1;
        })
            .catch(function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    BuscarRedComponent.prototype.formatFecha = function (fecha) {
        var res = null;
        if (fecha !== null) {
            var year = fecha.year;
            var month = fecha.month < 10 ? "0" + fecha.month : fecha.month;
            var day = fecha.day < 10 ? "0" + fecha.day : fecha.day;
            res = year + "-" + month + "-" + day;
        }
        return res;
    };
    BuscarRedComponent.prototype.eliminarRepetidos = function () {
        this.redsSinRepetir = [];
        var _loop_1 = function (red) {
            if (this_1.redsSinRepetir.filter(function (r) { return r.id === red.id; }).length === 0) {
                this_1.redsSinRepetir.push(red);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.reds; _i < _a.length; _i++) {
            var red = _a[_i];
            _loop_1(red);
        }
    };
    BuscarRedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buscar-red',
            template: __webpack_require__(/*! ./buscar-red.component.html */ "./src/app/components/buscar-red/buscar-red.component.html"),
            styles: [__webpack_require__(/*! ./buscar-red.component.css */ "./src/app/components/buscar-red/buscar-red.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_red_buscar_reds_buscar_reds_service__WEBPACK_IMPORTED_MODULE_4__["BuscarRedsService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], BuscarRedComponent);
    return BuscarRedComponent;
}());



/***/ }),

/***/ "./src/app/components/comentar-imagen/comentar-imagen.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/comentar-imagen/comentar-imagen.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comentario:hover {\r\n    background-color: #f2f2f2;\r\n    cursor: pointer;\r\n}\r\n\r\n.selected {\r\n    background-color: #e8f4fd;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21lbnRhci1pbWFnZW4vY29tZW50YXItaW1hZ2VuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tZW50YXItaW1hZ2VuL2NvbWVudGFyLWltYWdlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbWVudGFyaW86aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGY0ZmQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/comentar-imagen/comentar-imagen.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/comentar-imagen/comentar-imagen.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"marginH content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Comentar archivo de versión\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li>REDs</li>\r\n      <li>Versiones</li>\r\n      <li class=\"active\">Comentar archivo</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <!-- left column -->\r\n      <div class=\"col-md-12\">\r\n        <!-- general form elements -->\r\n\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box\">\r\n\r\n            <div class=\"box-body\">\r\n                <canvas #myCanvas width=\"400\" height=\"400\" \r\n                style=\"background:lightgray;\" \r\n                (mousedown)=\"mdEvent($event)\" \r\n                (mouseup)=\"muEvent($event)\" \r\n                (mousemove)=\"mmEvent($event)\">\r\n                </canvas>\r\n                <div *ngIf=\"mostrarCaja\">\r\n                  <ckeditor [editor]=\"Editor\" (change)=\"onChangeComentario($event)\"></ckeditor>\r\n                  <button class=\"btn btn-default\" (click)=\"initCanvas()\">Cancelar</button>\r\n                  <button class=\"btn btn-primary\" (click)=\"publicarComentario()\">Comentar</button>\r\n                </div>\r\n                <div *ngFor=\"let coment of comentarios.reverse()\" (click)=\"seleccionarComentario(coment)\" class=\"box comentario\" [class.selected]=\"coment===seleccionado\">\r\n                  <div class=\"box-header with-border row\">\r\n                    <div class=\"col-sm-6 info text-bold\">{{coment.usuario}}</div>\r\n                    <div class=\"col-sm-6 info right\">{{coment.fechaCreacion}}</div>\r\n                  </div>\r\n                  <div class=\"box-body\" [innerHTML]=\"coment.contenido\"></div>\r\n                </div>\r\n            </div>\r\n            <!-- /.box-body -->\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n        <!-- /.box primary-->\r\n      </div>\r\n      <!--/.col (left) -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->\r\n"

/***/ }),

/***/ "./src/app/components/comentar-imagen/comentar-imagen.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/comentar-imagen/comentar-imagen.component.ts ***!
  \*************************************************************************/
/*! exports provided: ComentarImagenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentarImagenComponent", function() { return ComentarImagenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_comentario_comentar_imagen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/comentario/comentar-imagen.service */ "./src/app/services/comentario/comentar-imagen.service.ts");





var ComentarImagenComponent = /** @class */ (function () {
    function ComentarImagenComponent(route, comentarImagenService) {
        this.route = route;
        this.comentarImagenService = comentarImagenService;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        this.usuarioId = 5;
        this.drag = false;
        this.comentarios = [];
        this.comentario = '';
    }
    ComentarImagenComponent.prototype.mdEvent = function (e) {
        //persist starting position
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.drag = true;
    };
    ComentarImagenComponent.prototype.mmEvent = function (e) {
        if (this.drag && this.recurso) {
            //redraw image on canvas
            var base_image_1 = new Image();
            base_image_1.src = this.recurso.url;
            var context_1 = this.myCanvas.nativeElement.getContext("2d");
            var sx_1 = this.startX;
            var sy_1 = this.startY;
            var canvasTop_1 = this.myCanvas.nativeElement.getBoundingClientRect().top;
            var canvasLeft_1 = this.myCanvas.nativeElement.getBoundingClientRect().left;
            base_image_1.onload = function () {
                context_1.canvas.height = base_image_1.height;
                context_1.canvas.width = base_image_1.width;
                context_1.drawImage(base_image_1, 0, 0);
                //draw rectangle on canvas
                var x = sx_1 - canvasLeft_1;
                var y = sy_1 - canvasTop_1;
                var w = e.clientX - canvasLeft_1 - x;
                var h = e.clientY - canvasTop_1 - y;
                context_1.strokeStyle = 'rgba(255,0,0,100)';
                context_1.fillStyle = 'rgba(255,180,180,0.7)';
                context_1.strokeRect(x, y, w, h);
                context_1.fillRect(x, y, w, h);
            };
        }
    };
    ComentarImagenComponent.prototype.muEvent = function (e) {
        //draw final rectangle on canvas
        var x = this.x1 = this.startX - this.myCanvas.nativeElement.getBoundingClientRect().left;
        var y = this.y1 = this.startY - this.myCanvas.nativeElement.getBoundingClientRect().top;
        var w = e.clientX - this.myCanvas.nativeElement.getBoundingClientRect().left - x;
        var h = e.clientY - this.myCanvas.nativeElement.getBoundingClientRect().top - y;
        this.x2 = w + x;
        this.y2 = h + y;
        this.myCanvas.nativeElement.getContext("2d").setLineDash([0]);
        this.myCanvas.nativeElement.getContext("2d").strokeRect(x, y, w, h);
        var ctx = CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext("2d");
        this.mostrarCaja = true;
        this.drag = false;
        this.seleccionado = undefined;
    };
    ComentarImagenComponent.prototype.ngOnInit = function () {
        setup();
        this.idVersion = this.route.snapshot.params.idVersion;
        this.idRecurso = this.route.snapshot.params.idRecurso;
        this.getRecurso();
        this.getComentarios();
    };
    ComentarImagenComponent.prototype.initCanvas = function () {
        var base_image = new Image();
        var context = this.myCanvas.nativeElement.getContext("2d");
        base_image.onload = function () {
            context.canvas.height = base_image.height;
            context.canvas.width = base_image.width;
            context.drawImage(base_image, 0, 0);
        };
        base_image.src = this.recurso.url;
        this.mostrarCaja = false;
        this.seleccionado = undefined;
    };
    ComentarImagenComponent.prototype.dibujar = function (x1, x2, y1, y2) {
        var base_image = new Image();
        var context = this.myCanvas.nativeElement.getContext("2d");
        base_image.onload = function () {
            context.canvas.height = base_image.height;
            context.canvas.width = base_image.width;
            context.drawImage(base_image, 0, 0);
            context.strokeStyle = 'rgba(255,0,0,100)';
            context.fillStyle = 'rgba(255,180,180,0.7)';
            context.setLineDash([0]);
            context.strokeRect(x1, y1, x2 - x1, y2 - y1);
            context.fillRect(x1, y1, x2 - x1, y2 - y1);
        };
        base_image.src = this.recurso.url;
        this.mostrarCaja = true;
    };
    ComentarImagenComponent.prototype.onChangeComentario = function (comentario) {
        this.comentario = comentario.editor.getData();
    };
    ComentarImagenComponent.prototype.getRecurso = function () {
        var _this = this;
        this.comentarImagenService.obtenerDetallesRecurso(this.idRecurso)
            .then(function (response) {
            _this.recurso = response;
            _this.getImagenRecurso();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ComentarImagenComponent.prototype.getImagenRecurso = function () {
        var _this = this;
        this.comentarImagenService.getImagenRecurso(this.recurso.archivo)
            .then(function (response) {
            _this.recurso.url = response.link;
            _this.initCanvas();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ComentarImagenComponent.prototype.getComentarios = function () {
        var _this = this;
        this.comentarImagenService.obtenerListaComentarios(this.idVersion, this.idRecurso)
            .then(function (response) {
            _this.comentarios = response;
            console.log(response);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ComentarImagenComponent.prototype.publicarComentario = function () {
        if (this.seleccionado) {
            this.publicarComentarioAreaExistente();
        }
        else {
            this.publicarComentarioAreaNueva();
        }
    };
    ComentarImagenComponent.prototype.publicarComentarioAreaNueva = function () {
        var _this = this;
        this.comentarImagenService.guardarComentarioNuevo(this.comentario, this.usuarioId, this.x1, this.x2, this.y1, this.y2, this.idVersion, this.idRecurso)
            .subscribe(function (data) {
            console.log(data);
            _this.getComentarios();
            _this.mostrarCaja = false;
            _this.seleccionado = undefined;
        }, function (err) {
            console.log(err);
            alert(err);
        });
    };
    ComentarImagenComponent.prototype.publicarComentarioAreaExistente = function () {
        var _this = this;
        this.comentarImagenService.guardarComentarioExistente(this.comentario, this.usuarioId, this.seleccionado.comentarioMultimedia.id, this.idVersion, this.idRecurso)
            .subscribe(function (data) {
            console.log(data);
            _this.getComentarios();
            _this.mostrarCaja = false;
            _this.seleccionado = undefined;
        }, function (err) {
            console.log(err);
            alert(err);
        });
    };
    ComentarImagenComponent.prototype.seleccionarComentario = function (comentario) {
        this.seleccionado = comentario;
        this.dibujar(comentario.comentarioMultimedia.x1, comentario.comentarioMultimedia.x2, comentario.comentarioMultimedia.y1, comentario.comentarioMultimedia.y2);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("myCanvas"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], ComentarImagenComponent.prototype, "myCanvas", void 0);
    ComentarImagenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-comentar-imagen',
            template: __webpack_require__(/*! ./comentar-imagen.component.html */ "./src/app/components/comentar-imagen/comentar-imagen.component.html"),
            styles: [__webpack_require__(/*! ./comentar-imagen.component.css */ "./src/app/components/comentar-imagen/comentar-imagen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_comentario_comentar_imagen_service__WEBPACK_IMPORTED_MODULE_4__["ComentarImagenService"]])
    ], ComentarImagenComponent);
    return ComentarImagenComponent;
}());



/***/ }),

/***/ "./src/app/components/comentarios-version-video/comentarios-version-video.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/comentarios-version-video/comentarios-version-video.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n\ttext-align:center;\r\n\tbackground: url(\"https://www.toptal.com/designers/subtlepatterns/patterns/topography.png\");\r\n}\r\nbody *{\r\n\toutline: none;\r\n}\r\n.video-js{\r\n\tmargin: 30px auto;\r\n\tbox-shadow: 0px 0px 50px 25px rgba(255,255,255,.9);\r\n\tborder: 1px solid #e2e2e2;\r\n}\r\n#test-control-panel{\r\n\tmargin: 50px auto;\r\n\twidth: 50%;\r\n\theight: auto;\r\n\tbackground-color: #fff;\r\n\tborder: 2px solid #0097b1;\r\n\tdisplay: flex;\r\n  \tflex-wrap: wrap;\r\n}\r\n.control-section {\r\n\twidth: 26%;\r\n    border: 1px #0097b1 solid;\r\n    padding: 2%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 5px;\r\n}\r\np {\r\n\tfont-size: 0.9em;\r\n}\r\n.event-type {\r\n\tfont-size: 1.1em;\r\n}\r\n#mocha {\r\n\ttext-align: left;\r\n\twidth: 50%;\r\n\tfloat: left;\r\n}\r\n#mocha-video-container {\r\n\tfloat: left;\r\n\twidth: 40%;\r\n\tmargin-top: 50px;\r\n\tposition: fixed;\r\n\tright: 6%;\r\n}\r\n.hidden {\r\n\tdisplay:none;\r\n}\r\n.comment-wrapper .panel-body {\r\n    max-height:650px;\r\n    overflow:auto;\r\n}\r\n.comment-wrapper .media-list .media img {\r\n    width:64px;\r\n    height:64px;\r\n    border:2px solid #e5e7e8;\r\n}\r\n.comment-wrapper .media-list .media {\r\n    border-bottom:1px dashed #efefef;\r\n    margin-bottom:25px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL3BhZ2UuY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbWVudGFyaW9zLXZlcnNpb24tdmlkZW8vY29tZW50YXJpb3MtdmVyc2lvbi12aWRlby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCLDBGQUEwRjtBQUMzRjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsa0RBQWtEO0NBQ2xELHlCQUF5QjtBQUMxQjtBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLFVBQVU7Q0FDVixZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixhQUFhO0dBQ1gsZUFBZTtBQUNsQjtBQUVBO0NBQ0MsVUFBVTtJQUNQLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLFdBQVc7QUFDWjtBQUNBO0NBQ0MsV0FBVztDQUNYLFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLFNBQVM7QUFDVjtBQUVBO0NBQ0MsWUFBWTtBQUNiO0FDckRBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21lbnRhcmlvcy12ZXJzaW9uLXZpZGVvL2NvbWVudGFyaW9zLXZlcnNpb24tdmlkZW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0YmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly93d3cudG9wdGFsLmNvbS9kZXNpZ25lcnMvc3VidGxlcGF0dGVybnMvcGF0dGVybnMvdG9wb2dyYXBoeS5wbmdcIik7XHJcbn1cclxuYm9keSAqe1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnZpZGVvLWpze1xyXG5cdG1hcmdpbjogMzBweCBhdXRvO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggNTBweCAyNXB4IHJnYmEoMjU1LDI1NSwyNTUsLjkpO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XHJcbn1cclxuXHJcbiN0ZXN0LWNvbnRyb2wtcGFuZWx7XHJcblx0bWFyZ2luOiA1MHB4IGF1dG87XHJcblx0d2lkdGg6IDUwJTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjMDA5N2IxO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgXHRmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jb250cm9sLXNlY3Rpb24ge1xyXG5cdHdpZHRoOiAyNiU7XHJcbiAgICBib3JkZXI6IDFweCAjMDA5N2IxIHNvbGlkO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5wIHtcclxuXHRmb250LXNpemU6IDAuOWVtO1xyXG59XHJcblxyXG4uZXZlbnQtdHlwZSB7XHJcblx0Zm9udC1zaXplOiAxLjFlbTtcclxufVxyXG5cclxuI21vY2hhIHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuI21vY2hhLXZpZGVvLWNvbnRhaW5lciB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6IDQwJTtcclxuXHRtYXJnaW4tdG9wOiA1MHB4O1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRyaWdodDogNiU7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG5cdGRpc3BsYXk6bm9uZTtcclxufVxyXG4iLCJAaW1wb3J0IHVybCguLi8uLi8uLi9hc3NldHMvY3NzL3BhZ2UuY3NzKTtcclxuXHJcbi5jb21tZW50LXdyYXBwZXIgLnBhbmVsLWJvZHkge1xyXG4gICAgbWF4LWhlaWdodDo2NTBweDtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbn1cclxuXHJcbi5jb21tZW50LXdyYXBwZXIgLm1lZGlhLWxpc3QgLm1lZGlhIGltZyB7XHJcbiAgICB3aWR0aDo2NHB4O1xyXG4gICAgaGVpZ2h0OjY0cHg7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICNlNWU3ZTg7XHJcbn1cclxuXHJcbi5jb21tZW50LXdyYXBwZXIgLm1lZGlhLWxpc3QgLm1lZGlhIHtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IGRhc2hlZCAjZWZlZmVmO1xyXG4gICAgbWFyZ2luLWJvdHRvbToyNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/comentarios-version-video/comentarios-version-video.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/comentarios-version-video/comentarios-version-video.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Agregar Comentarios a Video\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Agregar Comentarios a Video</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <!-- Video -->\r\n        <div id=\"video_wrap\">\r\n          <div *ngFor=\"let pathVideo of respuestaVideo\">\r\n            <video id='my-video' class='video-js' controls preload='auto' width='720' height='405'\r\n                   data-setup='{}'>\r\n              <source src={{pathVideo.url}} type='video/mp4'>\r\n            </video>\r\n          </div>\r\n          <!-- Lista comentarios -->\r\n          <div class=\"row bootstrap snippets\">\r\n            <div class=\"col-md-8 col-md-offset-2 col-sm-12\">\r\n              <div class=\"comment-wrapper\">\r\n                <div class=\"panel panel-info\">\r\n                  <div class=\"panel-heading\">\r\n                    Listado de Comentarios\r\n                  </div>\r\n                  <div class=\"panel-body\">\r\n                    <ul class=\"media-list\" *ngFor=\"let multi of annotations\">\r\n                      <li class=\"media\" *ngFor=\"let comment of multi.comments\">\r\n                        <a class=\"pull-left\">\r\n                          <img src=\"http://dehradunfinder.in/en/images/reviewer-image.png\" alt=\"\"\r\n                               class=\"img-circle\">\r\n                        </a>\r\n                        <div class=\"media-body\">\r\n                                  <span class=\"text-muted pull-right\">\r\n                                     <small class=\"text-muted\">{{comment.meta.datetime}}</small>\r\n                                  </span>\r\n                          <strong class=\"text-success\">{{comment.meta.user_name}}</strong>\r\n                          <p>{{comment.body}}</p>\r\n                          <p>\r\n                            <small class=\"text-muted\">Segundo inicial: {{multi.range.start}} - Segundo\r\n                              final: {{multi.range.end}}</small>\r\n                          </p>\r\n\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"float-right\">\r\n          <button type=\"button\" (click)=\"goBack()\" class=\"btn btn-info\">Volver</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->\r\n"

/***/ }),

/***/ "./src/app/components/comentarios-version-video/comentarios-version-video.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/comentarios-version-video/comentarios-version-video.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ComentariosVersionVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosVersionVideoComponent", function() { return ComentariosVersionVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recurso_comments_version_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/recurso/comments-version-video.service */ "./src/app/services/recurso/comments-version-video.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






/**
 * Componente encargado de los Comentarios de una version de recurso video.
 */
var ComentariosVersionVideoComponent = /** @class */ (function () {
    function ComentariosVersionVideoComponent(activatedRoute, commentsVersionVideoService, cdRef, location) {
        this.activatedRoute = activatedRoute;
        this.commentsVersionVideoService = commentsVersionVideoService;
        this.cdRef = cdRef;
        this.location = location;
        this.idVersion = 0;
        this.idRecurso = 1;
        this.playerOptions = { controlBar: { volumePanel: { inline: false } } };
        this.idVersion = this.activatedRoute.snapshot.params.idVersion;
        this.idRecurso = this.activatedRoute.snapshot.params.idRecurso;
    }
    ComentariosVersionVideoComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit Comentarios");
        setup();
        this.getUrlRecursoVideo();
    };
    ComentariosVersionVideoComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.addPluginVideo();
        }, 1000);
    };
    // Metodo que obtiene la url del recurso video
    ComentariosVersionVideoComponent.prototype.getUrlRecursoVideo = function () {
        var _this = this;
        this.commentsVersionVideoService.getUrlRecursoVideo(this.idRecurso).subscribe(function (url) { return (_this.respuestaVideo = url); });
    };
    // Metodo que configura el plugin de video
    ComentariosVersionVideoComponent.prototype.iniciarPlugin = function () {
        var _this = this;
        var plugin = this.player.annotationComments(this.pluginOptions);
        plugin.on('onStateChanged', function (event) {
            console.log('Persistiendo Comentarios->');
            console.log(event.detail);
            _this.commentsVersionVideoService.addVideoComments(_this.idVersion, _this.idRecurso, event.detail);
            setTimeout(function () {
                _this.consultarComentarios();
            }, 2500);
            _this.cdRef.detectChanges();
        });
        plugin.onReady(console.log('PLUGIN IS READY!'));
    };
    // Metodo que agrega el plugin al video
    ComentariosVersionVideoComponent.prototype.addPluginVideo = function () {
        var _this = this;
        this.consultarComentarios();
        this.pluginOptions = {
            annotationsObjects: this.annotations,
            bindArrowKeys: true,
            meta: {
                user_id: 2,
                user_name: 'John Smith'
            },
            showControls: true,
            showCommentList: true,
            showFullScreen: true,
            startInAnnotationMode: false,
            showMarkerShapeAndTooltips: true
        };
        if (videojs.getPlayers()["my-video"]) { //No se permiten multiples
            delete videojs.getPlayers()["my-video"];
        }
        this.player = videojs('my-video', this.playerOptions, function onPlayerReady() {
            videojs.log('Your player is ready!');
            // In this context, `this` is the player that was created by Video.js.
            // this.play();
            // muted
            this.muted(false);
        });
        setTimeout(function () {
            _this.iniciarPlugin();
        }, 1000);
    };
    // Metodo que obtiene todos los comentarios del recurso video
    ComentariosVersionVideoComponent.prototype.consultarComentarios = function () {
        var _this = this;
        this.commentsVersionVideoService.getCommentsVersionVideo(this.idRecurso).subscribe(function (comments) { return (_this.annotations = comments); });
    };
    // Metodo que regresa a la pantella anterior
    ComentariosVersionVideoComponent.prototype.goBack = function () {
        this.location.back();
    };
    ComentariosVersionVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comentarios-version-video',
            template: __webpack_require__(/*! ./comentarios-version-video.component.html */ "./src/app/components/comentarios-version-video/comentarios-version-video.component.html"),
            styles: [__webpack_require__(/*! ./comentarios-version-video.component.css */ "./src/app/components/comentarios-version-video/comentarios-version-video.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_recurso_comments_version_video_service__WEBPACK_IMPORTED_MODULE_2__["CommentsVersionVideoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ComentariosVersionVideoComponent);
    return ComentariosVersionVideoComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/footer/footer.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/dashboard/footer/footer.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dashboard/footer/footer.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/footer/footer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\r\n  <strong>Copyright &copy; 2019 <a href=\"\">Universidad de los Andes</a>.</strong>\r\n  Todos los derechos reservados.\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/footer/footer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/footer/footer.component.ts ***!
  \*****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/dashboard/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/dashboard/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/header/header.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/dashboard/header/header.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padre {\r\n   display: flex;\r\n   align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csYUFBYTtHQUNiLG1CQUFtQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRyZSB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/dashboard/header/header.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/header/header.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n  <!-- Logo -->\r\n  <a href=\"/\" class=\"logo\">\r\n    <!-- mini logo for sidebar mini 50x50 pixels -->\r\n    <span class=\"logo-mini\"><b>A</b>LT</span>\r\n    <!-- logo for regular state and mobile devices -->\r\n    <span class=\"logo-lg\">Sis<b>RED</b> - Uniandes</span>\r\n  </a>\r\n  <!-- Header Navbar: style can be found in header.less -->\r\n  <nav class=\"navbar navbar-static-top\">\r\n    <!-- Sidebar toggle button-->\r\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n    </a>\r\n\r\n    <div class=\"navbar-custom-menu ml-auto\">\r\n      <ul class=\"nav navbar-nav collapse navbar-collapse\">\r\n        <li class=\"dropdown notifications-menu\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" (click)=\"obtenerNotificaciones()\">\r\n            <i class=\"fa fa-bell-o\"></i>\r\n            <span class=\"label label-warning\" *ngIf=\"numeroNoVisto > 0\" >{{numeroNoVisto}}</span>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li class=\"header\">Tu tienes {{notificaciones?.length}} notificaciones</li>\r\n            <li>\r\n              <!-- inner menu: contains the actual data -->\r\n              <ul class=\"menu\">\r\n                <div *ngFor=\"let notificacion of notificaciones\">\r\n                  <li [ngClass]=\"{'bg-gray': !notificacion.visto}\" class=\"border-bottom-1 padre\" style=\"height: 30px\">\r\n                    <a href=\"/red/{{notificacion.idRed}}/detalle\" (click)=\"cambiarNotificacionAVisto(notificacion.id, notificacion.visto)\" class=\"m-3\">\r\n                      <i class=\"fa fa-users text-aqua\" *ngIf=\"notificacion.tipo === 'ASIGNAR_RED_SINCRONIZADO'\"></i>\r\n                      <i class=\"fa fa-exchange text-yellow\" *ngIf=\"notificacion.tipo === 'CAMBIAR_FASE_RED'\"></i>\r\n                      <i class=\"fa fa-upload text-red\" *ngIf=\"notificacion.tipo === 'SUBIR_RED'\"></i>\r\n                      <i class=\"fa fa-commenting text-aqua\" *ngIf=\"notificacion.tipo === 'COMENTARIOS_RED'\"></i>\r\n                      <i class=\"fa fa-check-circle text-green\" *ngIf=\"notificacion.tipo === 'MARCAR_VERSION_FINAL_RED'\"></i>\r\n                      <i class=\"fa fa-commenting text-green\" *ngIf=\"notificacion.tipo === 'CERRAR_COMENTARIOS'\"></i>\r\n                      <i class=\"fa fa-check-circle-o text-blue\" *ngIf=\"notificacion.tipo === 'REVISION_RED_LISTA'\"></i> {{notificacion.nombreRed}}: {{notificacion.mensaje}}\r\n                    </a>\r\n                  </li>\r\n                </div>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n\r\n        <li class=\"dropdown user user-menu\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n            <img src=\"https://img.icons8.com/metro/420/star.png\" class=\"user-image\" alt=\"Star Image\" />            \r\n          </a>\r\n          <ul class=\"dropdown-menu\">                        \r\n            <!-- Menu Body -->\r\n            <li class=\"user-body\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                    <tr>\r\n                      <th scope=\"col\">Versiones para revisar</th>                      \r\n                    </tr>\r\n                    </thead>\r\n                    <br/>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let rev of revisiones\">\r\n                            <div routerLink=\"/red/{{rev.redId}}/version/{{rev.version}}\">                  \r\n                              <b class=\"row pl-5\">{{rev.red}}</b>\r\n                              <span class=\"row pl-5\">{{rev.rol}}</span>\r\n                              <div style=\"text-align: right\">\r\n                                <span>{{rev.fecha}}</span>\r\n                              </div>\r\n                              <hr style=\"border:1px dashed\"/>\r\n                            </div>\r\n                        </tr>                    \r\n                    </tbody>\r\n                  </table>\r\n            </li> \r\n          </ul>\r\n        </li> \r\n        <li class=\"dropdown user user-menu\">   \r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">       \r\n            <img src=\"assets/logos/uniandes.jpg\" class=\"user-image\" alt=\"User Image\" />\r\n            <span class=\"hidden-xs\">{{usuario.nombre}} {{usuario.apellido}}</span>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <!-- User image -->\r\n            <li class=\"user-header\">\r\n              <img src=\"assets/logos/uniandes.jpg\" class=\"img-circle\" alt=\"User Image\" />\r\n\r\n              <p>\r\n                {{usuario.nombre}} {{usuario.apellido}}\r\n                <small>{{usuario.email}}</small>\r\n                <small><b>ID:</b> {{usuario.idConectate}}</small>\r\n              </p>\r\n            </li>\r\n            <!-- Menu Body -->\r\n            <li class=\"user-body\">\r\n              <!-- /.row -->\r\n            </li>\r\n            <!-- Menu Footer-->\r\n            <li class=\"user-footer text-center\">\r\n              <div>\r\n                <button (click)=\"cerrarSesion()\" class=\"btn btn-primary\">Cerrar sesión</button>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/header/header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/header/header.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_revision_revision_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/revision/revision.service */ "./src/app/services/revision/revision.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_datos_usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/datos-usuario */ "./src/app/models/datos-usuario.ts");
/* harmony import */ var src_app_services_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");
/* harmony import */ var src_app_services_notificacion_notificacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/notificacion/notificacion.service */ "./src/app/services/notificacion/notificacion.service.ts");







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(activatedRoute, router, revisionesService, autenticacionService, notificacionService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.revisionesService = revisionesService;
        this.autenticacionService = autenticacionService;
        this.notificacionService = notificacionService;
        this.revisiones = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getRevisiones();
        this.obtenerNumeroNotificacionesNoVistos();
    };
    HeaderComponent.prototype.getRevisiones = function () {
        var _this = this;
        this.revisionesService.getRevisiones().subscribe(function (revisiones) { return _this.revisiones = revisiones; });
    };
    HeaderComponent.prototype.ultimo = function (rev) {
        if (rev == this.revisiones[this.revisiones.length])
            return true;
        return false;
    };
    // Se invoca el método que borra los datos de la sesión
    HeaderComponent.prototype.cerrarSesion = function () {
        var _this = this;
        this.autenticacionService
            .cerrarSesion()
            .then(function (data) {
            console.log(data);
            _this.autenticacionService.borrarDatos();
        })
            .catch(function (err) {
            console.log(err);
            _this.autenticacionService.borrarDatos();
        });
    };
    //Se invoca el metodo para obtener las notificaciones
    HeaderComponent.prototype.obtenerNotificaciones = function () {
        var _this = this;
        this.notificacionService.getNotificacionesUsuario().subscribe(function (notificaciones) { return _this.notificaciones = notificaciones; });
    };
    //Se invoca el metodo para obtener el numero de notificaciones no vistos
    HeaderComponent.prototype.obtenerNumeroNotificacionesNoVistos = function () {
        var _this = this;
        this.notificacionService.getNumeroNotificacionesNoVistas().then(function (data) { return _this.numeroNoVisto = data; });
    };
    //Se invoca para actualizar que la notificacion ya fue vista
    HeaderComponent.prototype.cambiarNotificacionAVisto = function (idNotificacion, visto) {
        if (!visto) {
            this.notificacionService.cambiarNotificacionAVisto(idNotificacion)
                .then(function (data) {
                console.log('message', data);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_datos_usuario__WEBPACK_IMPORTED_MODULE_4__["DatosUsuario"])
    ], HeaderComponent.prototype, "usuario", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/dashboard/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/dashboard/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_revision_revision_service__WEBPACK_IMPORTED_MODULE_2__["RevisionesService"],
            src_app_services_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_5__["AutenticacionService"],
            src_app_services_notificacion_notificacion_service__WEBPACK_IMPORTED_MODULE_6__["NotificacionService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/side-bar/side-bar.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/dashboard/side-bar/side-bar.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/side-bar/side-bar.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/side-bar/side-bar.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\" *ngIf=\"usuario\">\r\n  <!-- sidebar: style can be found in sidebar.less -->\r\n  <section class=\"sidebar\">\r\n    <!-- Sidebar user panel -->\r\n    <div class=\"user-panel\">\r\n      <div class=\"pull-left image\">\r\n        <img src=\"assets/logos/uniandes.jpg\" class=\"img-circle\" alt=\"User Image\" />\r\n      </div>\r\n      <div class=\"pull-left info\">\r\n        <p>{{usuario.nombre}} {{usuario.apellido}}</p>\r\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\r\n      </div>\r\n    </div>\r\n    <!-- sidebar menu: : style can be found in sidebar.less -->\r\n    <ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n      <li class=\"pointer\" routerLink=\"/asignaciones\" routerLinkActive=\"active\">\r\n        <a>\r\n          <i class=\"fas fa-network-wired\"></i><span>&nbsp;&nbsp;Ver asignaciones</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"pointer\" [routerLink]=\"link\" routerLinkActive=\"active\">\r\n        <a>\r\n          <i class=\"fas fa-briefcase\"></i><span>&nbsp;&nbsp;Ver REDs asignados</span>\r\n        </a>\r\n      </li>\r\n      <li routerLink=\"/buscarRed\" routerLinkActive=\"active\">\r\n        <a>\r\n          <i class=\"fas fa-search\"></i><span>&nbsp;&nbsp;Buscar RED</span>\r\n        </a>\r\n      </li>\r\n      <li routerLink=\"/buscarRecurso\" routerLinkActive=\"active\">\r\n        <a>\r\n          <i class=\"fas fa-search\"></i><span>&nbsp;&nbsp;Buscar Recurso</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </section>\r\n  <!-- /.sidebar -->\r\n</aside>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/side-bar/side-bar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/side-bar/side-bar.component.ts ***!
  \*********************************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_datos_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/datos-usuario */ "./src/app/models/datos-usuario.ts");



var SideBarComponent = /** @class */ (function () {
    function SideBarComponent() {
        this.link = '';
    }
    SideBarComponent.prototype.ngOnInit = function () {
        this.link = '/reds/' + this.usuario.idConectate;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_datos_usuario__WEBPACK_IMPORTED_MODULE_2__["DatosUsuario"])
    ], SideBarComponent.prototype, "usuario", void 0);
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/components/dashboard/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/components/dashboard/side-bar/side-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/tab-panes/tab-panes.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/dashboard/tab-panes/tab-panes.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3RhYi1wYW5lcy90YWItcGFuZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dashboard/tab-panes/tab-panes.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard/tab-panes/tab-panes.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-content\">\r\n  <!-- Home tab content -->\r\n  <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\r\n    <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\r\n    <ul class=\"control-sidebar-menu\">\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\r\n\r\n          <div class=\"menu-info\">\r\n            <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\r\n\r\n            <p>Will be 23 on April 24th</p>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <i class=\"menu-icon fa fa-user bg-yellow\"></i>\r\n\r\n          <div class=\"menu-info\">\r\n            <h4 class=\"control-sidebar-subheading\">\r\n              Frodo Updated His Profile\r\n            </h4>\r\n\r\n            <p>New phone +1(800)555-1234</p>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\r\n\r\n          <div class=\"menu-info\">\r\n            <h4 class=\"control-sidebar-subheading\">\r\n              Nora Joined Mailing List\r\n            </h4>\r\n\r\n            <p>nora@example.com</p>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\r\n\r\n          <div class=\"menu-info\">\r\n            <h4 class=\"control-sidebar-subheading\">\r\n              Cron Job 254 Executed\r\n            </h4>\r\n\r\n            <p>Execution time 5 seconds</p>\r\n          </div>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <!-- /.control-sidebar-menu -->\r\n\r\n    <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\r\n    <ul class=\"control-sidebar-menu\">\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <h4 class=\"control-sidebar-subheading\">\r\n            Custom Template Design\r\n            <span class=\"label label-danger pull-right\">70%</span>\r\n          </h4>\r\n\r\n          <div class=\"progress progress-xxs\">\r\n            <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <h4 class=\"control-sidebar-subheading\">\r\n            Update Resume\r\n            <span class=\"label label-success pull-right\">95%</span>\r\n          </h4>\r\n\r\n          <div class=\"progress progress-xxs\">\r\n            <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <h4 class=\"control-sidebar-subheading\">\r\n            Laravel Integration\r\n            <span class=\"label label-warning pull-right\">50%</span>\r\n          </h4>\r\n\r\n          <div class=\"progress progress-xxs\">\r\n            <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"javascript:void(0)\">\r\n          <h4 class=\"control-sidebar-subheading\">\r\n            Back End Framework\r\n            <span class=\"label label-primary pull-right\">68%</span>\r\n          </h4>\r\n\r\n          <div class=\"progress progress-xxs\">\r\n            <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\r\n          </div>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <!-- /.control-sidebar-menu -->\r\n  </div>\r\n  <!-- /.tab-pane -->\r\n  <!-- Stats tab content -->\r\n  <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">\r\n    Stats Tab Content\r\n  </div>\r\n  <!-- /.tab-pane -->\r\n  <!-- Settings tab content -->\r\n  <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\r\n    <form method=\"post\">\r\n      <h3 class=\"control-sidebar-heading\">General Settings</h3>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-sidebar-subheading\">\r\n          Report panel usage\r\n          <input type=\"checkbox\" class=\"pull-right\" checked />\r\n        </label>\r\n\r\n        <p>\r\n          Some information about this general settings option\r\n        </p>\r\n      </div>\r\n      <!-- /.form-group -->\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-sidebar-subheading\">\r\n          Allow mail redirect\r\n          <input type=\"checkbox\" class=\"pull-right\" checked />\r\n        </label>\r\n\r\n        <p>\r\n          Other sets of options are available\r\n        </p>\r\n      </div>\r\n      <!-- /.form-group -->\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-sidebar-subheading\">\r\n          Expose author name in posts\r\n          <input type=\"checkbox\" class=\"pull-right\" checked />\r\n        </label>\r\n\r\n        <p>\r\n          Allow the user to show his name in blog posts\r\n        </p>\r\n      </div>\r\n      <!-- /.form-group -->\r\n\r\n      <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-sidebar-subheading\">\r\n          Show me as online\r\n          <input type=\"checkbox\" class=\"pull-right\" checked />\r\n        </label>\r\n      </div>\r\n      <!-- /.form-group -->\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-sidebar-subheading\">\r\n          Turn off notifications\r\n          <input type=\"checkbox\" class=\"pull-right\" />\r\n        </label>\r\n      </div>\r\n      <!-- /.form-group -->\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-sidebar-subheading\">\r\n          Delete chat history\r\n          <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\r\n        </label>\r\n      </div>\r\n      <!-- /.form-group -->\r\n    </form>\r\n  </div>\r\n  <!-- /.tab-pane -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/tab-panes/tab-panes.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/tab-panes/tab-panes.component.ts ***!
  \***********************************************************************/
/*! exports provided: TabPanesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPanesComponent", function() { return TabPanesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabPanesComponent = /** @class */ (function () {
    function TabPanesComponent() {
    }
    TabPanesComponent.prototype.ngOnInit = function () {
    };
    TabPanesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-panes',
            template: __webpack_require__(/*! ./tab-panes.component.html */ "./src/app/components/dashboard/tab-panes/tab-panes.component.html"),
            styles: [__webpack_require__(/*! ./tab-panes.component.css */ "./src/app/components/dashboard/tab-panes/tab-panes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabPanesComponent);
    return TabPanesComponent;
}());



/***/ }),

/***/ "./src/app/components/detalle-recurso/detalle-recurso.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/detalle-recurso/detalle-recurso.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-container{\r\n    width: 100%;\r\n    padding-right: 30%;\r\n    padding-left: 30%;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n\r\n}\r\n.button-container{\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        justify-content: flex-start;\r\n        align-items: stretch;\r\n        align-content: flex-start;\r\n}\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhbGxlLXJlY3Vyc28vZGV0YWxsZS1yZWN1cnNvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCOztBQUVyQjtBQUNBO1FBQ1EsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsMkJBQTJCO1FBQzNCLG9CQUFvQjtRQUNwQix5QkFBeUI7QUFDakM7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWxsZS1yZWN1cnNvL2RldGFsbGUtcmVjdXJzby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHMtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwJTtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxufVxyXG4uYnV0dG9uLWNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uYnRuLXNwYWNlIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/detalle-recurso/detalle-recurso.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/detalle-recurso/detalle-recurso.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n<ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\r\n</p>\r\n<div class=\"marginH content-wrapper\">\r\n<section class=\"content-header\">\r\n    <h1>\r\n      Recurso\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Recurso</li>\r\n    </ol>\r\n  </section>\r\n  <section class=\"content\">\r\n  <form [formGroup]=\"detailResourceForm\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n       <div class=\"box box-primary\">\r\n          <div class=\"box\">\r\n             <div class=\"box-header with-border\">\r\n                <div class=\"col-sm-10\">\r\n                  <h3>{{ resourceDetailsoModel?.name }}</h3>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                  <div class=\"text-center\">\r\n                    <img [src]=\"resourceDetailsoModel?.thumbnail\" width=\"100\" height=\"100\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            <div class=\"box-body\">\r\n              <div class=\"row\" *ngIf=\"showInputText\">\r\n                <div class=\"col-sm-4\">Nombre</div>\r\n                <div class=\"col-sm-8\">\r\n                  <input formControlName=\"name\" [(ngModel)]=\"resourceDetailsoModel.name\" type=\"text\" id=\"inputName\"\r\n                    placeholder=\"Nombre\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">Tipo</div>\r\n                <div class=\"col-sm-8\">\r\n                  {{ resourceDetailsoModel?.type }}\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">Autor</div>\r\n                <div class=\"col-sm-8\">\r\n                  {{ resourceDetailsoModel?.author }}\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">Fecha creacion</div>\r\n                <div class=\"col-sm-8\">\r\n                  {{ resourceDetailsoModel?.creationDate | date: \"dd-MM-yyyy\" }}\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">Responsable</div>\r\n                <div class=\"col-sm-8\">\r\n                  {{ resourceDetailsoModel?.lastUserModification }}\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">Fecha actualizacion</div>\r\n                <div class=\"col-sm-8\">\r\n                  {{ resourceDetailsoModel?.updateDate | date: \"dd-MM-yyyy\" }}\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">Descripcion</div>\r\n                <div *ngIf=\"!showInputText\" class=\"col-sm-8\">\r\n                  {{ resourceDetailsoModel?.description }}\r\n                </div>\r\n                <div *ngIf=\"showInputText\" class=\"col-sm-8\">\r\n                  <textarea rows=\"4\" cols=\"38\" formControlName=\"description\" [(ngModel)]=\"resourceDetailsoModel.description\"\r\n                    type=\"text\" id=\"inputDescription\" placeholder=\"Description\">\r\n                  </textarea>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">Metadata</div>\r\n                <div class=\"col-sm-8\">\r\n                  <div class=\"btn-group btn-space\" role=\"group\" *ngFor=\"let metadata of resourceDetailsoModel?.metadata\">\r\n                    <button type=\"button\" class=\"btn btn-outline-primary\">\r\n                      {{ metadata.tag }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                  <button *ngIf=\"!showInputText\" type=\"button\" (click)=\"edit()\" class=\"btn btn-primary btn-sm btn-block\">\r\n                    Modificar\r\n                  </button>\r\n\r\n                  <button *ngIf=\"showInputText\" type=\"button\" (click)=\"updateResource()\" class=\"btn btn-primary btn-sm btn-block\"\r\n                    [disabled]=\"!detailResourceForm.valid\">\r\n                    Guardar\r\n                  </button>\r\n                  <button *ngIf=\"showInputText\" type=\"button\" (click)=\"cancelEdit()\" class=\"btn btn-secondary btn-sm btn-block\">\r\n                    Cancelar\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n   </form>\r\n\r\n </section>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/detalle-recurso/detalle-recurso.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/detalle-recurso/detalle-recurso.component.ts ***!
  \*************************************************************************/
/*! exports provided: DetalleRecursoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleRecursoComponent", function() { return DetalleRecursoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_recurso_detalle_resource_details_rest_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/recurso/detalle/resource-details-rest-client.service */ "./src/app/services/recurso/detalle/resource-details-rest-client.service.ts");
/* harmony import */ var _services_metadata_metadata_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/metadata/metadata.service */ "./src/app/services/metadata/metadata.service.ts");








var DetalleRecursoComponent = /** @class */ (function () {
    function DetalleRecursoComponent(route, resourceDetailsRestClientService, metadataService) {
        var _this = this;
        this.route = route;
        this.resourceDetailsRestClientService = resourceDetailsRestClientService;
        this.metadataService = metadataService;
        this.showInputText = false;
        this.staticAlertClosed = false;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.formErrorMessage = '';
        this.formError = false;
        this.route.params.subscribe(function (param) {
            _this.idResource = Number(param["id"]);
        });
    }
    DetalleRecursoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadForm();
        this.getResourceDetail(this.idResource);
        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(5000)).subscribe(function () { return _this.successMessage = null; });
    };
    DetalleRecursoComponent.prototype.edit = function () {
        this.showInputText = true;
    };
    DetalleRecursoComponent.prototype.cancelEdit = function () {
        this.showInputText = false;
    };
    //Servicio para Agrega Metadata a un recurso
    DetalleRecursoComponent.prototype.addMetadata = function () {
        var _this = this;
        this.metadataService.addMetadataRecurso(this.idResource, this.detailResourceForm.get('newMetadata').value)
            .then(function (data) {
            _this.getResourceDetail(_this.idResource);
        })
            .catch(function (err) {
            _this.formErrorMessage = err;
            _this.formError = true;
        });
    };
    DetalleRecursoComponent.prototype.loadForm = function () {
        this.detailResourceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            updateDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            metadata: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            newMetadata: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
        });
    };
    DetalleRecursoComponent.prototype.getResourceDetail = function (id) {
        var _this = this;
        this.resourceDetailsRestClientService
            .getResourceDetailsById(id)
            .subscribe(function (response) {
            console.log(response.metadata);
            _this.resourceDetailsoModel = {
                type: response.tipo,
                author: response.getAutor,
                updateDate: response.fecha_ultima_modificacion,
                creationDate: response.fecha_creacion,
                lastUserModification: response.getResponsableModificacion,
                description: response.descripcion,
                metadata: response.metadata,
                name: response.nombre,
                thumbnail: response.thumbnail
            };
        });
    };
    DetalleRecursoComponent.prototype.updateResource = function () {
        var _this = this;
        this.showInputText = false;
        if (this.detailResourceForm.valid) {
            var json = {
                name: this.detailResourceForm.controls.name.value,
                description: this.detailResourceForm.controls.description.value,
                lastUserModification: "1",
                id: this.idResource
            };
            this.resourceDetailsRestClientService.updateResourceDetail(json).subscribe(function (response) {
                _this.getResourceDetail(_this.idResource);
                _this._success.next('Recurso: ' + _this.resourceDetailsoModel.name + ' editado con exito');
            });
        }
    };
    DetalleRecursoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-detalle-recurso",
            template: __webpack_require__(/*! ./detalle-recurso.component.html */ "./src/app/components/detalle-recurso/detalle-recurso.component.html"),
            styles: [__webpack_require__(/*! ./detalle-recurso.component.css */ "./src/app/components/detalle-recurso/detalle-recurso.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_recurso_detalle_resource_details_rest_client_service__WEBPACK_IMPORTED_MODULE_6__["ResourceDetailsRestClientService"],
            _services_metadata_metadata_service__WEBPACK_IMPORTED_MODULE_7__["MetadataService"]])
    ], DetalleRecursoComponent);
    return DetalleRecursoComponent;
}());



/***/ }),

/***/ "./src/app/components/detalle-red/detalle-red.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/detalle-red/detalle-red.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-margin{\r\n   margin-bottom: 20px;\r\n}\r\n\r\n.metadata-padding{\r\n  padding: 2px;\r\n}\r\n\r\n.spaceDer{\r\n  margin-right: 15px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhbGxlLXJlZC9kZXRhbGxlLXJlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csbUJBQW1CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWxsZS1yZWQvZGV0YWxsZS1yZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1tYXJnaW57XHJcbiAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5tZXRhZGF0YS1wYWRkaW5ne1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuLnNwYWNlRGVye1xyXG4gIG1hcmdpbi1yaWdodDogMTVweFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/detalle-red/detalle-red.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/detalle-red/detalle-red.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Detalle RED\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Detalle RED</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <!-- left column -->\r\n      <div class=\"col-md-12\">\r\n        <!-- general form elements -->\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n              <div class=\"row\">\r\n                <div class=\"col col-md-9\">\r\n                  <h3 class=\"box-title\">{{detalle?.nameRed}}</h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-md-6\">\r\n                  <a href=\"\" routerLink=\"\">\r\n                    <h3 class=\"box-title\">{{detalle?.nameProject}}</h3>\r\n                  </a>\r\n                </div>\r\n                <!--<div class=\"col col-md-3\">\r\n                  <h3 class=\"box-title\">Estado: {{detalle.status}}</h3>\r\n                </div>-->\r\n                <div class=\"col col-md-3 text-right\">Fase:\r\n                </div>\r\n                <div class=\"col col-md-3\" *ngIf=\"detalle?.fase?.idConectate\">\r\n                  <select id=\"fases\" [(ngModel)]=\"detalle.fase.idConectate\" class=\"form-control input-sm\" #faseSelect (change)=\"onOptionsSelected()\">\r\n                    <option *ngFor=\"let fase_item of fases\" [value]=\"fase_item.idConectate\">\r\n                      {{fase_item?.nombre}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-md-9\">\r\n                  <h3 class=\"box-title\">{{detalle?.url}}</h3>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <div class=\"box-body\">\r\n              <!-- table Recursos asociados -->\r\n              <table class=\"table table-hover table-bordered table-margin\">\r\n                <thead>\r\n                  <tr>\r\n                    <td colspan=\"3\">\r\n                      <h3 class=\"text-center\">Recursos asociados</h3>\r\n                    </td>\r\n                  </tr>\r\n                  <tr class=\"thead-light text-center\">\r\n                    <th scope=\"col\">Nombre recursos</th>\r\n                    <th scope=\"col\">Formato archivo</th>\r\n                    <th scope=\"col\">Detalle</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let recurso of recursos\">\r\n                    <td>{{recurso.name}}</td>\r\n                    <td>{{recurso.typeFormat}}</td>\r\n                    <td class=\"text-center\" [routerLink]=\"['/red/' + idRed + '/recursos/' + recurso.id]\" routerLinkActive=\"router-link-active\">\r\n                      <button type=\"button\" class=\"btn btn-primary\">Detalle</button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <div class=\"text-center\">\r\n                <button type=\"button\" class=\"btn btn-info m-2\" [routerLink]=\"['/red/' + idRed + '/recursos']\" routerLinkActive=\"router-link-active\">Ver recursos</button>\r\n              </div>\r\n              <hr />\r\n              <!-- table Personas asignadas al RED -->\r\n              <table class=\"table table-hover table-bordered table-margin\">\r\n                <thead>\r\n                  <tr>\r\n                    <td colspan=\"2\">\r\n                      <h3 class=\"text-center\">Personas asignadas al RED</h3>\r\n                    </td>\r\n                  </tr>\r\n                  <tr class=\"thead-light text-center\">\r\n                    <th scope=\"col\">Nombre completo</th>\r\n                    <th scope=\"col\">Rol</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let persona of personas\">\r\n                    <td>{{persona.name}}</td>\r\n                    <td>{{persona.rol}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <!-- table Proyectos del RED -->\r\n              <table class=\"table table-hover table-bordered table-margin\">\r\n                <thead>\r\n                  <tr>\r\n                    <td colspan=\"4\">\r\n                      <h3 class=\"text-center\">Proyectos del RED</h3>\r\n                    </td>\r\n                  </tr>\r\n                  <tr class=\"thead-light text-center\">\r\n                    <th scope=\"col\">Autor</th>\r\n                    <th scope=\"col\">Tipo archivo</th>\r\n                    <th scope=\"col\">Fecha creación</th>\r\n                    <th scope=\"col\">Descripción</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let proyecto of proyectos\">\r\n                    <td>{{proyecto.autor}}</td>\r\n                    <td>{{proyecto.typeFile}}</td>\r\n                    <td>{{proyecto.createdDate}}</td>\r\n                    <td>{{proyecto.description}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <!-- /.table Proyectos del RED -->\r\n              <!-- tdiv metadata del RED -->\r\n              <div class=\"py-5\">\r\n                <h3 class=\"text-justify\">Metadata del RED</h3>\r\n                <div class=\"card card-body\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col col-md-12\">\r\n                      <span class=\"metadata-padding\" *ngFor=\"let meta of metadata\">\r\n                        <span class=\"badge badge-pill label-info text-sm-center text-wrap\">{{meta.tag}}</span>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- /.tdiv metadata del RED -->\r\n              <!-- table versiones del RED -->\r\n              <table class=\"table table-hover table-bordered table-margin\">\r\n                <thead>\r\n                <tr>\r\n                  <td colspan=\"5\">\r\n                    <h3 class=\"text-center\">Versiones</h3>\r\n                  </td>\r\n                </tr>\r\n                <tr class=\"thead-light text-center\">\r\n                  <th scope=\"col\">Versión</th>\r\n                  <th scope=\"col\">Fecha</th>\r\n                  <th scope=\"col\">Creado por</th>\r\n                  <th scope=\"col\">Imagen miniatura</th>\r\n                  <th scope=\"col\">Definitiva</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let version of versiones\">\r\n                  <td>Versión {{version.numero}}</td>\r\n                  <td>{{version.fechaCreacion}}</td>\r\n                  <td>{{version.creadoPor}}</td>\r\n                  <td routerLink=\"/red/version/{{version.id}}\" style=\"cursor: pointer;\"><img style=\"max-width: 100px; max-height: 100px;\" [src]=\"version.url\"></td>\r\n                  <td>\r\n                    <div *ngIf=\"version.esFinal; else marcarComoDef\">\r\n                      Versión definitiva\r\n                    </div>\r\n                    <ng-template #marcarComoDef>\r\n                      <button type=\"button\" (click)=\"markAsFinal(version)\" class=\"btn btn-primary\">Marcar como definitivo</button>\r\n                    </ng-template>\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n              <!-- /.table Versiones del RED -->\r\n              <div class=\"text-center\">\r\n                <button type=\"button\" class=\"btn btn-info m-2\" [routerLink]=\"['/crearVersion/' + idRed]\"\r\n                  routerLinkActive=\"router-link-active\">Crear Versión</button>\r\n              </div>\r\n            </div>\r\n            <!-- /.box-body -->\r\n          </div>\r\n          <!-- /.box -->\r\n          <div class=\"box-footer\">\r\n            <button type=\"button\" (click)=\"goBack()\" class=\"btn btn-default spaceDer m-2\"><i class=\"fas fa-chevron-left\"></i>&nbsp;Volver</button>\r\n            <button type=\"button\" class=\"btn btn-primary m-2\" [routerLink]=\"['/red/' + idRed + '/relacionados']\" routerLinkActive=\"router-link-active\">Ver REDs relacionados</button>\r\n            <button type=\"button\" class=\"btn btn-dark m-2 text-white\" [routerLink]=\"['/reds/' + idRed + '/avance']\" routerLinkActive=\"router-link-active\">Ver avance red</button>\r\n          </div>\r\n          <!-- /.box-footer -->\r\n        </div>\r\n        <!-- /.box primary-->\r\n      </div>\r\n      <!--/.col (left) -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n\r\n\r\n</div>\r\n<!-- /.content-wrapper -->\r\n\r\n<!-- The Modal -->\r\n<div class=\"modal\" id=\"myModal\" #modalFase>\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">{{heading}}</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <h4 class=\"text-center\">{{body}}</h4>\r\n        <br>\r\n        <p class=\"text-secondary text-center\">{{mensajeAdvertencia}}</p>\r\n      </div>\r\n      <div class=\"modal-footer text-center\">\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"cambiarFase()\">Sí</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"closeModal()\">No</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- The Modalexitoso -->\r\n<div class=\"modal\" id=\"modalRespuesta\" *ngIf=\"mensaje != ''\" #modalFaseRespuesta>\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Cambio de fase</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-2 mt-3 text-right\">\r\n            <i class=\"fa fa-check\" *ngIf=\"cambioFaseExitoso\"></i>\r\n            <i class=\"fa fa-close\" *ngIf=\"!cambioFaseExitoso\"></i>\r\n          </div>\r\n          <div class=\"col-lg-10\">\r\n            <h4>{{mensaje}}</h4>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer text-center\">\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"closeModal()\">Aceptar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/detalle-red/detalle-red.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/detalle-red/detalle-red.component.ts ***!
  \*****************************************************************/
/*! exports provided: DetalleREDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleREDComponent", function() { return DetalleREDComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rolAsignado_personas_asignadas_personas_asignadas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rolAsignado/personas-asignadas/personas-asignadas.service */ "./src/app/services/rolAsignado/personas-asignadas/personas-asignadas.service.ts");
/* harmony import */ var _services_recurso_recursos_asociados_recursos_asociados_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/recurso/recursos-asociados/recursos-asociados.service */ "./src/app/services/recurso/recursos-asociados/recursos-asociados.service.ts");
/* harmony import */ var _services_proyectoRed_proyectos_red_proyectos_red_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/proyectoRed/proyectos-red/proyectos-red.service */ "./src/app/services/proyectoRed/proyectos-red/proyectos-red.service.ts");
/* harmony import */ var _services_metadata_metadata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/metadata/metadata.service */ "./src/app/services/metadata/metadata.service.ts");
/* harmony import */ var _services_red_detalle_red_detalle_red_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/red/detalle-red/detalle-red.service */ "./src/app/services/red/detalle-red/detalle-red.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_version_version_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/version/version.service */ "./src/app/services/version/version.service.ts");
/* harmony import */ var _services_fase_fase_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/fase/fase.service */ "./src/app/services/fase/fase.service.ts");











/**
 * Componente encargado del Detalle de un RED en especifico.
 */
var DetalleREDComponent = /** @class */ (function () {
    function DetalleREDComponent(route, detalleRedService, personaAsignadaService, recursosAsociadosService, proyectosRedService, metadataService, versionesService, location, faseService) {
        this.route = route;
        this.detalleRedService = detalleRedService;
        this.personaAsignadaService = personaAsignadaService;
        this.recursosAsociadosService = recursosAsociadosService;
        this.proyectosRedService = proyectosRedService;
        this.metadataService = metadataService;
        this.versionesService = versionesService;
        this.location = location;
        this.faseService = faseService;
    }
    DetalleREDComponent.prototype.ngOnInit = function () {
        setup();
        this.idRed = this.route.snapshot.params.idRed;
        this.getDetalleRed();
        this.getPersonasAsignadas();
        this.getRecursosAsociados();
        this.getProyectosRed();
        this.getMetadata();
        this.getVersiones();
        this.getFases();
    };
    // Metodo que obtiene informacion del RED
    DetalleREDComponent.prototype.getDetalleRed = function () {
        var _this = this;
        this.detalleRedService
            .getDetalleRed(this.idRed)
            .subscribe(function (detalle) { return (_this.detalle = detalle); });
    };
    // Metodo que obtiene personas asignadas al RED
    DetalleREDComponent.prototype.getPersonasAsignadas = function () {
        var _this = this;
        this.personaAsignadaService
            .getPersonasAsignadas(this.idRed)
            .subscribe(function (personas) { return (_this.personas = personas); });
    };
    // Metodo que obtiene los recursos asociados al RED
    DetalleREDComponent.prototype.getRecursosAsociados = function () {
        var _this = this;
        this.recursosAsociadosService
            .getRecursosAsociados(this.idRed)
            .subscribe(function (recursos) { return (_this.recursos = recursos); });
    };
    // Metodo que obtiene los proyectos RED
    DetalleREDComponent.prototype.getProyectosRed = function () {
        var _this = this;
        this.proyectosRedService
            .getProyectosRed(this.idRed)
            .subscribe(function (proyectos) { return (_this.proyectos = proyectos); });
    };
    // Metodo que obtiene la metadata del RED
    DetalleREDComponent.prototype.getMetadata = function () {
        var _this = this;
        this.metadataService
            .getMetadata(this.idRed)
            .subscribe(function (metadata) { return (_this.metadata = metadata); });
    };
    // Metodo que obtiene las versiones del RED
    DetalleREDComponent.prototype.getVersiones = function () {
        var _this = this;
        this.versionesService.getVersiones(this.idRed)
            .then(function (versiones) {
            _this.versiones = versiones;
            _this.getImagenesVersiones();
        });
    };
    DetalleREDComponent.prototype.getImagenesVersiones = function () {
        var _this = this;
        console.log(this.versiones);
        this.versiones.forEach(function (version) {
            _this.versionesService.getImagenVersion(version.imagen)
                .then(function (response) {
                version.url = response.link;
            })
                .catch(function (err) {
                console.error(err);
            });
        });
    };
    // Metodo que regresa a la pantella anterior
    DetalleREDComponent.prototype.goBack = function () {
        this.location.back();
        console.log(this.location);
    };
    // Marcar versión como final
    DetalleREDComponent.prototype.markAsFinal = function (version) {
        var _this = this;
        this.versionesService.markAsFinal(version.id).subscribe(function () { return _this.getVersiones(); });
    };
    // Metodo que obtiene las fases
    DetalleREDComponent.prototype.getFases = function () {
        var _this = this;
        this.faseService.getFases()
            .subscribe(function (fases) { return _this.fases = fases; });
    };
    // Metodo para cambiar fase
    DetalleREDComponent.prototype.cambiarFase = function () {
        var _this = this;
        var respuesta;
        this.faseService.cambiarFase(this.idRed, this.detalle.fase.idConectate)
            .then(function (data) {
            _this.cambioFaseExitoso = true;
            _this.mensaje = 'El cambio de fase fue exitoso.';
            $(_this.modalRespuesta.nativeElement).modal('show');
        }).catch(function (error) {
            _this.cambioFaseExitoso = false;
            console.log('error', error.error);
            _this.mensaje = error.error;
            $(_this.modalRespuesta.nativeElement).modal('show');
        });
    };
    //Metodo para cuando una fase es seleccionada
    DetalleREDComponent.prototype.onOptionsSelected = function () {
        this.heading = 'Cambiar de fase';
        this.body = '¿Desea cambiar de fase a ' + this.fases[this.detalle.fase.idConectate].nombre + '?';
        this.mensajeAdvertencia = this.seleccionarTexto(this.detalle.fase.idConectate.toString());
        $(this.modal.nativeElement).modal('show');
    };
    //Metodo para cerrar el modal
    DetalleREDComponent.prototype.closeModal = function () {
        this.mensaje = null;
        location.reload();
        console.log('message');
    };
    //Metodo para traer el mensaje del modal
    DetalleREDComponent.prototype.seleccionarTexto = function (value) {
        console.log('id fase', value);
        var mensaje;
        switch (value) {
            case "0":
                mensaje = 'El RED está listo para generar los recursos asociados.';
                break;
            case "1":
                mensaje = 'Los recursos del RED estan hechos.';
                break;
            case "2":
                mensaje = 'La version ya fue revisada por Control de calidad.';
                break;
            case "3":
                mensaje = 'Debe existir una versión para revisión. ';
                break;
            case "4":
                mensaje = 'El cliente final ya dio su aprobación.';
                break;
            default:
                mensaje = '';
                break;
        }
        return mensaje;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalFase'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DetalleREDComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalFaseRespuesta'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DetalleREDComponent.prototype, "modalRespuesta", void 0);
    DetalleREDComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-red',
            template: __webpack_require__(/*! ./detalle-red.component.html */ "./src/app/components/detalle-red/detalle-red.component.html"),
            styles: [__webpack_require__(/*! ./detalle-red.component.css */ "./src/app/components/detalle-red/detalle-red.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _services_red_detalle_red_detalle_red_service__WEBPACK_IMPORTED_MODULE_6__["DetalleRedService"],
            _services_rolAsignado_personas_asignadas_personas_asignadas_service__WEBPACK_IMPORTED_MODULE_2__["PersonasAsignadasService"],
            _services_recurso_recursos_asociados_recursos_asociados_service__WEBPACK_IMPORTED_MODULE_3__["RecursosAsociadosService"],
            _services_proyectoRed_proyectos_red_proyectos_red_service__WEBPACK_IMPORTED_MODULE_4__["ProyectosRedService"],
            _services_metadata_metadata_service__WEBPACK_IMPORTED_MODULE_5__["MetadataService"],
            _services_version_version_service__WEBPACK_IMPORTED_MODULE_9__["VersionService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
            _services_fase_fase_service__WEBPACK_IMPORTED_MODULE_10__["FaseService"]])
    ], DetalleREDComponent);
    return DetalleREDComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\r\n  height: 100vh;\r\n}\r\n\r\n@media(max-width: 769px) {\r\n\r\n  .alert,\r\n  .login-box-body {\r\n    max-width: 70% !important;\r\n  }\r\n}\r\n\r\n@media(max-width: 540px) {\r\n\r\n  .alert,\r\n  .login-box-body {\r\n    max-width: 80% !important;\r\n  }\r\n}\r\n\r\n@media(max-width: 470px) {\r\n\r\n  .alert,\r\n  .login-box-body {\r\n    max-width: 96% !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztJQUVFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBOztFQUVFOztJQUVFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBOztFQUVFOztJQUVFLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXBhZ2Uge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OXB4KSB7XHJcblxyXG4gIC5hbGVydCxcclxuICAubG9naW4tYm94LWJvZHkge1xyXG4gICAgbWF4LXdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDU0MHB4KSB7XHJcblxyXG4gIC5hbGVydCxcclxuICAubG9naW4tYm94LWJvZHkge1xyXG4gICAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDQ3MHB4KSB7XHJcblxyXG4gIC5hbGVydCxcclxuICAubG9naW4tYm94LWJvZHkge1xyXG4gICAgbWF4LXdpZHRoOiA5NiUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hold-transition login-page bg-sisred-blue\">\r\n  <div class=\"login-box mt-0 pt-5\">\r\n    <div class=\"login-logo text-white pt-5\">\r\n      SIS<b>RED</b>\r\n    </div>\r\n    <!-- /.login-logo -->\r\n    <div *ngIf=\"enviado && mensajeError !== ''\" class=\"alert alert-danger alert-dismissible\" role=\"alert\">\r\n      <div class=\"row row-middle\">\r\n        <div class=\"col-10\">\r\n          {{mensajeError}}\r\n        </div>\r\n        <div class=\"col-2 text-right pr-0\">\r\n          <i aria-hidden=\"true\" data-dismiss=\"alert\" class=\"fas fa-times pointer\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"login-box-body mx-auto shadow rounded\">\r\n      <h4 class=\"text-center mb-4\">Inicia sesión en la plataforma</h4>\r\n\r\n      <form>\r\n        <div class=\"form-group has-feedback\">\r\n          <label>Correo</label>\r\n          <input type=\"email\" class=\"form-control\" [(ngModel)]=\"correo\" name=\"correo\"\r\n            [attr.disabled]=\"cargando ? true : null\">\r\n          <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n          <small class=\"text-red\" *ngIf=\"enviado && correo === ''\">El correo es requerido</small>\r\n        </div>\r\n        <div class=\"form-group has-feedback\">\r\n          <label>Contraseña</label>\r\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"contrasena\" name=\"contrasena\"\r\n            [attr.disabled]=\"cargando ? true : null\">\r\n          <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n          <small class=\"text-red\" *ngIf=\"enviado && contrasena === ''\">La contraseña es requerida</small>\r\n        </div>\r\n        <div class=\"row mt-5\">\r\n          <!-- /.col -->\r\n          <div class=\"col-12 text-center\">\r\n            <button *ngIf=\"!cargando\" type=\"button\" class=\"btn btn-primary\" (click)=\"login()\">Iniciar sesión</button>\r\n            <i *ngIf=\"cargando\" class=\"fas fa-spin fa-spinner fa-2x text-sisred-blue\"></i>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- /.login-box-body -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(autenticacionService, router) {
        this.autenticacionService = autenticacionService;
        this.router = router;
        this.correo = '';
        this.contrasena = '';
        this.enviado = false;
        this.cargando = false;
        this.mensajeError = '';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    // Función que inicia sesión para un usuario
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.enviado = true;
        this.mensajeError = '';
        if (this.correo !== '' && this.contrasena !== '') {
            this.cargando = true;
            this.autenticacionService
                .login(this.correo, this.contrasena)
                .then(function (data) {
                _this.autenticacionService.guardarDatos(data, _this.correo);
                window.location.reload();
            })
                .catch(function (err) {
                console.log(err);
                _this.mensajeError = err;
                _this.cargando = false;
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Error 404\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Error 404</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"error-page\" style=\"height: 150px\">\r\n      <h2 class=\"headline text-yellow\"> 404</h2>\r\n\r\n      <div class=\"error-content\" style=\"display: flex; align-items: center;height: 100%;\">            \r\n            <div style=\"text-align: center\">\r\n                <h3 style=\"display:inline-block\"><i class=\"fa fa-warning text-yellow\"></i> Página no encontrada.</h3>\r\n                <p style=\"display:inline-block\">\r\n                    No fue posible encontrar la página buscada.\r\n                    <a href=\"/\">Volver al dashboard</a>.\r\n                  </p>        \r\n            </div>            \r\n      </div>\r\n      <!-- /.error-content -->\r\n    </div>\r\n    <!-- /.error-page -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        setup();
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/proyectos-red/proyectos-red.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/proyectos-red/proyectos-red.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJveWVjdG9zLXJlZC9wcm95ZWN0b3MtcmVkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/proyectos-red/proyectos-red.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/proyectos-red/proyectos-red.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Proyectos del RED - <small>{{detalleRed.nameRed}}</small>\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Proyectos del RED</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <!-- left column -->\r\n      <div class=\"col-md-6\">\r\n        <div class=\"list-group\">\r\n          <div ng-if=\"proyectos.length > 0\">\r\n            <div *ngFor=\"let proyecto of proyectos\" href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\r\n              <div class=\"d-flex w-100 justify-content-between\">\r\n                <h5 class=\"mb-1\"><b>{{proyecto.name}}</b></h5>\r\n                <small>{{proyecto.createdDate}}</small>\r\n              </div>\r\n              <p class=\"mb-1\">{{proyecto.typeFile}}</p>\r\n              <p class=\"mb-1\">{{proyecto.autor}}</p>\r\n              <p><button type=\"button\" class=\"btn btn-primary\">Ver Detalle</button></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- /.box primary-->\r\n      </div>\r\n      <!--/.col (left) -->\r\n    </div>\r\n    <div class=\"box-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"goBack()\">Volver</button>&nbsp;&nbsp;\r\n        <button type=\"button\" class=\"btn btn-warning\" routerLink=\"/red/{{idRed}}/proyecto/agregar\">Agregar Proyecto al RED</button>\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n\r\n\r\n</div>\r\n<!-- /.content-wrapper -->\r\n"

/***/ }),

/***/ "./src/app/components/proyectos-red/proyectos-red.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/proyectos-red/proyectos-red.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProyectosRedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosRedComponent", function() { return ProyectosRedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_proyectoRed_proyectos_red_proyectos_red_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/proyectoRed/proyectos-red/proyectos-red.service */ "./src/app/services/proyectoRed/proyectos-red/proyectos-red.service.ts");
/* harmony import */ var _services_red_detalle_red_detalle_red_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/red/detalle-red/detalle-red.service */ "./src/app/services/red/detalle-red/detalle-red.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






/**
 * Componente para mostrar el listado de Proyectos del RED.
 */
var ProyectosRedComponent = /** @class */ (function () {
    function ProyectosRedComponent(route, proyectosRedService, detalleRedService, location) {
        this.route = route;
        this.proyectosRedService = proyectosRedService;
        this.detalleRedService = detalleRedService;
        this.location = location;
    }
    ProyectosRedComponent.prototype.ngOnInit = function () {
        setup();
        this.idRed = this.route.snapshot.params['idRed'];
        this.getProyectosRed();
        this.getDetalleRed();
    };
    ProyectosRedComponent.prototype.getProyectosRed = function () {
        var _this = this;
        this.proyectosRedService.getProyectosRed(this.idRed)
            .subscribe(function (proyectos) { return _this.proyectos = proyectos; });
    };
    ProyectosRedComponent.prototype.getDetalleRed = function () {
        var _this = this;
        this.detalleRedService.getDetalleRed(this.idRed)
            .subscribe(function (detalleRed) { return _this.detalleRed = detalleRed; });
    };
    ProyectosRedComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProyectosRedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proyectos-red',
            template: __webpack_require__(/*! ./proyectos-red.component.html */ "./src/app/components/proyectos-red/proyectos-red.component.html"),
            styles: [__webpack_require__(/*! ./proyectos-red.component.css */ "./src/app/components/proyectos-red/proyectos-red.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_proyectoRed_proyectos_red_proyectos_red_service__WEBPACK_IMPORTED_MODULE_3__["ProyectosRedService"],
            _services_red_detalle_red_detalle_red_service__WEBPACK_IMPORTED_MODULE_4__["DetalleRedService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], ProyectosRedComponent);
    return ProyectosRedComponent;
}());



/***/ }),

/***/ "./src/app/components/red-comentar-pdf/red-comentar-pdf.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/red-comentar-pdf/red-comentar-pdf.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVkLWNvbWVudGFyLXBkZi9yZWQtY29tZW50YXItcGRmLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/red-comentar-pdf/red-comentar-pdf.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/red-comentar-pdf/red-comentar-pdf.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"marginH content-wrapper\">\r\n  <section class=\"content-header\">\r\n    <app-pdf-viewer (comentarioPadre)=\"guardarComentarioPadre($event)\" (comentarioHijo)=\"guardarComentarioHijo($event)\"\r\n      [comentariosPdf]=\"comentariosPdf\" (CerrarComentario_Aceptar)=\"CerrarComentario_Aceptar($event)\" (seleccionarComentario)=\"seleccionarComentario($event)\" ></app-pdf-viewer>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/red-comentar-pdf/red-comentar-pdf.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/red-comentar-pdf/red-comentar-pdf.component.ts ***!
  \***************************************************************************/
/*! exports provided: RedComentarPdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedComentarPdfComponent", function() { return RedComentarPdfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_red_comentar_red_comentar_rest_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/red/comentar-red/comentar-rest-client.service */ "./src/app/services/red/comentar-red/comentar-rest-client.service.ts");




var RedComentarPdfComponent = /** @class */ (function () {
    function RedComentarPdfComponent(route, comentarRestClientService) {
        this.route = route;
        this.comentarRestClientService = comentarRestClientService;
        this.test = "test";
        this.idRecurso = 0;
        this.idVersion = 0;
    }
    RedComentarPdfComponent.prototype.ngOnInit = function () {
        this.Mensaje = "";
        this.getComentarios();
    };
    RedComentarPdfComponent.prototype.getComentarios = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.idRed = params.get("id");
            _this.comentarRestClientService
                .getComentariosByIdRed(params.get("id"))
                .subscribe(function (data) {
                console.log(data);
                _this.comentariosPdf = data;
            });
        });
    };
    RedComentarPdfComponent.prototype.guardarComentarioPadre = function ($event) {
        console.log("Comentario padre");
        this.comentarRestClientService
            .postComentariosByIdRed($event, Number(this.idRed))
            .subscribe(function (response) {
            debugger;
            localStorage.setItem("idComentario", response.id);
            localStorage.setItem("coordenadas", response.comentarioMultimedia.id);
            console.log(response);
        });
    };
    RedComentarPdfComponent.prototype.guardarComentarioHijo = function ($event) {
        this.comentarRestClientService
            .postComentarioHijoByIdRed($event, this.idRed)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    RedComentarPdfComponent.prototype.CerrarComentario_Aceptar = function (Obj, comentario) {
        var _this = this;
        Obj.seleccionado.cerrado = true;
        this.comentarRestClientService
            .ComentarioPDF_put(Obj.seleccionado)
            .subscribe(function (response) {
            debugger;
            _this.Mensaje = "operación realizada con exito.";
        }, function (error) {
            debugger;
            console.log(error);
            _this.Mensaje =
                "operación no pudo completarse con exito. favor comunicarse con el administrador";
        });
        this.comentarRestClientService
            .ComentarioPDF_post(Obj.seleccionado, Obj.comentario)
            .subscribe(function (response) {
            debugger;
            _this.Mensaje = "operación realizada con exito.";
        }, function (error) {
            debugger;
            console.log(error);
            _this.Mensaje =
                "operación no pudo completarse con exito. favor comunicarse con el administrador";
        });
    };
    RedComentarPdfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-red-comentar-pdf",
            template: __webpack_require__(/*! ./red-comentar-pdf.component.html */ "./src/app/components/red-comentar-pdf/red-comentar-pdf.component.html"),
            providers: [src_app_services_red_comentar_red_comentar_rest_client_service__WEBPACK_IMPORTED_MODULE_3__["ComentarRestClientService"]],
            styles: [__webpack_require__(/*! ./red-comentar-pdf.component.css */ "./src/app/components/red-comentar-pdf/red-comentar-pdf.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_red_comentar_red_comentar_rest_client_service__WEBPACK_IMPORTED_MODULE_3__["ComentarRestClientService"]])
    ], RedComentarPdfComponent);
    return RedComentarPdfComponent;
}());



/***/ }),

/***/ "./src/app/components/red-crear-version/red-crear-version.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/red-crear-version/red-crear-version.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVkLWNyZWFyLXZlcnNpb24vcmVkLWNyZWFyLXZlcnNpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/red-crear-version/red-crear-version.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/red-crear-version/red-crear-version.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"marginH content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Crear versión de RED\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Crear versión de RED</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <!-- left column -->\r\n      <div class=\"col-md-12\">\r\n        <!-- general form elements -->\r\n\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box\">\r\n            <div class=\"box-body\">\r\n              <!-- box-header -->\r\n              <div class=\"box-header with-border\">\r\n                <div class=\"row\">\r\n                  <div class=\"col col-md-9\">\r\n                    <h3 class=\"box-title\">{{detalle.nameRed}}</h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col col-md-9\">\r\n                    <a href=\"\" routerLink=\"\">\r\n                      <h3 class=\"box-title\">{{detalle.nameProject}}</h3>\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"col col-md-3\">\r\n                    <h3 class=\"box-title\">Estado: {{detalle.status}}</h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col col-md-9\">\r\n                    <h3 class=\"box-title\">{{detalle.url}}</h3>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- /.box-header -->\r\n              <!-- static data table -->\r\n              <table class=\"table table-hover table-bordered table-margin\">\r\n                <thead>\r\n                  <tr>\r\n                    <td colspan=\"2\">\r\n                      <h3 class=\"text-center\">Crear versión</h3>\r\n                    </td>\r\n                  </tr>\r\n                </thead>\r\n                <tr>\r\n                  <td>Nombre</td>\r\n                  <td>{{model ? model.nombre : ''}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Consecutivo</td>\r\n                  <td>{{model ? model.consecutivo : -1}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Creado por</td>\r\n                  <td>{{model ? model.creado_por : ''}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Fecha creación</td>\r\n                  <td>{{model ? model.fechaCreacion : ''}}</td>\r\n                </tr>\r\n              </table>\r\n              <!-- /.static data table -->\r\n              <!-- dynamic data table -->\r\n              <table class=\"table table-hover table-bordered table-margin\">\r\n                <thead>\r\n                <tr>\r\n                  <td colspan=\"7\">\r\n                    <h3 class=\"text-center\">Recursos Existentes</h3>\r\n                  </td>\r\n                </tr>\r\n                <tr class=\"thead-light text-center\">\r\n                  <th scope=\"col\">Seleccionar</th>\r\n                  <th scope=\"col\">Nombre</th>\r\n                  <th scope=\"col\">Archivo</th>\r\n                  <th scope=\"col\">Fecha Creación</th>\r\n                  <th scope=\"col\">Fecha Modificación</th>\r\n                  <th scope=\"col\">Descripción</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let recurso of recursosExistentes\">\r\n                  <td class=\"text-center\"><input id=\"checkbox_{{recurso.nombre}}\" type=\"checkbox\" name=\"checkbox_{{recurso.nombre}}\" value=\"{{recurso.nombre}}\" (click)=\"onSelectRecurso(recurso.nombre)\"></td>\r\n                  <td>{{recurso.nombre}}</td>\r\n                  <td>{{recurso.archivo}}</td>\r\n                  <td>{{recurso.fechaCreacion}}</td>\r\n                  <td>{{recurso.fechaUltimaModificacion}}</td>\r\n                  <td>{{recurso.descripcion}}</td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n              <!-- /.dynamic data table -->\r\n              <!-- form start -->\r\n              <form #versionForm=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(versionForm)\">\r\n                <div class=\"box-body\">\r\n                  <div class=\"form-group\">\r\n                    <label>Imágen miniatura</label>\r\n                    <input type=\"file\" accept=\"image/*\" (change)=\"fileChangeEvent($event)\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-footer\">\r\n                  <button type=\"button\" (click)=\"goBack()\" class=\"btn btn-default spaceDer m-2\"><i\r\n                class=\"fas fa-chevron-left\"></i>&nbsp;Volver</button>\r\n                  <button type=\"submit\" class=\"btn btn-primary\">Crear versión</button>\r\n                </div>\r\n              </form>\r\n              <!-- /.form start -->\r\n            </div>\r\n            <!-- /.box-body -->\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n        <!-- /.box primary-->\r\n      </div>\r\n      <!--/.col (left) -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->\r\n"

/***/ }),

/***/ "./src/app/components/red-crear-version/red-crear-version.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/red-crear-version/red-crear-version.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RedCrearVersionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedCrearVersionComponent", function() { return RedCrearVersionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_red_detalle_red_detalle_red_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/red/detalle-red/detalle-red.service */ "./src/app/services/red/detalle-red/detalle-red.service.ts");
/* harmony import */ var _services_version_version_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/version/version.model */ "./src/app/services/version/version.model.ts");
/* harmony import */ var _services_version_version_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/version/version.service */ "./src/app/services/version/version.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_recurso_recurso_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/recurso/recurso.service */ "./src/app/services/recurso/recurso.service.ts");








var RedCrearVersionComponent = /** @class */ (function () {
    function RedCrearVersionComponent(route, detalleRedService, versionesService, recursosService, location) {
        this.route = route;
        this.detalleRedService = detalleRedService;
        this.versionesService = versionesService;
        this.recursosService = recursosService;
        this.location = location;
    }
    RedCrearVersionComponent.prototype.ngOnInit = function () {
        this.idRed = this.route.snapshot.params.idRed;
        this.getDetalleRed();
        this.getRecursos();
        this.getVersiones();
        this.recursosSeleccionados = [];
    };
    // Metodo que procesa los archivos seleccionados para guardar versión
    RedCrearVersionComponent.prototype.fileChangeEvent = function (fileInput) {
        this.thumbnail = fileInput.target.files[0];
    };
    // Metodo ejecutado al darle enviar desde la vista
    RedCrearVersionComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.model.redId = this.idRed;
        this.model.recursosSeleccionados = this.recursosSeleccionados;
        this.model.archivos = '/Reds/' + this.idRed + '/Versiones/' + this.model.consecutivo + '/';
        this.model.imagen = this.model.archivos + this.thumbnail.name;
        this.model.recursos = [];
        this.model.recursosSeleccionados.forEach(function (recurso) {
            _this.model.recursos.push(recurso.id);
        });
        this.crearVersionRed(this.model);
        this.crearVersionDropbox(this.idRed, this.model.consecutivo, this.model.recursosSeleccionados, this.thumbnail);
    };
    // Método para crear versión de red. Envía información al backend.
    RedCrearVersionComponent.prototype.crearVersionRed = function (model) {
        var _this = this;
        this.versionesService.crearVersionRed(model, this.idRed)
            .subscribe(function (status) {
            if (status) {
                _this.goBack();
            }
        });
    };
    // Método que copia los archivos internamente en dropbox
    RedCrearVersionComponent.prototype.crearVersionDropbox = function (idRed, consecutivo, recursos, thumbnail) {
        this.versionesService.crearVersionDropbox(idRed, consecutivo, recursos, thumbnail);
    };
    // Metodo que obtiene informacion del RED
    RedCrearVersionComponent.prototype.getDetalleRed = function () {
        var _this = this;
        this.detalleRedService
            .getDetalleRed(this.idRed)
            .subscribe(function (detalle) { return (_this.detalle = detalle); });
    };
    // Método que obtiene los recursos con la información completa del RED
    RedCrearVersionComponent.prototype.getRecursos = function () {
        var _this = this;
        this.recursosService.getRecursosFull(this.idRed)
            .then(function (recursos) {
            _this.recursosExistentes = recursos;
        });
    };
    // Metodo que obtiene las versiones del RED
    RedCrearVersionComponent.prototype.getVersiones = function () {
        var _this = this;
        this.versionesService.getVersiones(this.idRed)
            .then(function (versiones) {
            _this.versionesExistentes = versiones;
            _this.populateModel();
        });
    };
    // Metodo que llena la información necesaria para el modelo de la vista
    RedCrearVersionComponent.prototype.populateModel = function () {
        this.model = new _services_version_version_model__WEBPACK_IMPORTED_MODULE_4__["CrearVersionModel"]();
        this.model.consecutivo = this.versionesExistentes.length + 1;
        this.model.nombre = this.detalle.nameRed + ' ' + this.model.consecutivo;
        this.model.fechaCreacion = new Date().toLocaleString();
        this.model.creado_por = 'jmendez';
    };
    // Método para guardar la información de los recursos seleccionados
    RedCrearVersionComponent.prototype.onSelectRecurso = function (nombre) {
        var seleccionado = document.getElementById('checkbox_' + nombre);
        var isChecked = seleccionado.checked;
        var index = this.recursosSeleccionados.findIndex(function (r) { return r.nombre === nombre; });
        if (isChecked && index === -1) {
            var sel = this.recursosExistentes.find(function (r) { return r.nombre === nombre; });
            this.recursosSeleccionados.push(sel);
        }
        if (!isChecked && index >= 0) {
            this.recursosSeleccionados.splice(index, 1);
        }
    };
    // Metodo que regresa a la pantella anterior
    RedCrearVersionComponent.prototype.goBack = function () {
        this.location.back();
    };
    RedCrearVersionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-red-crear-version',
            template: __webpack_require__(/*! ./red-crear-version.component.html */ "./src/app/components/red-crear-version/red-crear-version.component.html"),
            styles: [__webpack_require__(/*! ./red-crear-version.component.css */ "./src/app/components/red-crear-version/red-crear-version.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_red_detalle_red_detalle_red_service__WEBPACK_IMPORTED_MODULE_3__["DetalleRedService"],
            _services_version_version_service__WEBPACK_IMPORTED_MODULE_5__["VersionService"], _services_recurso_recurso_service__WEBPACK_IMPORTED_MODULE_7__["RecursoService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], RedCrearVersionComponent);
    return RedCrearVersionComponent;
}());



/***/ }),

/***/ "./src/app/components/red-recursos-detalle/red-recursos-detalle.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/red-recursos-detalle/red-recursos-detalle.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marginH {\r\n  min-height: calc(100vh - 110px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWQtcmVjdXJzb3MtZGV0YWxsZS9yZWQtcmVjdXJzb3MtZGV0YWxsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWQtcmVjdXJzb3MtZGV0YWxsZS9yZWQtcmVjdXJzb3MtZGV0YWxsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbkgge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/red-recursos-detalle/red-recursos-detalle.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/red-recursos-detalle/red-recursos-detalle.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"marginH content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Detalles de un recurso\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Detalles de un recurso</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <!-- left column -->\r\n      <div class=\"col-md-12\">\r\n        <!-- general form elements -->\r\n\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box\">\r\n\r\n            <div class=\"box-body\">\r\n              <div id=\"loadingContainer\" *ngIf=\"loading\" class=\"text-center\">\r\n                <sk-chasing-dots [color]=\"sisredColor\"></sk-chasing-dots>\r\n              </div>\r\n              <div *ngIf=\"!loading && recurso\" class=\"row\">\r\n                <div class=\"col-12 text-center mb-5\">\r\n                  <h5 class=\"text-secondary mb-0 pb-0\">RECURSO</h5>\r\n                  <h1 class=\"text-dark\">{{recurso.nombre}}</h1>\r\n                </div>\r\n\r\n                <div class=\"col-lg-4 col-12 text-center block-center\">\r\n                  <img src=\"{{recurso.thumbnail}}\" alt=\"...\" class=\"img-thumbnail shadow\"\r\n                    style=\"width: 250px; height: 250px;\">\r\n                  <br><br>\r\n                  <div class=\"text-center mb-4\">\r\n                    <button type=\"button\" class=\"btn btn-secondary text-white\"\r\n                      [routerLink]=\"['/red/'+idred+'/recursos/']\"><i\r\n                        class=\"fas fa-chevron-left\"></i>&nbsp;Regresar</button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-7 col-12\">\r\n                  <ul class=\"list-group mt-0\">\r\n                    <li class=\"list-group-item border-sisred-blue\"><b>Id:</b>{{recurso.id}}</li>\r\n                    <li class=\"list-group-item border-sisred-blue\"><b>Nombre: </b>{{recurso.nombre}}</li>\r\n                    <li class=\"list-group-item border-sisred-blue\"><b>Archivo: </b>{{recurso.archivo}}</li>\r\n                    <li class=\"list-group-item border-sisred-blue\"><b>Fecha de creación: </b>{{recurso.fecha_creacion}}\r\n                    </li>\r\n                    <li class=\"list-group-item border-sisred-blue\"><b>Fecha de modificación:</b>\r\n                      {{recurso.fecha_ultima_modificacion}}</li>\r\n                    <li class=\"list-group-item border-sisred-blue\"><b>Tipo: </b>{{recurso.tipo}}</li>\r\n                    <li class=\"list-group-item border-sisred-blue\"><b>Descripción: </b>{{recurso.descripcion}}</li>\r\n                  </ul>\r\n                </div>\r\n\r\n                <!-- <div class=\"col-12 mt-1 mb-2\" *ngIf=\"red.recursos.length === 0\">\r\n                  <h3>No hay recursos asociados al red</h3>\r\n                </div> -->\r\n\r\n              </div>\r\n            </div>\r\n            <!-- /.box-body -->\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n        <!-- /.box primary-->\r\n      </div>\r\n      <!--/.col (left) -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->\r\n"

/***/ }),

/***/ "./src/app/components/red-recursos-detalle/red-recursos-detalle.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/red-recursos-detalle/red-recursos-detalle.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RedRecursosDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedRecursosDetalleComponent", function() { return RedRecursosDetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_recurso_recurso_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/recurso/recurso.service */ "./src/app/services/recurso/recurso.service.ts");




var RedRecursosDetalleComponent = /** @class */ (function () {
    function RedRecursosDetalleComponent(activatedRoute, api) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.recursos = [];
        this.idrecurso = 0;
        this.idred = 0;
        this.loading = true;
        this.sisredColor = '#3c8dbc';
        this.getResources = function () {
            _this.api.getRecursos(_this.idrecurso).subscribe(function (data) {
                _this.recursos = data;
                console.log(_this.idrecurso);
                console.log(data);
                if (_this.recursos.length > 0) {
                    _this.recurso = _this.recursos[0];
                }
                _this.loading = false;
            }, function (error) {
                console.log(error);
                _this.loading = false;
            });
        };
        this.idrecurso = this.activatedRoute.snapshot.params['idrecurso'];
        this.getResources();
        this.idred = this.activatedRoute.snapshot.params['id'];
    }
    RedRecursosDetalleComponent.prototype.ngOnInit = function () { };
    RedRecursosDetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-red-recursos-detalle',
            template: __webpack_require__(/*! ./red-recursos-detalle.component.html */ "./src/app/components/red-recursos-detalle/red-recursos-detalle.component.html"),
            styles: [__webpack_require__(/*! ./red-recursos-detalle.component.css */ "./src/app/components/red-recursos-detalle/red-recursos-detalle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_recurso_recurso_service__WEBPACK_IMPORTED_MODULE_3__["RecursoService"]])
    ], RedRecursosDetalleComponent);
    return RedRecursosDetalleComponent;
}());



/***/ }),

/***/ "./src/app/components/red-recursos/red-recursos.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/red-recursos/red-recursos.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marginH {\r\n  min-height: calc(100vh - 110px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWQtcmVjdXJzb3MvcmVkLXJlY3Vyc29zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZC1yZWN1cnNvcy9yZWQtcmVjdXJzb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW5IIHtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEwcHgpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/red-recursos/red-recursos.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/red-recursos/red-recursos.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"marginH content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1 *ngIf=\"red\">\r\n      RED <b>{{red.nombre}}</b>\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Recursos asociados</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <!-- left column -->\r\n      <div class=\"col-md-12\">\r\n        <!-- general form elements -->\r\n\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box\">\r\n\r\n            <div class=\"box-body\">\r\n              <div id=\"loadingContainer\" *ngIf=\"loading\" class=\"text-center\">\r\n                <sk-chasing-dots [color]=\"sisredColor\"></sk-chasing-dots>\r\n              </div>\r\n              <div *ngIf=\"!loading\" class=\"row\" style=\"display: flex; align-items: center;\">\r\n\r\n                <div *ngIf=\"red.recursos.length > 0\" class=\"col-12\">\r\n                  <br />\r\n                </div>\r\n\r\n                <ng-container *ngIf=\"red.recursos.length > 0\">\r\n                  <div class=\"col-10 mx-auto\">\r\n                    <h2 class=\"text-center mt-0 pt-0 mb-3\">Recursos asociados</h2>\r\n                    <br />\r\n                    <ul class=\"list-group shadow\">\r\n                      <li *ngFor=\"let recurso of red.recursos\"\r\n                        class=\"list-group-item list-group-item-action text-center text-dark border-sisred-blue pointer\"\r\n                        [routerLink]=\"['/red/'+red.id_conectate+'/recursos/'+recurso.id]\">\r\n                        <h4>{{recurso.nombre}}</h4>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n\r\n                </ng-container>\r\n\r\n                <div class=\"col-12 mt-1 mb-2\" *ngIf=\"red.recursos.length === 0\">\r\n                  <h3>No hay recursos asociados al red</h3>\r\n                </div>\r\n\r\n                <div class=\"col-12 text-center\">\r\n                  <hr />\r\n                  <button class=\"btn btn-success\" [routerLink]=\"['/red/' + id + '/recursos/agregar' ]\"\r\n                    routerLinkActive=\"router-link-active\"><i class=\"fas fa-plus\"></i>&nbsp;Agregar recurso</button>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <!-- /.box-body -->\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n        <!-- /.box primary-->\r\n      </div>\r\n      <!--/.col (left) -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->\r\n"

/***/ }),

/***/ "./src/app/components/red-recursos/red-recursos.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/red-recursos/red-recursos.component.ts ***!
  \*******************************************************************/
/*! exports provided: RedRecursosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedRecursosComponent", function() { return RedRecursosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_red_red_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/red/red.service */ "./src/app/services/red/red.service.ts");




var RedRecursosComponent = /** @class */ (function () {
    function RedRecursosComponent(activatedRoute, api) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.reds = [];
        this.id = 0;
        this.loading = true;
        this.sisredColor = '#3c8dbc';
        this.getReds = function () {
            _this.api.getRedRecursosDetalle(_this.id).subscribe(function (data) {
                _this.reds = data;
                if (_this.reds.length > 0) {
                    _this.red = data[0];
                }
                _this.loading = false;
            }, function (error) {
                console.log(error);
                _this.loading = false;
            });
        };
        this.id = this.activatedRoute.snapshot.params['idRed'];
        this.getReds();
    }
    RedRecursosComponent.prototype.ngOnInit = function () { };
    RedRecursosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-red-recursos',
            template: __webpack_require__(/*! ./red-recursos.component.html */ "./src/app/components/red-recursos/red-recursos.component.html"),
            styles: [__webpack_require__(/*! ./red-recursos.component.css */ "./src/app/components/red-recursos/red-recursos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_red_red_service__WEBPACK_IMPORTED_MODULE_3__["RedService"]])
    ], RedRecursosComponent);
    return RedRecursosComponent;
}());



/***/ }),

/***/ "./src/app/components/red/asignaciones/red-asignados.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/red/asignaciones/red-asignados.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marginH {\r\n  min-height: 621px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWQvYXNpZ25hY2lvbmVzL3JlZC1hc2lnbmFkb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVkL2FzaWduYWNpb25lcy9yZWQtYXNpZ25hZG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luSCB7XHJcbiAgbWluLWhlaWdodDogNjIxcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/red/asignaciones/red-asignados.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/red/asignaciones/red-asignados.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"marginH content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      REDs Asignados\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Agregar proyecto RED</li>\r\n      <li class=\"\">REDs asignados</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <!-- left column -->\r\n      <div class=\"col-md-12\">\r\n        <!-- general form elements -->\r\n\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Usted ha sido asignado a los siguientes REDs:</h3>\r\n            </div>\r\n            <div class=\"box-body\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\">Nombre del RED</th>\r\n                    <th scope=\"col\">Rol</th>\r\n                    <th scope=\"col\"></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let red of redsAsignados\">\r\n                    <th scope=\"row\">{{red.nombre}}</th>\r\n                    <td>{{red.rol}}</td>\r\n                    <td>\r\n                      <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/red/{{red.id}}/detalle\">Ver Detalle\r\n                      </button>&nbsp;&nbsp;\r\n                      <button type=\"button\" class=\"btn btn-warning\" routerLink=\"/red/{{red.id}}/proyectos\">Ver Proyectos\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- /.box-body -->\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n        <!-- /.box primary-->\r\n      </div>\r\n      <!--/.col (left) -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->"

/***/ }),

/***/ "./src/app/components/red/asignaciones/red-asignados.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/red/asignaciones/red-asignados.component.ts ***!
  \************************************************************************/
/*! exports provided: RedAsignadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedAsignadosComponent", function() { return RedAsignadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_red_red_asignados_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/red/red-asignados.service */ "./src/app/services/red/red-asignados.service.ts");




/**
 * Componente encargado del Detalle de un RED en especifico.
 */
var RedAsignadosComponent = /** @class */ (function () {
    function RedAsignadosComponent(activatedRoute, router, redAsignadosService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.redAsignadosService = redAsignadosService;
        this.redsAsignados = null;
    }
    RedAsignadosComponent.prototype.ngOnInit = function () {
        setup();
        this.idUsuario = this.activatedRoute.snapshot.params.idUsuario; //TODO Temporal.
        this.getREDsAsignados();
    };
    RedAsignadosComponent.prototype.getREDsAsignados = function () {
        var _this = this;
        if (this.idUsuario == null)
            this.idUsuario = 2;
        this.redAsignadosService.getREDs(this.idUsuario).subscribe(function (redsAsignado) { return _this.redsAsignados = redsAsignado; });
    };
    RedAsignadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-red-asignados',
            template: __webpack_require__(/*! ./red-asignados.component.html */ "./src/app/components/red/asignaciones/red-asignados.component.html"),
            styles: [__webpack_require__(/*! ./red-asignados.component.css */ "./src/app/components/red/asignaciones/red-asignados.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_red_red_asignados_service__WEBPACK_IMPORTED_MODULE_3__["RedAsignadosService"]])
    ], RedAsignadosComponent);
    return RedAsignadosComponent;
}());



/***/ }),

/***/ "./src/app/components/reds-por-persona/reds-por-persona.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/reds-por-persona/reds-por-persona.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\r\n    width: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWRzLXBvci1wZXJzb25hL3JlZHMtcG9yLXBlcnNvbmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVkcy1wb3ItcGVyc29uYS9yZWRzLXBvci1wZXJzb25hLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/reds-por-persona/reds-por-persona.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/reds-por-persona/reds-por-persona.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"marginH content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Asignaciones\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Asignaciones</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <!-- left column -->\r\n      <div class=\"col-md-12\">\r\n        <!-- general form elements -->\r\n\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Ver REDs asignados por persona:</h3>\r\n            </div>\r\n            <div class=\"box-body\">\r\n              <select class=\"form-control\" id=\"selectorUsuario\" (change)=\"onChangeUsuario($event.target.value)\">\r\n                <option value=\"\">--</option>\r\n                <option *ngFor=\"let usuario of usuarios\" value=\"{{usuario.numeroIdentificacion}}\">{{usuario.nombres}}\r\n                  {{usuario.apellidos}}</option>\r\n              </select>\r\n              <table class=\"table\" *ngIf=\"valor\">\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\">Recurso Educativo Digital</th>\r\n                    <th scope=\"col\">Rol</th>\r\n                    <th scope=\"col\">Detalle</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let asign of asignFiltradas\">\r\n                    <td>{{asign.red.nombreCorto}}</td>\r\n                    <td>{{asign.rol}}</td>\r\n                    <td>\r\n                      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/red/' + asign.red.id + '/detalle']\"\r\n                        routerLinkActive=\"router-link-active\">\r\n                        <i class=\"fa fa-search\"></i>&nbsp;\r\n                        Ver detalle\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <span *ngIf=\"!valor\">Seleccione un usuario para ver sus REDs asignados</span>\r\n            </div>\r\n            <!-- /.box-body -->\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n        <!-- /.box primary-->\r\n      </div>\r\n      <!--/.col (left) -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->\r\n"

/***/ }),

/***/ "./src/app/components/reds-por-persona/reds-por-persona.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/reds-por-persona/reds-por-persona.component.ts ***!
  \***************************************************************************/
/*! exports provided: RedsPorPersonaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedsPorPersonaComponent", function() { return RedsPorPersonaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rolAsignado_asignacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rolAsignado/asignacion.service */ "./src/app/services/rolAsignado/asignacion.service.ts");



var RedsPorPersonaComponent = /** @class */ (function () {
    function RedsPorPersonaComponent(asignacionService) {
        this.asignacionService = asignacionService;
        this.asignaciones = [];
        this.asignFiltradas = [];
        this.usuarios = [];
        this.valor = '';
    }
    RedsPorPersonaComponent.prototype.initUsuarios = function () {
        var _loop_1 = function (asign) {
            var usr = asign.usuario;
            if (this_1.usuarios.filter(function (u) { return u.numeroIdentificacion === usr.numeroIdentificacion; }).length === 0) {
                this_1.usuarios = this_1.usuarios.concat(usr);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.asignaciones; _i < _a.length; _i++) {
            var asign = _a[_i];
            _loop_1(asign);
        }
    };
    RedsPorPersonaComponent.prototype.onChangeUsuario = function (id) {
        this.valor = id;
        this.asignFiltradas = this.asignaciones.filter(function (asign) { return asign.usuario.numeroIdentificacion === id; });
    };
    RedsPorPersonaComponent.prototype.getAsignaciones = function () {
        var _this = this;
        this.asignacionService
            .getAsignaciones()
            .then(function (asignaciones) {
            console.log(asignaciones);
            _this.asignaciones = asignaciones;
            _this.initUsuarios();
        })
            .catch(function (err) { return console.log(err); });
    };
    RedsPorPersonaComponent.prototype.ngOnInit = function () {
        setup();
        this.getAsignaciones();
    };
    RedsPorPersonaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reds-por-persona',
            template: __webpack_require__(/*! ./reds-por-persona.component.html */ "./src/app/components/reds-por-persona/reds-por-persona.component.html"),
            styles: [__webpack_require__(/*! ./reds-por-persona.component.css */ "./src/app/components/reds-por-persona/reds-por-persona.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rolAsignado_asignacion_service__WEBPACK_IMPORTED_MODULE_2__["AsignacionService"]])
    ], RedsPorPersonaComponent);
    return RedsPorPersonaComponent;
}());



/***/ }),

/***/ "./src/app/components/reds-relacionados/reds-relacionados.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/reds-relacionados/reds-relacionados.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loadingContainer {\r\n  min-height: 500px;\r\n}\r\n\r\n.btn-outline-dark {\r\n  color: #3c8dbc;\r\n}\r\n\r\n.btn-outline-dark:hover {\r\n  color: white !important;\r\n  background-color: #3c8dbc !important;\r\n  border-color: #3c8dbc !important;\r\n}\r\n\r\n.marginH {\r\n  min-height: calc(100vh - 110px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWRzLXJlbGFjaW9uYWRvcy9yZWRzLXJlbGFjaW9uYWRvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWRzLXJlbGFjaW9uYWRvcy9yZWRzLXJlbGFjaW9uYWRvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvYWRpbmdDb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtZGFyayB7XHJcbiAgY29sb3I6ICMzYzhkYmM7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1kYXJrOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M4ZGJjICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2M4ZGJjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXJnaW5IIHtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEwcHgpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/reds-relacionados/reds-relacionados.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/reds-relacionados/reds-relacionados.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"marginH content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      REDs relacionados al proyecto <b>{{nombreCortoProyecto}}</b>\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">REDs relacionados</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <!-- left column -->\r\n      <div class=\"col-md-12\">\r\n        <!-- general form elements -->\r\n\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box\">\r\n\r\n            <div class=\"box-body\">\r\n              <div id=\"loadingContainer\" *ngIf=\"loading\" class=\"text-center\">\r\n                <sk-chasing-dots [color]=\"sisredColor\"></sk-chasing-dots>\r\n              </div>\r\n              <div *ngIf=\"!loading\" class=\"row\" style=\"display: flex; align-items: center;\">\r\n\r\n                <div *ngIf=\"redsList.length > 0\" class=\"col-12\">\r\n                  <br />\r\n                </div>\r\n\r\n                <ng-container *ngIf=\"redsList.length > 0\">\r\n                  <div class=\"col-12\">\r\n                    <div class=\"row\">\r\n                      <div *ngFor=\"let red of redsList\"\r\n                        class=\"col-lg-4 col-md-6 col-12 col-12 mb-5 d-flex align-items-stretch\">\r\n                        <div class=\"card mx-auto shadow w-75 border-sisred-blue\">\r\n                          <div class=\"card-body text-dark\">\r\n\r\n                            <div class=\"text-center mb-4\">\r\n                              <br />\r\n                              <i *ngIf=\"red.tipo === 'mp4' || red.tipo === 'mpg'\" class=\"fas fa-video fa-3x\"></i>\r\n                              <i *ngIf=\"red.tipo == 'jpg' || red.tipo == 'png' || red.tipo == 'gif'\"\r\n                                class=\"fa fa-image fa-3x\"></i>\r\n                              <i *ngIf=\"red.tipo == 'mp3'\" class=\"far fa-file-audio fa-3x\"></i>\r\n                              <i *ngIf=\"red.tipo != 'mp3' && red.tipo != 'jpg' && red.tipo != 'png' && red.tipo != 'mp4'\"\r\n                                class=\"fas fa-file fa-3x\"></i>\r\n                            </div>\r\n\r\n                            <h4 class=\"card-title mt-2 text-center\"><b>{{red.nombreCortoRed}}</b></h4>\r\n                            <p class=\"card-text\"><b>Fecha creación: </b>{{red.fechaCreacion}}</p>\r\n                            <p class=\"card-text\"><b>Tipo:</b>&nbsp;{{red.tipo}}</p>\r\n                            <p class=\"card-text\"><b>Asesor: &nbsp;</b>{{red.asesor}}</p>\r\n                            <p class=\"card-text\"><b>Proyecto: &nbsp;</b>{{nombreProyecto}}</p>\r\n                          </div>\r\n\r\n                          <div class=\"card-footer text-center\">\r\n                            <button type=\"button\" class=\"btn btn-outline-dark shadow-none\"\r\n                              [routerLink]=\"['/red/' + red.idRed + '/detalle']\" routerLinkActive=\"router-link-active\"><i\r\n                                class=\"fas fa-eye\"></i>&nbsp;Ver\r\n                              detalles</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </ng-container>\r\n\r\n                <div class=\"col-12 mt-1 mb-2\" *ngIf=\"redsList.length === 0\">\r\n                  <h3>No hay reds relacionados al proyecto con id {{idProyectoC}}</h3>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <!-- /.box-body -->\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n        <!-- /.box primary-->\r\n      </div>\r\n      <!--/.col (left) -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->\r\n"

/***/ }),

/***/ "./src/app/components/reds-relacionados/reds-relacionados.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/reds-relacionados/reds-relacionados.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RedsRelacionadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedsRelacionadosComponent", function() { return RedsRelacionadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_red_red_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/red/red.service */ "./src/app/services/red/red.service.ts");




var RedsRelacionadosComponent = /** @class */ (function () {
    function RedsRelacionadosComponent(redService, activatedRoute) {
        this.redService = redService;
        this.activatedRoute = activatedRoute;
        this.modal = null;
        this.redsList = [];
        this.redsListOptions = [];
        this.loading = true;
        this.selectedMultimedia = null;
        this.nombreCortoProyecto = null;
        this.nombreProyecto = null;
        this.sisredColor = '#3c8dbc';
        this.idProyectoC = 0;
        this.idProyectoC = this.activatedRoute.snapshot.params['idRed'];
        console.log(this.idProyectoC);
    }
    RedsRelacionadosComponent.prototype.ngOnInit = function () {
        this.loadReds();
    };
    RedsRelacionadosComponent.prototype.loadReds = function () {
        var _this = this;
        this.redService
            .getRedsRelacionados(this.idProyectoC)
            .then(function (data) {
            _this.nombreCortoProyecto = data.nombreCortoProyecto;
            _this.nombreProyecto = data.nombreProyecto;
            _this.redsListOptions = data.redsRelacionados;
            console.log(data);
            _this.redsListOptions.sort(_this.compare);
            _this.redsList = _this.redsListOptions;
            _this.loading = false;
            console.log(_this.idProyectoC);
        })
            .catch(function (err) {
            console.log(err);
            _this.loading = false;
        });
    };
    RedsRelacionadosComponent.prototype.compare = function (a, b) {
        if (a.fechaCreacion < b.fechaCreacion) {
            return 1;
        }
        if (a.fechaCreacion > b.fechaCreacion) {
            return -1;
        }
        return 0;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RedsRelacionadosComponent.prototype, "proyectoConectate", void 0);
    RedsRelacionadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reds-relacionados',
            template: __webpack_require__(/*! ./reds-relacionados.component.html */ "./src/app/components/reds-relacionados/reds-relacionados.component.html"),
            styles: [__webpack_require__(/*! ./reds-relacionados.component.css */ "./src/app/components/reds-relacionados/reds-relacionados.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_red_red_service__WEBPACK_IMPORTED_MODULE_3__["RedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RedsRelacionadosComponent);
    return RedsRelacionadosComponent;
}());



/***/ }),

/***/ "./src/app/components/ver-avance-red/ver-avance-red.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/ver-avance-red/ver-avance-red.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVyLWF2YW5jZS1yZWQvdmVyLWF2YW5jZS1yZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/ver-avance-red/ver-avance-red.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/ver-avance-red/ver-avance-red.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Avance de RED\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a href=\"red/detalle\">RED</a></li>\r\n      <li class=\"active\">Ver avance del RED</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <!-- Left col -->\r\n      <div class=\"col-md-12\">\r\n          <div class=\"box box-primary\">\r\n            <div class=\"box-header with-border\">  \r\n                <a class=\"box-title\" href=\"#\" (click)=\"onChangePageRed()\">{{ red?.nombre }}</a>\r\n              <div class=\"box-tools pull-right\">\r\n                <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <div class=\"box-body\">\r\n              <div class=\"row invoice-info\">\r\n                <div class=\"col-md-8\">\r\n                    Proyecto Conecta-Te: {{ red?.getProyecto }}\r\n                </div>\r\n                <!-- /.col -->\r\n                <div class=\"col-md-4\">\r\n                  <a class=\"btn btn-app pull-right\">\r\n                    <i class=\"glyphicon glyphicon-search\"></i> {{ red?.getFase }}\r\n                  </a>\r\n                </div>\r\n                <!-- /.col -->\r\n              </div>\r\n              <!-- /.row invoice-info -->\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h4>Avance de sub-productos de RED</h4>\r\n                </div>\r\n              </div>\r\n              <!-- /.row-->\r\n              <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table no-margin\">\r\n                      <thead>\r\n                      <tr>\r\n                        <th>Sub-producto</th>\r\n                        <th>Fase</th>\r\n                      </tr>\r\n                      </thead>\r\n                      <tbody>                      \r\n                      <tr *ngFor=\"let subproducto of subred\">\r\n                        <td>{{ subproducto.nombre }}</td>\r\n                        <td><span class=\"label label-success\">{{ subproducto.getFase }}</span></td>\r\n                      </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                  <!-- /.table-responsive -->\r\n                </div>\r\n              </div>\r\n              <!-- /.row-->\r\n            </div>\r\n            <!-- ./box-body -->\r\n            <div class=\"box-footer\">            \r\n            </div>\r\n            <!-- /.box-footer -->\r\n          </div>\r\n      </div>\r\n      <!-- /.col.md-12 -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n\r\n</div>\r\n<!-- /.content-wrapper -->"

/***/ }),

/***/ "./src/app/components/ver-avance-red/ver-avance-red.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/ver-avance-red/ver-avance-red.component.ts ***!
  \***********************************************************************/
/*! exports provided: VerAvanceRedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerAvanceRedComponent", function() { return VerAvanceRedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_red_advance_red_rest_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/red/advance-red-rest-client.service */ "./src/app/services/red/advance-red-rest-client.service.ts");





var VerAvanceRedComponent = /** @class */ (function () {
    function VerAvanceRedComponent(route, advanceRedRestClientService, _route) {
        var _this = this;
        this.route = route;
        this.advanceRedRestClientService = advanceRedRestClientService;
        this._route = _route;
        this.route.params.subscribe(function (param) {
            _this.idRed = Number(param['idRed']);
        });
    }
    VerAvanceRedComponent.prototype.ngOnInit = function () {
        this.loadForm();
        this.getAdvanceRed(this.idRed);
    };
    VerAvanceRedComponent.prototype.loadForm = function () {
        this.advanceRedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            getProyecto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            getFase: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    };
    VerAvanceRedComponent.prototype.getAdvanceRed = function (id) {
        var _this = this;
        this.advanceRedRestClientService
            .getAdvanceRedById(id)
            .subscribe(function (response) {
            _this.red = response[0];
            _this.subred = response;
        });
    };
    VerAvanceRedComponent.prototype.onChangePageRed = function () {
        this._route.navigate(['/ver-detalle-red/' + this.idRed]);
    };
    VerAvanceRedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ver-avance-red',
            template: __webpack_require__(/*! ./ver-avance-red.component.html */ "./src/app/components/ver-avance-red/ver-avance-red.component.html"),
            styles: [__webpack_require__(/*! ./ver-avance-red.component.css */ "./src/app/components/ver-avance-red/ver-avance-red.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_red_advance_red_rest_client_service__WEBPACK_IMPORTED_MODULE_4__["AdvanceRedRestClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VerAvanceRedComponent);
    return VerAvanceRedComponent;
}());



/***/ }),

/***/ "./src/app/components/ver-version-red/ver-version-red.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/ver-version-red/ver-version-red.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right {\r\n  text-align: right;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n\r\n.italic {\r\n  font-style: italic;\r\n}\r\n\r\n.info {\r\n  font-size: 15px;\r\n}\r\n\r\n.img-config {\r\n  border: black 1px solid;\r\n  height: 100%\r\n}\r\n\r\n.img-height {\r\n  height: 400px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZXItdmVyc2lvbi1yZWQvdmVyLXZlcnNpb24tcmVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92ZXItdmVyc2lvbi1yZWQvdmVyLXZlcnNpb24tcmVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGFsaWMge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmltZy1jb25maWcge1xyXG4gIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xyXG4gIGhlaWdodDogMTAwJVxyXG59XHJcblxyXG4uaW1nLWhlaWdodCB7XHJcbiAgaGVpZ2h0OiA0MDBweFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/ver-version-red/ver-version-red.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/ver-version-red/ver-version-red.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"marginH content-wrapper\">\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Ver versión del RED\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">RED</li>\r\n      <li class=\"\">Ver versión del RED</li>\r\n    </ol>\r\n  </section>\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box\">\r\n            <div *ngIf=\"objVersion\" class=\"box-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 text-bold info\">{{objVersion.nombreRed}}</div>\r\n                <div class=\"col-md-6 text-bold info right\">Versión {{objVersion.numero}}</div>\r\n                <div class=\"col-md-6 text-bold info\">Proyecto conecta: {{objVersion.nombreConectate}}</div>\r\n                <div class=\"col-md-6 text-bold info right\">Creada por: {{objVersion.creadoPor}}</div>\r\n                <div class=\"col-md-6 info right\">{{objVersion.fechaCreacion}}</div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 center img-height\">\r\n                  <img class=\"img-config\" [src]=\"objVersion.url\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-md-12 center italic\">\r\n                  <a id=\"linkDescarga\">{{mensajeLink}}</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 center\">\r\n                  <table class=\"table table-bordered table-striped dataTable\">\r\n                    <thead>\r\n                    <tr>\r\n                      <th class=\"center\" colspan=\"4\">Recursos asociados a la versión</th>\r\n                    </tr>\r\n                    <tr>\r\n                      <th class=\"center\">Archivo</th>\r\n                      <th class=\"center\">Formato archivo</th>\r\n                      <th class=\"center\">Comentar</th>\r\n                      <th class=\"center\">Descarga</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let recurso of objRecursosVersion; let i = index\">\r\n                      <td>{{recurso.nombre}}</td>\r\n                      <td>{{getExtencion(recurso.archivo)}}</td>\r\n                      <td class=\"text-center\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" routerLink=\"archivo/{{recurso.id}}/comentar\">Comentar</button>\r\n                      </td>\r\n                      <td class=\"text-center\">\r\n                        <a id=\"linkRecurso{{i}}\">Descargar</a>\r\n                      </td>\r\n                    </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/ver-version-red/ver-version-red.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/ver-version-red/ver-version-red.component.ts ***!
  \*************************************************************************/
/*! exports provided: VerVersionRedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerVersionRedComponent", function() { return VerVersionRedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_version_ver_version_red_ver_version_red_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/version/ver-version-red/ver-version-red.service */ "./src/app/services/version/ver-version-red/ver-version-red.service.ts");




var VerVersionRedComponent = /** @class */ (function () {
    function VerVersionRedComponent(route, verVersionRedService) {
        this.route = route;
        this.verVersionRedService = verVersionRedService;
        this.objVersion = null;
        this.objRecursosVersion = null;
        this.mensajeLink = 'Cargando link de descarga...';
    }
    VerVersionRedComponent.prototype.ngOnInit = function () {
        setup();
        this.idVersion = this.route.snapshot.params.idVersion;
        this.getVersion();
        this.getRecursosVersion();
    };
    VerVersionRedComponent.prototype.getVersion = function () {
        var _this = this;
        this.verVersionRedService.getVersion(this.idVersion)
            .then(function (vVersion) {
            _this.objVersion = vVersion;
            _this.getImagenesVersiones();
            _this.initDescargarZip();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    VerVersionRedComponent.prototype.getRecursosVersion = function () {
        var _this = this;
        this.verVersionRedService.getRecursosVersion(this.idVersion)
            .then(function (vLstRecurso) {
            _this.objRecursosVersion = vLstRecurso;
            _this.initDescartaRecursos();
        });
    };
    // Metodo que obtiene las versiones del RED
    VerVersionRedComponent.prototype.getImagenesVersiones = function () {
        var _this = this;
        if (this.objVersion) {
            this.verVersionRedService.getImagenVersion(this.objVersion.imagen)
                .then(function (response) {
                _this.objVersion.url = response.link;
            })
                .catch(function (err) {
                console.log(err);
            });
        }
    };
    VerVersionRedComponent.prototype.getExtencion = function (archivo) {
        var re = /(?:\.([^.]+))?$/;
        var ext = re.exec(archivo)[1];
        return ext === undefined ? 'Sin extención' : ext;
    };
    VerVersionRedComponent.prototype.initDescargarZip = function () {
        var _this = this;
        this.verVersionRedService.descargarZip(this.objVersion.archivos)
            .then(function (response) {
            var urlDescarga = URL.createObjectURL(response.fileBlob);
            var linkDescarga = document.getElementById('linkDescarga');
            linkDescarga.setAttribute('href', urlDescarga);
            linkDescarga.setAttribute('download', "version" + _this.objVersion.numero + ".zip");
            _this.mensajeLink = 'Descargar archivos de la versión';
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    VerVersionRedComponent.prototype.initDescartaRecursos = function () {
        var _this = this;
        this.objRecursosVersion.forEach(function (recurso, i) {
            _this.verVersionRedService.descargarArchivo(recurso.archivo)
                .then(function (response) {
                var urlDescarga = URL.createObjectURL(response.fileBlob);
                var linkDescarga = document.getElementById("linkRecurso" + i);
                linkDescarga.setAttribute('href', urlDescarga);
                linkDescarga.setAttribute('download', recurso.archivo.substr(recurso.archivo.lastIndexOf('/') + 1));
            });
        });
    };
    VerVersionRedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ver-version-red',
            template: __webpack_require__(/*! ./ver-version-red.component.html */ "./src/app/components/ver-version-red/ver-version-red.component.html"),
            styles: [__webpack_require__(/*! ./ver-version-red.component.css */ "./src/app/components/ver-version-red/ver-version-red.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_version_ver_version_red_ver_version_red_service__WEBPACK_IMPORTED_MODULE_3__["VerVersionRedService"]])
    ], VerVersionRedComponent);
    return VerVersionRedComponent;
}());



/***/ }),

/***/ "./src/app/components/version-red-revision/version-red-revision.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/version-red-revision/version-red-revision.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVyc2lvbi1yZWQtcmV2aXNpb24vdmVyc2lvbi1yZWQtcmV2aXNpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/version-red-revision/version-red-revision.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/version-red-revision/version-red-revision.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Versión del RED en revisión        \r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>        \r\n      <li class=\"active\">Versión del RED en revisión</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"box box-primary\">\r\n            <div class=\"box\">\r\n                <div class=\"box-header with-border\">\r\n                    <h3 class=\"box-title\">Información del RED</h3>\r\n                  </div>\r\n                  <!-- /.box-header -->\r\n                  <div class=\"box-body\">\r\n                    <dl>\r\n                      <dd><b>RED:</b> {{ version.nombreRed }}</dd>\r\n                      <dd><b>Número de versión:</b> {{ version.numero }}</dd>\r\n                      <dd><b>Número de recursos:</b> {{ version.recursos }}</dd>\r\n                    </dl>\r\n                    <div>\r\n                      <button type=\"submit\" class=\"btn btn-info\">Pasar RED listo para usuario final</button>\r\n                    </div>                    \r\n                  </div>\r\n            </div>                             \r\n          <!-- /.box-body -->\r\n        </div>\r\n        <!-- /.box -->\r\n      </div>\r\n      <!-- ./col -->\r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Listado de Recursos de la Versión</h3>\r\n            </div>\r\n            <div class=\"box-body\">\r\n              <table id=\"search_table_resources\" class=\"table table-bordered table-striped\">\r\n                <thead>\r\n                <tr>\r\n                  <th>Thumbnail</th>\r\n                  <th>Recurso</th>                  \r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr id=\"searchtableelements\" *ngFor=\"let item of recursos\">\r\n                        <td>\r\n                          <img src=\"{{item.thumbnail}}\" width=\"300\" height=\"200\" *ngIf=\"item.tipo == tipoImagen\">\r\n                          <video id=\"player\" width=\"300\" height=\"200\" src={{item.thumbnail}} allowfullscreen controls #media *ngIf=\"item.tipo == tipoVideo\"></video>\r\n\r\n                        </td>\r\n                        <td>\r\n                          {{ item.nombre }}\r\n                          <div class=\"float-right\">\r\n                            <button *ngIf=\"item.tipo == tipoVideo\" class=\"btn btn-info\"\r\n                                    [routerLink]=\"['/red/version/' +idVersion + '/recurso/'+ item.id +'/comentarios']\"\r\n                                    routerLinkActive=\"router-link-active\">Revisar recurso</button>\r\n                            <button *ngIf=\"item.tipo != tipoVideo\" class=\"btn btn-info\" onClick=\"alert('En desarrollo')\">Revisar recurso</button>\r\n                          </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                <tr>\r\n                  <th>Thumbnail</th>\r\n                  <th>Recurso</th>\r\n                </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>            \r\n          </div>\r\n        </div>\r\n        <div>\r\n          <button type=\"submit\" class=\"btn btn-info\">Volver</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<div class=\"container\">\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n    \r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header color-back\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Seguro quiere habilitar esta version de RED</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#myModalPass\">Aceptar</button>\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n  \r\n</div>\r\n<div class=\"container\">\r\n    <!-- Modal -->\r\n    <div class=\"modal fade\" id=\"myModalPass\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n      \r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header color-back\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <p>Version de RED habilitada</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/version-red-revision/version-red-revision.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/version-red-revision/version-red-revision.component.ts ***!
  \***********************************************************************************/
/*! exports provided: VersionRedRevisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionRedRevisionComponent", function() { return VersionRedRevisionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_version_version_red_revision_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/version/version-red-revision.service */ "./src/app/services/version/version-red-revision.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * Componente encargado de la revisión de una versión de RED.
 */
var VersionRedRevisionComponent = /** @class */ (function () {
    function VersionRedRevisionComponent(route, versionService, location) {
        this.route = route;
        this.versionService = versionService;
        this.location = location;
        this.recursos = [];
        //Según BD
        this.tipoVideo = "video";
        this.tipoImagen = "imagen";
        this.tipoPDF = "pdf";
    }
    VersionRedRevisionComponent.prototype.ngOnInit = function () {
        setup();
        this.idVersion = this.route.snapshot.params.version;
        this.getVersion();
        this.getRecursos();
    };
    // Método que obtiene información de la versión (nombre, número de versión, número de recursos)
    VersionRedRevisionComponent.prototype.getVersion = function () {
        var _this = this;
        this.versionService.getVersionInfo(this.idVersion).subscribe(function (version) { return (_this.version = version); });
        setup();
    };
    // Método que obtiene el listado de recursos de la versión
    VersionRedRevisionComponent.prototype.getRecursos = function () {
        var _this = this;
        this.recursos = [];
        this.versionService.getRecursos(this.idVersion).subscribe(function (recursos) { return (_this.recursos = recursos); }, function (error) { return console.log("error: " + error); }, function () { return setTimeout(function () { setupTable(); }, 1000); });
    };
    // Metodo que regresa a la pantella anterior
    VersionRedRevisionComponent.prototype.goBack = function () {
        this.location.back();
        console.log(this.location);
    };
    VersionRedRevisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-version-red-revision',
            template: __webpack_require__(/*! ./version-red-revision.component.html */ "./src/app/components/version-red-revision/version-red-revision.component.html"),
            styles: [__webpack_require__(/*! ./version-red-revision.component.css */ "./src/app/components/version-red-revision/version-red-revision.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_version_version_red_revision_service__WEBPACK_IMPORTED_MODULE_2__["VersionRedRevisionService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], VersionRedRevisionComponent);
    return VersionRedRevisionComponent;
}());



/***/ }),

/***/ "./src/app/constants/url-constant.ts":
/*!*******************************************!*\
  !*** ./src/app/constants/url-constant.ts ***!
  \*******************************************/
/*! exports provided: UrlConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlConstant", function() { return UrlConstant; });
var UrlConstant = /** @class */ (function () {
    function UrlConstant() {
    }
    UrlConstant.RESOURCE_DETAILS_ENDPOINT = "recurso_get/";
    UrlConstant.RESOURCE_DETAILS_UPDATE_ENDPOINT = "recurso_put/";
    UrlConstant.RESOURCE_DETAILS_ADD_ENDPOINT = "recurso_post/";
    UrlConstant.ADVANCE_RED_ENDPOINT = "fase_byid/";
    UrlConstant.USER_ENABLE_ENDPOINT = "habilitar-usuario/";
    return UrlConstant;
}());



/***/ }),

/***/ "./src/app/guards/autenticacion/autenticacion.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/guards/autenticacion/autenticacion.guard.ts ***!
  \*************************************************************/
/*! exports provided: AutenticacionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacionGuard", function() { return AutenticacionGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");




var AutenticacionGuard = /** @class */ (function () {
    function AutenticacionGuard(autenticacionService, router) {
        this.autenticacionService = autenticacionService;
        this.router = router;
    }
    AutenticacionGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        var autenticado = this.autenticacionService.autenticado();
        if (!autenticado) {
            this.router.navigate(['']);
            return false;
        }
        else {
            var usuario_1 = this.autenticacionService.obtenerDatosUsuario();
            var idRed = next.paramMap.get('idRed');
            var idUsuario = next.paramMap.get('idUsuario');
            // Verifica si la ruta a acceder es de un RED
            if (idRed) {
                return this.autenticacionService
                    .confirmarAutorizado(idRed)
                    .then(function (data) {
                    if (data.error) {
                        _this.router.navigate(['/reds/' + usuario_1.idConectate]);
                        alert('No tienes autorización para realizar acciones sobre este RED');
                        return false;
                    }
                    else {
                        return true;
                    }
                })
                    .catch(function (err) {
                    return true;
                });
            }
            else if (idUsuario) {
                // Verifica si la ruta a acceder es de un USUARIO
                if (idUsuario === usuario_1.idConectate) {
                    return true;
                }
                else {
                    this.router.navigate(['/reds/' + usuario_1.idConectate]);
                    return false;
                }
            }
            else {
                return true;
            }
        }
    };
    AutenticacionGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AutenticacionGuard);
    return AutenticacionGuard;
}());



/***/ }),

/***/ "./src/app/guards/no-autenticado/no-autenticado.guard.ts":
/*!***************************************************************!*\
  !*** ./src/app/guards/no-autenticado/no-autenticado.guard.ts ***!
  \***************************************************************/
/*! exports provided: NoAutenticadoGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAutenticadoGuard", function() { return NoAutenticadoGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");




var NoAutenticadoGuard = /** @class */ (function () {
    function NoAutenticadoGuard(autenticacionService, router) {
        this.autenticacionService = autenticacionService;
        this.router = router;
    }
    NoAutenticadoGuard.prototype.canActivate = function (next, state) {
        var autenticado = this.autenticacionService.autenticado();
        console.log(autenticado);
        if (autenticado) {
            var usuario = this.autenticacionService.obtenerDatosUsuario();
            this.router.navigate(['/reds/' + usuario.idConectate]);
        }
        return true;
    };
    NoAutenticadoGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NoAutenticadoGuard);
    return NoAutenticadoGuard;
}());



/***/ }),

/***/ "./src/app/models/datos-usuario.ts":
/*!*****************************************!*\
  !*** ./src/app/models/datos-usuario.ts ***!
  \*****************************************/
/*! exports provided: DatosUsuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosUsuario", function() { return DatosUsuario; });
var DatosUsuario = /** @class */ (function () {
    function DatosUsuario() {
    }
    return DatosUsuario;
}());



/***/ }),

/***/ "./src/app/services/HabilitarUsuario/habilita-usuario-client.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/services/HabilitarUsuario/habilita-usuario-client.service.ts ***!
  \******************************************************************************/
/*! exports provided: HabilitarUsuarioClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HabilitarUsuarioClientService", function() { return HabilitarUsuarioClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants/url-constant */ "./src/app/constants/url-constant.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");








var HabilitarUsuarioClientService = /** @class */ (function () {
    function HabilitarUsuarioClientService(http, autentication) {
        this.http = http;
        this.autentication = autentication;
    }
    HabilitarUsuarioClientService.prototype.User_Buscar = function (UserIde) {
        return this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_4__["UrlConstant"].USER_ENABLE_ENDPOINT + UserIde)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reponse) { return reponse.json(); }));
    };
    HabilitarUsuarioClientService.prototype.User_Habilitar = function (UserIde) {
        var tokenSisred = this.autentication.obtenerToken();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: 'Token ' + tokenSisred
            })
        };
        return this.http
            .put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_4__["UrlConstant"].USER_ENABLE_ENDPOINT + UserIde, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reponse) { return reponse.json(); }));
    };
    HabilitarUsuarioClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            src_app_services_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_7__["AutenticacionService"]])
    ], HabilitarUsuarioClientService);
    return HabilitarUsuarioClientService;
}());



/***/ }),

/***/ "./src/app/services/autenticacion/autenticacion.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/autenticacion/autenticacion.service.ts ***!
  \*****************************************************************/
/*! exports provided: AutenticacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacionService", function() { return AutenticacionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);





var AutenticacionService = /** @class */ (function () {
    function AutenticacionService(http) {
        this.http = http;
        this.autenti = false;
    }
    // Verifica si existe un usuario autenticado
    AutenticacionService.prototype.autenticado = function () {
        console.log(localStorage.getItem('token'));
        return localStorage.getItem('token') !== null;
    };
    // Obtiene el token de inicio de sesión
    AutenticacionService.prototype.obtenerToken = function () {
        var token = localStorage.getItem('token');
        if (token === null) {
            //this.borrarDatos();
        }
        return token;
    };
    // Obtiene los datos del usuario
    AutenticacionService.prototype.obtenerDatosUsuario = function () {
        var datosUsuario = null;
        var token = this.obtenerToken();
        var usuarioTexto = localStorage.getItem('SISRED');
        if (usuarioTexto === null) {
            this.borrarDatos();
            //window.location.reload();
        }
        else {
            try {
                var usuario = JSON.parse(crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].decrypt(usuarioTexto, token).toString(crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8));
                datosUsuario = {
                    nombre: usuario.firstName,
                    apellido: usuario.lastName,
                    idConectate: usuario.idConectate,
                    email: usuario.email,
                    numeroIdentificacion: usuario.numeroIdentificacion
                };
            }
            catch (err) {
                this.borrarDatos();
                //window.location.reload();
            }
        }
        return datosUsuario;
    };
    // Obtiene los roles que tiene el usuario en cuestión del RED
    AutenticacionService.prototype.confirmarAutorizado = function (idRed) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var tokenSisred = _this.obtenerToken();
            var options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    Authorization: 'Token ' + tokenSisred
                })
            };
            _this.http
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'getRolAsignadoRED/' + idRed + '/', options)
                .subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    // Inicia sesión para un usuario a partir de su usuario (correo) y contrasena
    AutenticacionService.prototype.login = function (username, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            _this.http
                .post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'login/', {
                username: username,
                password: password
            }, options)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err.error.error);
            });
        });
    };
    // Guarda los datos de un usuario en el local storage usando crypto para asegurarlos
    AutenticacionService.prototype.guardarDatos = function (data, email) {
        var token = data.token;
        localStorage.setItem('token', token);
        delete data.token;
        data.email = email;
        console.log(data);
        localStorage.setItem('SISRED', crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].encrypt(JSON.stringify(data), token).toString());
    };
    // Se encarga de hacer la petición para borrar el token de la base de datos
    AutenticacionService.prototype.cerrarSesion = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var tokenSisred = _this.obtenerToken();
            var options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    Authorization: 'Token ' + tokenSisred
                })
            };
            _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'logout/', options).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    // Elimina los datos de la sesión. Borrando el local storage
    AutenticacionService.prototype.borrarDatos = function () {
        //localStorage.clear();
        //window.location.reload();
    };
    AutenticacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AutenticacionService);
    return AutenticacionService;
}());



/***/ }),

/***/ "./src/app/services/comentario/comentar-imagen.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/comentario/comentar-imagen.service.ts ***!
  \****************************************************************/
/*! exports provided: ComentarImagenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentarImagenService", function() { return ComentarImagenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");
/* harmony import */ var _comentario_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comentario.model */ "./src/app/services/comentario/comentario.model.ts");
/* harmony import */ var _version_ver_version_red_recurso_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../version/ver-version-red/recurso.model */ "./src/app/services/version/ver-version-red/recurso.model.ts");
/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dropbox */ "./node_modules/dropbox/dist/Dropbox-sdk.min.js");
/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dropbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__);









var ComentarImagenService = /** @class */ (function () {
    function ComentarImagenService(httpClient, autenticacionService) {
        this.httpClient = httpClient;
        this.autenticacionService = autenticacionService;
        this.COMENTARIO_EXISTENTE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'versiones/{id_v}/recursos/{id_r}/comentarios/';
        this.COMENTARIO_NUEVO_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'versiones/{id_v}/recursos/{id_r}/comentariosnuevos/';
        this.OBTENER_LISTA_COMENTARIOS_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'versiones/{id_v}/recursos/{id_r}/listacomentarios/';
        this.OBTENER_DETALLES_RECURSO_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'recurso_get/{id}';
        this.comentarios = [];
    }
    // Metodo que invoca al servicio que agrega un comentario a un comentario existente
    ComentarImagenService.prototype.guardarComentarioExistente = function (contenido, usuario, idTabla, id_v, id_r) {
        var tokenSisred = this.autenticacionService.obtenerToken();
        var url = this.COMENTARIO_EXISTENTE_URL.replace('{id_v}', id_v.toString()).replace('{id_r}', id_r.toString());
        var obj = { contenido: contenido, usuario: usuario, idTabla: idTabla };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        return this.httpClient.post(url, JSON.stringify(obj), { headers: headers });
    };
    // Metodo que invoca al servicio que agrega un comentario nuevo
    ComentarImagenService.prototype.guardarComentarioNuevo = function (contenido, usuario, x1, x2, y1, y2, id_v, id_r) {
        var url = this.COMENTARIO_NUEVO_URL.replace('{id_v}', id_v.toString()).replace('{id_r}', id_r.toString());
        var obj = { contenido: contenido, usuario: usuario, x1: x1, x2: x2, y1: y1, y2: y2 };
        console.log(obj);
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        return this.httpClient.post(url, JSON.stringify(obj), { headers: headers });
    };
    // Metodo que invoca al servicio que obtiene la lista de comentarios
    ComentarImagenService.prototype.obtenerListaComentarios = function (id_v, id_r) {
        var _this = this;
        this.comentarios = [];
        var url = this.OBTENER_LISTA_COMENTARIOS_URL.replace('{id_v}', id_v.toString()).replace('{id_r}', id_r.toString());
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(url, { headers: headers }).subscribe(function (data) {
                data.context.forEach(function (dataItem) {
                    var comentario = new _comentario_model__WEBPACK_IMPORTED_MODULE_5__["Comentario"]();
                    comentario.contenido = dataItem.contenido;
                    comentario.fechaCreacion = dataItem.fecha_creacion;
                    comentario.cerrado = dataItem.cerrado;
                    comentario.comentarioMultimedia = dataItem.comentario_multimedia;
                    comentario.usuario = dataItem.usuario.usuario.first_name + ' ' + dataItem.usuario.usuario.last_name;
                    _this.comentarios.push(comentario);
                });
                resolve(_this.comentarios);
            }, function (err) {
                reject(err);
            });
        });
    };
    // Metodo que invoca al servicio que obtiene los detalles de un recurso
    ComentarImagenService.prototype.obtenerDetallesRecurso = function (idRecurso) {
        var _this = this;
        var url = this.OBTENER_DETALLES_RECURSO_URL.replace('{id}', idRecurso.toString());
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(url, { headers: headers }).subscribe(function (data) {
                var recurso = new _version_ver_version_red_recurso_model__WEBPACK_IMPORTED_MODULE_6__["Recurso"]();
                recurso.nombre = data.nombre;
                recurso.id = data.id;
                recurso.archivo = data.archivo;
                recurso.thumbnail = data.thumbnail;
                recurso.fechaCreacion = data.fecha_creacion;
                recurso.tipo = data.tipo;
                recurso.descripcion = data.descripcion;
                recurso.url = '';
                resolve(recurso);
            }, function (err) {
                reject(err);
            });
        });
    };
    ComentarImagenService.prototype.getImagenRecurso = function (ruta) {
        var ACCESS_TOKEN = 'FOsYIGqxyoAAAAAAAAAACo5sRYD5XCAOZy15c341h99QLcgRWBeiWQfRgnCOt0Gq';
        var dbx = new dropbox__WEBPACK_IMPORTED_MODULE_7__["Dropbox"]({ accessToken: ACCESS_TOKEN, fetch: isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default.a });
        return dbx.filesGetTemporaryLink({ path: ruta });
    };
    ComentarImagenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacionService"]])
    ], ComentarImagenService);
    return ComentarImagenService;
}());



/***/ }),

/***/ "./src/app/services/comentario/comentario-multimedia.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/comentario/comentario-multimedia.model.ts ***!
  \********************************************************************/
/*! exports provided: ComentarioMultimedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentarioMultimedia", function() { return ComentarioMultimedia; });
var ComentarioMultimedia = /** @class */ (function () {
    function ComentarioMultimedia() {
    }
    return ComentarioMultimedia;
}());



/***/ }),

/***/ "./src/app/services/comentario/comentario.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/comentario/comentario.model.ts ***!
  \*********************************************************/
/*! exports provided: Comentario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comentario", function() { return Comentario; });
var Comentario = /** @class */ (function () {
    function Comentario() {
    }
    return Comentario;
}());



/***/ }),

/***/ "./src/app/services/fase/fase.model.ts":
/*!*********************************************!*\
  !*** ./src/app/services/fase/fase.model.ts ***!
  \*********************************************/
/*! exports provided: Fase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fase", function() { return Fase; });
var Fase = /** @class */ (function () {
    function Fase() {
    }
    return Fase;
}());



/***/ }),

/***/ "./src/app/services/fase/fase.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/fase/fase.service.ts ***!
  \***********************************************/
/*! exports provided: FaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaseService", function() { return FaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fase_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fase.model */ "./src/app/services/fase/fase.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var FaseService = /** @class */ (function () {
    function FaseService(httpClient, autenticacionService) {
        this.httpClient = httpClient;
        this.autenticacionService = autenticacionService;
        this.fases = [];
    }
    // Metodo que invoca al servicio que obtiene las fases
    FaseService.prototype.getFases = function () {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        this.fases = [];
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'fases/', { headers: headers }).subscribe(function (data) {
            data.forEach(function (dataItem) {
                var fase = new _fase_model__WEBPACK_IMPORTED_MODULE_2__["Fase"]();
                fase.idConectate = dataItem.id_conectate;
                fase.nombre = dataItem.nombre_fase;
                _this.fases.push(fase);
            });
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.fases);
    };
    // Método que invoca el servicio para cambiar fase
    FaseService.prototype.cambiarFase = function (idRed, idFase) {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        return new Promise(function (resolve, reject) {
            _this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'red/' + idRed + '/cambiarfase/' + idFase + '/', headers, httpOptions).subscribe(function (data) { return resolve(data); }, function (error) {
                reject(error);
            });
        });
    };
    FaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__["AutenticacionService"]])
    ], FaseService);
    return FaseService;
}());



/***/ }),

/***/ "./src/app/services/metadata/metadata.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/metadata/metadata.model.ts ***!
  \*****************************************************/
/*! exports provided: Metadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Metadata", function() { return Metadata; });
// Model Metadata
var Metadata = /** @class */ (function () {
    function Metadata() {
    }
    return Metadata;
}());



/***/ }),

/***/ "./src/app/services/metadata/metadata.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/metadata/metadata.service.ts ***!
  \*******************************************************/
/*! exports provided: MetadataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataService", function() { return MetadataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _metadata_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metadata.model */ "./src/app/services/metadata/metadata.model.ts");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");







var MetadataService = /** @class */ (function () {
    function MetadataService(httpClient, autenticacionService) {
        this.httpClient = httpClient;
        this.autenticacionService = autenticacionService;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'detallered/metadata/';
        this.metadata = [];
    }
    // Metodo que invoca al servicio que obtiene la metadata del RED
    MetadataService.prototype.getMetadata = function (idRed) {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('RED', idRed.toString());
        this.metadata = [];
        this.httpClient
            .get(this.API_URL, { headers: headers, params: params })
            .subscribe(function (data) {
            data.forEach(function (dataItem) {
                var meta = new _metadata_model__WEBPACK_IMPORTED_MODULE_5__["Metadata"]();
                meta.tag = dataItem.tag;
                _this.metadata.push(meta);
            });
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.metadata);
    };
    //Servicio para agregar metadata a un recurso
    MetadataService.prototype.addMetadataRecurso = function (idRecurso, tag) {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        return new Promise(function (resolve, reject) {
            if (idRecurso === 0 ||
                tag === '') {
                reject('Datos Invalidos');
            }
            else {
                var options = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        Authorization: 'Token ' + tokenSisred
                    })
                };
                var requestBody = {
                    tag: tag
                };
                _this.httpClient
                    .post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'addMetadataRecurso/' + idRecurso + '/', requestBody, options)
                    .subscribe(function (data) {
                    resolve(data);
                }, function (err) {
                    console.log(err);
                    reject(err);
                });
            }
        });
    };
    MetadataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__["AutenticacionService"]])
    ], MetadataService);
    return MetadataService;
}());



/***/ }),

/***/ "./src/app/services/notificacion/notificacion.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/notificacion/notificacion.model.ts ***!
  \*************************************************************/
/*! exports provided: Notificacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notificacion", function() { return Notificacion; });
var Notificacion = /** @class */ (function () {
    function Notificacion() {
    }
    return Notificacion;
}());



/***/ }),

/***/ "./src/app/services/notificacion/notificacion.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/notificacion/notificacion.service.ts ***!
  \***************************************************************/
/*! exports provided: NotificacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionService", function() { return NotificacionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notificacion_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notificacion.model */ "./src/app/services/notificacion/notificacion.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







var NotificacionService = /** @class */ (function () {
    function NotificacionService(httpClient, autenticacionService) {
        this.httpClient = httpClient;
        this.autenticacionService = autenticacionService;
        this.notificaciones = [];
    }
    // Metodo que invoca al servicio que obtiene las notificaciones
    NotificacionService.prototype.getNotificacionesUsuario = function () {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        this.notificaciones = [];
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + 'notificaciones/' + this.autenticacionService.obtenerDatosUsuario().idConectate.toString() + '/', { headers: headers }).subscribe(function (data) {
            data.forEach(function (dataItem) {
                var notificacion = new _notificacion_model__WEBPACK_IMPORTED_MODULE_2__["Notificacion"]();
                notificacion.id = dataItem.id;
                notificacion.mensaje = dataItem.mensaje;
                notificacion.idRed = dataItem.idRed;
                notificacion.nombreRed = dataItem.nombreRed;
                notificacion.tipo = dataItem.tipo;
                notificacion.visto = dataItem.visto;
                _this.notificaciones.push(notificacion);
            });
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.notificaciones);
    };
    // Metodo que invoca al servicio que obtiene el numero de notificacion no vistas
    NotificacionService.prototype.getNumeroNotificacionesNoVistas = function () {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + 'notificaciones/9/novistos/', { headers: headers }).subscribe(function (data) {
                _this.numeroNoVisto = data;
                resolve(_this.numeroNoVisto);
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_this.numeroNoVisto);
        });
    };
    // Método que invoca el servicio para cambiar visto a notificacion
    NotificacionService.prototype.cambiarNotificacionAVisto = function (idNotificacion) {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        return new Promise(function (resolve, reject) {
            _this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + 'putNotification/' + idNotificacion + '/', headers).subscribe(function (data) { return resolve(data); }, function (error) {
                reject(error);
            });
        });
    };
    NotificacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacionService"]])
    ], NotificacionService);
    return NotificacionService;
}());



/***/ }),

/***/ "./src/app/services/proyectoRed/add-red/add-red.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/proyectoRed/add-red/add-red.service.ts ***!
  \*****************************************************************/
/*! exports provided: AddRedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRedService", function() { return AddRedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AddRedService = /** @class */ (function () {
    function AddRedService(httpClient, router, autenticacionService) {
        this.httpClient = httpClient;
        this.router = router;
        this.autenticacionService = autenticacionService;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'post_proyecto_red/';
    }
    //Método que invoca el servicio al cual se sube la información del nuevo proyecto
    AddRedService.prototype.addRed = function (name, type, author, description, folder, redId) {
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        var obj = {
            nombre: name,
            tipo: type,
            autor: author,
            descripcion: description,
            carpeta: folder,
            RED: redId
        };
        this.httpClient
            .post(this.API_URL, JSON.stringify(obj), { headers: headers })
            .subscribe(function (data) {
            if (data[0].fields.nombre == name) {
            }
            else {
            }
        });
        //this.router.navigate(['/']);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(obj);
    };
    AddRedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__["AutenticacionService"]])
    ], AddRedService);
    return AddRedService;
}());



/***/ }),

/***/ "./src/app/services/proyectoRed/proyecto-red.model.ts":
/*!************************************************************!*\
  !*** ./src/app/services/proyectoRed/proyecto-red.model.ts ***!
  \************************************************************/
/*! exports provided: ProyectoRed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectoRed", function() { return ProyectoRed; });
// Model ProyectoRed
var ProyectoRed = /** @class */ (function () {
    function ProyectoRed() {
    }
    return ProyectoRed;
}());



/***/ }),

/***/ "./src/app/services/proyectoRed/proyectos-red/proyectos-red.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/services/proyectoRed/proyectos-red/proyectos-red.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ProyectosRedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosRedService", function() { return ProyectosRedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _proyecto_red_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../proyecto-red.model */ "./src/app/services/proyectoRed/proyecto-red.model.ts");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");







var ProyectosRedService = /** @class */ (function () {
    function ProyectosRedService(httpClient, autenticacionService) {
        this.httpClient = httpClient;
        this.autenticacionService = autenticacionService;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'detallered/proyectos/';
        this.proyectosRed = [];
    }
    // Metodo que invoca al servicio que obtiene los proyectos RED
    ProyectosRedService.prototype.getProyectosRed = function (idRed) {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('RED', idRed.toString());
        this.proyectosRed = [];
        this.httpClient
            .get(this.API_URL, { headers: headers, params: params })
            .subscribe(function (data) {
            data.forEach(function (dataItem) {
                var pro = new _proyecto_red_model__WEBPACK_IMPORTED_MODULE_5__["ProyectoRed"]();
                pro.id = dataItem.id;
                pro.name = dataItem.name;
                pro.autor = dataItem.autor;
                pro.typeFile = dataItem.typeFile;
                pro.createdDate = dataItem.createdDate;
                pro.description = dataItem.description;
                _this.proyectosRed.push(pro);
            });
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.proyectosRed);
    };
    ProyectosRedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__["AutenticacionService"]])
    ], ProyectosRedService);
    return ProyectosRedService;
}());



/***/ }),

/***/ "./src/app/services/recurso/agregar/agregar-recurso-client.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/services/recurso/agregar/agregar-recurso-client.service.ts ***!
  \****************************************************************************/
/*! exports provided: AgregarRecursoClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarRecursoClientService", function() { return AgregarRecursoClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants/url-constant */ "./src/app/constants/url-constant.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");





var url = 'https://content.dropboxapi.com/2/files/upload';
var token = 'n8Swy7K2KQAAAAAAAAAAEhPhfmBUFQIkLeX-JZ5wHeCntHYtZr1WFAGKwv8yaz0-';



var AgregarRecursoClientService = /** @class */ (function () {
    function AgregarRecursoClientService(http, autenticacionService) {
        this.http = http;
        this.autenticacionService = autenticacionService;
    }
    AgregarRecursoClientService.prototype.upload = function (files) {
        var _this = this;
        // this will be the our resulting map
        var status = {};
        files.forEach(function (file) {
            // create a new multipart-form for every file
            var formData = new FormData();
            formData.append('file', file, file.name);
            var reqHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/octet-stream',
                'Dropbox-API-Arg': JSON.stringify({
                    path: '/' + file.name,
                    mode: 'overwrite',
                    autorename: true,
                    mute: false
                }),
                'User-Agent': 'api-explorer-client',
            });
            // create a http-post request and pass the form
            // tell it to report the upload progress
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', url, formData, {
                headers: reqHeaders,
                reportProgress: true
            });
            console.log(JSON.stringify(req.headers));
            console.log(JSON.stringify(req));
            // create a new progress-subject for every file
            var progress = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            // send the http-request and subscribe for progress-updates
            _this.http.request(req).subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                    // calculate the progress percentage
                    var percentDone = Math.round(100 * event.loaded / event.total);
                    // pass the percentage into the progress-stream
                    progress.next(percentDone);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    // Close the progress-stream if we get an answer form the API
                    // The upload is complete
                    progress.complete();
                }
            });
            // Save every progress-observable in a map of all observables
            status[file.name] = {
                progress: progress.asObservable()
            };
        });
        // return the map of progress.observables
        return status;
    };
    //Call rest service to add recurso.
    AgregarRecursoClientService.prototype.register = function (user) {
        var tokenSisred = this.autenticacionService.obtenerToken();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: 'Token ' + tokenSisred
            })
        };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_5__["UrlConstant"].RESOURCE_DETAILS_ADD_ENDPOINT, user, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { }));
    };
    AgregarRecursoClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_7__["AutenticacionService"]])
    ], AgregarRecursoClientService);
    return AgregarRecursoClientService;
}());



/***/ }),

/***/ "./src/app/services/recurso/buscar-recurso.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/recurso/buscar-recurso.service.ts ***!
  \************************************************************/
/*! exports provided: BuscarRecursoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarRecursoService", function() { return BuscarRecursoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");
/* harmony import */ var _recurso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recurso */ "./src/app/services/recurso/recurso.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var BuscarRecursoService = /** @class */ (function () {
    function BuscarRecursoService(httpClient, autenticacionService) {
        this.httpClient = httpClient;
        this.autenticacionService = autenticacionService;
    }
    BuscarRecursoService.prototype.buscarRecursos = function (name, fechaInicio, fechaCierre, texto) {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = name === null ? params : params.append('name', name);
        params = fechaInicio === null ? params : params.append('fdesde', fechaInicio);
        params = fechaCierre === null ? params : params.append('fhasta', fechaCierre);
        params = texto === null ? params : params.append('text', texto);
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'content-type': 'application/json',
                Authorization: 'Token ' + tokenSisred
            }),
            params: params,
        };
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "buscarRecurso/", options).subscribe(function (data) {
                var recursos = [];
                data.forEach(function (item) {
                    var recurso = new _recurso__WEBPACK_IMPORTED_MODULE_4__["Recurso"]();
                    recurso.id = item.id;
                    recurso.nombre = item.nombre;
                    recurso.descripcion = item.descripcion;
                    recurso.fecha_creacion = item.fecha_creacion;
                    recurso.metadata = item.metadata;
                    recurso.tipo = item.tipo;
                    recursos.push(recurso);
                });
                resolve(recursos);
            }, function (err) {
                reject(err);
            });
        });
    };
    BuscarRecursoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacionService"]])
    ], BuscarRecursoService);
    return BuscarRecursoService;
}());



/***/ }),

/***/ "./src/app/services/recurso/comments-version-video.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/recurso/comments-version-video.service.ts ***!
  \********************************************************************/
/*! exports provided: CommentsVersionVideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsVersionVideoService", function() { return CommentsVersionVideoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");






var CommentsVersionVideoService = /** @class */ (function () {
    function CommentsVersionVideoService(httpClient, autenticacionService) {
        this.httpClient = httpClient;
        this.autenticacionService = autenticacionService;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'comentarios/video/';
    }
    // Metodo que invoca al servicio que obitiene los comentarios del video
    CommentsVersionVideoService.prototype.getCommentsVersionVideo = function (idRecurso) {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        this.annotations = [];
        this.httpClient.get(this.API_URL + idRecurso, { headers: headers }).subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var entry = data_1[_i];
                _this.annotations.push(entry);
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.annotations);
    };
    // Metodo que invoca al servicio que obitiene los comentarios del video
    CommentsVersionVideoService.prototype.addVideoComments = function (idVersion, idRecurso, commentsDetail) {
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        this.httpClient.post(this.API_URL + idVersion + '/' + idRecurso, headers, commentsDetail).subscribe(function (data) {
        });
    };
    // Metodo que invoca al servicio que obitiene la url del recurso video
    CommentsVersionVideoService.prototype.getUrlRecursoVideo = function (idRecurso) {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        this.recursoVideo = [];
        this.httpClient.get(this.API_URL + 'url/' + idRecurso, { headers: headers }).subscribe(function (data) {
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var dataItem = data_2[_i];
                _this.recursoVideo.push(dataItem);
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.recursoVideo);
    };
    CommentsVersionVideoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_5__["AutenticacionService"]])
    ], CommentsVersionVideoService);
    return CommentsVersionVideoService;
}());



/***/ }),

/***/ "./src/app/services/recurso/detalle/resource-details-rest-client.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/services/recurso/detalle/resource-details-rest-client.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ResourceDetailsRestClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDetailsRestClientService", function() { return ResourceDetailsRestClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants/url-constant */ "./src/app/constants/url-constant.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");







var ResourceDetailsRestClientService = /** @class */ (function () {
    function ResourceDetailsRestClientService(http, autenticacionService) {
        this.http = http;
        this.autenticacionService = autenticacionService;
    }
    ResourceDetailsRestClientService.prototype.getResourceDetailsById = function (id) {
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        return this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_4__["UrlConstant"].RESOURCE_DETAILS_ENDPOINT + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reponse) { return reponse; }));
    };
    ResourceDetailsRestClientService.prototype.updateResourceDetail = function (data) {
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        var json = {
            nombre: data.name,
            descripcion: data.description,
            usuario_ultima_modificacion: data.lastUserModification,
            id: data.id
        };
        return this.http
            .put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_4__["UrlConstant"].RESOURCE_DETAILS_UPDATE_ENDPOINT, json, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reponse) { return reponse; }));
    };
    ResourceDetailsRestClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__["AutenticacionService"]])
    ], ResourceDetailsRestClientService);
    return ResourceDetailsRestClientService;
}());



/***/ }),

/***/ "./src/app/services/recurso/recurso.model.ts":
/*!***************************************************!*\
  !*** ./src/app/services/recurso/recurso.model.ts ***!
  \***************************************************/
/*! exports provided: Recurso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recurso", function() { return Recurso; });
// Model Recurso
var Recurso = /** @class */ (function () {
    function Recurso() {
    }
    return Recurso;
}());



/***/ }),

/***/ "./src/app/services/recurso/recurso.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/recurso/recurso.service.ts ***!
  \*****************************************************/
/*! exports provided: RecursoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursoService", function() { return RecursoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _recurso_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recurso.model */ "./src/app/services/recurso/recurso.model.ts");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");






var RecursoService = /** @class */ (function () {
    function RecursoService(http, autenticacionService) {
        this.http = http;
        this.autenticacionService = autenticacionService;
        this.API_URL_GETFULL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'red/{id}/recursos/';
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/json' });
        this.recursos = [];
    }
    RecursoService.prototype.getRecursos = function (id) {
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'getRecurso/' + id, {
            headers: headers
        });
    };
    RecursoService.prototype.getRecursosFull = function (idRed) {
        var _this = this;
        this.recursos = [];
        var apiUrlFinal = this.API_URL_GETFULL.replace('{id}', idRed.toString());
        return new Promise(function (resolve, reject) {
            _this.http.get(apiUrlFinal).subscribe(function (data) {
                data.context.forEach(function (dataItem) {
                    var recurso = new _recurso_model__WEBPACK_IMPORTED_MODULE_4__["Recurso"]();
                    recurso.id = dataItem.id;
                    recurso.nombre = dataItem.nombre;
                    recurso.archivo = dataItem.archivo;
                    recurso.thumbnail = dataItem.thumbnail;
                    recurso.fechaCreacion = dataItem.fecha_creacion;
                    recurso.fechaUltimaModificacion = dataItem.fecha_ultima_modificacion;
                    recurso.tipo = dataItem.tipo;
                    recurso.descripcion = dataItem.descripcion;
                    // recurso.metadata =
                    recurso.autor = dataItem.autor;
                    recurso.usuarioUltimaModificacion = dataItem.usuario_ultima_modificacion;
                    _this.recursos.push(recurso);
                });
                resolve(_this.recursos);
            });
        });
    };
    RecursoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_5__["AutenticacionService"]])
    ], RecursoService);
    return RecursoService;
}());



/***/ }),

/***/ "./src/app/services/recurso/recurso.ts":
/*!*********************************************!*\
  !*** ./src/app/services/recurso/recurso.ts ***!
  \*********************************************/
/*! exports provided: Recurso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recurso", function() { return Recurso; });
var Recurso = /** @class */ (function () {
    function Recurso() {
    }
    return Recurso;
}());



/***/ }),

/***/ "./src/app/services/recurso/recursos-asociados/recurso-asociado.model.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/recurso/recursos-asociados/recurso-asociado.model.ts ***!
  \*******************************************************************************/
/*! exports provided: RecursoAsociado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursoAsociado", function() { return RecursoAsociado; });
// Model RecursoAsociada
var RecursoAsociado = /** @class */ (function () {
    function RecursoAsociado() {
    }
    return RecursoAsociado;
}());



/***/ }),

/***/ "./src/app/services/recurso/recursos-asociados/recursos-asociados.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/services/recurso/recursos-asociados/recursos-asociados.service.ts ***!
  \***********************************************************************************/
/*! exports provided: RecursosAsociadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursosAsociadosService", function() { return RecursosAsociadosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _recurso_asociado_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recurso-asociado.model */ "./src/app/services/recurso/recursos-asociados/recurso-asociado.model.ts");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");







var RecursosAsociadosService = /** @class */ (function () {
    function RecursosAsociadosService(httpClient, autenticacionService) {
        this.httpClient = httpClient;
        this.autenticacionService = autenticacionService;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'detallered/recursos/';
        this.recursosAsociados = [];
    }
    // Metodo que invoca al servicio que obtiene los recursos asociados del RED
    RecursosAsociadosService.prototype.getRecursosAsociados = function (idRed) {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('RED', idRed.toString());
        this.recursosAsociados = [];
        this.httpClient
            .get(this.API_URL, { headers: headers, params: params })
            .subscribe(function (data) {
            data.forEach(function (dataItem) {
                var recurso = new _recurso_asociado_model__WEBPACK_IMPORTED_MODULE_5__["RecursoAsociado"]();
                recurso.id = dataItem.id;
                recurso.name = dataItem.name;
                recurso.typeFormat = dataItem.typeFormat;
                _this.recursosAsociados.push(recurso);
            });
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.recursosAsociados);
    };
    RecursosAsociadosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__["AutenticacionService"]])
    ], RecursosAsociadosService);
    return RecursosAsociadosService;
}());



/***/ }),

/***/ "./src/app/services/red/RedAsignado.ts":
/*!*********************************************!*\
  !*** ./src/app/services/red/RedAsignado.ts ***!
  \*********************************************/
/*! exports provided: RedAsignado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedAsignado", function() { return RedAsignado; });
var RedAsignado = /** @class */ (function () {
    function RedAsignado() {
    }
    return RedAsignado;
}());



/***/ }),

/***/ "./src/app/services/red/advance-red-rest-client.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/red/advance-red-rest-client.service.ts ***!
  \*****************************************************************/
/*! exports provided: AdvanceRedRestClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceRedRestClientService", function() { return AdvanceRedRestClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants/url-constant */ "./src/app/constants/url-constant.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");








var AdvanceRedRestClientService = /** @class */ (function () {
    function AdvanceRedRestClientService(http, autenticacionService) {
        this.http = http;
        this.autenticacionService = autenticacionService;
    }
    AdvanceRedRestClientService.prototype.getAdvanceRedById = function (id) {
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        return this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_4__["UrlConstant"].ADVANCE_RED_ENDPOINT + id, {
            headers: headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reponse) { return reponse; }));
    };
    AdvanceRedRestClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__["AutenticacionService"]])
    ], AdvanceRedRestClientService);
    return AdvanceRedRestClientService;
}());



/***/ }),

/***/ "./src/app/services/red/buscar-reds/buscar-reds.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/red/buscar-reds/buscar-reds.service.ts ***!
  \*****************************************************************/
/*! exports provided: BuscarRedsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarRedsService", function() { return BuscarRedsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");
/* harmony import */ var _red__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../red */ "./src/app/services/red/red.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






var BuscarRedsService = /** @class */ (function () {
    function BuscarRedsService(httpClient, autenticacionService) {
        this.httpClient = httpClient;
        this.autenticacionService = autenticacionService;
    }
    BuscarRedsService.prototype.buscarReds = function (idUsuario, fechaInicio, fechaCierre, texto) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = fechaInicio === null ? params : params.append('fstart', fechaInicio);
        params = fechaCierre === null ? params : params.append('fend', fechaCierre);
        params = texto === null ? params : params.append('text', texto);
        var tokenSisred = this.autenticacionService.obtenerToken();
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: 'Token ' + tokenSisred
            }),
            params: params,
        };
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "buscarReds/" + idUsuario + "/", options).subscribe(function (data) {
                var reds = [];
                data.forEach(function (item) {
                    var red = new _red__WEBPACK_IMPORTED_MODULE_4__["Red"]();
                    red.id = item.id;
                    red.nombre = item.nombre;
                    red.descripcion = item.descripcion;
                    red.fechaInicio = item.fecha_inicio;
                    red.fechaCierre = item.fecha_cierre;
                    red.tipo = item.tipo;
                    reds.push(red);
                });
                resolve(reds);
            }, function (err) {
                reject(err);
            });
        });
    };
    BuscarRedsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacionService"]])
    ], BuscarRedsService);
    return BuscarRedsService;
}());



/***/ }),

/***/ "./src/app/services/red/comentar-red/comentar-rest-client.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/red/comentar-red/comentar-rest-client.service.ts ***!
  \***************************************************************************/
/*! exports provided: ComentarRestClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentarRestClientService", function() { return ComentarRestClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");








var ComentarRestClientService = /** @class */ (function () {
    function ComentarRestClientService(http, httpClient, autenticacionService) {
        this.http = http;
        this.httpClient = httpClient;
        this.autenticacionService = autenticacionService;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "comentario-pdf/";
        this.COMENTARIO_PDF_GET_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "comentario-pdf/{id_v}/";
        this.COMENTARIO_PDF_PUT_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "comentario-cierre/base/{id_v}";
        this.COMENTARIO_PDF_POST_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "comentario-cierre/";
        this.comentarios = [];
    }
    ComentarRestClientService.prototype.getComentariosByIdRed = function (idRed) {
        var _this = this;
        var datas;
        var comentariosPdf = [];
        this.httpClient.get(this.API_URL + idRed).subscribe(function (response) {
            console.log(response);
            if (Array.isArray(response)) {
                response.forEach(function (data) {
                    comentariosPdf.push({
                        id: data.id,
                        contenido: data.contenido,
                        coordenadas: data.comentarioMultimedia,
                        fechaCreacion: data.fecha_creacion,
                        version: data.version,
                        idUsuario: data.usuario,
                        width: data.Width,
                        height: data.Height,
                        rutaArchivo: data.VersionArchivo,
                        comentariosHijos: _this.getComentariosHijos(data.comentariosHijos),
                        esCierre: data.esCierre,
                        cerrado: data.cerrado,
                        resuelto: data.resuelto,
                        UsuarioComentario: data.UsuarioComentario
                    });
                });
            }
            else {
                var comentario = void 0;
                comentario = response;
                comentariosPdf.push({
                    id: comentario.id,
                    contenido: "",
                    coordenadas: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 0,
                        id: 0
                    },
                    fechaCreacion: comentario.fecha_creacion,
                    version: "",
                    idUsuario: "",
                    width: "",
                    height: "",
                    rutaArchivo: "",
                    comentariosHijos: null,
                    cerrado: false,
                    resuelto: false,
                    esCierre: false,
                    UsuarioComentario: comentario.creado_por
                });
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(comentariosPdf);
    };
    ComentarRestClientService.prototype.postComentariosByIdRed = function (comentario, idRed) {
        console.log("console.log.postComentariosByIdRed");
        var request = {
            contenido: comentario.comentario,
            version: Number(idRed),
            comentario_multimedia: null,
            x1: comentario.coordenadas.x1,
            y1: comentario.coordenadas.y1,
            x2: comentario.coordenadas.x2,
            y2: comentario.coordenadas.y2
        };
        return this.httpClient
            .post(this.API_URL, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (reponse) { return reponse; }));
    };
    ComentarRestClientService.prototype.postComentarioHijoByIdRed = function (comentario, idRed) {
        var request = {
            contenido: comentario.comentario,
            version: Number(idRed),
            comentario_multimedia: Number(comentario.idComentarioPadre)
        };
        return this.httpClient
            .post(this.API_URL, request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (reponse) { return reponse; }));
    };
    ComentarRestClientService.prototype.getComentariosHijos = function (comentariosHijos) {
        var comentariosHijosPdfModel = [];
        comentariosHijos.forEach(function (data) {
            comentariosHijosPdfModel.push({
                id: data.id,
                contenido: data.contenido,
                text: "",
                fechaCreacion: data.fecha_creacion,
                version: data.version,
                idUsuario: data.usuario,
                esCierre: data.esCierre,
                UsuarioComentario: data.UsuarioComentario
            });
        });
        return comentariosHijosPdfModel;
    };
    ComentarRestClientService.prototype.ComentarioPDF_put = function (coment) {
        debugger;
        var url = this.COMENTARIO_PDF_PUT_URL.replace("{id_v}", coment.coordenadas.id.toString());
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Token " + tokenSisred
        });
        return this.http.put(url, coment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (reponse) { return reponse; }));
    };
    ComentarRestClientService.prototype.ComentarioPDF_post = function (coment, ComentarioCierre) {
        var url = this.COMENTARIO_PDF_POST_URL;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Token " + tokenSisred
        });
        var RequestRes = {
            contenido: ComentarioCierre,
            version: coment.version,
            comentario_multimedia: coment.coordenadas.id,
            esCierre: true
        };
        return this.http.post(url, RequestRes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (reponse) { return reponse; }));
    };
    ComentarRestClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_7__["AutenticacionService"]])
    ], ComentarRestClientService);
    return ComentarRestClientService;
}());



/***/ }),

/***/ "./src/app/services/red/detalle-red/detalle-red.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/red/detalle-red/detalle-red.model.ts ***!
  \***************************************************************/
/*! exports provided: DetalleRed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleRed", function() { return DetalleRed; });
var DetalleRed = /** @class */ (function () {
    function DetalleRed() {
    }
    return DetalleRed;
}());



/***/ }),

/***/ "./src/app/services/red/detalle-red/detalle-red.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/red/detalle-red/detalle-red.service.ts ***!
  \*****************************************************************/
/*! exports provided: DetalleRedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleRedService", function() { return DetalleRedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _detalle_red_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalle-red.model */ "./src/app/services/red/detalle-red/detalle-red.model.ts");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");







var DetalleRedService = /** @class */ (function () {
    function DetalleRedService(httpClient, autenticacionService) {
        this.httpClient = httpClient;
        this.autenticacionService = autenticacionService;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'detallered/';
        this.detalleRed = new _detalle_red_model__WEBPACK_IMPORTED_MODULE_5__["DetalleRed"]();
    }
    // Metodo que invoca al servicio que obtiene la informacion del RED
    DetalleRedService.prototype.getDetalleRed = function (idRed) {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('RED', idRed.toString());
        this.httpClient
            .get(this.API_URL, { headers: headers, params: params })
            .subscribe(function (data) {
            _this.detalleRed.nameRed = data.nombreRed;
            _this.detalleRed.nameProject = data.nombreProject;
            _this.detalleRed.url = data.url;
            _this.detalleRed.status = data.status;
            _this.detalleRed.fase = data.fase;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.detalleRed);
    };
    DetalleRedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__["AutenticacionService"]])
    ], DetalleRedService);
    return DetalleRedService;
}());



/***/ }),

/***/ "./src/app/services/red/red-asignados.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/red/red-asignados.service.ts ***!
  \*******************************************************/
/*! exports provided: RedAsignadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedAsignadosService", function() { return RedAsignadosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _RedAsignado__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RedAsignado */ "./src/app/services/red/RedAsignado.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");








var RedAsignadosService = /** @class */ (function () {
    function RedAsignadosService(httpClient, router, autenticacionService) {
        this.httpClient = httpClient;
        this.router = router;
        this.autenticacionService = autenticacionService;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + 'reds/asignados/';
        this.reds = [];
    }
    RedAsignadosService.prototype.getREDs = function (idUsuario) {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        this.reds = [];
        this.httpClient
            .get(this.API_URL + idUsuario, { headers: headers })
            .subscribe(function (data) {
            console.log(data);
            data.redsAsignados.forEach(function (dataItem) {
                var red = new _RedAsignado__WEBPACK_IMPORTED_MODULE_5__["RedAsignado"]();
                red.id = dataItem.idRed;
                red.nombre = dataItem.nombreRed;
                red.rol = dataItem.rol;
                _this.reds.push(red);
            });
        });
        console.log(this.reds);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.reds);
    };
    RedAsignadosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_7__["AutenticacionService"]])
    ], RedAsignadosService);
    return RedAsignadosService;
}());



/***/ }),

/***/ "./src/app/services/red/red.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/red/red.service.ts ***!
  \*********************************************/
/*! exports provided: RedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedService", function() { return RedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");





var RedService = /** @class */ (function () {
    function RedService(http, autenticacionService) {
        this.http = http;
        this.autenticacionService = autenticacionService;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/json' });
    }
    RedService.prototype.getRedsRelacionados = function (idProyectoC) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var tokenSisred = _this.autenticacionService.obtenerToken();
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: 'Token ' + tokenSisred
            });
            _this.http
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'reds/relacionados/' + idProyectoC, {
                headers: headers
            })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                reject('There was an error getting the related reds');
            });
        });
    };
    RedService.prototype.getRedRecursosDetalle = function (id) {
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'getRedDetailRecursos/' + id, {
            headers: headers
        });
    };
    RedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacionService"]])
    ], RedService);
    return RedService;
}());



/***/ }),

/***/ "./src/app/services/red/red.ts":
/*!*************************************!*\
  !*** ./src/app/services/red/red.ts ***!
  \*************************************/
/*! exports provided: Red */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Red", function() { return Red; });
var Red = /** @class */ (function () {
    function Red() {
    }
    return Red;
}());



/***/ }),

/***/ "./src/app/services/revision/revision.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/revision/revision.model.ts ***!
  \*****************************************************/
/*! exports provided: Revision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Revision", function() { return Revision; });
// Model Revision
var Revision = /** @class */ (function () {
    function Revision() {
    }
    return Revision;
}());



/***/ }),

/***/ "./src/app/services/revision/revision.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/revision/revision.service.ts ***!
  \*******************************************************/
/*! exports provided: RevisionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionesService", function() { return RevisionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _revision_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./revision.model */ "./src/app/services/revision/revision.model.ts");






var RevisionesService = /** @class */ (function () {
    function RevisionesService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'revisiones/2';
        this.revisiones = [];
    }
    // Metodo que invoca y formatea las notificaciones en el modelo definido en el forntend.
    RevisionesService.prototype.getRevisiones = function () {
        var _this = this;
        this.revisiones = [];
        this.httpClient.get(this.API_URL).subscribe(function (data) {
            data.forEach(function (dataItem) {
                var rev = new _revision_model__WEBPACK_IMPORTED_MODULE_5__["Revision"]();
                rev.red = dataItem.red;
                rev.rol = dataItem.rol;
                rev.fecha = dataItem.fecha;
                rev.version = dataItem.versionId;
                rev.redId = dataItem.redId;
                _this.revisiones.push(rev);
            });
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.revisiones);
    };
    RevisionesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RevisionesService);
    return RevisionesService;
}());



/***/ }),

/***/ "./src/app/services/rolAsignado/asignacion.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/rolAsignado/asignacion.service.ts ***!
  \************************************************************/
/*! exports provided: AsignacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignacionService", function() { return AsignacionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rolAsignado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rolAsignado */ "./src/app/services/rolAsignado/rolAsignado.ts");
/* harmony import */ var _red_red__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../red/red */ "./src/app/services/red/red.ts");
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuario */ "./src/app/services/rolAsignado/usuario.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");








var AsignacionService = /** @class */ (function () {
    function AsignacionService(httpClient, autenticacionService) {
        this.httpClient = httpClient;
        this.autenticacionService = autenticacionService;
        this.asignaciones = [];
    }
    AsignacionService.prototype.getAsignaciones = function () {
        var _this = this;
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'content-type': 'application/json'
            })
        };
        return new Promise(function (resolve, reject) {
            var tokenSisred = _this.autenticacionService.obtenerToken();
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: 'Token ' + tokenSisred
            });
            _this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "asignaciones/", { headers: headers })
                .subscribe(function (data) {
                _this.asignaciones = [];
                data.context.forEach(function (dataItem) {
                    var asignacion1 = new _rolAsignado__WEBPACK_IMPORTED_MODULE_3__["RolAsignado"]();
                    asignacion1.fechaInicio = dataItem.fecha_inicio;
                    asignacion1.fechaFin =
                        dataItem.fecha_fin === null ? '' : dataItem.fecha_fin;
                    asignacion1.rol = dataItem.rol.nombre;
                    var red = new _red_red__WEBPACK_IMPORTED_MODULE_4__["Red"]();
                    red.id = dataItem.red.id;
                    red.nombre = dataItem.red.nombre;
                    red.nombreCorto = dataItem.red.nombre_corto;
                    red.descripcion = dataItem.red.descripcion;
                    red.fechaInicio = dataItem.red.fecha_inicio;
                    red.fechaCierre = dataItem.red.fecha_cierre;
                    red.fechaCreacion = '';
                    red.porcentajeAvance = dataItem.red.porcentaje_avance;
                    red.tipo = dataItem.red.tipo;
                    red.solicitante = dataItem.red.solicitante;
                    red.horasTrabajadas = dataItem.red.horas_trabajadas;
                    red.horasEstimadas = dataItem.red.horas_estimadas;
                    red.proyectoConectate = undefined;
                    red.historialEstados = undefined;
                    red.fase = '';
                    asignacion1.red = red;
                    var usuario = new _usuario__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
                    usuario.nombres = dataItem.usuario.usuario.first_name;
                    usuario.email = dataItem.usuario.usuario.email;
                    usuario.apellidos = dataItem.usuario.usuario.last_name;
                    usuario.tipoIdentificacion = dataItem.usuario.tipo_identificacion;
                    usuario.numeroIdentificacion =
                        dataItem.usuario.numero_identificacion;
                    asignacion1.usuario = usuario;
                    _this.asignaciones.push(asignacion1);
                });
                resolve(_this.asignaciones);
            }, function (err) {
                reject(err);
            });
        });
    };
    AsignacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_7__["AutenticacionService"]])
    ], AsignacionService);
    return AsignacionService;
}());



/***/ }),

/***/ "./src/app/services/rolAsignado/personas-asignadas/persona-asignada.model.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/services/rolAsignado/personas-asignadas/persona-asignada.model.ts ***!
  \***********************************************************************************/
/*! exports provided: PersonaAsignada */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaAsignada", function() { return PersonaAsignada; });
// Model PersonaAsignada
var PersonaAsignada = /** @class */ (function () {
    function PersonaAsignada() {
    }
    return PersonaAsignada;
}());



/***/ }),

/***/ "./src/app/services/rolAsignado/personas-asignadas/personas-asignadas.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/services/rolAsignado/personas-asignadas/personas-asignadas.service.ts ***!
  \***************************************************************************************/
/*! exports provided: PersonasAsignadasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonasAsignadasService", function() { return PersonasAsignadasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _persona_asignada_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./persona-asignada.model */ "./src/app/services/rolAsignado/personas-asignadas/persona-asignada.model.ts");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");







var PersonasAsignadasService = /** @class */ (function () {
    function PersonasAsignadasService(httpClient, autenticacionService) {
        this.httpClient = httpClient;
        this.autenticacionService = autenticacionService;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'detallered/personas/';
        this.personasAsignadas = [];
    }
    // Metodo que invoca al servicio que obtiene las personas asignadas al RED
    PersonasAsignadasService.prototype.getPersonasAsignadas = function (idRed) {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('RED', idRed.toString());
        this.personasAsignadas = [];
        this.httpClient
            .get(this.API_URL, { headers: headers, params: params })
            .subscribe(function (data) {
            data.forEach(function (dataItem) {
                var per = new _persona_asignada_model__WEBPACK_IMPORTED_MODULE_5__["PersonaAsignada"]();
                per.name = dataItem.name;
                per.rol = dataItem.rol;
                _this.personasAsignadas.push(per);
            });
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.personasAsignadas);
    };
    PersonasAsignadasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_6__["AutenticacionService"]])
    ], PersonasAsignadasService);
    return PersonasAsignadasService;
}());



/***/ }),

/***/ "./src/app/services/rolAsignado/rolAsignado.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/rolAsignado/rolAsignado.ts ***!
  \*****************************************************/
/*! exports provided: RolAsignado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolAsignado", function() { return RolAsignado; });
var RolAsignado = /** @class */ (function () {
    function RolAsignado() {
    }
    return RolAsignado;
}());



/***/ }),

/***/ "./src/app/services/rolAsignado/usuario.ts":
/*!*************************************************!*\
  !*** ./src/app/services/rolAsignado/usuario.ts ***!
  \*************************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/services/version/recurso.model.ts":
/*!***************************************************!*\
  !*** ./src/app/services/version/recurso.model.ts ***!
  \***************************************************/
/*! exports provided: Recurso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recurso", function() { return Recurso; });
// Modelo RecursoVersion
var Recurso = /** @class */ (function () {
    function Recurso() {
    }
    return Recurso;
}());



/***/ }),

/***/ "./src/app/services/version/ver-version-red/recurso.model.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/version/ver-version-red/recurso.model.ts ***!
  \*******************************************************************/
/*! exports provided: Recurso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recurso", function() { return Recurso; });
var Recurso = /** @class */ (function () {
    function Recurso() {
    }
    return Recurso;
}());



/***/ }),

/***/ "./src/app/services/version/ver-version-red/ver-version-red.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/services/version/ver-version-red/ver-version-red.service.ts ***!
  \*****************************************************************************/
/*! exports provided: VerVersionRedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerVersionRedService", function() { return VerVersionRedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _version_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../version.model */ "./src/app/services/version/version.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");
/* harmony import */ var _recurso_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recurso.model */ "./src/app/services/version/ver-version-red/recurso.model.ts");
/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dropbox */ "./node_modules/dropbox/dist/Dropbox-sdk.min.js");
/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dropbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__);










var VerVersionRedService = /** @class */ (function () {
    function VerVersionRedService(http, autenticacionService) {
        this.http = http;
        this.autenticacionService = autenticacionService;
    }
    VerVersionRedService.prototype.getVersion = function (idVersion) {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        var urlVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'versiones/{id}/';
        var apiUrl = urlVersion.replace('{id}', idVersion.toString());
        return new Promise(function (resolve, reject) {
            _this.http.get(apiUrl, { headers: headers }).subscribe(function (dataItem) {
                var vVersion = new _version_model__WEBPACK_IMPORTED_MODULE_2__["Version"]();
                vVersion.numero = dataItem.numero;
                vVersion.fechaCreacion = dataItem.fecha_creacion;
                vVersion.creadoPor = dataItem.creado_por.usuario.username;
                vVersion.imagen = dataItem.imagen;
                vVersion.url = '';
                vVersion.nombreRed = dataItem.red.nombre;
                vVersion.nombreConectate = dataItem.red.proyecto_conectate.nombre;
                vVersion.archivos = dataItem.archivos;
                resolve(vVersion);
            }, function (err) {
                reject(err);
            });
        });
    };
    VerVersionRedService.prototype.getRecursosVersion = function (idVersion) {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        var urlVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'versiones/{id}/recursos/';
        var apiUrl = urlVersion.replace('{id}', idVersion.toString());
        var vLstRecurso = [];
        return new Promise(function (resolve, reject) {
            _this.http.get(apiUrl, { headers: headers }).subscribe(function (dataItem) {
                dataItem.context.forEach(function (item) {
                    var vObjeto = new _recurso_model__WEBPACK_IMPORTED_MODULE_6__["Recurso"]();
                    vObjeto.nombre = item.nombre;
                    vObjeto.fechaCreacion = item.fecha_creacion;
                    vObjeto.tipo = item.tipo;
                    vObjeto.thumbnail = item.thumbnail;
                    vObjeto.descripcion = item.descripcion;
                    vObjeto.archivo = item.archivo;
                    vObjeto.id = item.id;
                    vLstRecurso.push(vObjeto);
                });
                resolve(vLstRecurso);
            }, function (err) {
                reject(err);
            });
        });
    };
    VerVersionRedService.prototype.getImagenVersion = function (ruta) {
        var ACCESS_TOKEN = 'FOsYIGqxyoAAAAAAAAAACo5sRYD5XCAOZy15c341h99QLcgRWBeiWQfRgnCOt0Gq';
        var dbx = new dropbox__WEBPACK_IMPORTED_MODULE_7__["Dropbox"]({ accessToken: ACCESS_TOKEN, fetch: isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default.a });
        return dbx.filesGetTemporaryLink({ path: ruta });
    };
    VerVersionRedService.prototype.descargarZip = function (ruta) {
        var ACCESS_TOKEN = 'FOsYIGqxyoAAAAAAAAAACo5sRYD5XCAOZy15c341h99QLcgRWBeiWQfRgnCOt0Gq';
        var dbx = new dropbox__WEBPACK_IMPORTED_MODULE_7__["Dropbox"]({ accessToken: ACCESS_TOKEN, fetch: isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default.a });
        return dbx.filesDownloadZip({ path: ruta });
    };
    VerVersionRedService.prototype.descargarArchivo = function (ruta) {
        var ACCESS_TOKEN = 'FOsYIGqxyoAAAAAAAAAACo5sRYD5XCAOZy15c341h99QLcgRWBeiWQfRgnCOt0Gq';
        var dbx = new dropbox__WEBPACK_IMPORTED_MODULE_7__["Dropbox"]({ accessToken: ACCESS_TOKEN, fetch: isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default.a });
        return dbx.filesDownload({ path: ruta });
    };
    VerVersionRedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_5__["AutenticacionService"]])
    ], VerVersionRedService);
    return VerVersionRedService;
}());



/***/ }),

/***/ "./src/app/services/version/version-red-revision.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/services/version/version-red-revision.service.ts ***!
  \******************************************************************/
/*! exports provided: VersionRedRevisionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionRedRevisionService", function() { return VersionRedRevisionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _version_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.model */ "./src/app/services/version/version.model.ts");
/* harmony import */ var _recurso_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recurso.model */ "./src/app/services/version/recurso.model.ts");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");








var VersionRedRevisionService = /** @class */ (function () {
    function VersionRedRevisionService(httpClient, autenticacionService) {
        this.httpClient = httpClient;
        this.autenticacionService = autenticacionService;
        this.API_URL_VERSION = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'get_version/';
        this.API_URL_RECURSOS = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'get_recursos_by_version/';
        this.version = new _version_model__WEBPACK_IMPORTED_MODULE_5__["Version"]();
        this.recursos = [];
    }
    VersionRedRevisionService.prototype.getVersionInfo = function (id) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('id', id.toString());
        this.httpClient.get(this.API_URL_VERSION, { params: params }).subscribe(function (data) {
            _this.version.nombreRed = data[0]['fields']['nombre'];
            _this.version.numero = data[1]['fields']['numero'];
            _this.version.recursos = data[1]['fields']['recursos'].length;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.version);
    };
    VersionRedRevisionService.prototype.getRecursos = function (id) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('id', id.toString());
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        this.httpClient.get(this.API_URL_RECURSOS, { headers: headers }).subscribe(function (data) {
            data.forEach(function (dataItem) {
                var recurso = new _recurso_model__WEBPACK_IMPORTED_MODULE_6__["Recurso"]();
                recurso.id = dataItem['pk'];
                recurso.nombre = dataItem['fields'].nombre;
                recurso.thumbnail = dataItem['fields'].thumbnail;
                recurso.tipo = dataItem['fields'].tipo;
                _this.recursos.push(recurso);
                console.log(recurso.nombre);
                console.log(recurso.thumbnail);
            });
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.recursos);
    };
    VersionRedRevisionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_7__["AutenticacionService"]])
    ], VersionRedRevisionService);
    return VersionRedRevisionService;
}());



/***/ }),

/***/ "./src/app/services/version/version.model.ts":
/*!***************************************************!*\
  !*** ./src/app/services/version/version.model.ts ***!
  \***************************************************/
/*! exports provided: Version, CrearVersionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return Version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearVersionModel", function() { return CrearVersionModel; });
var Version = /** @class */ (function () {
    function Version() {
    }
    return Version;
}());

var CrearVersionModel = /** @class */ (function () {
    function CrearVersionModel() {
    }
    return CrearVersionModel;
}());



/***/ }),

/***/ "./src/app/services/version/version.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/version/version.service.ts ***!
  \*****************************************************/
/*! exports provided: VersionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionService", function() { return VersionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autenticacion/autenticacion.service */ "./src/app/services/autenticacion/autenticacion.service.ts");
/* harmony import */ var _version_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./version.model */ "./src/app/services/version/version.model.ts");
/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dropbox */ "./node_modules/dropbox/dist/Dropbox-sdk.min.js");
/* harmony import */ var dropbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dropbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");









var VersionService = /** @class */ (function () {
    function VersionService(httpClient, autenticacionService) {
        this.httpClient = httpClient;
        this.autenticacionService = autenticacionService;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + 'reds/{id}/versiones/';
        this.API_URL_CREAR = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + 'versiones/';
        this.ACCESS_TOKEN = 'FOsYIGqxyoAAAAAAAAAACo5sRYD5XCAOZy15c341h99QLcgRWBeiWQfRgnCOt0Gq';
        this.MARCAR_VERSION_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + 'versiones/{id}/marcar';
        this.versiones = [];
    }
    // Metodo que invoca al servicio que obtiene las versiones del RED
    VersionService.prototype.getVersiones = function (idRed) {
        var _this = this;
        var tokenSisred = this.autenticacionService.obtenerToken();
        this.versiones = [];
        var apiUrlFinal = this.API_URL.replace('{id}', idRed.toString());
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(apiUrlFinal, { headers: headers }).subscribe(function (data) {
                data.context.forEach(function (dataItem) {
                    var version = new _version_model__WEBPACK_IMPORTED_MODULE_4__["Version"]();
                    version.id = dataItem.id;
                    version.numero = dataItem.numero;
                    version.fechaCreacion = dataItem.fecha_creacion;
                    version.creadoPor = dataItem.creado_por.usuario.username;
                    version.esFinal = dataItem.es_final;
                    version.imagen = dataItem.imagen;
                    version.url = '';
                    _this.versiones.push(version);
                });
                // Ordena la lista de versiones por fecha de manera descendiente
                var versionesSorted;
                versionesSorted = _this.versiones.slice(0);
                versionesSorted.sort(function (leftSide, rightSide) {
                    if (leftSide.numero < rightSide.numero) {
                        return 1;
                    }
                    if (leftSide.numero > rightSide.numero) {
                        return -1;
                    }
                    return 0;
                });
                resolve(versionesSorted);
            });
        });
    };
    VersionService.prototype.getImagenVersion = function (ruta) {
        var dbx = new dropbox__WEBPACK_IMPORTED_MODULE_5__["Dropbox"]({ accessToken: this.ACCESS_TOKEN, fetch: isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default.a });
        return dbx.filesGetTemporaryLink({ path: ruta });
    };
    VersionService.prototype.crearVersionRed = function (model, idRed) {
        var tokenSisred = this.autenticacionService.obtenerToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        return this.httpClient.post(this.API_URL_CREAR, model, { headers: headers });
    };
    VersionService.prototype.crearVersionDropbox = function (idRed, consecutivo, recursos, thumbnail) {
        var dbx = new dropbox__WEBPACK_IMPORTED_MODULE_5__["Dropbox"]({ accessToken: this.ACCESS_TOKEN });
        var pathToVersion = '/Reds/' + idRed + '/Versiones/' + consecutivo;
        this.createFolderVersionDropbox(dbx, pathToVersion);
        this.copyFiles(dbx, pathToVersion, idRed, recursos);
        this.uploadThumbnail(dbx, thumbnail, pathToVersion);
    };
    VersionService.prototype.createFolderVersionDropbox = function (dbx, pathToVersion) {
        dbx.filesCreateFolderV2({ path: pathToVersion, autorename: false });
    };
    VersionService.prototype.uploadThumbnail = function (dbx, thumbnail, pathToVersion) {
        var fullPath = pathToVersion + '/' + thumbnail.name;
        dbx.filesUpload({ contents: thumbnail.slice(), path: fullPath });
    };
    VersionService.prototype.copyFiles = function (dbx, pathToVersion, idRed, recursos) {
        var fullPathRecursoRed;
        var recursoName;
        var versionPath;
        var filesRelocationPath = [];
        for (var _i = 0, recursos_1 = recursos; _i < recursos_1.length; _i++) {
            var recurso = recursos_1[_i];
            fullPathRecursoRed = recurso.archivo;
            recursoName = fullPathRecursoRed.substring(fullPathRecursoRed.lastIndexOf('/'), fullPathRecursoRed.length);
            versionPath = pathToVersion + recursoName;
            filesRelocationPath.push({ from_path: fullPathRecursoRed, to_path: versionPath });
        }
        dbx.filesCopyBatchV2({ entries: filesRelocationPath, autorename: false });
    };
    VersionService.prototype.markAsFinal = function (versionNumero) {
        var tokenSisred = this.autenticacionService.obtenerToken();
        var apiUrlMarcar = this.MARCAR_VERSION_URL.replace('{id}', versionNumero.toString());
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + tokenSisred
        });
        return this.httpClient.post(apiUrlMarcar, '', { headers: headers });
    };
    VersionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacionService"]])
    ], VersionService);
    return VersionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'https://agiles-grupo1-sisred-back.herokuapp.com/api/'
    //apiUrl: 'http://127.0.0.1:8000/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sepulvec\Documents\uniandes\SISRED-Frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map