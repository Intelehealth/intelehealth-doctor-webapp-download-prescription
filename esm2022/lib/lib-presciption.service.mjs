import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXByZXNjaXB0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWItcHJlc2NpcHRpb24vc3JjL2xpYi9saWItcHJlc2NpcHRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFNBQVMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBS3RFLE1BQU0sT0FBTyxxQkFBcUI7SUFhdEI7SUFDQTtJQVpGLE9BQU8sQ0FBQztJQUNoQixTQUFTLEdBQVE7UUFDZixPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLE1BQU0sRUFBRSxXQUFXO0tBQ3BCLENBQUM7SUFHRixZQUNVLElBQWdCLEVBQ2hCLE1BQWlCLEVBQ0YsV0FBVztRQUYxQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFHekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFBO0lBQ3JDLENBQUM7SUFDRCxpQkFBaUIsQ0FDZixJQUFXLEVBQ1gsQ0FBQyxHQUFHLDJaQUEyWjtRQUUvWiwyQ0FBMkM7UUFDM0MsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7TUFLRTtJQUNGLFdBQVcsQ0FBQyxFQUFTLEVBQUUsQ0FBQyxHQUFHLCtSQUErUjtRQUN4VCw0Q0FBNEM7UUFDNUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxZQUFZLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztNQUlFO0lBQ0YsT0FBTyxDQUFDLElBQVM7UUFDZixJQUFJLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLDBCQUEwQixDQUFDLElBQXNCO1FBQy9DLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNySSxPQUFPLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLGNBQWMsQ0FBQyxHQUFXO1FBQ3hCLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM5QixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQjtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7OztNQUtFO0lBQ0YsTUFBTSxDQUFDLFNBQWlCLEVBQUUsU0FBaUI7UUFDekMsNENBQTRDO1FBQzVDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sZ0JBQWdCLFNBQVMsbUVBQW1FLFNBQVMsRUFBRSxDQUFDO1FBQ25JLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQzt1R0F0RlUscUJBQXFCLHFFQWV0QixhQUFhOzJHQWZaLHFCQUFxQixjQUZwQixNQUFNOzsyRkFFUCxxQkFBcUI7a0JBSGpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFnQkksTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IE1hdERpYWxvZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IExpYlByZXNjaXB0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vbGliLXByZXNjaXB0aW9uLmNvbXBvbmVudFwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBMaWJQcmVzY2lwdGlvblNlcnZpY2Uge1xuXG4gIHByaXZhdGUgYmFzZVVSTDtcbiAgbWltZVR5cGVzOiBhbnkgPSB7XG4gICAgSlZCRVJpMDogJ2FwcGxpY2F0aW9uL3BkZicsXG4gICAgUjBsR09EZGg6ICdpbWFnZS9naWYnLFxuICAgIFIwbEdPRGxoOiAnaW1hZ2UvZ2lmJyxcbiAgICBpVkJPUncwS0dnbzogJ2ltYWdlL3BuZycsXG4gICAgJy85ai8nOiAnaW1hZ2UvanBnJ1xuICB9O1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgQEluamVjdCgnZW52aXJvbm1lbnQnKSBlbnZpcm9ubWVudFxuICApIHsgXG4gICAgdGhpcy5iYXNlVVJMID0gZW52aXJvbm1lbnQuQkFTRV9VUkxcbiAgfVxuICBmZXRjaFZpc2l0RGV0YWlscyhcbiAgICB1dWlkOnN0cmluZyxcbiAgICB2ID0gXCJjdXN0b206KGxvY2F0aW9uOihkaXNwbGF5KSx1dWlkLGRpc3BsYXksc3RhcnREYXRldGltZSxkYXRlQ3JlYXRlZCxzdG9wRGF0ZXRpbWUsZW5jb3VudGVyczooZGlzcGxheSx1dWlkLGVuY291bnRlckRhdGV0aW1lLGVuY291bnRlclR5cGU6KGRpc3BsYXkpLG9iczooZGlzcGxheSx1dWlkLHZhbHVlLGNvbmNlcHQ6KHV1aWQsZGlzcGxheSkpLGVuY291bnRlclByb3ZpZGVyczooZGlzcGxheSxwcm92aWRlcjoodXVpZCxhdHRyaWJ1dGVzLHBlcnNvbjoodXVpZCxkaXNwbGF5LGdlbmRlcixhZ2UpKSkpLHBhdGllbnQ6KHV1aWQsaWRlbnRpZmllcnM6KGlkZW50aWZpZXIsaWRlbnRpZmllclR5cGU6KG5hbWUsdXVpZCxkaXNwbGF5KSksYXR0cmlidXRlcyxwZXJzb246KGRpc3BsYXksZ2VuZGVyLGFnZSkpLGF0dHJpYnV0ZXMpXCJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVVJMfS92aXNpdC8ke3V1aWR9P3Y9JHt2fWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcbiAgfVxuXG4gIC8qKlxuICAqIEdldCBwYXRpZW50IGRldGFpbHNcbiAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBQYXRpZW50IHV1aWRcbiAgKiBAcGFyYW0ge3N0cmluZ30gdiAtIHJlc3BvbnNlIGZvcm1hdFxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgKi9cbiAgcGF0aWVudEluZm8oaWQ6c3RyaW5nLCB2ID0gJ2N1c3RvbToodXVpZCxhdHRyaWJ1dGVzLGlkZW50aWZpZXJzLHBlcnNvbjoodXVpZCxkaXNwbGF5LGdlbmRlcixwcmVmZXJyZWROYW1lOihnaXZlbk5hbWUsZmFtaWx5TmFtZSxtaWRkbGVOYW1lKSxiaXJ0aGRhdGUsYWdlLHByZWZlcnJlZEFkZHJlc3M6KGNpdHlWaWxsYWdlLGFkZHJlc3MxLGFkZHJlc3MyLGFkZHJlc3MzLGFkZHJlc3M2LGNvdW50cnksc3RhdGVQcm92aW5jZSxjb3VudHlEaXN0cmljdCxwb3N0YWxDb2RlKSxhdHRyaWJ1dGVzOih2YWx1ZSxhdHRyaWJ1dGVUeXBlOihkaXNwbGF5KSkpKScpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVVJMfS9wYXRpZW50LyR7aWR9P3Y9JHt2fWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcbiAgfVxuXG4gIC8qKlxuICAqIFBhcnNlIG9ic2VydmF0aW9uIGRhdGFcbiAgKiBAcGFyYW0ge2FueX0gZGF0YSAtIE9ic2VydmF0aW9uIGRhdGFcbiAgKiBAcmV0dXJuIHthbnl9IC0gT2JzZXJ2YXRpb24gZGF0YSB3aXRoIHBhcnNlZCB2YWx1ZVxuICAqL1xuICBnZXREYXRhKGRhdGE6IGFueSkge1xuICAgIGlmIChkYXRhPy52YWx1ZS50b1N0cmluZygpLnN0YXJ0c1dpdGgoXCJ7XCIpKSB7XG4gICAgICBsZXQgdmFsdWUgPSBKU09OLnBhcnNlKGRhdGEudmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICBkYXRhLnZhbHVlID0gdmFsdWVbXCJlblwiXTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgKiBPcGVuIHZpZXcgdmlzaXQgcHJlc2NyaXB0aW9uIG1vZGFsXG4gICogQHBhcmFtIHt7IHV1aWQ6IHN0cmluZyB9fSBkYXRhIC0gRGlhbG9nIGRhdGFcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IC0gRGlhbG9nIHJlc3VsdFxuICAqL1xuICBvcGVuVmlzaXRQcmVzY3JpcHRpb25Nb2RhbChkYXRhOiB7IHV1aWQ6IHN0cmluZyB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKExpYlByZXNjaXB0aW9uQ29tcG9uZW50LCB7IHBhbmVsQ2xhc3M6ICdtb2RhbC1sZycsIGRhdGEsIGhhc0JhY2tkcm9wOiB0cnVlLCBkaXNhYmxlQ2xvc2U6IHRydWUgfSk7XG4gICAgcmV0dXJuIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpO1xuICB9XG5cbiAgLyoqXG4gICogUmV0dXJuIE1JTUUgdHlwZSBmb3IgZ2l2ZSBiYXNlNjQgc3RyaW5nXG4gICogQHBhcmFtIHtzdHJpbmd9IGI2NCAtIEJhc2U2NCBzdHJpbmdcbiAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gTUlNRSB0eXBlXG4gICovXG4gIGRldGVjdE1pbWVUeXBlKGI2NDogc3RyaW5nKSB7XG4gICAgZm9yIChjb25zdCBzIGluIHRoaXMubWltZVR5cGVzKSB7XG4gICAgICBpZiAoYjY0LnN0YXJ0c1dpdGgocykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWltZVR5cGVzW3NdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAqIEdldCBvYnNlcnZhdGlvbnMgZm9yIGEgZ2l2ZW4gY29uY2VwdCBpZCBhbmQgcGF0aWVudCBpZFxuICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRpZW50SWQgLSBQYXRpZW50IHV1aWRcbiAgKiBAcGFyYW0ge3N0cmluZ30gY29uY2VwdElkIC0gQ29uY2VwdCB1dWlkXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAqL1xuICBnZXRPYnMocGF0aWVudElkOiBzdHJpbmcsIGNvbmNlcHRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVSTH0vb2JzP3BhdGllbnQ9JHtwYXRpZW50SWR9JnY9Y3VzdG9tOih1dWlkLGNvbW1lbnQsdmFsdWUsZW5jb3VudGVyOih2aXNpdDoodXVpZCkpKSZjb25jZXB0PSR7Y29uY2VwdElkfWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcbiAgfVxufVxuIl19