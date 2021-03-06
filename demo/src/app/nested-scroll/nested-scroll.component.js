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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var ng2_page_scroll_1 = require('ng2-page-scroll');
var platform_browser_1 = require('@angular/platform-browser');
var NestedScrollComponent = (function () {
    function NestedScrollComponent(document, pageScrollService) {
        this.document = document;
        this.pageScrollService = pageScrollService;
    }
    NestedScrollComponent.prototype.ngOnInit = function () {
    };
    NestedScrollComponent.prototype.scrollInside = function () {
        var pageScrollInstance = ng2_page_scroll_1.PageScrollInstance.simpleInlineInstance(this.document, '#inContainer', this.container.nativeElement);
        this.pageScrollService.start(pageScrollInstance);
    };
    __decorate([
        core_1.ViewChild('container'), 
        __metadata('design:type', core_1.ElementRef)
    ], NestedScrollComponent.prototype, "container", void 0);
    NestedScrollComponent = __decorate([
        core_1.Component({
            selector: 'app-nested-scroll',
            templateUrl: './nested-scroll.component.html',
            styleUrls: ['./nested-scroll.component.css']
        }),
        __param(0, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [Document, ng2_page_scroll_1.PageScrollService])
    ], NestedScrollComponent);
    return NestedScrollComponent;
}());
exports.NestedScrollComponent = NestedScrollComponent;
//# sourceMappingURL=nested-scroll.component.js.map