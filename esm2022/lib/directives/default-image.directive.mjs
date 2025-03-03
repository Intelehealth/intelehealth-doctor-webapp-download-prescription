import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class DefaultImageDirective {
    src;
    defaultImg = 'assets/svgs/user.svg';
    onError() {
        if (this.src.includes('openmrs'))
            this.src = this.defaultImg;
    }
    checkPath(src) {
        return src || this.defaultImg;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DefaultImageDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: DefaultImageDirective, isStandalone: true, selector: "img[src]", inputs: { src: "src" }, host: { listeners: { "error": "onError()" }, properties: { "src": "checkPath(src)" } }, ngImport: i0 });
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1pbWFnZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWItcHJlc2NpcHRpb24vc3JjL2xpYi9kaXJlY3RpdmVzL2RlZmF1bHQtaW1hZ2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVVqRCxNQUFNLE9BQU8scUJBQXFCO0lBQ3ZCLEdBQUcsQ0FBUztJQUNkLFVBQVUsR0FBVyxzQkFBc0IsQ0FBQztJQUU1QyxPQUFPO1FBQ1osSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFDN0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFFTSxTQUFTLENBQUMsR0FBVztRQUMxQixPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ2hDLENBQUM7dUdBWFUscUJBQXFCOzJGQUFyQixxQkFBcUI7OzJGQUFyQixxQkFBcUI7a0JBUmpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixJQUFJLEVBQUU7d0JBQ0osT0FBTyxFQUFFLGdCQUFnQjt3QkFDekIsU0FBUyxFQUFFLFdBQVc7cUJBQ3ZCO2lCQUNGOzhCQUVVLEdBQUc7c0JBQVgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnaW1nW3NyY10nLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsIC8vIE1ha2UgaXQgc3RhbmRhbG9uZVxyXG4gIGhvc3Q6IHtcclxuICAgICdbc3JjXSc6ICdjaGVja1BhdGgoc3JjKScsXHJcbiAgICAnKGVycm9yKSc6ICdvbkVycm9yKCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdEltYWdlRGlyZWN0aXZlIHtcclxuICBASW5wdXQoKSBzcmM6IHN0cmluZztcclxuICBwdWJsaWMgZGVmYXVsdEltZzogc3RyaW5nID0gJ2Fzc2V0cy9zdmdzL3VzZXIuc3ZnJztcclxuXHJcbiAgcHVibGljIG9uRXJyb3IoKSB7XHJcbiAgICBpZih0aGlzLnNyYy5pbmNsdWRlcygnb3Blbm1ycycpKVxyXG4gICAgICB0aGlzLnNyYyA9IHRoaXMuZGVmYXVsdEltZztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja1BhdGgoc3JjOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBzcmMgfHwgdGhpcy5kZWZhdWx0SW1nO1xyXG4gIH1cclxufVxyXG4iXX0=