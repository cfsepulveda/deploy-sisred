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
/* harmony import */ var _components_red_recursos_red_recursos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/red-recursos/red-recursos.component */ "./src/app/components/red-recursos/red-recursos.component.ts");
/* harmony import */ var _components_red_asignaciones_red_asignados_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/red/asignaciones/red-asignados.component */ "./src/app/components/red/asignaciones/red-asignados.component.ts");
/* harmony import */ var _components_reds_relacionados_reds_relacionados_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/reds-relacionados/reds-relacionados.component */ "./src/app/components/reds-relacionados/reds-relacionados.component.ts");
/* harmony import */ var _components_ver_avance_red_ver_avance_red_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ver-avance-red/ver-avance-red.component */ "./src/app/components/ver-avance-red/ver-avance-red.component.ts");
/* harmony import */ var _components_version_red_revision_version_red_revision_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/version-red-revision/version-red-revision.component */ "./src/app/components/version-red-revision/version-red-revision.component.ts");
/* harmony import */ var _components_HabilitarUsuario_Habilitar_Usuario_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/HabilitarUsuario/Habilitar-Usuario.component */ "./src/app/components/HabilitarUsuario/Habilitar-Usuario.component.ts");
/* harmony import */ var _components_red_comentar_pdf_red_comentar_pdf_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/red-comentar-pdf/red-comentar-pdf.component */ "./src/app/components/red-comentar-pdf/red-comentar-pdf.component.ts");


















