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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ25vc2lzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWItcHJlc2NpcHRpb24vc3JjL2xpYi9zZXJ2aWNlcy9kaWFnbm9zaXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxnRUFBZ0U7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBSy9ELE1BQU0sT0FBTyxnQkFBZ0I7SUFLUDtJQUEwQjtJQUo5QyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQ2IscUJBQXFCLEdBQUcsS0FBSyxDQUFBO0lBQ3BDLHNFQUFzRTtJQUV0RSxZQUFvQixJQUFnQixFQUFVLFFBQXFCO1FBQS9DLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFhO0lBQUksQ0FBQztJQUV4RTs7OztNQUlFO0lBQ0YsT0FBTyxDQUFDLE9BQWUsRUFBQyxJQUFJO1FBQzFCLE1BQU0sR0FBRyxHQUFHLEdBQUcsT0FBTyxZQUFZLElBQUksRUFBRSxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O01BSUU7SUFDRixTQUFTLENBQUMsT0FBZSxFQUFDLElBQUk7UUFDNUIsTUFBTSxHQUFHLEdBQUcsR0FBRyxPQUFPLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRixNQUFNLENBQUMsT0FBZSxFQUFDLFNBQVMsRUFBRSxTQUFTO1FBQ3pDLDRDQUE0QztRQUM1QyxNQUFNLEdBQUcsR0FBRyxHQUFHLE9BQU8sZ0JBQWdCLFNBQVMsbUVBQW1FLFNBQVMsRUFBRSxDQUFDO1FBQzlILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O01BSUU7SUFDRixnQkFBZ0IsQ0FBQyxPQUFlLEVBQUMsSUFBWTtRQUMzQyxNQUFNLEdBQUcsR0FBRyxHQUFHLE9BQU8sa0JBQWtCLFVBQVUsQ0FBQyxxQkFBcUIsbUJBQW1CLElBQUksRUFBRSxDQUFDO1FBQ2xHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7TUFHRTtJQUNGLFlBQVk7UUFDVixNQUFNLGVBQWUsR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRSxNQUFNLFlBQVksR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDO1FBQzFDLElBQUksZUFBZSxJQUFJLFlBQVksS0FBSyx3QkFBd0IsRUFBRSxFQUFFO1lBQ2xFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHFDQUFxQyxFQUFFLElBQUksRUFBRTtnQkFDOUQsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzt1R0FoRVUsZ0JBQWdCOzJHQUFoQixnQkFBZ0IsY0FGZixNQUFNOzsyRkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXJcIjtcclxuaW1wb3J0IHsgZ2V0Q2FjaGVEYXRhLCBnZXRFbmNvdW50ZXJQcm92aWRlclVVSUQgfSBmcm9tICcuLi91dGlscy91dGlsaXR5LWZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGRvY3RvckRldGFpbHMsIGNvbmNlcHRJZHMgfSBmcm9tICcuLi9jb25maWcvY29uc3RhbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ25vc2lzU2VydmljZSB7XHJcbiAgZGlhZ25vc2lzQXJyYXkgPSBbXTtcclxuICBwdWJsaWMgaXNWaXNpdFN1bW1hcnlDaGFuZ2VkID0gZmFsc2VcclxuICAvLyBwcml2YXRlIGJhc2VVUkwgPSBcImh0dHBzOi8vZGV2LmludGVsZWhlYWx0aC5vcmcvb3Blbm1ycy93cy9yZXN0L3YxXCJcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHNuYWNrYmFyOiBNYXRTbmFja0JhcikgeyB9XHJcblxyXG4gIC8qKlxyXG4gICogR2V0IGNvbmNlcHRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB1dWlkIC0gQ29uY2VwdCB1dWlkXHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICBjb25jZXB0KGJhc2VVUkw6IHN0cmluZyx1dWlkKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVUkx9L2NvbmNlcHQvJHt1dWlkfWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBEZWxldGUgb2JzZXJ2YXRpb25cclxuICAqIEBwYXJhbSB7c3RyaW5nfSB1dWlkIC0gT2JzZXJ2YXRpb24gdXVpZFxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgZGVsZXRlT2JzKGJhc2VVUkw6IHN0cmluZyx1dWlkKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVUkx9L29icy8ke3V1aWR9YDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEdldCBvYnNlcnZhdGlvbnMgZm9yIGEgZ2l2ZW4gY29uY2VwdCBpZCBhbmQgcGF0aWVudCBpZFxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHBhdGllbnRJZCAtIFBhdGllbnQgdXVpZFxyXG4gICogQHBhcmFtIHtzdHJpbmd9IGNvbmNlcHRJZCAtIENvbmNlcHQgdXVpZFxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgZ2V0T2JzKGJhc2VVUkw6IHN0cmluZyxwYXRpZW50SWQsIGNvbmNlcHRJZCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vb2JzP3BhdGllbnQ9JHtwYXRpZW50SWR9JnY9Y3VzdG9tOih1dWlkLGNvbW1lbnQsdmFsdWUsZW5jb3VudGVyOih2aXNpdDoodXVpZCkpKSZjb25jZXB0PSR7Y29uY2VwdElkfWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXQgZGlhZ25vc2lzIGxpc3RcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXJtIC0gU2VhcmNoIHRlcm1cclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIGdldERpYWdub3Npc0xpc3QoYmFzZVVSTDogc3RyaW5nLHRlcm06IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS9jb25jZXB0P2NsYXNzPSR7Y29uY2VwdElkcy5jb25jZXB0RGlhZ25vc2lzQ2xhc3N9JnNvdXJjZT1JQ0QxMCZxPSR7dGVybX1gO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQ2hlY2sgaWYgbG9nZ2VkLWluIGRvY3RvciBpcyBzYW1lIGZvciB0aGUgZW5jb3VudGVyIHByb3ZpZGVyXHJcbiAgKiBAcmV0dXJuIHtib29sZWFufSAtIFRydWUgaWYgc2FtZSBkb2N0b3IgZWxzZSBmYWxzZVxyXG4gICovXHJcbiAgaXNTYW1lRG9jdG9yKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgcHJvdmlkZXJEZXRhaWxzID0gZ2V0Q2FjaGVEYXRhKHRydWUsIGRvY3RvckRldGFpbHMuUFJPVklERVIpO1xyXG4gICAgY29uc3QgcHJvdmlkZXJVdWlkID0gcHJvdmlkZXJEZXRhaWxzLnV1aWQ7XHJcbiAgICBpZiAocHJvdmlkZXJEZXRhaWxzICYmIHByb3ZpZGVyVXVpZCA9PT0gZ2V0RW5jb3VudGVyUHJvdmlkZXJVVUlEKCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNuYWNrYmFyLm9wZW4oXCJBbm90aGVyIGRvY3RvciBpcyB2aWV3aW5nIHRoaXMgY2FzZVwiLCBudWxsLCB7XHJcbiAgICAgICAgZHVyYXRpb246IDQwMDAsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==