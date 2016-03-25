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
var core_1 = require('angular2/core');
var opts;
var ChartEventEmitter = (function () {
    function ChartEventEmitter() {
    }
    ChartEventEmitter.emitChartEvent = function (eventName) {
        opts.chart.events[eventName]();
    };
    ChartEventEmitter.emitSeriesEvent = function (eventName) {
        opts.plotOptions.series.events[eventName]();
    };
    ChartEventEmitter.emitPointEvent = function (eventName) {
        opts.plotOptions.series.point.events[eventName]();
    };
    return ChartEventEmitter;
}());
exports.ChartEventEmitter = ChartEventEmitter;
var HighchartsChartObjectMock = (function () {
    function HighchartsChartObjectMock(_opts) {
        opts = _opts;
    }
    return HighchartsChartObjectMock;
}());
exports.HighchartsChartObjectMock = HighchartsChartObjectMock;
var HighchartsServiceMock = (function () {
    function HighchartsServiceMock() {
        this.Highcharts = {
            Chart: HighchartsChartObjectMock,
            StockChart: HighchartsChartObjectMock
        };
    }
    HighchartsServiceMock = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HighchartsServiceMock);
    return HighchartsServiceMock;
}());
exports.HighchartsServiceMock = HighchartsServiceMock;
//# sourceMappingURL=Mocks.js.map