"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// cordova-plugin-stripe
var core_1 = require('@angular/core');
require('rxjs/add/operator/mergeMap');
var _1 = require('../');
var StripeService = (function () {
    function StripeService(zone) {
        this.zone = zone;
    }
    StripeService.prototype.createCardToken = function (creditCard) {
        var _this = this;
        return _1.Cordova.deviceready.mergeMap(function () { return _1.ZoneObservable.create(_this.zone, function (observer) {
            window.cordova.plugins.stripe.createCardToken(creditCard, function (res) {
                observer.next(res);
                observer.complete();
            }, observer.error);
        }); });
    };
    StripeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], StripeService);
    return StripeService;
}());
exports.StripeService = StripeService;