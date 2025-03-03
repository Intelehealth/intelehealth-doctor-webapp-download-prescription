import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { environment } from "src/environments/environment";
import { MatDialog } from '@angular/material/dialog';
import { LibPresciptionComponent } from "./lib-presciption.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/material/dialog";
export class LibPresciptionService {
    http;
    dialog;
    baseURL;
    mimeTypes = {
        JVBERi0: 'application/pdf',
        R0lGODdh: 'image/gif',
        R0lGODlh: 'image/gif',
        iVBORw0KGgo: 'image/png',
        '/9j/': 'image/jpg'
    };
    constructor(http, dialog, environment) {
        this.http = http;
        this.dialog = dialog;
        // this.baseURL = "https://dev.intelehealth.org/openmrs/ws/rest/v1"
        this.baseURL = environment.BASE_URL;
    }
    fetchVisitDetails(uuid, v = "custom:(location:(display),uuid,display,startDatetime,dateCreated,stopDatetime,encounters:(display,uuid,encounterDatetime,encounterType:(display),obs:(display,uuid,value,concept:(uuid,display)),encounterProviders:(display,provider:(uuid,attributes,person:(uuid,display,gender,age)))),patient:(uuid,identifiers:(identifier,identifierType:(name,uuid,display)),attributes,person:(display,gender,age)),attributes)") {
        // tslint:disable-next-line:max-line-length
        const url = `${this.baseURL}/visit/${uuid}?v=${v}`;
        return this.http.get(url);
    }
    /**
    * Get patient details
    * @param {string} id - Patient uuid
    * @param {string} v - response format
    * @return {Observable<any>}
    */
    patientInfo(id, v = 'custom:(uuid,attributes,identifiers,person:(uuid,display,gender,preferredName:(givenName,familyName,middleName),birthdate,age,preferredAddress:(cityVillage,address1,address2,address3,address6,country,stateProvince,countyDistrict,postalCode),attributes:(value,attributeType:(display))))') {
        // tslint:disable-next-line: max-line-length
        const url = `${this.baseURL}/patient/${id}?v=${v}`;
        return this.http.get(url);
    }
    /**
    * Parse observation data
    * @param {any} data - Observation data
    * @return {any} - Observation data with parsed value
    */
    getData(data) {
        if (data?.value.toString().startsWith("{")) {
            let value = JSON.parse(data.value.toString());
            data.value = value["en"];
        }
        return data;
    }
    /**
    * Open view visit prescription modal
    * @param {{ uuid: string }} data - Dialog data
    * @return {Observable<any>} - Dialog result
    */
    openVisitPrescriptionModal(data) {
        const dialogRef = this.dialog.open(LibPresciptionComponent, { panelClass: 'modal-lg', data, hasBackdrop: true, disableClose: true });
        return dialogRef.afterClosed();
    }
    /**
    * Return MIME type for give base64 string
    * @param {string} b64 - Base64 string
    * @return {string} - MIME type
    */
    detectMimeType(b64) {
        for (const s in this.mimeTypes) {
            if (b64.startsWith(s)) {
                return this.mimeTypes[s];
            }
        }
    }
    /**
    * Get observations for a given concept id and patient id
    * @param {string} patientId - Patient uuid
    * @param {string} conceptId - Concept uuid
    * @return {Observable<any>}
    */
    getObs(patientId, conceptId) {
        // tslint:disable-next-line: max-line-length
        const url = `${this.baseURL}/obs?patient=${patientId}&v=custom:(uuid,comment,value,encounter:(visit:(uuid)))&concept=${conceptId}`;
        return this.http.get(url);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: LibPresciptionService, deps: [{ token: i1.HttpClient }, { token: i2.MatDialog }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: LibPresciptionService, providedIn: "root" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: LibPresciptionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.MatDialog }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXByZXNjaXB0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWItcHJlc2NpcHRpb24vc3JjL2xpYi9saWItcHJlc2NpcHRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFFL0QsOERBQThEO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUt0RSxNQUFNLE9BQU8scUJBQXFCO0lBYXRCO0lBQ0E7SUFaRixPQUFPLENBQUM7SUFDaEIsU0FBUyxHQUFRO1FBQ2YsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixRQUFRLEVBQUUsV0FBVztRQUNyQixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsV0FBVztRQUN4QixNQUFNLEVBQUUsV0FBVztLQUNwQixDQUFDO0lBR0YsWUFDVSxJQUFnQixFQUNoQixNQUFpQixFQUNGLFdBQVc7UUFGMUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBR3pCLG1FQUFtRTtRQUNuRSxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUE7SUFDckMsQ0FBQztJQUNELGlCQUFpQixDQUNmLElBQVcsRUFDWCxDQUFDLEdBQUcsMlpBQTJaO1FBRS9aLDJDQUEyQztRQUMzQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLFVBQVUsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25ELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7OztNQUtFO0lBQ0YsV0FBVyxDQUFDLEVBQVMsRUFBRSxDQUFDLEdBQUcsK1JBQStSO1FBQ3hULDRDQUE0QztRQUM1QyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLFlBQVksRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ25ELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O01BSUU7SUFDRixPQUFPLENBQUMsSUFBUztRQUNmLElBQUksSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztNQUlFO0lBQ0YsMEJBQTBCLENBQUMsSUFBc0I7UUFDL0MsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JJLE9BQU8sU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7OztNQUlFO0lBQ0YsY0FBYyxDQUFDLEdBQVc7UUFDeEIsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzlCLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRixNQUFNLENBQUMsU0FBaUIsRUFBRSxTQUFpQjtRQUN6Qyw0Q0FBNEM7UUFDNUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxnQkFBZ0IsU0FBUyxtRUFBbUUsU0FBUyxFQUFFLENBQUM7UUFDbkksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO3VHQXZGVSxxQkFBcUIscUVBZXRCLGFBQWE7MkdBZloscUJBQXFCLGNBRnBCLE1BQU07OzJGQUVQLHFCQUFxQjtrQkFIakMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQWdCSSxNQUFNOzJCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwic3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgeyBNYXREaWFsb2d9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IExpYlByZXNjaXB0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vbGliLXByZXNjaXB0aW9uLmNvbXBvbmVudFwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliUHJlc2NpcHRpb25TZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBiYXNlVVJMO1xyXG4gIG1pbWVUeXBlczogYW55ID0ge1xyXG4gICAgSlZCRVJpMDogJ2FwcGxpY2F0aW9uL3BkZicsXHJcbiAgICBSMGxHT0RkaDogJ2ltYWdlL2dpZicsXHJcbiAgICBSMGxHT0RsaDogJ2ltYWdlL2dpZicsXHJcbiAgICBpVkJPUncwS0dnbzogJ2ltYWdlL3BuZycsXHJcbiAgICAnLzlqLyc6ICdpbWFnZS9qcGcnXHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgZW52aXJvbm1lbnRcclxuICApIHsgXHJcbiAgICAvLyB0aGlzLmJhc2VVUkwgPSBcImh0dHBzOi8vZGV2LmludGVsZWhlYWx0aC5vcmcvb3Blbm1ycy93cy9yZXN0L3YxXCJcclxuICAgIHRoaXMuYmFzZVVSTCA9IGVudmlyb25tZW50LkJBU0VfVVJMXHJcbiAgfVxyXG4gIGZldGNoVmlzaXREZXRhaWxzKFxyXG4gICAgdXVpZDpzdHJpbmcsXHJcbiAgICB2ID0gXCJjdXN0b206KGxvY2F0aW9uOihkaXNwbGF5KSx1dWlkLGRpc3BsYXksc3RhcnREYXRldGltZSxkYXRlQ3JlYXRlZCxzdG9wRGF0ZXRpbWUsZW5jb3VudGVyczooZGlzcGxheSx1dWlkLGVuY291bnRlckRhdGV0aW1lLGVuY291bnRlclR5cGU6KGRpc3BsYXkpLG9iczooZGlzcGxheSx1dWlkLHZhbHVlLGNvbmNlcHQ6KHV1aWQsZGlzcGxheSkpLGVuY291bnRlclByb3ZpZGVyczooZGlzcGxheSxwcm92aWRlcjoodXVpZCxhdHRyaWJ1dGVzLHBlcnNvbjoodXVpZCxkaXNwbGF5LGdlbmRlcixhZ2UpKSkpLHBhdGllbnQ6KHV1aWQsaWRlbnRpZmllcnM6KGlkZW50aWZpZXIsaWRlbnRpZmllclR5cGU6KG5hbWUsdXVpZCxkaXNwbGF5KSksYXR0cmlidXRlcyxwZXJzb246KGRpc3BsYXksZ2VuZGVyLGFnZSkpLGF0dHJpYnV0ZXMpXCJcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVVJMfS92aXNpdC8ke3V1aWR9P3Y9JHt2fWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXQgcGF0aWVudCBkZXRhaWxzXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBQYXRpZW50IHV1aWRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB2IC0gcmVzcG9uc2UgZm9ybWF0XHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICBwYXRpZW50SW5mbyhpZDpzdHJpbmcsIHYgPSAnY3VzdG9tOih1dWlkLGF0dHJpYnV0ZXMsaWRlbnRpZmllcnMscGVyc29uOih1dWlkLGRpc3BsYXksZ2VuZGVyLHByZWZlcnJlZE5hbWU6KGdpdmVuTmFtZSxmYW1pbHlOYW1lLG1pZGRsZU5hbWUpLGJpcnRoZGF0ZSxhZ2UscHJlZmVycmVkQWRkcmVzczooY2l0eVZpbGxhZ2UsYWRkcmVzczEsYWRkcmVzczIsYWRkcmVzczMsYWRkcmVzczYsY291bnRyeSxzdGF0ZVByb3ZpbmNlLGNvdW50eURpc3RyaWN0LHBvc3RhbENvZGUpLGF0dHJpYnV0ZXM6KHZhbHVlLGF0dHJpYnV0ZVR5cGU6KGRpc3BsYXkpKSkpJyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVVJMfS9wYXRpZW50LyR7aWR9P3Y9JHt2fWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBQYXJzZSBvYnNlcnZhdGlvbiBkYXRhXHJcbiAgKiBAcGFyYW0ge2FueX0gZGF0YSAtIE9ic2VydmF0aW9uIGRhdGFcclxuICAqIEByZXR1cm4ge2FueX0gLSBPYnNlcnZhdGlvbiBkYXRhIHdpdGggcGFyc2VkIHZhbHVlXHJcbiAgKi9cclxuICBnZXREYXRhKGRhdGE6IGFueSkge1xyXG4gICAgaWYgKGRhdGE/LnZhbHVlLnRvU3RyaW5nKCkuc3RhcnRzV2l0aChcIntcIikpIHtcclxuICAgICAgbGV0IHZhbHVlID0gSlNPTi5wYXJzZShkYXRhLnZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICBkYXRhLnZhbHVlID0gdmFsdWVbXCJlblwiXTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBPcGVuIHZpZXcgdmlzaXQgcHJlc2NyaXB0aW9uIG1vZGFsXHJcbiAgKiBAcGFyYW0ge3sgdXVpZDogc3RyaW5nIH19IGRhdGEgLSBEaWFsb2cgZGF0YVxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSAtIERpYWxvZyByZXN1bHRcclxuICAqL1xyXG4gIG9wZW5WaXNpdFByZXNjcmlwdGlvbk1vZGFsKGRhdGE6IHsgdXVpZDogc3RyaW5nIH0pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihMaWJQcmVzY2lwdGlvbkNvbXBvbmVudCwgeyBwYW5lbENsYXNzOiAnbW9kYWwtbGcnLCBkYXRhLCBoYXNCYWNrZHJvcDogdHJ1ZSwgZGlzYWJsZUNsb3NlOiB0cnVlIH0pO1xyXG4gICAgcmV0dXJuIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBSZXR1cm4gTUlNRSB0eXBlIGZvciBnaXZlIGJhc2U2NCBzdHJpbmdcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBiNjQgLSBCYXNlNjQgc3RyaW5nXHJcbiAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gTUlNRSB0eXBlXHJcbiAgKi9cclxuICBkZXRlY3RNaW1lVHlwZShiNjQ6IHN0cmluZykge1xyXG4gICAgZm9yIChjb25zdCBzIGluIHRoaXMubWltZVR5cGVzKSB7XHJcbiAgICAgIGlmIChiNjQuc3RhcnRzV2l0aChzKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbWVUeXBlc1tzXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXQgb2JzZXJ2YXRpb25zIGZvciBhIGdpdmVuIGNvbmNlcHQgaWQgYW5kIHBhdGllbnQgaWRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRpZW50SWQgLSBQYXRpZW50IHV1aWRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBjb25jZXB0SWQgLSBDb25jZXB0IHV1aWRcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIGdldE9icyhwYXRpZW50SWQ6IHN0cmluZywgY29uY2VwdElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVSTH0vb2JzP3BhdGllbnQ9JHtwYXRpZW50SWR9JnY9Y3VzdG9tOih1dWlkLGNvbW1lbnQsdmFsdWUsZW5jb3VudGVyOih2aXNpdDoodXVpZCkpKSZjb25jZXB0PSR7Y29uY2VwdElkfWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gIH1cclxufVxyXG4iXX0=