import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class DefaultImageDirective {
    constructor() {
        this.defaultImg = 'assets/svgs/user.svg';
    }
    onError() {
        if (this.src.includes('openmrs'))
            this.src = this.defaultImg;
    }
    checkPath(src) {
        return src || this.defaultImg;
    }
}
DefaultImageDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DefaultImageDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DefaultImageDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: DefaultImageDirective, isStandalone: true, selector: "img[src]", inputs: { src: "src" }, host: { listeners: { "error": "onError()" }, properties: { "src": "checkPath(src)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DefaultImageDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'img[src]',
                    standalone: true,
                    host: {
                        '[src]': 'checkPath(src)',
                        '(error)': 'onError()'
                    }
                }]
        }], propDecorators: { src: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1pbWFnZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWItcHJlc2NpcHRpb24vc3JjL2xpYi9kaXJlY3RpdmVzL2RlZmF1bHQtaW1hZ2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVVqRCxNQUFNLE9BQU8scUJBQXFCO0lBUmxDO1FBVVMsZUFBVSxHQUFXLHNCQUFzQixDQUFDO0tBVXBEO0lBUlEsT0FBTztRQUNaLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRU0sU0FBUyxDQUFDLEdBQVc7UUFDMUIsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNoQyxDQUFDOztrSEFYVSxxQkFBcUI7c0dBQXJCLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQVJqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsSUFBSSxFQUFFO3dCQUNKLE9BQU8sRUFBRSxnQkFBZ0I7d0JBQ3pCLFNBQVMsRUFBRSxXQUFXO3FCQUN2QjtpQkFDRjs4QkFFVSxHQUFHO3NCQUFYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2ltZ1tzcmNdJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLCAvLyBNYWtlIGl0IHN0YW5kYWxvbmVcclxuICBob3N0OiB7XHJcbiAgICAnW3NyY10nOiAnY2hlY2tQYXRoKHNyYyknLFxyXG4gICAgJyhlcnJvciknOiAnb25FcnJvcigpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIERlZmF1bHRJbWFnZURpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XHJcbiAgcHVibGljIGRlZmF1bHRJbWc6IHN0cmluZyA9ICdhc3NldHMvc3Zncy91c2VyLnN2Zyc7XHJcblxyXG4gIHB1YmxpYyBvbkVycm9yKCkge1xyXG4gICAgaWYodGhpcy5zcmMuaW5jbHVkZXMoJ29wZW5tcnMnKSlcclxuICAgICAgdGhpcy5zcmMgPSB0aGlzLmRlZmF1bHRJbWc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hlY2tQYXRoKHNyYzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3JjIHx8IHRoaXMuZGVmYXVsdEltZztcclxuICB9XHJcbn1cclxuIl19