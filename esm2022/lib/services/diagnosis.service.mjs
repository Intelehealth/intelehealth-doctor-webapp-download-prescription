import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';
import { MatSnackBar } from "@angular/material/snack-bar";
import { getCacheData, getEncounterProviderUUID } from '../utils/utility-functions';
import { doctorDetails, conceptIds } from '../config/constant';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/material/snack-bar";
export class DiagnosisService {
    http;
    snackbar;
    diagnosisArray = [];
    isVisitSummaryChanged = false;
    // private baseURL = "https://dev.intelehealth.org/openmrs/ws/rest/v1"
    constructor(http, snackbar) {
        this.http = http;
        this.snackbar = snackbar;
    }
    /**
    * Get concept
    * @param {string} uuid - Concept uuid
    * @return {Observable<any>}
    */
    concept(baseURL, uuid) {
        const url = `${baseURL}/concept/${uuid}`;
        return this.http.get(url);
    }
    /**
    * Delete observation
    * @param {string} uuid - Observation uuid
    * @return {Observable<any>}
    */
    deleteObs(baseURL, uuid) {
        const url = `${baseURL}/obs/${uuid}`;
        return this.http.delete(url);
    }
    /**
    * Get observations for a given concept id and patient id
    * @param {string} patientId - Patient uuid
    * @param {string} conceptId - Concept uuid
    * @return {Observable<any>}
    */
    getObs(baseURL, patientId, conceptId) {
        // tslint:disable-next-line: max-line-length
        const url = `${baseURL}/obs?patient=${patientId}&v=custom:(uuid,comment,value,encounter:(visit:(uuid)))&concept=${conceptId}`;
        return this.http.get(url);
    }
    /**
    * Get diagnosis list
    * @param {string} term - Search term
    * @return {Observable<any>}
    */
    getDiagnosisList(baseURL, term) {
        const url = `${baseURL}/concept?class=${conceptIds.conceptDiagnosisClass}&source=ICD10&q=${term}`;
        return this.http.get(url);
    }
    /**
    * Check if logged-in doctor is same for the encounter provider
    * @return {boolean} - True if same doctor else false
    */
    isSameDoctor() {
        const providerDetails = getCacheData(true, doctorDetails.PROVIDER);
        const providerUuid = providerDetails.uuid;
        if (providerDetails && providerUuid === getEncounterProviderUUID()) {
            return true;
        }
        else {
            this.snackbar.open("Another doctor is viewing this case", null, {
                duration: 4000,
            });
            return false;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DiagnosisService, deps: [{ token: i1.HttpClient }, { token: i2.MatSnackBar }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DiagnosisService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DiagnosisService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.MatSnackBar }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ25vc2lzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWItcHJlc2NpcHRpb24vc3JjL2xpYi9zZXJ2aWNlcy9kaWFnbm9zaXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxnRUFBZ0U7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBSy9ELE1BQU0sT0FBTyxnQkFBZ0I7SUFLUDtJQUEwQjtJQUo5QyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQ2IscUJBQXFCLEdBQUcsS0FBSyxDQUFBO0lBQ3BDLHNFQUFzRTtJQUV0RSxZQUFvQixJQUFnQixFQUFVLFFBQXFCO1FBQS9DLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFhO0lBQUksQ0FBQztJQUV4RTs7OztNQUlFO0lBQ0YsT0FBTyxDQUFDLE9BQWUsRUFBQyxJQUFJO1FBQzFCLE1BQU0sR0FBRyxHQUFHLEdBQUcsT0FBTyxZQUFZLElBQUksRUFBRSxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O01BSUU7SUFDRixTQUFTLENBQUMsT0FBZSxFQUFDLElBQUk7UUFDNUIsTUFBTSxHQUFHLEdBQUcsR0FBRyxPQUFPLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRixNQUFNLENBQUMsT0FBZSxFQUFDLFNBQVMsRUFBRSxTQUFTO1FBQ3pDLDRDQUE0QztRQUM1QyxNQUFNLEdBQUcsR0FBRyxHQUFHLE9BQU8sZ0JBQWdCLFNBQVMsbUVBQW1FLFNBQVMsRUFBRSxDQUFDO1FBQzlILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O01BSUU7SUFDRixnQkFBZ0IsQ0FBQyxPQUFlLEVBQUMsSUFBWTtRQUMzQyxNQUFNLEdBQUcsR0FBRyxHQUFHLE9BQU8sa0JBQWtCLFVBQVUsQ0FBQyxxQkFBcUIsbUJBQW1CLElBQUksRUFBRSxDQUFDO1FBQ2xHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7TUFHRTtJQUNGLFlBQVk7UUFDVixNQUFNLGVBQWUsR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRSxNQUFNLFlBQVksR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBQzFDLElBQUksZUFBZSxJQUFJLFlBQVksS0FBSyx3QkFBd0IsRUFBRSxFQUFFO1lBQ2xFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHFDQUFxQyxFQUFFLElBQUksRUFBRTtnQkFDOUQsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzt1R0FoRVUsZ0JBQWdCOzJHQUFoQixnQkFBZ0IsY0FGZixNQUFNOzsyRkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIGltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhclwiO1xuaW1wb3J0IHsgZ2V0Q2FjaGVEYXRhLCBnZXRFbmNvdW50ZXJQcm92aWRlclVVSUQgfSBmcm9tICcuLi91dGlscy91dGlsaXR5LWZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBkb2N0b3JEZXRhaWxzLCBjb25jZXB0SWRzIH0gZnJvbSAnLi4vY29uZmlnL2NvbnN0YW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGlhZ25vc2lzU2VydmljZSB7XG4gIGRpYWdub3Npc0FycmF5ID0gW107XG4gIHB1YmxpYyBpc1Zpc2l0U3VtbWFyeUNoYW5nZWQgPSBmYWxzZVxuICAvLyBwcml2YXRlIGJhc2VVUkwgPSBcImh0dHBzOi8vZGV2LmludGVsZWhlYWx0aC5vcmcvb3Blbm1ycy93cy9yZXN0L3YxXCJcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgc25hY2tiYXI6IE1hdFNuYWNrQmFyKSB7IH1cblxuICAvKipcbiAgKiBHZXQgY29uY2VwdFxuICAqIEBwYXJhbSB7c3RyaW5nfSB1dWlkIC0gQ29uY2VwdCB1dWlkXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAqL1xuICBjb25jZXB0KGJhc2VVUkw6IHN0cmluZyx1dWlkKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS9jb25jZXB0LyR7dXVpZH1gO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCk7XG4gIH1cblxuICAvKipcbiAgKiBEZWxldGUgb2JzZXJ2YXRpb25cbiAgKiBAcGFyYW0ge3N0cmluZ30gdXVpZCAtIE9ic2VydmF0aW9uIHV1aWRcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XG4gICovXG4gIGRlbGV0ZU9icyhiYXNlVVJMOiBzdHJpbmcsdXVpZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vb2JzLyR7dXVpZH1gO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCk7XG4gIH1cblxuICAvKipcbiAgKiBHZXQgb2JzZXJ2YXRpb25zIGZvciBhIGdpdmVuIGNvbmNlcHQgaWQgYW5kIHBhdGllbnQgaWRcbiAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aWVudElkIC0gUGF0aWVudCB1dWlkXG4gICogQHBhcmFtIHtzdHJpbmd9IGNvbmNlcHRJZCAtIENvbmNlcHQgdXVpZFxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgKi9cbiAgZ2V0T2JzKGJhc2VVUkw6IHN0cmluZyxwYXRpZW50SWQsIGNvbmNlcHRJZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS9vYnM/cGF0aWVudD0ke3BhdGllbnRJZH0mdj1jdXN0b206KHV1aWQsY29tbWVudCx2YWx1ZSxlbmNvdW50ZXI6KHZpc2l0Oih1dWlkKSkpJmNvbmNlcHQ9JHtjb25jZXB0SWR9YDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xuICB9XG5cbiAgLyoqXG4gICogR2V0IGRpYWdub3NpcyBsaXN0XG4gICogQHBhcmFtIHtzdHJpbmd9IHRlcm0gLSBTZWFyY2ggdGVybVxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgKi9cbiAgZ2V0RGlhZ25vc2lzTGlzdChiYXNlVVJMOiBzdHJpbmcsdGVybTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS9jb25jZXB0P2NsYXNzPSR7Y29uY2VwdElkcy5jb25jZXB0RGlhZ25vc2lzQ2xhc3N9JnNvdXJjZT1JQ0QxMCZxPSR7dGVybX1gO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCk7XG4gIH1cblxuICAvKipcbiAgKiBDaGVjayBpZiBsb2dnZWQtaW4gZG9jdG9yIGlzIHNhbWUgZm9yIHRoZSBlbmNvdW50ZXIgcHJvdmlkZXJcbiAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgc2FtZSBkb2N0b3IgZWxzZSBmYWxzZVxuICAqL1xuICBpc1NhbWVEb2N0b3IoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcHJvdmlkZXJEZXRhaWxzID0gZ2V0Q2FjaGVEYXRhKHRydWUsIGRvY3RvckRldGFpbHMuUFJPVklERVIpO1xuICAgIGNvbnN0IHByb3ZpZGVyVXVpZCA9IHByb3ZpZGVyRGV0YWlscy51dWlkO1xuICAgIGlmIChwcm92aWRlckRldGFpbHMgJiYgcHJvdmlkZXJVdWlkID09PSBnZXRFbmNvdW50ZXJQcm92aWRlclVVSUQoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc25hY2tiYXIub3BlbihcIkFub3RoZXIgZG9jdG9yIGlzIHZpZXdpbmcgdGhpcyBjYXNlXCIsIG51bGwsIHtcbiAgICAgICAgZHVyYXRpb246IDQwMDAsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==