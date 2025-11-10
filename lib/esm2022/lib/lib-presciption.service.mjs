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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXByZXNjaXB0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWItcHJlc2NpcHRpb24vc3JjL2xpYi9saWItcHJlc2NpcHRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFNBQVMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBS3RFLE1BQU0sT0FBTyxxQkFBcUI7SUFhdEI7SUFDQTtJQVpGLE9BQU8sQ0FBQztJQUNoQixTQUFTLEdBQVE7UUFDZixPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLE1BQU0sRUFBRSxXQUFXO0tBQ3BCLENBQUM7SUFHRixZQUNVLElBQWdCLEVBQ2hCLE1BQWlCLEVBQ0YsV0FBVztRQUYxQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFHekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFBO0lBQ3JDLENBQUM7SUFDRCxpQkFBaUIsQ0FDZixJQUFXLEVBQ1gsQ0FBQyxHQUFHLDJaQUEyWjtRQUUvWiwyQ0FBMkM7UUFDM0MsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxVQUFVLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7TUFLRTtJQUNGLFdBQVcsQ0FBQyxFQUFTLEVBQUUsQ0FBQyxHQUFHLCtSQUErUjtRQUN4VCw0Q0FBNEM7UUFDNUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxZQUFZLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztNQUlFO0lBQ0YsT0FBTyxDQUFDLElBQVM7UUFDZixJQUFJLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLDBCQUEwQixDQUFDLElBQXNCO1FBQy9DLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNySSxPQUFPLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLGNBQWMsQ0FBQyxHQUFXO1FBQ3hCLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM5QixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQjtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7OztNQUtFO0lBQ0YsTUFBTSxDQUFDLFNBQWlCLEVBQUUsU0FBaUI7UUFDekMsNENBQTRDO1FBQzVDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sZ0JBQWdCLFNBQVMsbUVBQW1FLFNBQVMsRUFBRSxDQUFDO1FBQ25JLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQzt1R0F0RlUscUJBQXFCLHFFQWV0QixhQUFhOzJHQWZaLHFCQUFxQixjQUZwQixNQUFNOzsyRkFFUCxxQkFBcUI7a0JBSGpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFnQkksTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IE1hdERpYWxvZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTGliUHJlc2NpcHRpb25Db21wb25lbnQgfSBmcm9tIFwiLi9saWItcHJlc2NpcHRpb24uY29tcG9uZW50XCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJQcmVzY2lwdGlvblNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIGJhc2VVUkw7XHJcbiAgbWltZVR5cGVzOiBhbnkgPSB7XHJcbiAgICBKVkJFUmkwOiAnYXBwbGljYXRpb24vcGRmJyxcclxuICAgIFIwbEdPRGRoOiAnaW1hZ2UvZ2lmJyxcclxuICAgIFIwbEdPRGxoOiAnaW1hZ2UvZ2lmJyxcclxuICAgIGlWQk9SdzBLR2dvOiAnaW1hZ2UvcG5nJyxcclxuICAgICcvOWovJzogJ2ltYWdlL2pwZydcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgQEluamVjdCgnZW52aXJvbm1lbnQnKSBlbnZpcm9ubWVudFxyXG4gICkgeyBcclxuICAgIHRoaXMuYmFzZVVSTCA9IGVudmlyb25tZW50LkJBU0VfVVJMXHJcbiAgfVxyXG4gIGZldGNoVmlzaXREZXRhaWxzKFxyXG4gICAgdXVpZDpzdHJpbmcsXHJcbiAgICB2ID0gXCJjdXN0b206KGxvY2F0aW9uOihkaXNwbGF5KSx1dWlkLGRpc3BsYXksc3RhcnREYXRldGltZSxkYXRlQ3JlYXRlZCxzdG9wRGF0ZXRpbWUsZW5jb3VudGVyczooZGlzcGxheSx1dWlkLGVuY291bnRlckRhdGV0aW1lLGVuY291bnRlclR5cGU6KGRpc3BsYXkpLG9iczooZGlzcGxheSx1dWlkLHZhbHVlLGNvbmNlcHQ6KHV1aWQsZGlzcGxheSkpLGVuY291bnRlclByb3ZpZGVyczooZGlzcGxheSxwcm92aWRlcjoodXVpZCxhdHRyaWJ1dGVzLHBlcnNvbjoodXVpZCxkaXNwbGF5LGdlbmRlcixhZ2UpKSkpLHBhdGllbnQ6KHV1aWQsaWRlbnRpZmllcnM6KGlkZW50aWZpZXIsaWRlbnRpZmllclR5cGU6KG5hbWUsdXVpZCxkaXNwbGF5KSksYXR0cmlidXRlcyxwZXJzb246KGRpc3BsYXksZ2VuZGVyLGFnZSkpLGF0dHJpYnV0ZXMpXCJcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVVJMfS92aXNpdC8ke3V1aWR9P3Y9JHt2fWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXQgcGF0aWVudCBkZXRhaWxzXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBQYXRpZW50IHV1aWRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB2IC0gcmVzcG9uc2UgZm9ybWF0XHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICBwYXRpZW50SW5mbyhpZDpzdHJpbmcsIHYgPSAnY3VzdG9tOih1dWlkLGF0dHJpYnV0ZXMsaWRlbnRpZmllcnMscGVyc29uOih1dWlkLGRpc3BsYXksZ2VuZGVyLHByZWZlcnJlZE5hbWU6KGdpdmVuTmFtZSxmYW1pbHlOYW1lLG1pZGRsZU5hbWUpLGJpcnRoZGF0ZSxhZ2UscHJlZmVycmVkQWRkcmVzczooY2l0eVZpbGxhZ2UsYWRkcmVzczEsYWRkcmVzczIsYWRkcmVzczMsYWRkcmVzczYsY291bnRyeSxzdGF0ZVByb3ZpbmNlLGNvdW50eURpc3RyaWN0LHBvc3RhbENvZGUpLGF0dHJpYnV0ZXM6KHZhbHVlLGF0dHJpYnV0ZVR5cGU6KGRpc3BsYXkpKSkpJyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVVJMfS9wYXRpZW50LyR7aWR9P3Y9JHt2fWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBQYXJzZSBvYnNlcnZhdGlvbiBkYXRhXHJcbiAgKiBAcGFyYW0ge2FueX0gZGF0YSAtIE9ic2VydmF0aW9uIGRhdGFcclxuICAqIEByZXR1cm4ge2FueX0gLSBPYnNlcnZhdGlvbiBkYXRhIHdpdGggcGFyc2VkIHZhbHVlXHJcbiAgKi9cclxuICBnZXREYXRhKGRhdGE6IGFueSkge1xyXG4gICAgaWYgKGRhdGE/LnZhbHVlLnRvU3RyaW5nKCkuc3RhcnRzV2l0aChcIntcIikpIHtcclxuICAgICAgbGV0IHZhbHVlID0gSlNPTi5wYXJzZShkYXRhLnZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICBkYXRhLnZhbHVlID0gdmFsdWVbXCJlblwiXTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBPcGVuIHZpZXcgdmlzaXQgcHJlc2NyaXB0aW9uIG1vZGFsXHJcbiAgKiBAcGFyYW0ge3sgdXVpZDogc3RyaW5nIH19IGRhdGEgLSBEaWFsb2cgZGF0YVxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSAtIERpYWxvZyByZXN1bHRcclxuICAqL1xyXG4gIG9wZW5WaXNpdFByZXNjcmlwdGlvbk1vZGFsKGRhdGE6IHsgdXVpZDogc3RyaW5nIH0pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihMaWJQcmVzY2lwdGlvbkNvbXBvbmVudCwgeyBwYW5lbENsYXNzOiAnbW9kYWwtbGcnLCBkYXRhLCBoYXNCYWNrZHJvcDogdHJ1ZSwgZGlzYWJsZUNsb3NlOiB0cnVlIH0pO1xyXG4gICAgcmV0dXJuIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBSZXR1cm4gTUlNRSB0eXBlIGZvciBnaXZlIGJhc2U2NCBzdHJpbmdcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBiNjQgLSBCYXNlNjQgc3RyaW5nXHJcbiAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gTUlNRSB0eXBlXHJcbiAgKi9cclxuICBkZXRlY3RNaW1lVHlwZShiNjQ6IHN0cmluZykge1xyXG4gICAgZm9yIChjb25zdCBzIGluIHRoaXMubWltZVR5cGVzKSB7XHJcbiAgICAgIGlmIChiNjQuc3RhcnRzV2l0aChzKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbWVUeXBlc1tzXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXQgb2JzZXJ2YXRpb25zIGZvciBhIGdpdmVuIGNvbmNlcHQgaWQgYW5kIHBhdGllbnQgaWRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRpZW50SWQgLSBQYXRpZW50IHV1aWRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBjb25jZXB0SWQgLSBDb25jZXB0IHV1aWRcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIGdldE9icyhwYXRpZW50SWQ6IHN0cmluZywgY29uY2VwdElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVSTH0vb2JzP3BhdGllbnQ9JHtwYXRpZW50SWR9JnY9Y3VzdG9tOih1dWlkLGNvbW1lbnQsdmFsdWUsZW5jb3VudGVyOih2aXNpdDoodXVpZCkpKSZjb25jZXB0PSR7Y29uY2VwdElkfWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gIH1cclxufVxyXG4iXX0=