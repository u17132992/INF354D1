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
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _generalinformation_generalinformation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generalinformation/generalinformation.component */ "./src/app/generalinformation/generalinformation.component.ts");





var routes = [
    { path: 'generalinformation', component: _generalinformation_generalinformation_component__WEBPACK_IMPORTED_MODULE_4__["GeneralinformationComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_generalinformation_generalinformation_component__WEBPACK_IMPORTED_MODULE_4__["GeneralinformationComponent"]];


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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align: center\">\n<h1>\n  Please select an option to inspect\n</h1>\n</div>\n<nav>\n  <a routerLink=\"/generalinformation\" routerLinkActive=\"active\"><button class =\"btn btn-success pull-right\" >GENERAL INFORMATON</button></a>\n  <a routerLink=\"/\" routerLinkActive=\"active\"><button class =\"btn btn-success pull-right\" >EMERGENCY CONTACTS</button></a>\n  <a routerLink=\"/\" routerLinkActive=\"active\"><button class =\"btn btn-success pull-right\" >FREQUENTLY ASKED QUESTIONS</button></a>\n</nav>\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angularcrud';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _generalinformation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generalinformation.service */ "./src/app/generalinformation.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["routingComponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _generalinformation_service__WEBPACK_IMPORTED_MODULE_3__["GeneralinformationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/generalinformation.service.ts":
/*!***********************************************!*\
  !*** ./src/app/generalinformation.service.ts ***!
  \***********************************************/
/*! exports provided: GeneralinformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralinformationService", function() { return GeneralinformationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var GeneralinformationService = /** @class */ (function () {
    function GeneralinformationService(http) {
        this.http = http;
        this.url = 'http://localhost:18228/Api/General';
    }
    GeneralinformationService.prototype.getAllGeneralinformation = function () {
        return this.http.get(this.url + '/AllGeneralDetails');
    };
    GeneralinformationService.prototype.getGeneralById = function (generalinformationId) {
        return this.http.get(this.url + '/GetGeneralDetailsById/' + generalinformationId);
    };
    GeneralinformationService.prototype.createGeneralinformation = function (generalinformation) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.url + '/InsertGeneralDetails/', generalinformation, httpOptions);
    };
    GeneralinformationService.prototype.updateGeneralinformation = function (generalinformation) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.put(this.url + '/UpdateGeneralDetails/', generalinformation, httpOptions);
    };
    GeneralinformationService.prototype.deleteGeneralinformationById = function (generalinformationId) {
        console.log(generalinformationId);
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.delete(this.url + '/DeleteGeneralDetails?id=' + generalinformationId, httpOptions);
    };
    GeneralinformationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GeneralinformationService);
    return GeneralinformationService;
}());



/***/ }),

/***/ "./src/app/generalinformation/generalinformation.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/generalinformation/generalinformation.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWxpbmZvcm1hdGlvbi9nZW5lcmFsaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/generalinformation/generalinformation.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/generalinformation/generalinformation.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">  \n  \n  <mat-card>  \n    <mat-toolbar color=\"accent\">  \n      <div align=\"center\" style=\"color:white;text-align: right;\">  \n      GENERAL INFORMATION\n      </div>    \n    </mat-toolbar>  \n  <br><br>  \n    <mat-card-content>  \n      <form [formGroup]=\"generalinformationForm\"(ngSubmit)=\"onFormSubmit(generalinformationForm.value)\">  \n              <table>  \n                <tr>  \n                  <td class=\"tbl1\">  \n                    <mat-form-field class=\"demo-full-width\">  \n                      <input formControlName=\"GeneralDesc\" matTooltip=\"Enter General Information\" matInput placeholder=\"General Information\">  \n                    </mat-form-field>  \n                    <mat-error>  \n                      <span *ngIf=\"!generalinformationForm.get('GeneralDesc').value && generalinformationForm.get('GeneralDesc').touched\"></span>  \n                    </mat-error>  \n                  </td>         \n                <tr>  \n                  \n                  <td  class=\"content-center\">  \n                    <button type=\"submit\" mat-raised-button color=\"accent\"matTooltip=\"Click Submit Button\"[disabled]=\"!generalinformationForm.valid\">Submit</button>      \n                    <button type=\"reset\" mat-raised-button color=\"accent\"matTooltip=\"Click Reset Button\" (click)=\"resetForm()\">Reset</button>  \n                  </td>  \n                  <td>  \n                    <p *ngIf=\"dataSaved\" style=\"color:rgb(0, 128, 0);font-size:20px;font-weight:bold\" Class=\"success\" align=\"left\">  \n                      {{massage}}  \n                    </p>  \n                  </td>  \n                </tr>  \n              </table>  \n  <br><br>  \n        <table class=\"table\" >  \n            <tr ngclass=\"btn-primary\">  \n              <th class=\"tbl2\">General Description</th>  \n            </tr>  \n            <tr *ngFor=\"let generalinformation of allGeneralinformations | async\">  \n              <td class=\"tbl2\">{{generalinformation.GeneralDesc}}</td>  \n              <td class=\"tbl2\">  \n                <button type=\"button\" class=\"btn btn-info\"matTooltip=\"Click Edit Button\"(click)=\"loadGeneralinformationToEdit(generalinformation.GeneralInformationID)\">Edit</button>  \n              </td>  \n              <td class=\"tbl2\">  \n                <button type=\"button\" class=\"btn btn-danger\"matTooltip=\"Click Delete Button\"(click)=\"deleteGeneralinformation(generalinformation.GeneralInformationID)\">Delete</button>  \n              </td>  \n            </tr>  \n    \n          </table>  \n      </form>  \n    </mat-card-content>  \n  </mat-card>  \n  </div>  "

