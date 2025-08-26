import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvConfigService } from './env.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./env.service";
export class AppConfigService {
    http;
    envService;
    // private baseURL ="https://dev.intelehealth.org:4004/api"
    baseURL;
    version;
    apiEndpoint;
    specialization;
    language;
    patient_registration;
    theme_config;
    patient_vitals;
    patient_diagnostics;
    webrtc_section;
    webrtc;
    patient_visit_summary;
    patient_vitals_section;
    patient_reg_other;
    patient_reg_address;
    abha_section;
    sidebar_menus;
    patient_visit_sections;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppConfigService, deps: [{ token: i1.HttpClient }, { token: i2.EnvConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppConfigService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.EnvConfigService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGliLXByZXNjaXB0aW9uL3NyYy9saWIvc2VydmljZXMvYXBwLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQTs7OztBQUtoRCxNQUFNLE9BQU8sZ0JBQWdCO0lBc0JQO0lBQXlCO0lBcEI3QywyREFBMkQ7SUFDbkQsT0FBTyxDQUFTO0lBQ2pCLE9BQU8sQ0FBUztJQUNoQixXQUFXLENBQVM7SUFDcEIsY0FBYyxDQUF3QjtJQUN0QyxRQUFRLENBQWtCO0lBQzFCLG9CQUFvQixDQUF1QztJQUMzRCxZQUFZLENBQVE7SUFDcEIsY0FBYyxDQUFlO0lBQzdCLG1CQUFtQixDQUFPO0lBQzFCLGNBQWMsQ0FBVTtJQUN4QixNQUFNLENBQW9CO0lBQzFCLHFCQUFxQixDQUFpQztJQUN0RCxzQkFBc0IsQ0FBVTtJQUNoQyxpQkFBaUIsQ0FBVTtJQUMzQixtQkFBbUIsQ0FBVTtJQUM3QixZQUFZLENBQVU7SUFDdEIsYUFBYSxDQUE2QjtJQUMxQyxzQkFBc0IsQ0FBdUI7SUFFcEQsWUFBb0IsSUFBZ0IsRUFBUyxVQUE0QjtRQUFyRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7UUFDdkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUYsSUFBSTtRQUNGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sNEJBQTRCLENBQUM7YUFDdkUsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDYixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztRQUNMLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxJQUFTO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLElBQUksRUFBRSxzQkFBc0IsSUFBSSxFQUFFLENBQUM7YUFDakUsR0FBRyxDQUFDLENBQUMsR0FBd0IsRUFBRSxFQUFFO1lBQ2hDLE9BQU87Z0JBQ0wsR0FBRyxHQUFHO2dCQUNOLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7YUFDekYsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixJQUFJO1lBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckc7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsSUFBVyxnQkFBZ0I7UUFDekIsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQSxFQUFFO1lBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDO2lCQUMxQyxNQUFNLENBQUMsQ0FBQyxDQUF1QixFQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDO2lCQUMvQyxHQUFHLENBQUMsQ0FBQyxDQUFpQixFQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxvQkFBb0IsQ0FBQyxTQUFjLEVBQUUsTUFBc0I7UUFDaEUsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7dUdBcEVVLGdCQUFnQjsyR0FBaEIsZ0JBQWdCLGNBRmYsTUFBTTs7MkZBRVAsZ0JBQWdCO2tCQUg1QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCIuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IExhbmd1YWdlTW9kZWwsIFBhdGllbnRSZWdpc3RyYXRpb25GaWVsZHNDb25maWdNb2RlbCwgVml0YWxNb2RlbCwgU3BlY2lhbGl6YXRpb25Nb2RlbCwgV2ViUlRDQ29uZmlnTW9kZWwsIFBhdGllbnRWaXNpdFN1bW1hcnlDb25maWdNb2RlbCwgUGF0aWVudFZpc2l0U2VjdGlvbiB9IGZyb20gJy4vLi4vbW9kZWwvbW9kZWwnO1xuaW1wb3J0IHsgRW52Q29uZmlnU2VydmljZSB9IGZyb20gJy4vZW52LnNlcnZpY2UnIFxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb25maWdTZXJ2aWNlIHtcblxuICAvLyBwcml2YXRlIGJhc2VVUkwgPVwiaHR0cHM6Ly9kZXYuaW50ZWxlaGVhbHRoLm9yZzo0MDA0L2FwaVwiXG4gIHByaXZhdGUgYmFzZVVSTCA6c3RyaW5nO1xuICBwdWJsaWMgdmVyc2lvbjogc3RyaW5nO1xuICBwdWJsaWMgYXBpRW5kcG9pbnQ6IHN0cmluZztcbiAgcHVibGljIHNwZWNpYWxpemF0aW9uOiBTcGVjaWFsaXphdGlvbk1vZGVsW107XG4gIHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2VNb2RlbFtdO1xuICBwdWJsaWMgcGF0aWVudF9yZWdpc3RyYXRpb246IFBhdGllbnRSZWdpc3RyYXRpb25GaWVsZHNDb25maWdNb2RlbDtcbiAgcHVibGljIHRoZW1lX2NvbmZpZzogYW55W107XG4gIHB1YmxpYyBwYXRpZW50X3ZpdGFsczogVml0YWxNb2RlbFtdO1xuICBwdWJsaWMgcGF0aWVudF9kaWFnbm9zdGljczphbnlbXTtcbiAgcHVibGljIHdlYnJ0Y19zZWN0aW9uOiBib29sZWFuO1xuICBwdWJsaWMgd2VicnRjOiBXZWJSVENDb25maWdNb2RlbDtcbiAgcHVibGljIHBhdGllbnRfdmlzaXRfc3VtbWFyeTogUGF0aWVudFZpc2l0U3VtbWFyeUNvbmZpZ01vZGVsO1xuICBwdWJsaWMgcGF0aWVudF92aXRhbHNfc2VjdGlvbjogYm9vbGVhbjtcbiAgcHVibGljIHBhdGllbnRfcmVnX290aGVyOiBib29sZWFuO1xuICBwdWJsaWMgcGF0aWVudF9yZWdfYWRkcmVzczogYm9vbGVhbjtcbiAgcHVibGljIGFiaGFfc2VjdGlvbjogYm9vbGVhbjtcbiAgcHVibGljIHNpZGViYXJfbWVudXM6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xuICBwdWJsaWMgcGF0aWVudF92aXNpdF9zZWN0aW9uczogUGF0aWVudFZpc2l0U2VjdGlvbltdXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LHByaXZhdGUgZW52U2VydmljZTogRW52Q29uZmlnU2VydmljZSkge1xuICAgIHRoaXMuYmFzZVVSTCA9IHRoaXMuZW52U2VydmljZS5nZXRDb25maWcoJ2NvbmZpZ1VSTCcpOyBcbiAgIH1cblxuICBsb2FkKCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5iYXNlVVJMfS9jb25maWcvZ2V0UHVibGlzaGVkQ29uZmlnYClcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5zZXRQYXRpZW50VmlzaXRTZWN0aW9ucyhkYXRhKVxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgc2V0UGF0aWVudFZpc2l0U2VjdGlvbnMoZGF0YTogYW55KSB7XG4gICAgZGF0YS5wYXRpZW50X3Zpc2l0X3NlY3Rpb25zID0gKGRhdGE/LnBhdGllbnRfdmlzaXRfc2VjdGlvbnMgPz8gW10pXG4gICAgLm1hcCgocHZzOiBQYXRpZW50VmlzaXRTZWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wdnMsXG4gICAgICAgIGxhbmc6IHB2cy5sYW5nID8gKHR5cGVvZiBwdnMubGFuZyA9PT0gJ29iamVjdCcgPyBwdnMubGFuZyA6IEpTT04ucGFyc2UocHZzLmxhbmcpKSA6IG51bGwsXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdG91ckNvbmZpZygpe1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnRoZW1lX2NvbmZpZy5maW5kKChjb25maWc6IGFueSkgPT4gY29uZmlnLmtleSA9PT0gJ2hlbHBfdG91cl9jb25maWcnKS52YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGF0aWVudFJlZ0ZpZWxkcygpIHtcbiAgICBjb25zdCBmaWVsZHMgPSBbXTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnBhdGllbnRfcmVnaXN0cmF0aW9uKS5mb3JFYWNoKG9iaj0+e1xuICAgICAgZmllbGRzLnB1c2goLi4udGhpcy5wYXRpZW50X3JlZ2lzdHJhdGlvbltvYmpdXG4gICAgICAgIC5maWx0ZXIoKGU6IHsgaXNfZW5hYmxlZDogYW55OyB9KT0+ZS5pc19lbmFibGVkKVxuICAgICAgICAubWFwKChlOiB7IG5hbWU6IGFueTsgfSk9PmUubmFtZSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpZWxkcztcbiAgfVxuXG4gIHB1YmxpYyBjaGVja1BhdGllbnRSZWdGaWVsZChmaWVsZE5hbWU6IGFueSwgZmllbGRzOiBzdHJpbmcgfCBhbnlbXSk6IGJvb2xlYW57XG4gICAgcmV0dXJuIGZpZWxkcy5pbmRleE9mKGZpZWxkTmFtZSkgIT09IC0xO1xuICB9XG5cbn1cbiAgICAiXX0=