var routes = [
    { path: '', component: _components_red_asignaciones_red_asignados_component__WEBPACK_IMPORTED_MODULE_12__["RedAsignadosComponent"] },
    { path: 'red/:idRed/proyecto/agregar', component: _components_add_red_add_red_component__WEBPACK_IMPORTED_MODULE_6__["AddRedComponent"] },
    { path: 'red/:idRed/detalle', component: _components_detalle_red_detalle_red_component__WEBPACK_IMPORTED_MODULE_9__["DetalleREDComponent"] },
    { path: 'reds/:idUsuario', component: _components_red_asignaciones_red_asignados_component__WEBPACK_IMPORTED_MODULE_12__["RedAsignadosComponent"] },
    { path: 'asignaciones', component: _components_reds_por_persona_reds_por_persona_component__WEBPACK_IMPORTED_MODULE_2__["RedsPorPersonaComponent"] },
    { path: 'habilitarusuario', component: _components_HabilitarUsuario_Habilitar_Usuario_component__WEBPACK_IMPORTED_MODULE_16__["HabilitarUsuarioComponent"] },
    {
        path: 'red/:idRed/version/:version',
        component: _components_version_red_revision_version_red_revision_component__WEBPACK_IMPORTED_MODULE_15__["VersionRedRevisionComponent"]
    },
    { path: 'red/:idRed/proyectos', component: _components_proyectos_red_proyectos_red_component__WEBPACK_IMPORTED_MODULE_10__["ProyectosRedComponent"] },
    {
        path: 'red/:idRed/relacionados',
        component: _components_reds_relacionados_reds_relacionados_component__WEBPACK_IMPORTED_MODULE_13__["RedsRelacionadosComponent"]
    },
    {
        path: 'red/:id/recursos',
        component: _components_red_recursos_red_recursos_component__WEBPACK_IMPORTED_MODULE_11__["RedRecursosComponent"]
    },
    {
        path: 'red/:idRed/recursos/agregar',
        component: _components_agregar_recurso_agregar_recurso_component__WEBPACK_IMPORTED_MODULE_7__["AgregarRecursoComponent"]
    },
    // {
    //   path: 'red/:id/recursos/:idrecurso',
    //   component: RedRecursosDetalleComponent
    // },
    {
        path: 'red/:idRed/recursos/:id',
        component: _components_detalle_recurso_detalle_recurso_component__WEBPACK_IMPORTED_MODULE_8__["DetalleRecursoComponent"]
    },
    {
        path: 'reds/:id/avance',
        component: _components_ver_avance_red_ver_avance_red_component__WEBPACK_IMPORTED_MODULE_14__["VerAvanceRedComponent"]
    },
    {
        path: 'reds/:id/comentar',
        component: _components_red_comentar_pdf_red_comentar_pdf_component__WEBPACK_IMPORTED_MODULE_17__["RedComentarPdfComponent"]
    },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"] }
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

module.exports = "<div class=\"wrapper\">\r\n  <app-header></app-header>\r\n  <!-- Left side column. contains the logo and sidebar -->\r\n  <app-side-bar></app-side-bar>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <app-footer></app-footer>\r\n\r\n  <!-- Control Sidebar -->\r\n  <aside class=\"control-sidebar control-sidebar-dark\">\r\n    <!-- Create the tabs -->\r\n    <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\r\n      <li>\r\n        <a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a>\r\n      </li>\r\n    </ul>\r\n    <!-- Tab panes -->\r\n    <app-tab-panes></app-tab-panes>\r\n  </aside>\r\n  <!-- /.control-sidebar -->\r\n  <!-- Add the sidebar's background. This div must be placed\r\n       immediately after the control sidebar -->\r\n  <div class=\"control-sidebar-bg\"></div>\r\n</div>\r\n<!-- ./wrapper -->\r\n"

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




var AppComponent = /** @class */ (function () {
    function AppComponent(document, r, meta) {
        this.title = 'SISRED-Frontend';
        r.addClass(document.body, 'skin-blue');
        r.addClass(document.body, 'sidebar-mini');
        r.addClass(document.body, 'hold-transition');
        meta.addTags([
            { charset: 'utf-8' },
            { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
            { content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no', name: 'viewport' }
        ], true);
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng_spin_kit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-spin-kit */ "./node_modules/ng-spin-kit/dist/spinners.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_add_red_add_red_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-red/add-red.component */ "./src/app/components/add-red/add-red.component.ts");
/* harmony import */ var _components_agregar_recurso_agregar_recurso_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/agregar-recurso/agregar-recurso.component */ "./src/app/components/agregar-recurso/agregar-recurso.component.ts");
/* harmony import */ var _components_dashboard_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dashboard/footer/footer.component */ "./src/app/components/dashboard/footer/footer.component.ts");
/* harmony import */ var _components_dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dashboard/header/header.component */ "./src/app/components/dashboard/header/header.component.ts");
/* harmony import */ var _components_dashboard_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dashboard/side-bar/side-bar.component */ "./src/app/components/dashboard/side-bar/side-bar.component.ts");
/* harmony import */ var _components_dashboard_tab_panes_tab_panes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dashboard/tab-panes/tab-panes.component */ "./src/app/components/dashboard/tab-panes/tab-panes.component.ts");
/* harmony import */ var _components_detalle_recurso_detalle_recurso_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/detalle-recurso/detalle-recurso.component */ "./src/app/components/detalle-recurso/detalle-recurso.component.ts");
/* harmony import */ var _components_detalle_red_detalle_red_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/detalle-red/detalle-red.component */ "./src/app/components/detalle-red/detalle-red.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_proyectos_red_proyectos_red_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/proyectos-red/proyectos-red.component */ "./src/app/components/proyectos-red/proyectos-red.component.ts");
/* harmony import */ var _components_red_recursos_detalle_red_recursos_detalle_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/red-recursos-detalle/red-recursos-detalle.component */ "./src/app/components/red-recursos-detalle/red-recursos-detalle.component.ts");
/* harmony import */ var _components_red_recursos_red_recursos_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/red-recursos/red-recursos.component */ "./src/app/components/red-recursos/red-recursos.component.ts");
/* harmony import */ var _components_red_asignaciones_red_asignados_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/red/asignaciones/red-asignados.component */ "./src/app/components/red/asignaciones/red-asignados.component.ts");
/* harmony import */ var _components_reds_por_persona_reds_por_persona_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/reds-por-persona/reds-por-persona.component */ "./src/app/components/reds-por-persona/reds-por-persona.component.ts");
/* harmony import */ var _components_reds_relacionados_reds_relacionados_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/reds-relacionados/reds-relacionados.component */ "./src/app/components/reds-relacionados/reds-relacionados.component.ts");
/* harmony import */ var _components_ver_avance_red_ver_avance_red_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/ver-avance-red/ver-avance-red.component */ "./src/app/components/ver-avance-red/ver-avance-red.component.ts");
/* harmony import */ var _components_version_red_revision_version_red_revision_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/version-red-revision/version-red-revision.component */ "./src/app/components/version-red-revision/version-red-revision.component.ts");
/* harmony import */ var _services_recurso_agregar_agregar_recurso_client_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/recurso/agregar/agregar-recurso-client.service */ "./src/app/services/recurso/agregar/agregar-recurso-client.service.ts");
/* harmony import */ var _services_recurso_detalle_resource_details_rest_client_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/recurso/detalle/resource-details-rest-client.service */ "./src/app/services/recurso/detalle/resource-details-rest-client.service.ts");
/* harmony import */ var _common_pdf_viewer_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./common/pdf-viewer/pdf-viewer.component */ "./src/app/common/pdf-viewer/pdf-viewer.component.ts");
/* harmony import */ var _components_HabilitarUsuario_Habilitar_Usuario_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/HabilitarUsuario/Habilitar-Usuario.component */ "./src/app/components/HabilitarUsuario/Habilitar-Usuario.component.ts");
/* harmony import */ var _services_HabilitarUsuario_habilita_usuario_client_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/HabilitarUsuario/habilita-usuario-client.service */ "./src/app/services/HabilitarUsuario/habilita-usuario-client.service.ts");
/* harmony import */ var _common_pdf_viewer_click_outside_directive_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./common/pdf-viewer/click-outside-directive.directive */ "./src/app/common/pdf-viewer/click-outside-directive.directive.ts");
/* harmony import */ var _components_red_comentar_pdf_red_comentar_pdf_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/red-comentar-pdf/red-comentar-pdf.component */ "./src/app/components/red-comentar-pdf/red-comentar-pdf.component.ts");






































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_reds_por_persona_reds_por_persona_component__WEBPACK_IMPORTED_MODULE_27__["RedsPorPersonaComponent"],
                _components_add_red_add_red_component__WEBPACK_IMPORTED_MODULE_13__["AddRedComponent"],
                _components_red_asignaciones_red_asignados_component__WEBPACK_IMPORTED_MODULE_26__["RedAsignadosComponent"],
                _components_detalle_red_detalle_red_component__WEBPACK_IMPORTED_MODULE_20__["DetalleREDComponent"],
                _components_proyectos_red_proyectos_red_component__WEBPACK_IMPORTED_MODULE_23__["ProyectosRedComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_reds_relacionados_reds_relacionados_component__WEBPACK_IMPORTED_MODULE_28__["RedsRelacionadosComponent"],
                _components_red_recursos_detalle_red_recursos_detalle_component__WEBPACK_IMPORTED_MODULE_24__["RedRecursosDetalleComponent"],
                _components_red_recursos_red_recursos_component__WEBPACK_IMPORTED_MODULE_25__["RedRecursosComponent"],
                _components_detalle_recurso_detalle_recurso_component__WEBPACK_IMPORTED_MODULE_19__["DetalleRecursoComponent"],
                _components_ver_avance_red_ver_avance_red_component__WEBPACK_IMPORTED_MODULE_29__["VerAvanceRedComponent"],
                _components_agregar_recurso_agregar_recurso_component__WEBPACK_IMPORTED_MODULE_14__["AgregarRecursoComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__["NotFoundComponent"],
                _components_version_red_revision_version_red_revision_component__WEBPACK_IMPORTED_MODULE_30__["VersionRedRevisionComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _components_dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _components_dashboard_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_17__["SideBarComponent"],
                _components_dashboard_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_dashboard_tab_panes_tab_panes_component__WEBPACK_IMPORTED_MODULE_18__["TabPanesComponent"],
                _common_pdf_viewer_pdf_viewer_component__WEBPACK_IMPORTED_MODULE_33__["PdfViewerComponent"],
                _components_HabilitarUsuario_Habilitar_Usuario_component__WEBPACK_IMPORTED_MODULE_34__["HabilitarUsuarioComponent"],
                _common_pdf_viewer_click_outside_directive_directive__WEBPACK_IMPORTED_MODULE_36__["ClickOutsideDirectiveDirective"],
                _components_red_comentar_pdf_red_comentar_pdf_component__WEBPACK_IMPORTED_MODULE_37__["RedComentarPdfComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                ng_spin_kit__WEBPACK_IMPORTED_MODULE_8__["NgSpinKitModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__["PdfViewerModule"]
            ],
            providers: [_services_recurso_agregar_agregar_recurso_client_service__WEBPACK_IMPORTED_MODULE_31__["AgregarRecursoClientService"], _services_recurso_detalle_resource_details_rest_client_service__WEBPACK_IMPORTED_MODULE_32__["ResourceDetailsRestClientService"], _services_HabilitarUsuario_habilita_usuario_client_service__WEBPACK_IMPORTED_MODULE_35__["HabilitarUsuarioClientService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_6__["platformBrowserDynamic"])().bootstrapModule(AppModule);


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

module.exports = "<div class=\"container-pdf\">\r\n\r\n    <div class=\"container-pdf__left-side\">\r\n        <div class=\"list\">\r\n            <div class=\"list-row\" *ngFor=\"let list of areaInfo; let i = index\"\r\n                (click)=\"moveTo(list); $event.stopPropagation();\">\r\n                <div class=\"delete-btn\">\r\n                    <i class=\"fas fa-close\" (click)=\"delete(list); $event.stopPropagation();\"></i>\r\n                </div>\r\n                <div class=\"title\">Comentario {{i + 1}}:</div>\r\n            <div>{{list.comment}}</div> \r\n                <div class=\"page-number\">\r\n                    Pagina {{list?.pageNumber}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div #pdfContainer class=\"container-pdf__right-side\" (mousemove)=\"mouseEvent($event)\"\r\n        (mousedown)=\"mouseEvent($event)\" (mouseup)=\"mouseEvent($event)\">\r\n        <pdf-viewer src=\"https://sisredfront.herokuapp.com/assets/files/pdf-test.pdf\"\r\n            [stick-to-page]=\"true\" [render-text]=\"true\" (page-rendered)=\"pageRendered($event)\" style=\"display: block;\">\r\n        </pdf-viewer>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"js-popper popper\" [style.display]=\"getStyle()\">\r\n        <pre>\r\n                <div class=\"icons\">\r\n\r\n                <input id=\"name\" type=\"text\" [(ngModel)]=\"comment\" />\r\n                <button class=\"fas fa-plus\" [disabled]=\"!comment\" (click)=\"save()\"></button>\r\n                <button class=\"fas fa-close\" (click)=\"cancel($event)\"></button>\r\n            </div>\r\n        </pre>\r\n        \r\n\r\n    </div>"

/***/ }),

/***/ "./src/app/common/pdf-viewer/pdf-viewer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/common/pdf-viewer/pdf-viewer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-pdf {\n  display: flex;\n  width: 100%;\n  height: 100%; }\n  .container-pdf__left-side {\n    width: 20%;\n    border-right: 1px solid black;\n    display: flex;\n    flex-direction: column; }\n  .container-pdf__right-side {\n    width: 80%; }\n  .rectangle {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden; }\n  .rectangle.move-to {\n    background-color: red; }\n  .popper {\n  background-color: #ffffff; }\n  .popper .icons {\n    display: flex;\n    align-items: center; }\n  .popper .icons .icon {\n      cursor: pointer; }\n  .popper .icons .icon-apply {\n        color: #1e88e5; }\n  .popper .icons .icon-close {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: #ff0000;\n        border: 1px solid #ff0000;\n        font-size: 18px;\n        width: 18px;\n        height: 18px; }\n  .header h2 {\n  padding: 10px;\n  color: #37474f; }\n  .header .link {\n  border-bottom: 1px solid black;\n  padding: 10px;\n  font-size: 11px; }\n  .header .link a {\n    color: #673ab7; }\n  .list {\n  display: flex;\n  flex-direction: column; }\n  .list-row {\n    padding: 10px;\n    border-bottom: 1px solid black;\n    cursor: pointer;\n    position: relative; }\n  .list-row:hover {\n      background-color: #d5d5d5; }\n  .list-row .delete-btn {\n      position: absolute;\n      top: 0;\n      right: 0; }\n  .list-row .delete-btn .icon {\n        font-size: 16px; }\n  .list-row pre .pre-title {\n      text-align: left; }\n  .list-row .page-number {\n      text-align: right;\n      font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3BkZi12aWV3ZXIvQzpcXFVzZXJzXFxDcmlzdGlhblxcT25lRHJpdmVcXERvY3VtZW50b3NcXFVuaXZlcnNpZGFkXFxVTklBTkRFU1xcU0lTUkVELUZyb250ZW5kL3NyY1xcYXBwXFxjb21tb25cXHBkZi12aWV3ZXJcXHBkZi12aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVksRUFBQTtFQUNaO0lBQ0ksVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFFMUI7SUFDSSxVQUFVLEVBQUE7RUFJbEI7RUFDSSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQixFQUFBO0VBTnBCO0lBUVEscUJBQXFCLEVBQUE7RUFJN0I7RUFDSSx5QkFBeUIsRUFBQTtFQUQ3QjtJQUdRLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQUozQjtNQU1ZLGVBQWUsRUFBQTtFQU4zQjtRQVFnQixjQUFjLEVBQUE7RUFSOUI7UUFXZ0IsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsV0FBVztRQUNYLFlBQVksRUFBQTtFQU01QjtFQUVRLGFBQWE7RUFDYixjQUFjLEVBQUE7RUFIdEI7RUFNUSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGVBQWUsRUFBQTtFQVJ2QjtJQVVZLGNBQWMsRUFBQTtFQUsxQjtFQUNJLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQUN0QjtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGtCQUFrQixFQUFBO0VBSnJCO01BTU8seUJBQXlCLEVBQUE7RUFOaEM7TUFTTyxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLFFBQVEsRUFBQTtFQVhmO1FBYVcsZUFBZSxFQUFBO0VBYjFCO01Ba0JXLGdCQUFnQixFQUFBO0VBbEIzQjtNQXNCTyxpQkFBaUI7TUFDakIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3BkZi12aWV3ZXIvcGRmLXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItcGRmIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgICZfX2xlZnQtc2lkZSB7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAmX19yaWdodC1zaWRlIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmVjdGFuZ2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmLm1vdmUtdG8ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLmljb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICYtYXBwbHkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxZTg4ZTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgaDIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICMzNzQ3NGY7XHJcbiAgICB9XHJcbiAgICAubGluayB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzY3M2FiNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgJi1yb3cge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWQ1ZDU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWxldGUtYnRuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHJlIHtcclxuICAgICAgICAgICAgLnByZS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLW51bWJlciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

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




var PdfViewerComponent = /** @class */ (function () {
    function PdfViewerComponent() {
        this.title = 'ng-pdf-highlighter';
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
        this.lastMousePosition = { x: 0, y: 0 };
        this.canvasPosition = { x: 0, y: 0 };
        this.mousePosition = { x: 0, y: 0 };
        this.mouseDownFlag = false;
        this.pagePosition = { x: 0, y: 0 };
        this.element = null;
        this.areaInfo = [];
        // added new div when pages rendered
        this.indexOfPage = 1;
        this.showPopup = false;
        this.listRectangleId = '';
        this.areaInfo = [
            {
                rectangleId: 'rectangle-1',
                pageNumber: 1,
                rect: {
                    height: 134,
                    width: 644,
                    x1: 136.6875,
                    y1: 842,
                    x2: 780.6875,
                    y2: 989
                },
                comment: 'Comentario de ejemplo, Comentario de ejemplo, Comentario de ejemplo, Comentario de ejemplo, Comentario de ejemplo, Comentario de ejemplo, Comentario de ejemplo, Comentario de ejemplo, Comentario de ejemplo, Comentario de ejemplo',
                isDelete: false
            }
        ];
    }
    PdfViewerComponent.prototype.ngOnInit = function () { };
    PdfViewerComponent.prototype.mouseEvent = function (event) {
        if (!this.showPopup) {
            if (event.type === 'mousemove') {
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
                        this.element.style.width = width + 'px';
                        this.element.style.height = height + 'px';
                        if (this.rect.width > 0 && this.rect.height > 0) {
                            document
                                .getElementsByClassName('to-draw-rectangle')[this.dataPageNumber - 1].appendChild(this.element);
                        }
                    }
                }
            }
            if (event.type === 'mousedown') {
                this.mouseDownFlag = true;
                var eventPath = event.path.find(function (p) { return p.className == 'page'; });
                if (typeof eventPath !== 'undefined') {
                    this.dataPageNumber = parseInt(eventPath.getAttribute('data-page-number')); // get id of page
                    var toDrawRectangle = document.getElementsByClassName('to-draw-rectangle');
                    var pageOffset = toDrawRectangle[this.dataPageNumber - 1].getBoundingClientRect();
                    this.pagePosition = {
                        x: pageOffset.left,
                        y: pageOffset.top
                    };
                    this.lastMousePosition = {
                        x: event.clientX - this.pagePosition.x,
                        y: event.clientY - this.pagePosition.y
                    };
                    var rectId = document.getElementsByClassName('rectangle').length + 1;
                    this.element = document.createElement('div');
                    this.element.className = 'rectangle';
                    this.element.id = 'rectangle-' + rectId;
                    this.element.style.position = 'absolute';
                    this.element.style.border = '2px solid #0084FF';
                    this.element.style.borderRadius = '3px';
                    this.element.style.left = this.lastMousePosition.x + 'px';
                    this.element.style.top = this.lastMousePosition.y + 'px';
                }
            }
            if (event.type === 'mouseup') {
                this.mouseDownFlag = false;
                if (this.rect.height > 0 && this.rect.width > 0) {
                    var popper = document.querySelector('.js-popper');
                    new popper_js_dist_umd_popper_js__WEBPACK_IMPORTED_MODULE_3__(this.element, popper, {
                        placement: 'top-end'
                    });
                    this.showPopup = true;
                }
            }
        }
    };
    PdfViewerComponent.prototype.pageRendereds = function (e) {
        console.log('(page-rendered)', e.source.div);
        console.log(e.composedPath[0].page);
    };
    PdfViewerComponent.prototype.pageRendered = function (event) {
        var _this = this;
        var elem = document.createElement('div');
        elem.className = 'to-draw-rectangle';
        elem.style.position = 'absolute';
        elem.style.left = 0 + 'px';
        elem.style.top = 0 + 'px';
        elem.style.right = 0 + 'px';
        elem.style.bottom = 0 + 'px';
        elem.style.cursor = 'crosshair';
        // elem.style.background = 'red';
        // elem.style.opacity = '0.4';
        event.source.div.appendChild(elem);
        jquery__WEBPACK_IMPORTED_MODULE_2__('.textLayer').addClass('disable-textLayer');
        var rectElem = this.areaInfo.find(function (f) { return f.pageNumber === _this.indexOfPage; });
        if (typeof rectElem !== 'undefined') {
            var rectId = document.getElementsByClassName('rectangle').length + 1;
            var rect = document.createElement('div');
            rect.className = 'rectangle';
            rect.id = 'rectangle-' + rectId;
            rect.style.position = 'absolute';
            rect.style.border = '2px solid #0084FF';
            rect.style.borderRadius = '3px';
            rect.style.left = rectElem.rect.x1 + 'px';
            rect.style.top = rectElem.rect.y1 + 'px';
            rect.style.width = rectElem.rect.width + 'px';
            rect.style.height = rectElem.rect.height + 'px';
            //get to-draw-rectangle div and add rectangle
            event.source.div.children[2].appendChild(rect);
        }
        this.indexOfPage++;
    };
    PdfViewerComponent.prototype.getStyle = function () {
        if (this.showPopup) {
            return 'block';
        }
        else {
            return 'none';
        }
    };
    PdfViewerComponent.prototype.save = function () {
        this.areaInfo.push({
            rectangleId: this.element.id,
            pageNumber: this.dataPageNumber,
            rect: this.rect,
            isDelete: false,
            comment: this.comment
        });
        this.showPopup = false;
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
        this.comment = "";
    };
    PdfViewerComponent.prototype.cancel = function (event) {
        var rectId = this.element.getAttribute('id');
        jquery__WEBPACK_IMPORTED_MODULE_2__('#' + rectId).remove();
        this.showPopup = false;
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
    };
    PdfViewerComponent.prototype.delete = function (list) {
        document.getElementById(list.rectangleId).remove();
        this.areaInfo.find(function (f) { return f.rectangleId === list.rectangleId; }).isDelete = true;
        this.areaInfo = this.areaInfo.filter(function (f) { return f.isDelete === false; });
    };
    PdfViewerComponent.prototype.moveTo = function (list) {
        if (this.listRectangleId != '') {
            if (document.getElementById(this.listRectangleId)) {
                document.getElementById(this.listRectangleId).style.background = 'transparent';
                document.getElementById(this.listRectangleId).style.opacity = '1';
            }
        }
        if (this.listRectangleId !== list.rectangleId) {
            document.getElementById(list.rectangleId).scrollIntoView({ block: 'start', behavior: 'smooth' });
            document.getElementById(list.rectangleId).style.background = 'red';
            document.getElementById(list.rectangleId).style.opacity = '0.4';
            this.listRectangleId = list.rectangleId;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pdfContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PdfViewerComponent.prototype, "pdfContainer", void 0);
    PdfViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pdf-viewer',
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

module.exports = ".table-margin{\r\n   margin-bottom: 20px;\r\n}\r\n\r\n.metadata-padding{\r\n  padding: 2px;\r\n}\r\n\r\n.spaceDer{\r\n  margin-right: 15px\r\n}\r\n\r\n.h3 {\r\n  font-size: 12px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9IYWJpbGl0YXJVc3VhcmlvL0hhYmlsaXRhci1Vc3VhcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxtQkFBbUI7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtBQUNGOztBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvSGFiaWxpdGFyVXN1YXJpby9IYWJpbGl0YXItVXN1YXJpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLW1hcmdpbntcclxuICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm1ldGFkYXRhLXBhZGRpbmd7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4uc3BhY2VEZXJ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4XHJcbn1cclxuLmgzIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/HabilitarUsuario/Habilitar-Usuario.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/HabilitarUsuario/Habilitar-Usuario.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"marginH content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Habilitar usuario\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Agregar proyecto RED</li>\r\n      <li class=\"\">Habilitar usuario</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <!-- left column -->\r\n      <div class=\"col-md-12\">\r\n        <!-- general form elements -->\r\n\r\n        <div class=\"box box-primary\">\r\n          <form role=\"form\" [formGroup]=\"HabilitarForm\">\r\n            <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n              <h3 class=\"box-title\">Para habilitar usuario en SISRED, favor ingrese la identificación</h3>\r\n            </div>\r\n            <div class=\"box-body\">\r\n              <input type=\"text\" class=\"col-sm-3 form-control\" id=\"usuario\" formControlName=\"usuario\">\r\n              <div class=\"col-sm-2\">\r\n                <button type=\"button\" (click)=\"User_Buscar()\"   class=\"btn btn-primary btn-sm btn-block\">Buscar</button>\r\n              </div>\r\n            </div>\r\n\r\n              <div class=\"box-body\">\r\n                <h3 class=\"box-title\">Información del usuario</h3>\r\n              </div>\r\n\r\n              <div class=\"box-body\">\r\n                  <table class=\"table table-bordered\">\r\n                    <tr>\r\n                      <td>Nombre</td>\r\n                      <td>\r\n                          <h3>{{usermodel?.first_name + ' ' + usermodel?.lastname}}</h3>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Correo</td>\r\n                        <td>\r\n                            <h3>{{usermodel?.email}}</h3>\r\n                        </td>\r\n                    </tr>\r\n                  </table>\r\n                <div class=\"col-sm-2\">\r\n                <button *ngIf=\"showInputText===true\" type=\"button\" (click)=\"User_Habilitar()\" class=\"btn btn-primary btn-sm btn-block\">\r\n                    Habilitar\r\n                  </button>\r\n              </div>\r\n              </div>\r\n\r\n            </div>\r\n            <!-- /.box-body -->\r\n          </form>\r\n          <!-- /.box -->\r\n        </div>\r\n        <!-- /.box primary-->\r\n      </div>\r\n      <!--/.col (left) -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->\r\n"

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
    }
    HabilitarUsuarioComponent.prototype.User_Habilitar = function () {
        var _this = this;
        this.showInputText = false;
        if (this.HabilitarForm.valid && confirm("Está seguro de habilitar el usuario?")) {
            this.habilitarUsuarioClientService.User_Habilitar(this.usermodel.numero_identificacion).subscribe(function (response) {
                _this.usermodel = response[0];
                alert('Usuario habilitado con exito');
            }, function (error) {
                console.log(error);
                alert('Usuario no pudo ser habilitado. ocurrió un error durante el proceso; favor comunicarse con el administrador del sistema ');
                _this.showInputText = false;
            });
        }
    };
    HabilitarUsuarioComponent.prototype.User_Buscar = function () {
        var _this = this;
        var UsuarioId = this.HabilitarForm.get('usuario').value;
        this.habilitarUsuarioClientService.User_Buscar(UsuarioId).subscribe(function (response) {
            _this.usermodel = response[0];
            if (_this.usermodel.estado == "1") {
                _this.showInputText = true;
            }
            else
                _this.showInputText = false;
        }, function (error) {
            console.log(error);
            alert('Usuario no encontrado');
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

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -o-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility; }\n\n.container {\n  max-width: 600px;\n  width: 100%;\n  margin: 0 auto;\n  position: relative; }\n\n#file {\n  visibility: hidden; }\n\n.card {\n  background: #F9F9F9;\n  padding: 25px;\n  margin: 20px 0;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); }\n\nh2 {\n  text-align: center;\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZ3JlZ2FyLXJlY3Vyc28vQzpcXFVzZXJzXFxDcmlzdGlhblxcT25lRHJpdmVcXERvY3VtZW50b3NcXFVuaXZlcnNpZGFkXFxVTklBTkRFU1xcU0lTUkVELUZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhZ3JlZ2FyLXJlY3Vyc29cXGFncmVnYXItcmVjdXJzby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsa0NBQWtDLEVBQUE7O0FBRXRDO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQVEsa0JBQWtCLEVBQUE7O0FBRzFCO0VBQ0ksbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixjQUFjO0VBQ2QsMEVBQTBFLEVBQUE7O0FBRzlFO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZ3JlZ2FyLXJlY3Vyc28vYWdyZWdhci1yZWN1cnNvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtby1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNmaWxlIHsgdmlzaWJpbGl0eTogaGlkZGVuOyB9XHJcblxyXG5cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogI0Y5RjlGOTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dashboard/header/header.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/header/header.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n  <!-- Logo -->\r\n  <a href=\"/\" class=\"logo\">\r\n    <!-- mini logo for sidebar mini 50x50 pixels -->\r\n    <span class=\"logo-mini\"><b>A</b>LT</span>\r\n    <!-- logo for regular state and mobile devices -->\r\n    <span class=\"logo-lg\">Sis<b>RED</b> - Uniandes</span>\r\n  </a>\r\n  <!-- Header Navbar: style can be found in header.less -->\r\n  <nav class=\"navbar navbar-static-top\">\r\n    <!-- Sidebar toggle button-->\r\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n    </a>\r\n\r\n    <div class=\"navbar-custom-menu ml-auto\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <!-- User Account: style can be found in dropdown.less -->\r\n        <li class=\"dropdown user user-menu\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n            <img src=\"assets/AdminLTE/dist/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\" />\r\n            <span class=\"hidden-xs\">Alexander Pierce</span>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <!-- User image -->\r\n            <li class=\"user-header\">\r\n              <img src=\"assets/AdminLTE/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\" />\r\n\r\n              <p>\r\n                Alexander Pierce - Web Developer\r\n                <small>Member since Nov. 2012</small>\r\n              </p>\r\n            </li>\r\n            <!-- Menu Body -->\r\n            <li class=\"user-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-4 text-center\">\r\n                  <a href=\"#\">Followers</a>\r\n                </div>\r\n                <div class=\"col-xs-4 text-center\">\r\n                  <a href=\"#\">Sales</a>\r\n                </div>\r\n                <div class=\"col-xs-4 text-center\">\r\n                  <a href=\"#\">Friends</a>\r\n                </div>\r\n              </div>\r\n              <!-- /.row -->\r\n            </li>\r\n            <!-- Menu Footer-->\r\n            <li class=\"user-footer\">\r\n              <div class=\"pull-left\">\r\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\r\n              </div>\r\n              <div class=\"pull-right\">\r\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/dashboard/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/dashboard/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<aside class=\"main-sidebar\">\r\n  <!-- sidebar: style can be found in sidebar.less -->\r\n  <section class=\"sidebar\">\r\n    <!-- Sidebar user panel -->\r\n    <div class=\"user-panel\">\r\n      <div class=\"pull-left image\">\r\n        <img src=\"assets/AdminLTE/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\" />\r\n      </div>\r\n      <div class=\"pull-left info\">\r\n        <p>Alexander Pierce</p>\r\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\r\n      </div>\r\n    </div>\r\n    <!-- sidebar menu: : style can be found in sidebar.less -->\r\n    <ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n      <li routerLink=\"/asignaciones\" routerLinkActive=\"active\">\r\n        <a>\r\n          <i class=\"fas fa-network-wired\"></i><span>&nbsp;&nbsp;Ver asignaciones</span>\r\n        </a>\r\n      </li>\r\n      <li routerLink=\"/reds/13\" routerLinkActive=\"active\">\r\n        <a>\r\n          <i class=\"fas fa-briefcase\"></i><span>&nbsp;&nbsp;Ver REDs asignados</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </section>\r\n  <!-- /.sidebar -->\r\n</aside>\r\n"

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


var SideBarComponent = /** @class */ (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
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







var DetalleRecursoComponent = /** @class */ (function () {
    function DetalleRecursoComponent(route, resourceDetailsRestClientService) {
        var _this = this;
        this.route = route;
        this.resourceDetailsRestClientService = resourceDetailsRestClientService;
        this.showInputText = false;
        this.staticAlertClosed = false;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
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
    DetalleRecursoComponent.prototype.loadForm = function () {
        this.detailResourceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            updateDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            metadata: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
        });
    };
    DetalleRecursoComponent.prototype.getResourceDetail = function (id) {
        var _this = this;
        this.resourceDetailsRestClientService
            .getResourceDetailsById(id)
            .subscribe(function (response) {
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
            src_app_services_recurso_detalle_resource_details_rest_client_service__WEBPACK_IMPORTED_MODULE_6__["ResourceDetailsRestClientService"]])
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

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Detalle RED\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Detalle RED</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <!-- left column -->\r\n      <div class=\"col-md-12\">\r\n        <!-- general form elements -->\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box\">\r\n            <div class=\"box-header with-border\">\r\n              <div class=\"row\">\r\n                <div class=\"col col-md-9\">\r\n                  <h3 class=\"box-title\">{{detalle.nameRed}}</h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-md-9\">\r\n                  <a href=\"\" routerLink=\"\">\r\n                    <h3 class=\"box-title\">{{detalle.nameProject}}</h3>\r\n                  </a>\r\n                </div>\r\n                <div class=\"col col-md-3\">\r\n                  <h3 class=\"box-title\">Estado: {{detalle.status}}</h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-md-9\">\r\n                  <h3 class=\"box-title\">{{detalle.url}}</h3>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <div class=\"box-body\">\r\n              <!-- table Recursos asociados -->\r\n              <table class=\"table table-hover table-bordered table-margin\">\r\n                <thead>\r\n                  <tr>\r\n                    <td colspan=\"3\">\r\n                      <h3 class=\"text-center\">Recursos asociados</h3>\r\n                    </td>\r\n                  </tr>\r\n                  <tr class=\"thead-light text-center\">\r\n                    <th scope=\"col\">Nombre recursos</th>\r\n                    <th scope=\"col\">Formato archivo</th>\r\n                    <th scope=\"col\">Detalle</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let recurso of recursos\">\r\n                    <td>{{recurso.name}}</td>\r\n                    <td>{{recurso.typeFormat}}</td>\r\n                    <td class=\"text-center\" [routerLink]=\"['/red/' + idRed + '/recursos/' + recurso.id]\"\r\n                      routerLinkActive=\"router-link-active\">\r\n                      <button type=\"button\" class=\"btn btn-primary\">Detalle</button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <div class=\"text-center\">\r\n                <button type=\"button\" class=\"btn btn-info m-2\" [routerLink]=\"['/red/' + idRed + '/recursos']\"\r\n                  routerLinkActive=\"router-link-active\">Ver recursos</button>\r\n              </div>\r\n              <hr />\r\n              <!-- table Personas asignadas al RED -->\r\n              <table class=\"table table-hover table-bordered table-margin\">\r\n                <thead>\r\n                  <tr>\r\n                    <td colspan=\"2\">\r\n                      <h3 class=\"text-center\">Personas asignadas al RED</h3>\r\n                    </td>\r\n                  </tr>\r\n                  <tr class=\"thead-light text-center\">\r\n                    <th scope=\"col\">Nombre completo</th>\r\n                    <th scope=\"col\">Rol</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let persona of personas\">\r\n                    <td>{{persona.name}}</td>\r\n                    <td>{{persona.rol}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <!-- table Proyectos del RED -->\r\n              <table class=\"table table-hover table-bordered table-margin\">\r\n                <thead>\r\n                  <tr>\r\n                    <td colspan=\"4\">\r\n                      <h3 class=\"text-center\">Proyectos del RED</h3>\r\n                    </td>\r\n                  </tr>\r\n                  <tr class=\"thead-light text-center\">\r\n                    <th scope=\"col\">Autor</th>\r\n                    <th scope=\"col\">Tipo archivo</th>\r\n                    <th scope=\"col\">Fecha creación</th>\r\n                    <th scope=\"col\">Descripción</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let proyecto of proyectos\">\r\n                    <td>{{proyecto.autor}}</td>\r\n                    <td>{{proyecto.typeFile}}</td>\r\n                    <td>{{proyecto.createdDate}}</td>\r\n                    <td>{{proyecto.description}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <!-- /.table Proyectos del RED -->\r\n              <!-- tdiv metadata del RED -->\r\n              <div class=\"py-5\">\r\n                <h3 class=\"text-justify\">Metadata del RED</h3>\r\n                <div class=\"card card-body\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col col-md-12\">\r\n                      <span class=\"metadata-padding\" *ngFor=\"let meta of metadata\">\r\n                        <span class=\"badge badge-pill label-info text-sm-center text-wrap\">{{meta.tag}}</span>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- /.tdiv metadata del RED -->\r\n            </div>\r\n            <!-- /.box-body -->\r\n          </div>\r\n          <!-- /.box -->\r\n          <div class=\"box-footer\">\r\n            <button type=\"button\" (click)=\"goBack()\" class=\"btn btn-default spaceDer m-2\"><i\r\n                class=\"fas fa-chevron-left\"></i>&nbsp;Volver</button>\r\n            <button type=\"button\" class=\"btn btn-primary m-2\" [routerLink]=\"['/red/' + idRed + '/relacionados']\"\r\n              routerLinkActive=\"router-link-active\">Ver REDs relacionados</button>\r\n            <button type=\"button\" class=\"btn btn-dark m-2 text-white\" [routerLink]=\"['/reds/' + idRed + '/avance']\"\r\n              routerLinkActive=\"router-link-active\">Ver avance red</button>\r\n          </div>\r\n          <!-- /.box-footer -->\r\n        </div>\r\n        <!-- /.box primary-->\r\n      </div>\r\n      <!--/.col (left) -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n\r\n\r\n</div>\r\n<!-- /.content-wrapper -->\r\n"

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









/**
 * Componente encargado del Detalle de un RED en especifico.
 */
var DetalleREDComponent = /** @class */ (function () {
    function DetalleREDComponent(route, detalleRedService, personaAsignadaService, recursosAsociadosService, proyectosRedService, metadataService, location) {
        this.route = route;
        this.detalleRedService = detalleRedService;
        this.personaAsignadaService = personaAsignadaService;
        this.recursosAsociadosService = recursosAsociadosService;
        this.proyectosRedService = proyectosRedService;
        this.metadataService = metadataService;
        this.location = location;
    }
    DetalleREDComponent.prototype.ngOnInit = function () {
        setup();
        this.idRed = this.route.snapshot.params.idRed;
        this.getDetalleRed();
        this.getPersonasAsignadas();
        this.getRecursosAsociados();
        this.getProyectosRed();
        this.getMetadata();
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
    // Metodo que regresa a la pantella anterior
    DetalleREDComponent.prototype.goBack = function () {
        this.location.back();
        console.log(this.location);
    };
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
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row bg-danger\">\r\n  <h1>Iniciar sesión</h1>\r\n</div>\r\n"

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


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "  <app-pdf-viewer pdfSrc='http://eduplan.educando.edu.do/uploads/documentos/propuesta/_1_/1434382501.pdf'></app-pdf-viewer>\r\n"

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


var RedComentarPdfComponent = /** @class */ (function () {
    function RedComentarPdfComponent() {
    }
    RedComentarPdfComponent.prototype.ngOnInit = function () {
    };
    RedComentarPdfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-red-comentar-pdf',
            template: __webpack_require__(/*! ./red-comentar-pdf.component.html */ "./src/app/components/red-comentar-pdf/red-comentar-pdf.component.html"),
            styles: [__webpack_require__(/*! ./red-comentar-pdf.component.css */ "./src/app/components/red-comentar-pdf/red-comentar-pdf.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RedComentarPdfComponent);
    return RedComentarPdfComponent;
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
        this.id = this.activatedRoute.snapshot.params['id'];
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
            this.idUsuario = 4;
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
            _this.idRed = Number(param["id"]);
        });
    }
    VerAvanceRedComponent.prototype.ngOnInit = function () {
        this.loadForm();
        this.getAdvanceRed(this.idRed);
    };
    VerAvanceRedComponent.prototype.loadForm = function () {
        this.advanceRedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            getProyecto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            getFase: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
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

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Agregar proyecto RED        \r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>        \r\n      <li class=\"active\">Versión del RED en revisión</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"box box-solid\">\r\n          <div class=\"box-header with-border\">\r\n            <h3 class=\"box-title\">Información del RED</h3>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <dl>\r\n              <dt>Description lists</dt>\r\n              <dd>A description list is perfect for defining terms.</dd>\r\n              <dt>Euismod</dt>\r\n              <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\r\n              <dd>Donec id elit non mi porta gravida at eget metus.</dd>\r\n              <dt>Malesuada porta</dt>\r\n              <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\r\n            </dl>\r\n          </div>\r\n          <!-- /.box-body -->\r\n        </div>\r\n        <!-- /.box -->\r\n      </div>\r\n      <!-- ./col -->\r\n      <div class=\"col-md-6\">\r\n        <div class=\"box box-solid\">\r\n          <div class=\"box-header with-border\">\r\n            <i class=\"fa fa-text-width\"></i>\r\n\r\n            <h3 class=\"box-title\">Description Horizontal</h3>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <dl class=\"dl-horizontal\">\r\n              <dt>Description lists</dt>\r\n              <dd>A description list is perfect for defining terms.</dd>\r\n              <dt>Euismod</dt>\r\n              <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\r\n              <dd>Donec id elit non mi porta gravida at eget metus.</dd>\r\n              <dt>Malesuada porta</dt>\r\n              <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\r\n              <dt>Felis euismod semper eget lacinia</dt>\r\n              <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo\r\n                sit amet risus.\r\n              </dd>\r\n            </dl>\r\n          </div>\r\n          <!-- /.box-body -->\r\n        </div>\r\n        <!-- /.box -->\r\n      </div>\r\n      <!-- ./col -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->\r\n"

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


var VersionRedRevisionComponent = /** @class */ (function () {
    function VersionRedRevisionComponent() {
    }
    VersionRedRevisionComponent.prototype.ngOnInit = function () {
    };
    VersionRedRevisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-version-red-revision',
            template: __webpack_require__(/*! ./version-red-revision.component.html */ "./src/app/components/version-red-revision/version-red-revision.component.html"),
            styles: [__webpack_require__(/*! ./version-red-revision.component.css */ "./src/app/components/version-red-revision/version-red-revision.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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






var HabilitarUsuarioClientService = /** @class */ (function () {
    function HabilitarUsuarioClientService(http) {
        this.http = http;
    }
    HabilitarUsuarioClientService.prototype.User_Buscar = function (UserIde) {
        return this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_4__["UrlConstant"].USER_ENABLE_ENDPOINT + UserIde)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reponse) { return reponse.json(); }));
    };
    HabilitarUsuarioClientService.prototype.User_Habilitar = function (UserIde) {
        debugger;
        return this.http
            .put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_4__["UrlConstant"].USER_ENABLE_ENDPOINT + UserIde, UserIde)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reponse) { return reponse.json(); }));
    };
    HabilitarUsuarioClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], HabilitarUsuarioClientService);
    return HabilitarUsuarioClientService;
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






var MetadataService = /** @class */ (function () {
    function MetadataService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'detallered/metadata/';
        this.metadata = [];
    }
    // Metodo que invoca al servicio que obtiene la metadata del RED
    MetadataService.prototype.getMetadata = function (idRed) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('RED', idRed.toString());
        this.metadata = [];
        this.httpClient.get(this.API_URL, { params: params }).subscribe(function (data) {
            data.forEach(function (dataItem) {
                var meta = new _metadata_model__WEBPACK_IMPORTED_MODULE_5__["Metadata"]();
                meta.tag = dataItem.tag;
                _this.metadata.push(meta);
            });
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.metadata);
    };
    MetadataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MetadataService);
    return MetadataService;
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






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AddRedService = /** @class */ (function () {
    function AddRedService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'post_proyecto_red/';
    }
    //Método que invoca el servicio al cual se sube la información del nuevo proyecto
    AddRedService.prototype.addRed = function (name, type, author, description, folder, redId) {
        var obj = { nombre: name, tipo: type, autor: author, descripcion: description, carpeta: folder, RED: redId };
        this.httpClient.post(this.API_URL, JSON.stringify(obj), httpOptions).subscribe(function (data) {
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
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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






var ProyectosRedService = /** @class */ (function () {
    function ProyectosRedService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'detallered/proyectos/';
        this.proyectosRed = [];
    }
    // Metodo que invoca al servicio que obtiene los proyectos RED
    ProyectosRedService.prototype.getProyectosRed = function (idRed) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('RED', idRed.toString());
        this.proyectosRed = [];
        this.httpClient.get(this.API_URL, { params: params }).subscribe(function (data) {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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





var url = 'https://content.dropboxapi.com/2/files/upload';
var token = 'n8Swy7K2KQAAAAAAAAAAEhPhfmBUFQIkLeX-JZ5wHeCntHYtZr1WFAGKwv8yaz0-';


var AgregarRecursoClientService = /** @class */ (function () {
    function AgregarRecursoClientService(http) {
        this.http = http;
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
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_5__["UrlConstant"].RESOURCE_DETAILS_ADD_ENDPOINT, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { }));
    };
    AgregarRecursoClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AgregarRecursoClientService);
    return AgregarRecursoClientService;
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants/url-constant */ "./src/app/constants/url-constant.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var ResourceDetailsRestClientService = /** @class */ (function () {
    function ResourceDetailsRestClientService(http) {
        this.http = http;
    }
    ResourceDetailsRestClientService.prototype.getResourceDetailsById = function (id) {
        return this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_4__["UrlConstant"].RESOURCE_DETAILS_ENDPOINT + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reponse) { return reponse.json(); }));
    };
    ResourceDetailsRestClientService.prototype.updateResourceDetail = function (data) {
        var json = { "nombre": data.name, "descripcion": data.description, "usuario_ultima_modificacion": data.lastUserModification, "id": data.id };
        return this.http
            .put(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_4__["UrlConstant"].RESOURCE_DETAILS_UPDATE_ENDPOINT, json)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reponse) { return reponse.json(); }));
    };
    ResourceDetailsRestClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ResourceDetailsRestClientService);
    return ResourceDetailsRestClientService;
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




var RecursoService = /** @class */ (function () {
    function RecursoService(http) {
        this.http = http;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/json' });
    }
    RecursoService.prototype.getRecursos = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'getRecurso/' + id, {
            headers: this.httpHeaders
        });
    };
    RecursoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RecursoService);
    return RecursoService;
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






var RecursosAsociadosService = /** @class */ (function () {
    function RecursosAsociadosService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'detallered/recursos/';
        this.recursosAsociados = [];
    }
    // Metodo que invoca al servicio que obtiene los recursos asociados del RED
    RecursosAsociadosService.prototype.getRecursosAsociados = function (idRed) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('RED', idRed.toString());
        this.recursosAsociados = [];
        this.httpClient.get(this.API_URL, { params: params }).subscribe(function (data) {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants/url-constant */ "./src/app/constants/url-constant.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var AdvanceRedRestClientService = /** @class */ (function () {
    function AdvanceRedRestClientService(http) {
        this.http = http;
    }
    AdvanceRedRestClientService.prototype.getAdvanceRedById = function (id) {
        return this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + src_app_constants_url_constant__WEBPACK_IMPORTED_MODULE_4__["UrlConstant"].ADVANCE_RED_ENDPOINT + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reponse) { return reponse.json(); }));
    };
    AdvanceRedRestClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AdvanceRedRestClientService);
    return AdvanceRedRestClientService;
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
// Modelo DetalleRed
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






var DetalleRedService = /** @class */ (function () {
    function DetalleRedService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'detallered/';
        this.detalleRed = new _detalle_red_model__WEBPACK_IMPORTED_MODULE_5__["DetalleRed"]();
    }
    // Metodo que invoca al servicio que obtiene la informacion del RED
    DetalleRedService.prototype.getDetalleRed = function (idRed) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('RED', idRed.toString());
        this.httpClient.get(this.API_URL, { params: params }).subscribe(function (data) {
            _this.detalleRed.nameRed = data.nombreRed;
            _this.detalleRed.nameProject = data.nombreProject;
            _this.detalleRed.url = data.url;
            _this.detalleRed.status = data.status;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.detalleRed);
    };
    DetalleRedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var RedAsignadosService = /** @class */ (function () {
    function RedAsignadosService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + 'reds/asignados/';
        this.reds = [];
    }
    RedAsignadosService.prototype.getREDs = function (idUsuario) {
        var _this = this;
        this.reds = [];
        this.httpClient.get(this.API_URL + idUsuario, httpOptions).subscribe(function (data) {
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
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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




var RedService = /** @class */ (function () {
    function RedService(http) {
        this.http = http;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/json' });
    }
    RedService.prototype.getRedsRelacionados = function (idProyectoC) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            _this.http
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'reds/relacionados/' + idProyectoC, options)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                reject('There was an error getting the related reds');
            });
        });
    };
    RedService.prototype.getRedRecursosDetalle = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'getRedDetailRecursos/' + id, {
            headers: this.httpHeaders
        });
    };
    RedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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







var AsignacionService = /** @class */ (function () {
    function AsignacionService(httpClient) {
        this.httpClient = httpClient;
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
            _this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "asignaciones/", options).subscribe(function (data) {
                _this.asignaciones = [];
                data.context.forEach(function (dataItem) {
                    var asignacion1 = new _rolAsignado__WEBPACK_IMPORTED_MODULE_3__["RolAsignado"]();
                    asignacion1.fechaInicio = dataItem.fecha_inicio;
                    asignacion1.fechaFin = dataItem.fecha_fin === null ? '' : dataItem.fecha_fin;
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
                    usuario.numeroIdentificacion = dataItem.usuario.numero_identificacion;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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






var PersonasAsignadasService = /** @class */ (function () {
    function PersonasAsignadasService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'detallered/personas/';
        this.personasAsignadas = [];
    }
    // Metodo que invoca al servicio que obtiene las personas asignadas al RED
    PersonasAsignadasService.prototype.getPersonasAsignadas = function (idRed) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('RED', idRed.toString());
        this.personasAsignadas = [];
        this.httpClient.get(this.API_URL, { params: params }).subscribe(function (data) {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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
    apiUrl: 'http://sisredbackend.herokuapp.com/api/'
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

module.exports = __webpack_require__(/*! C:\Users\Cristian\OneDrive\Documentos\Universidad\UNIANDES\SISRED-Frontend\src\main.ts */"./src/main.ts");


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