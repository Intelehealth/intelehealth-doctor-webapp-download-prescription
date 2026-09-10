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
    digital_stethoscope;
    digital_stethoscope_section;
    webrtc_section;
    webrtc;
    patient_visit_summary;
    patient_vitals_section;
    patient_reg_other;
    patient_reg_address;
    abha_section;
    sidebar_menus;
    patient_visit_sections;
    dropdown_values;
    patient_diagnostics_section;
    ai_llm_section;
    ai_llm_recording_section;
    prescription_notes_section;
    prescription_notes;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppConfigService, deps: [{ token: i1.HttpClient }, { token: i2.EnvConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppConfigService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AppConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.EnvConfigService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGliLXByZXNjaXB0aW9uL3NyYy9saWIvc2VydmljZXMvYXBwLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUtqRCxNQUFNLE9BQU8sZ0JBQWdCO0lBOEJQO0lBQXlCO0lBNUI3QywyREFBMkQ7SUFDbkQsT0FBTyxDQUFTO0lBQ2pCLE9BQU8sQ0FBUztJQUNoQixXQUFXLENBQVM7SUFDcEIsY0FBYyxDQUF3QjtJQUN0QyxRQUFRLENBQWtCO0lBQzFCLG9CQUFvQixDQUF1QztJQUMzRCxZQUFZLENBQVE7SUFDcEIsY0FBYyxDQUFlO0lBQzdCLG1CQUFtQixDQUFPO0lBQzFCLG1CQUFtQixDQUFPO0lBQzFCLDJCQUEyQixDQUFVO0lBQ3JDLGNBQWMsQ0FBVTtJQUN4QixNQUFNLENBQW9CO0lBQzFCLHFCQUFxQixDQUFpQztJQUN0RCxzQkFBc0IsQ0FBVTtJQUNoQyxpQkFBaUIsQ0FBVTtJQUMzQixtQkFBbUIsQ0FBVTtJQUM3QixZQUFZLENBQVU7SUFDdEIsYUFBYSxDQUE2QjtJQUMxQyxzQkFBc0IsQ0FBdUI7SUFDN0MsZUFBZSxDQUF1QjtJQUN0QywyQkFBMkIsQ0FBVTtJQUNyQyxjQUFjLENBQVU7SUFDeEIsd0JBQXdCLENBQVc7SUFDbkMsMEJBQTBCLENBQVU7SUFDcEMsa0JBQWtCLENBQWdFO0lBRXpGLFlBQW9CLElBQWdCLEVBQVMsVUFBNEI7UUFBckQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBQ3ZFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVGLElBQUk7UUFDRixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLDZDQUE2QyxDQUFDO2FBQ3hGLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDTCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsdUJBQXVCLENBQUMsSUFBUztRQUMvQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLElBQUksRUFBRSxDQUFDO2FBQ2pFLEdBQUcsQ0FBQyxDQUFDLEdBQXdCLEVBQUUsRUFBRTtZQUNoQyxPQUFPO2dCQUNMLEdBQUcsR0FBRztnQkFDTixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2FBQ3pGLENBQUE7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsSUFBSTtZQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JHO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELElBQVcsZ0JBQWdCO1FBQ3pCLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUEsRUFBRTtZQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztpQkFDMUMsTUFBTSxDQUFDLENBQUMsQ0FBdUIsRUFBQyxFQUFFLENBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQztpQkFDL0MsR0FBRyxDQUFDLENBQUMsQ0FBaUIsRUFBQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU0sb0JBQW9CLENBQUMsU0FBYyxFQUFFLE1BQXNCO1FBQ2hFLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLElBQUksQ0FBQyxPQUFPLGtDQUFrQyxDQUFDLENBQUM7SUFDL0UsQ0FBQzt1R0FoRlUsZ0JBQWdCOzJHQUFoQixnQkFBZ0IsY0FGZixNQUFNOzsyRkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbi8vIGltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcIi4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgeyBMYW5ndWFnZU1vZGVsLCBQYXRpZW50UmVnaXN0cmF0aW9uRmllbGRzQ29uZmlnTW9kZWwsIFZpdGFsTW9kZWwsIFNwZWNpYWxpemF0aW9uTW9kZWwsIFdlYlJUQ0NvbmZpZ01vZGVsLCBQYXRpZW50VmlzaXRTdW1tYXJ5Q29uZmlnTW9kZWwsIFBhdGllbnRWaXNpdFNlY3Rpb24sIERyb3Bkb3duVmFsdWVzTW9kZWwgfSBmcm9tICcuLy4uL21vZGVsL21vZGVsJztcclxuaW1wb3J0IHsgRW52Q29uZmlnU2VydmljZSB9IGZyb20gJy4vZW52LnNlcnZpY2UnOyBcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbmZpZ1NlcnZpY2Uge1xyXG5cclxuICAvLyBwcml2YXRlIGJhc2VVUkwgPVwiaHR0cHM6Ly9kZXYuaW50ZWxlaGVhbHRoLm9yZzo0MDA0L2FwaVwiXHJcbiAgcHJpdmF0ZSBiYXNlVVJMIDpzdHJpbmc7XHJcbiAgcHVibGljIHZlcnNpb246IHN0cmluZztcclxuICBwdWJsaWMgYXBpRW5kcG9pbnQ6IHN0cmluZztcclxuICBwdWJsaWMgc3BlY2lhbGl6YXRpb246IFNwZWNpYWxpemF0aW9uTW9kZWxbXTtcclxuICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlTW9kZWxbXTtcclxuICBwdWJsaWMgcGF0aWVudF9yZWdpc3RyYXRpb246IFBhdGllbnRSZWdpc3RyYXRpb25GaWVsZHNDb25maWdNb2RlbDtcclxuICBwdWJsaWMgdGhlbWVfY29uZmlnOiBhbnlbXTtcclxuICBwdWJsaWMgcGF0aWVudF92aXRhbHM6IFZpdGFsTW9kZWxbXTtcclxuICBwdWJsaWMgcGF0aWVudF9kaWFnbm9zdGljczphbnlbXTtcclxuICBwdWJsaWMgZGlnaXRhbF9zdGV0aG9zY29wZTphbnlbXTtcclxuICBwdWJsaWMgZGlnaXRhbF9zdGV0aG9zY29wZV9zZWN0aW9uOiBib29sZWFuO1xyXG4gIHB1YmxpYyB3ZWJydGNfc2VjdGlvbjogYm9vbGVhbjtcclxuICBwdWJsaWMgd2VicnRjOiBXZWJSVENDb25maWdNb2RlbDtcclxuICBwdWJsaWMgcGF0aWVudF92aXNpdF9zdW1tYXJ5OiBQYXRpZW50VmlzaXRTdW1tYXJ5Q29uZmlnTW9kZWw7XHJcbiAgcHVibGljIHBhdGllbnRfdml0YWxzX3NlY3Rpb246IGJvb2xlYW47XHJcbiAgcHVibGljIHBhdGllbnRfcmVnX290aGVyOiBib29sZWFuO1xyXG4gIHB1YmxpYyBwYXRpZW50X3JlZ19hZGRyZXNzOiBib29sZWFuO1xyXG4gIHB1YmxpYyBhYmhhX3NlY3Rpb246IGJvb2xlYW47XHJcbiAgcHVibGljIHNpZGViYXJfbWVudXM6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xyXG4gIHB1YmxpYyBwYXRpZW50X3Zpc2l0X3NlY3Rpb25zOiBQYXRpZW50VmlzaXRTZWN0aW9uW11cclxuICBwdWJsaWMgZHJvcGRvd25fdmFsdWVzOiBEcm9wZG93blZhbHVlc01vZGVsW11cclxuICBwdWJsaWMgcGF0aWVudF9kaWFnbm9zdGljc19zZWN0aW9uOiBib29sZWFuO1xyXG4gIHB1YmxpYyBhaV9sbG1fc2VjdGlvbjogYm9vbGVhbjtcclxuICBwdWJsaWMgYWlfbGxtX3JlY29yZGluZ19zZWN0aW9uOiAgYm9vbGVhbjtcclxuICBwdWJsaWMgcHJlc2NyaXB0aW9uX25vdGVzX3NlY3Rpb246IGJvb2xlYW47XHJcbiAgcHVibGljIHByZXNjcmlwdGlvbl9ub3RlczogeyBzcGVjaWFsdHk6IHN0cmluZzsgbm90ZXM6IHN0cmluZ1tdOyBpc19lbmFibGVkOiBib29sZWFuIH1bXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LHByaXZhdGUgZW52U2VydmljZTogRW52Q29uZmlnU2VydmljZSkge1xyXG4gICAgdGhpcy5iYXNlVVJMID0gdGhpcy5lbnZTZXJ2aWNlLmdldENvbmZpZygnY29uZmlnVVJMJyk7IFxyXG4gICB9XHJcblxyXG4gIGxvYWQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuYmFzZVVSTH0vY29uZmlnL2dldFB1Ymxpc2hlZENvbmZpZz9uZ3N3LWJ5cGFzcz10cnVlYClcclxuICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRQYXRpZW50VmlzaXRTZWN0aW9ucyhkYXRhKVxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcbiAgfVxyXG5cclxuICBzZXRQYXRpZW50VmlzaXRTZWN0aW9ucyhkYXRhOiBhbnkpIHtcclxuICAgIGRhdGEucGF0aWVudF92aXNpdF9zZWN0aW9ucyA9IChkYXRhPy5wYXRpZW50X3Zpc2l0X3NlY3Rpb25zID8/IFtdKVxyXG4gICAgLm1hcCgocHZzOiBQYXRpZW50VmlzaXRTZWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHZzLFxyXG4gICAgICAgIGxhbmc6IHB2cy5sYW5nID8gKHR5cGVvZiBwdnMubGFuZyA9PT0gJ29iamVjdCcgPyBwdnMubGFuZyA6IEpTT04ucGFyc2UocHZzLmxhbmcpKSA6IG51bGwsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHRvdXJDb25maWcoKXtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMudGhlbWVfY29uZmlnLmZpbmQoKGNvbmZpZzogYW55KSA9PiBjb25maWcua2V5ID09PSAnaGVscF90b3VyX2NvbmZpZycpLnZhbHVlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBwYXRpZW50UmVnRmllbGRzKCkge1xyXG4gICAgY29uc3QgZmllbGRzID0gW107XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnBhdGllbnRfcmVnaXN0cmF0aW9uKS5mb3JFYWNoKG9iaj0+e1xyXG4gICAgICBmaWVsZHMucHVzaCguLi50aGlzLnBhdGllbnRfcmVnaXN0cmF0aW9uW29ial1cclxuICAgICAgICAuZmlsdGVyKChlOiB7IGlzX2VuYWJsZWQ6IGFueTsgfSk9PmUuaXNfZW5hYmxlZClcclxuICAgICAgICAubWFwKChlOiB7IG5hbWU6IGFueTsgfSk9PmUubmFtZSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja1BhdGllbnRSZWdGaWVsZChmaWVsZE5hbWU6IGFueSwgZmllbGRzOiBzdHJpbmcgfCBhbnlbXSk6IGJvb2xlYW57XHJcbiAgICByZXR1cm4gZmllbGRzLmluZGV4T2YoZmllbGROYW1lKSAhPT0gLTE7XHJcbiAgfVxyXG5cclxuICBmZXRjaEFsbExhbmd1YWdlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KGAke3RoaXMuYmFzZVVSTH0vbGFuZ3VhZ2UvZ2V0YWxsRW5hYmxlZExhbmd1YWdlc2ApO1xyXG4gIH0gXHJcbn1cclxuICAgICJdfQ==