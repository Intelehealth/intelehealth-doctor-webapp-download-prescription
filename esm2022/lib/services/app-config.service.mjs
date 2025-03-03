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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGliLXByZXNjaXB0aW9uL3NyYy9saWIvc2VydmljZXMvYXBwLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQTs7OztBQUtoRCxNQUFNLE9BQU8sZ0JBQWdCO0lBc0JQO0lBQXlCO0lBcEI3QywyREFBMkQ7SUFDbkQsT0FBTyxDQUFTO0lBQ2pCLE9BQU8sQ0FBUztJQUNoQixXQUFXLENBQVM7SUFDcEIsY0FBYyxDQUF3QjtJQUN0QyxRQUFRLENBQWtCO0lBQzFCLG9CQUFvQixDQUF1QztJQUMzRCxZQUFZLENBQVE7SUFDcEIsY0FBYyxDQUFlO0lBQzdCLG1CQUFtQixDQUFPO0lBQzFCLGNBQWMsQ0FBVTtJQUN4QixNQUFNLENBQW9CO0lBQzFCLHFCQUFxQixDQUFpQztJQUN0RCxzQkFBc0IsQ0FBVTtJQUNoQyxpQkFBaUIsQ0FBVTtJQUMzQixtQkFBbUIsQ0FBVTtJQUM3QixZQUFZLENBQVU7SUFDdEIsYUFBYSxDQUE2QjtJQUMxQyxzQkFBc0IsQ0FBdUI7SUFFcEQsWUFBb0IsSUFBZ0IsRUFBUyxVQUE0QjtRQUFyRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7UUFDdkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUYsSUFBSTtRQUNGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sNEJBQTRCLENBQUM7YUFDdkUsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDYixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztRQUNMLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxJQUFTO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLElBQUksRUFBRSxzQkFBc0IsSUFBSSxFQUFFLENBQUM7YUFDakUsR0FBRyxDQUFDLENBQUMsR0FBd0IsRUFBRSxFQUFFO1lBQ2hDLE9BQU87Z0JBQ0wsR0FBRyxHQUFHO2dCQUNOLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7YUFDekYsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixJQUFJO1lBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckc7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsSUFBVyxnQkFBZ0I7UUFDekIsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQSxFQUFFO1lBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDO2lCQUMxQyxNQUFNLENBQUMsQ0FBQyxDQUF1QixFQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDO2lCQUMvQyxHQUFHLENBQUMsQ0FBQyxDQUFpQixFQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxvQkFBb0IsQ0FBQyxTQUFjLEVBQUUsTUFBc0I7UUFDaEUsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7dUdBcEVVLGdCQUFnQjsyR0FBaEIsZ0JBQWdCLGNBRmYsTUFBTTs7MkZBRVAsZ0JBQWdCO2tCQUg1QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50XCI7XHJcbmltcG9ydCB7IExhbmd1YWdlTW9kZWwsIFBhdGllbnRSZWdpc3RyYXRpb25GaWVsZHNDb25maWdNb2RlbCwgVml0YWxNb2RlbCwgU3BlY2lhbGl6YXRpb25Nb2RlbCwgV2ViUlRDQ29uZmlnTW9kZWwsIFBhdGllbnRWaXNpdFN1bW1hcnlDb25maWdNb2RlbCwgUGF0aWVudFZpc2l0U2VjdGlvbiB9IGZyb20gJy4vLi4vbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgeyBFbnZDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9lbnYuc2VydmljZScgXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb25maWdTZXJ2aWNlIHtcclxuXHJcbiAgLy8gcHJpdmF0ZSBiYXNlVVJMID1cImh0dHBzOi8vZGV2LmludGVsZWhlYWx0aC5vcmc6NDAwNC9hcGlcIlxyXG4gIHByaXZhdGUgYmFzZVVSTCA6c3RyaW5nO1xyXG4gIHB1YmxpYyB2ZXJzaW9uOiBzdHJpbmc7XHJcbiAgcHVibGljIGFwaUVuZHBvaW50OiBzdHJpbmc7XHJcbiAgcHVibGljIHNwZWNpYWxpemF0aW9uOiBTcGVjaWFsaXphdGlvbk1vZGVsW107XHJcbiAgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZU1vZGVsW107XHJcbiAgcHVibGljIHBhdGllbnRfcmVnaXN0cmF0aW9uOiBQYXRpZW50UmVnaXN0cmF0aW9uRmllbGRzQ29uZmlnTW9kZWw7XHJcbiAgcHVibGljIHRoZW1lX2NvbmZpZzogYW55W107XHJcbiAgcHVibGljIHBhdGllbnRfdml0YWxzOiBWaXRhbE1vZGVsW107XHJcbiAgcHVibGljIHBhdGllbnRfZGlhZ25vc3RpY3M6YW55W107XHJcbiAgcHVibGljIHdlYnJ0Y19zZWN0aW9uOiBib29sZWFuO1xyXG4gIHB1YmxpYyB3ZWJydGM6IFdlYlJUQ0NvbmZpZ01vZGVsO1xyXG4gIHB1YmxpYyBwYXRpZW50X3Zpc2l0X3N1bW1hcnk6IFBhdGllbnRWaXNpdFN1bW1hcnlDb25maWdNb2RlbDtcclxuICBwdWJsaWMgcGF0aWVudF92aXRhbHNfc2VjdGlvbjogYm9vbGVhbjtcclxuICBwdWJsaWMgcGF0aWVudF9yZWdfb3RoZXI6IGJvb2xlYW47XHJcbiAgcHVibGljIHBhdGllbnRfcmVnX2FkZHJlc3M6IGJvb2xlYW47XHJcbiAgcHVibGljIGFiaGFfc2VjdGlvbjogYm9vbGVhbjtcclxuICBwdWJsaWMgc2lkZWJhcl9tZW51czogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH07XHJcbiAgcHVibGljIHBhdGllbnRfdmlzaXRfc2VjdGlvbnM6IFBhdGllbnRWaXNpdFNlY3Rpb25bXVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQscHJpdmF0ZSBlbnZTZXJ2aWNlOiBFbnZDb25maWdTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmJhc2VVUkwgPSB0aGlzLmVudlNlcnZpY2UuZ2V0Q29uZmlnKCdjb25maWdVUkwnKTsgXHJcbiAgIH1cclxuXHJcbiAgbG9hZCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5iYXNlVVJMfS9jb25maWcvZ2V0UHVibGlzaGVkQ29uZmlnYClcclxuICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRQYXRpZW50VmlzaXRTZWN0aW9ucyhkYXRhKVxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcbiAgfVxyXG5cclxuICBzZXRQYXRpZW50VmlzaXRTZWN0aW9ucyhkYXRhOiBhbnkpIHtcclxuICAgIGRhdGEucGF0aWVudF92aXNpdF9zZWN0aW9ucyA9IChkYXRhPy5wYXRpZW50X3Zpc2l0X3NlY3Rpb25zID8/IFtdKVxyXG4gICAgLm1hcCgocHZzOiBQYXRpZW50VmlzaXRTZWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHZzLFxyXG4gICAgICAgIGxhbmc6IHB2cy5sYW5nID8gKHR5cGVvZiBwdnMubGFuZyA9PT0gJ29iamVjdCcgPyBwdnMubGFuZyA6IEpTT04ucGFyc2UocHZzLmxhbmcpKSA6IG51bGwsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHRvdXJDb25maWcoKXtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMudGhlbWVfY29uZmlnLmZpbmQoKGNvbmZpZzogYW55KSA9PiBjb25maWcua2V5ID09PSAnaGVscF90b3VyX2NvbmZpZycpLnZhbHVlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBwYXRpZW50UmVnRmllbGRzKCkge1xyXG4gICAgY29uc3QgZmllbGRzID0gW107XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnBhdGllbnRfcmVnaXN0cmF0aW9uKS5mb3JFYWNoKG9iaj0+e1xyXG4gICAgICBmaWVsZHMucHVzaCguLi50aGlzLnBhdGllbnRfcmVnaXN0cmF0aW9uW29ial1cclxuICAgICAgICAuZmlsdGVyKChlOiB7IGlzX2VuYWJsZWQ6IGFueTsgfSk9PmUuaXNfZW5hYmxlZClcclxuICAgICAgICAubWFwKChlOiB7IG5hbWU6IGFueTsgfSk9PmUubmFtZSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja1BhdGllbnRSZWdGaWVsZChmaWVsZE5hbWU6IGFueSwgZmllbGRzOiBzdHJpbmcgfCBhbnlbXSk6IGJvb2xlYW57XHJcbiAgICByZXR1cm4gZmllbGRzLmluZGV4T2YoZmllbGROYW1lKSAhPT0gLTE7XHJcbiAgfVxyXG5cclxufVxyXG4gICAgIl19