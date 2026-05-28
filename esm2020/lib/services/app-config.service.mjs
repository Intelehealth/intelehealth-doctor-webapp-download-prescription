import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvConfigService } from './env.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./env.service";
export class AppConfigService {
    constructor(http, envService) {
        this.http = http;
        this.envService = envService;
        this.baseURL = this.envService.getConfig('configURL');
    }
    load() {
        const promise = this.http.get(`${this.baseURL}/config/getPublishedConfig?ngsw-bypass=true`)
            .toPromise()
            .then((data) => {
            this.setPatientVisitSections(data);
            Object.assign(this, data);
            return data;
        });
        return promise;
    }
    setPatientVisitSections(data) {
        data.patient_visit_sections = (data?.patient_visit_sections ?? [])
            .map((pvs) => {
            return {
                ...pvs,
                lang: pvs.lang ? (typeof pvs.lang === 'object' ? pvs.lang : JSON.parse(pvs.lang)) : null,
            };
        });
    }
    get tourConfig() {
        try {
            return JSON.parse(this.theme_config.find((config) => config.key === 'help_tour_config').value);
        }
        catch (error) {
            return null;
        }
    }
    get patientRegFields() {
        const fields = [];
        Object.keys(this.patient_registration).forEach(obj => {
            fields.push(...this.patient_registration[obj]
                .filter((e) => e.is_enabled)
                .map((e) => e.name));
        });
        return fields;
    }
    checkPatientRegField(fieldName, fields) {
        return fields.indexOf(fieldName) !== -1;
    }
    fetchAllLanguage() {
        return this.http.get(`${this.baseURL}/language/getallEnabledLanguages`);
    }
}
AppConfigService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppConfigService, deps: [{ token: i1.HttpClient }, { token: i2.EnvConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
AppConfigService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppConfigService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.EnvConfigService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGliLXByZXNjaXB0aW9uL3NyYy9saWIvc2VydmljZXMvYXBwLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUtqRCxNQUFNLE9BQU8sZ0JBQWdCO0lBOEIzQixZQUFvQixJQUFnQixFQUFTLFVBQTRCO1FBQXJELFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUN2RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRixJQUFJO1FBQ0YsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyw2Q0FBNkMsQ0FBQzthQUN4RixTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNiLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxQixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ0wsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELHVCQUF1QixDQUFDLElBQVM7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUMsSUFBSSxFQUFFLHNCQUFzQixJQUFJLEVBQUUsQ0FBQzthQUNqRSxHQUFHLENBQUMsQ0FBQyxHQUF3QixFQUFFLEVBQUU7WUFDaEMsT0FBTztnQkFDTCxHQUFHLEdBQUc7Z0JBQ04sSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTthQUN6RixDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLElBQUk7WUFDRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssa0JBQWtCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyRztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxJQUFXLGdCQUFnQjtRQUN6QixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFBLEVBQUU7WUFDbEQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7aUJBQzFDLE1BQU0sQ0FBQyxDQUFDLENBQXVCLEVBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxVQUFVLENBQUM7aUJBQy9DLEdBQUcsQ0FBQyxDQUFDLENBQWlCLEVBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVNLG9CQUFvQixDQUFDLFNBQWMsRUFBRSxNQUFzQjtRQUNoRSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQy9FLENBQUM7OzZHQWhGVSxnQkFBZ0I7aUhBQWhCLGdCQUFnQixjQUZmLE1BQU07MkZBRVAsZ0JBQWdCO2tCQUg1QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG4vLyBpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCIuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IHsgTGFuZ3VhZ2VNb2RlbCwgUGF0aWVudFJlZ2lzdHJhdGlvbkZpZWxkc0NvbmZpZ01vZGVsLCBWaXRhbE1vZGVsLCBTcGVjaWFsaXphdGlvbk1vZGVsLCBXZWJSVENDb25maWdNb2RlbCwgUGF0aWVudFZpc2l0U3VtbWFyeUNvbmZpZ01vZGVsLCBQYXRpZW50VmlzaXRTZWN0aW9uLCBEcm9wZG93blZhbHVlc01vZGVsIH0gZnJvbSAnLi8uLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IEVudkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2Vudi5zZXJ2aWNlJzsgXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb25maWdTZXJ2aWNlIHtcclxuXHJcbiAgLy8gcHJpdmF0ZSBiYXNlVVJMID1cImh0dHBzOi8vZGV2LmludGVsZWhlYWx0aC5vcmc6NDAwNC9hcGlcIlxyXG4gIHByaXZhdGUgYmFzZVVSTCA6c3RyaW5nO1xyXG4gIHB1YmxpYyB2ZXJzaW9uOiBzdHJpbmc7XHJcbiAgcHVibGljIGFwaUVuZHBvaW50OiBzdHJpbmc7XHJcbiAgcHVibGljIHNwZWNpYWxpemF0aW9uOiBTcGVjaWFsaXphdGlvbk1vZGVsW107XHJcbiAgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZU1vZGVsW107XHJcbiAgcHVibGljIHBhdGllbnRfcmVnaXN0cmF0aW9uOiBQYXRpZW50UmVnaXN0cmF0aW9uRmllbGRzQ29uZmlnTW9kZWw7XHJcbiAgcHVibGljIHRoZW1lX2NvbmZpZzogYW55W107XHJcbiAgcHVibGljIHBhdGllbnRfdml0YWxzOiBWaXRhbE1vZGVsW107XHJcbiAgcHVibGljIHBhdGllbnRfZGlhZ25vc3RpY3M6YW55W107XHJcbiAgcHVibGljIGRpZ2l0YWxfc3RldGhvc2NvcGU6YW55W107XHJcbiAgcHVibGljIGRpZ2l0YWxfc3RldGhvc2NvcGVfc2VjdGlvbjogYm9vbGVhbjtcclxuICBwdWJsaWMgd2VicnRjX3NlY3Rpb246IGJvb2xlYW47XHJcbiAgcHVibGljIHdlYnJ0YzogV2ViUlRDQ29uZmlnTW9kZWw7XHJcbiAgcHVibGljIHBhdGllbnRfdmlzaXRfc3VtbWFyeTogUGF0aWVudFZpc2l0U3VtbWFyeUNvbmZpZ01vZGVsO1xyXG4gIHB1YmxpYyBwYXRpZW50X3ZpdGFsc19zZWN0aW9uOiBib29sZWFuO1xyXG4gIHB1YmxpYyBwYXRpZW50X3JlZ19vdGhlcjogYm9vbGVhbjtcclxuICBwdWJsaWMgcGF0aWVudF9yZWdfYWRkcmVzczogYm9vbGVhbjtcclxuICBwdWJsaWMgYWJoYV9zZWN0aW9uOiBib29sZWFuO1xyXG4gIHB1YmxpYyBzaWRlYmFyX21lbnVzOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcclxuICBwdWJsaWMgcGF0aWVudF92aXNpdF9zZWN0aW9uczogUGF0aWVudFZpc2l0U2VjdGlvbltdXHJcbiAgcHVibGljIGRyb3Bkb3duX3ZhbHVlczogRHJvcGRvd25WYWx1ZXNNb2RlbFtdXHJcbiAgcHVibGljIHBhdGllbnRfZGlhZ25vc3RpY3Nfc2VjdGlvbjogYm9vbGVhbjtcclxuICBwdWJsaWMgYWlfbGxtX3NlY3Rpb246IGJvb2xlYW47XHJcbiAgcHVibGljIGFpX2xsbV9yZWNvcmRpbmdfc2VjdGlvbjogIGJvb2xlYW47XHJcbiAgcHVibGljIHByZXNjcmlwdGlvbl9ub3Rlc19zZWN0aW9uOiBib29sZWFuO1xyXG4gIHB1YmxpYyBwcmVzY3JpcHRpb25fbm90ZXM6IHsgc3BlY2lhbHR5OiBzdHJpbmc7IG5vdGVzOiBzdHJpbmdbXTsgaXNfZW5hYmxlZDogYm9vbGVhbiB9W107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxwcml2YXRlIGVudlNlcnZpY2U6IEVudkNvbmZpZ1NlcnZpY2UpIHtcclxuICAgIHRoaXMuYmFzZVVSTCA9IHRoaXMuZW52U2VydmljZS5nZXRDb25maWcoJ2NvbmZpZ1VSTCcpOyBcclxuICAgfVxyXG5cclxuICBsb2FkKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5odHRwLmdldChgJHt0aGlzLmJhc2VVUkx9L2NvbmZpZy9nZXRQdWJsaXNoZWRDb25maWc/bmdzdy1ieXBhc3M9dHJ1ZWApXHJcbiAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0UGF0aWVudFZpc2l0U2VjdGlvbnMoZGF0YSlcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiBwcm9taXNlO1xyXG4gIH1cclxuXHJcbiAgc2V0UGF0aWVudFZpc2l0U2VjdGlvbnMoZGF0YTogYW55KSB7XHJcbiAgICBkYXRhLnBhdGllbnRfdmlzaXRfc2VjdGlvbnMgPSAoZGF0YT8ucGF0aWVudF92aXNpdF9zZWN0aW9ucyA/PyBbXSlcclxuICAgIC5tYXAoKHB2czogUGF0aWVudFZpc2l0U2VjdGlvbikgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnB2cyxcclxuICAgICAgICBsYW5nOiBwdnMubGFuZyA/ICh0eXBlb2YgcHZzLmxhbmcgPT09ICdvYmplY3QnID8gcHZzLmxhbmcgOiBKU09OLnBhcnNlKHB2cy5sYW5nKSkgOiBudWxsLFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB0b3VyQ29uZmlnKCl7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnRoZW1lX2NvbmZpZy5maW5kKChjb25maWc6IGFueSkgPT4gY29uZmlnLmtleSA9PT0gJ2hlbHBfdG91cl9jb25maWcnKS52YWx1ZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcGF0aWVudFJlZ0ZpZWxkcygpIHtcclxuICAgIGNvbnN0IGZpZWxkcyA9IFtdO1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5wYXRpZW50X3JlZ2lzdHJhdGlvbikuZm9yRWFjaChvYmo9PntcclxuICAgICAgZmllbGRzLnB1c2goLi4udGhpcy5wYXRpZW50X3JlZ2lzdHJhdGlvbltvYmpdXHJcbiAgICAgICAgLmZpbHRlcigoZTogeyBpc19lbmFibGVkOiBhbnk7IH0pPT5lLmlzX2VuYWJsZWQpXHJcbiAgICAgICAgLm1hcCgoZTogeyBuYW1lOiBhbnk7IH0pPT5lLm5hbWUpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmaWVsZHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hlY2tQYXRpZW50UmVnRmllbGQoZmllbGROYW1lOiBhbnksIGZpZWxkczogc3RyaW5nIHwgYW55W10pOiBib29sZWFue1xyXG4gICAgcmV0dXJuIGZpZWxkcy5pbmRleE9mKGZpZWxkTmFtZSkgIT09IC0xO1xyXG4gIH1cclxuXHJcbiAgZmV0Y2hBbGxMYW5ndWFnZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PihgJHt0aGlzLmJhc2VVUkx9L2xhbmd1YWdlL2dldGFsbEVuYWJsZWRMYW5ndWFnZXNgKTtcclxuICB9IFxyXG59XHJcbiAgICAiXX0=