/***/ }),

/***/ "./src/app/generalinformation/generalinformation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/generalinformation/generalinformation.component.ts ***!
  \********************************************************************/
/*! exports provided: GeneralinformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralinformationComponent", function() { return GeneralinformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _generalinformation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generalinformation.service */ "./src/app/generalinformation.service.ts");




var GeneralinformationComponent = /** @class */ (function () {
    function GeneralinformationComponent(formbulider, generalinformationService) {
        this.formbulider = formbulider;
        this.generalinformationService = generalinformationService;
        this.dataSaved = false;
        this.generalinformationIdUpdate = null;
        this.massage = null;
    }
    GeneralinformationComponent.prototype.ngOnInit = function () {
        this.generalinformationForm = this.formbulider.group({
            GeneralDesc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.loadAllGeneralinformations();
    };
    GeneralinformationComponent.prototype.loadAllGeneralinformations = function () {
        this.allGeneralinformations = this.generalinformationService.getAllGeneralinformation();
    };
    GeneralinformationComponent.prototype.onFormSubmit = function () {
        this.dataSaved = false;
        var generalinformation = this.generalinformationForm.value;
        this.CreateGeneralinformation(generalinformation);
        this.generalinformationForm.reset();
    };
    GeneralinformationComponent.prototype.loadGeneralinformationToEdit = function (generalinformationId) {
        var _this = this;
        this.generalinformationService.getGeneralById(generalinformationId).subscribe(function (generalinformation) {
            _this.massage = null;
            _this.dataSaved = false;
            _this.generalinformationIdUpdate = generalinformation.GeneralInformationID;
            _this.generalinformationForm.controls['GeneralDesc'].setValue(generalinformation.GeneralDesc);
        });
    };
    GeneralinformationComponent.prototype.CreateGeneralinformation = function (generalinformation) {
        var _this = this;
        if (this.generalinformationIdUpdate == null) {
            this.generalinformationService.createGeneralinformation(generalinformation).subscribe(function () {
                _this.dataSaved = true;
                _this.massage = 'Record saved Successfully';
                _this.loadAllGeneralinformations();
                _this.generalinformationIdUpdate = null;
                _this.generalinformationForm.reset();
            });
        }
        else {
            generalinformation.GeneralInformationID = this.generalinformationIdUpdate;
            this.generalinformationService.updateGeneralinformation(generalinformation).subscribe(function () {
                _this.dataSaved = true;
                _this.massage = 'Record Updated Successfully';
                _this.loadAllGeneralinformations();
                _this.generalinformationIdUpdate = null;
                _this.generalinformationForm.reset();
            });
        }
    };
    GeneralinformationComponent.prototype.deleteGeneralinformation = function (employeeId) {
        var _this = this;
        console.log(employeeId);
        if (confirm("Are you sure you want to delete this ?")) {
            this.generalinformationService.deleteGeneralinformationById(employeeId).subscribe(function () {
                _this.dataSaved = true;
                _this.massage = 'Record Deleted Succefully';
                _this.loadAllGeneralinformations();
                _this.generalinformationIdUpdate = null;
                _this.generalinformationForm.reset();
            });
        }
    };
    GeneralinformationComponent.prototype.resetForm = function () {
        this.generalinformationForm.reset();
        this.massage = null;
        this.dataSaved = false;
    };
    GeneralinformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generalinformation',
            template: __webpack_require__(/*! ./generalinformation.component.html */ "./src/app/generalinformation/generalinformation.component.html"),
            styles: [__webpack_require__(/*! ./generalinformation.component.css */ "./src/app/generalinformation/generalinformation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _generalinformation_service__WEBPACK_IMPORTED_MODULE_3__["GeneralinformationService"]])
    ], GeneralinformationComponent);
    return GeneralinformationComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\Public\Desktop\Projects\Angularcrud - Copy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map