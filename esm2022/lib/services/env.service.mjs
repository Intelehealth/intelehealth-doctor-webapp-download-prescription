import { Injectable, Inject } from '@angular/core';
import { ENV_CONFIG } from '../config/config.token';
import * as i0 from "@angular/core";
export class EnvConfigService {
    envConfig;
    config;
    constructor(envConfig) {
        this.envConfig = envConfig;
        this.config = envConfig;
    }
    getConfig(key) {
        if (this.config?.hasOwnProperty(key)) {
            return this.config[key];
        }
        return null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: EnvConfigService, deps: [{ token: ENV_CONFIG }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: EnvConfigService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: EnvConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [ENV_CONFIG]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWItcHJlc2NpcHRpb24vc3JjL2xpYi9zZXJ2aWNlcy9lbnYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBS3BELE1BQU0sT0FBTyxnQkFBZ0I7SUFJYTtJQUZoQyxNQUFNLENBQU07SUFFcEIsWUFBd0MsU0FBYztRQUFkLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFXO1FBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO3VHQWJVLGdCQUFnQixrQkFJUCxVQUFVOzJHQUpuQixnQkFBZ0IsY0FGZixNQUFNOzsyRkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFLYyxNQUFNOzJCQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRU5WX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcudG9rZW4nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRW52Q29uZmlnU2VydmljZSB7XHJcbiAgXHJcbiAgcHJpdmF0ZSBjb25maWc6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChFTlZfQ09ORklHKSBwcml2YXRlIGVudkNvbmZpZzogYW55KSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IGVudkNvbmZpZztcclxuICB9XHJcblxyXG4gIGdldENvbmZpZyhrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICBpZiAodGhpcy5jb25maWc/Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnW2tleV07IFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==