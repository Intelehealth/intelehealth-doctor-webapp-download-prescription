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
        const promise = this.http.get(`${this.baseURL}/config/getPublishedConfig`)
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
}
AppConfigService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppConfigService, deps: [{ token: i1.HttpClient }, { token: i2.EnvConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
AppConfigService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppConfigService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.EnvConfigService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGliLXByZXNjaXB0aW9uL3NyYy9saWIvc2VydmljZXMvYXBwLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQTs7OztBQUtoRCxNQUFNLE9BQU8sZ0JBQWdCO0lBc0IzQixZQUFvQixJQUFnQixFQUFTLFVBQTRCO1FBQXJELFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUN2RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRixJQUFJO1FBQ0YsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyw0QkFBNEIsQ0FBQzthQUN2RSxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNiLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxQixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ0wsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELHVCQUF1QixDQUFDLElBQVM7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUMsSUFBSSxFQUFFLHNCQUFzQixJQUFJLEVBQUUsQ0FBQzthQUNqRSxHQUFHLENBQUMsQ0FBQyxHQUF3QixFQUFFLEVBQUU7WUFDaEMsT0FBTztnQkFDTCxHQUFHLEdBQUc7Z0JBQ04sSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTthQUN6RixDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLElBQUk7WUFDRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssa0JBQWtCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyRztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxJQUFXLGdCQUFnQjtRQUN6QixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFBLEVBQUU7WUFDbEQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7aUJBQzFDLE1BQU0sQ0FBQyxDQUFDLENBQXVCLEVBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxVQUFVLENBQUM7aUJBQy9DLEdBQUcsQ0FBQyxDQUFDLENBQWlCLEVBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVNLG9CQUFvQixDQUFDLFNBQWMsRUFBRSxNQUFzQjtRQUNoRSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7NkdBcEVVLGdCQUFnQjtpSEFBaEIsZ0JBQWdCLGNBRmYsTUFBTTsyRkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCIuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IHsgTGFuZ3VhZ2VNb2RlbCwgUGF0aWVudFJlZ2lzdHJhdGlvbkZpZWxkc0NvbmZpZ01vZGVsLCBWaXRhbE1vZGVsLCBTcGVjaWFsaXphdGlvbk1vZGVsLCBXZWJSVENDb25maWdNb2RlbCwgUGF0aWVudFZpc2l0U3VtbWFyeUNvbmZpZ01vZGVsLCBQYXRpZW50VmlzaXRTZWN0aW9uIH0gZnJvbSAnLi8uLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IEVudkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2Vudi5zZXJ2aWNlJyBcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbmZpZ1NlcnZpY2Uge1xyXG5cclxuICAvLyBwcml2YXRlIGJhc2VVUkwgPVwiaHR0cHM6Ly9kZXYuaW50ZWxlaGVhbHRoLm9yZzo0MDA0L2FwaVwiXHJcbiAgcHJpdmF0ZSBiYXNlVVJMIDpzdHJpbmc7XHJcbiAgcHVibGljIHZlcnNpb246IHN0cmluZztcclxuICBwdWJsaWMgYXBpRW5kcG9pbnQ6IHN0cmluZztcclxuICBwdWJsaWMgc3BlY2lhbGl6YXRpb246IFNwZWNpYWxpemF0aW9uTW9kZWxbXTtcclxuICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlTW9kZWxbXTtcclxuICBwdWJsaWMgcGF0aWVudF9yZWdpc3RyYXRpb246IFBhdGllbnRSZWdpc3RyYXRpb25GaWVsZHNDb25maWdNb2RlbDtcclxuICBwdWJsaWMgdGhlbWVfY29uZmlnOiBhbnlbXTtcclxuICBwdWJsaWMgcGF0aWVudF92aXRhbHM6IFZpdGFsTW9kZWxbXTtcclxuICBwdWJsaWMgcGF0aWVudF9kaWFnbm9zdGljczphbnlbXTtcclxuICBwdWJsaWMgd2VicnRjX3NlY3Rpb246IGJvb2xlYW47XHJcbiAgcHVibGljIHdlYnJ0YzogV2ViUlRDQ29uZmlnTW9kZWw7XHJcbiAgcHVibGljIHBhdGllbnRfdmlzaXRfc3VtbWFyeTogUGF0aWVudFZpc2l0U3VtbWFyeUNvbmZpZ01vZGVsO1xyXG4gIHB1YmxpYyBwYXRpZW50X3ZpdGFsc19zZWN0aW9uOiBib29sZWFuO1xyXG4gIHB1YmxpYyBwYXRpZW50X3JlZ19vdGhlcjogYm9vbGVhbjtcclxuICBwdWJsaWMgcGF0aWVudF9yZWdfYWRkcmVzczogYm9vbGVhbjtcclxuICBwdWJsaWMgYWJoYV9zZWN0aW9uOiBib29sZWFuO1xyXG4gIHB1YmxpYyBzaWRlYmFyX21lbnVzOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcclxuICBwdWJsaWMgcGF0aWVudF92aXNpdF9zZWN0aW9uczogUGF0aWVudFZpc2l0U2VjdGlvbltdXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxwcml2YXRlIGVudlNlcnZpY2U6IEVudkNvbmZpZ1NlcnZpY2UpIHtcclxuICAgIHRoaXMuYmFzZVVSTCA9IHRoaXMuZW52U2VydmljZS5nZXRDb25maWcoJ2NvbmZpZ1VSTCcpOyBcclxuICAgfVxyXG5cclxuICBsb2FkKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5odHRwLmdldChgJHt0aGlzLmJhc2VVUkx9L2NvbmZpZy9nZXRQdWJsaXNoZWRDb25maWdgKVxyXG4gICAgICAudG9Qcm9taXNlKClcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICB0aGlzLnNldFBhdGllbnRWaXNpdFNlY3Rpb25zKGRhdGEpXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxuICB9XHJcblxyXG4gIHNldFBhdGllbnRWaXNpdFNlY3Rpb25zKGRhdGE6IGFueSkge1xyXG4gICAgZGF0YS5wYXRpZW50X3Zpc2l0X3NlY3Rpb25zID0gKGRhdGE/LnBhdGllbnRfdmlzaXRfc2VjdGlvbnMgPz8gW10pXHJcbiAgICAubWFwKChwdnM6IFBhdGllbnRWaXNpdFNlY3Rpb24pID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5wdnMsXHJcbiAgICAgICAgbGFuZzogcHZzLmxhbmcgPyAodHlwZW9mIHB2cy5sYW5nID09PSAnb2JqZWN0JyA/IHB2cy5sYW5nIDogSlNPTi5wYXJzZShwdnMubGFuZykpIDogbnVsbCxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdG91ckNvbmZpZygpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy50aGVtZV9jb25maWcuZmluZCgoY29uZmlnOiBhbnkpID0+IGNvbmZpZy5rZXkgPT09ICdoZWxwX3RvdXJfY29uZmlnJykudmFsdWUpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBhdGllbnRSZWdGaWVsZHMoKSB7XHJcbiAgICBjb25zdCBmaWVsZHMgPSBbXTtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMucGF0aWVudF9yZWdpc3RyYXRpb24pLmZvckVhY2gob2JqPT57XHJcbiAgICAgIGZpZWxkcy5wdXNoKC4uLnRoaXMucGF0aWVudF9yZWdpc3RyYXRpb25bb2JqXVxyXG4gICAgICAgIC5maWx0ZXIoKGU6IHsgaXNfZW5hYmxlZDogYW55OyB9KT0+ZS5pc19lbmFibGVkKVxyXG4gICAgICAgIC5tYXAoKGU6IHsgbmFtZTogYW55OyB9KT0+ZS5uYW1lKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZmllbGRzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoZWNrUGF0aWVudFJlZ0ZpZWxkKGZpZWxkTmFtZTogYW55LCBmaWVsZHM6IHN0cmluZyB8IGFueVtdKTogYm9vbGVhbntcclxuICAgIHJldHVybiBmaWVsZHMuaW5kZXhPZihmaWVsZE5hbWUpICE9PSAtMTtcclxuICB9XHJcblxyXG59XHJcbiAgICAiXX0=