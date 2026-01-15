import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from '@angular/material/dialog';
import { LibPresciptionComponent } from "./lib-presciption.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/material/dialog";
export class LibPresciptionService {
    constructor(http, dialog, environment) {
        this.http = http;
        this.dialog = dialog;
        this.mimeTypes = {
            JVBERi0: 'application/pdf',
            R0lGODdh: 'image/gif',
            R0lGODlh: 'image/gif',
            iVBORw0KGgo: 'image/png',
            '/9j/': 'image/jpg'
        };
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
}
LibPresciptionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: LibPresciptionService, deps: [{ token: i1.HttpClient }, { token: i2.MatDialog }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
LibPresciptionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: LibPresciptionService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: LibPresciptionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.MatDialog }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXByZXNjaXB0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWItcHJlc2NpcHRpb24vc3JjL2xpYi9saWItcHJlc2NpcHRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFNBQVMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBS3RFLE1BQU0sT0FBTyxxQkFBcUI7SUFZaEMsWUFDVSxJQUFnQixFQUNoQixNQUFpQixFQUNGLFdBQVc7UUFGMUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBWDNCLGNBQVMsR0FBUTtZQUNmLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsTUFBTSxFQUFFLFdBQVc7U0FDcEIsQ0FBQztRQVFBLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQTtJQUNyQyxDQUFDO0lBQ0QsaUJBQWlCLENBQ2YsSUFBVyxFQUNYLENBQUMsR0FBRywyWkFBMlo7UUFFL1osMkNBQTJDO1FBQzNDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRixXQUFXLENBQUMsRUFBUyxFQUFFLENBQUMsR0FBRywrUkFBK1I7UUFDeFQsNENBQTRDO1FBQzVDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sWUFBWSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLE9BQU8sQ0FBQyxJQUFTO1FBQ2YsSUFBSSxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMxQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O01BSUU7SUFDRiwwQkFBMEIsQ0FBQyxJQUFzQjtRQUMvQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckksT0FBTyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7O01BSUU7SUFDRixjQUFjLENBQUMsR0FBVztRQUN4QixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7SUFFRDs7Ozs7TUFLRTtJQUNGLE1BQU0sQ0FBQyxTQUFpQixFQUFFLFNBQWlCO1FBQ3pDLDRDQUE0QztRQUM1QyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLGdCQUFnQixTQUFTLG1FQUFtRSxTQUFTLEVBQUUsQ0FBQztRQUNuSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2tIQXRGVSxxQkFBcUIscUVBZXRCLGFBQWE7c0hBZloscUJBQXFCLGNBRnBCLE1BQU07MkZBRVAscUJBQXFCO2tCQUhqQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBZ0JJLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBNYXREaWFsb2d9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IExpYlByZXNjaXB0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vbGliLXByZXNjaXB0aW9uLmNvbXBvbmVudFwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGliUHJlc2NpcHRpb25TZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBiYXNlVVJMO1xyXG4gIG1pbWVUeXBlczogYW55ID0ge1xyXG4gICAgSlZCRVJpMDogJ2FwcGxpY2F0aW9uL3BkZicsXHJcbiAgICBSMGxHT0RkaDogJ2ltYWdlL2dpZicsXHJcbiAgICBSMGxHT0RsaDogJ2ltYWdlL2dpZicsXHJcbiAgICBpVkJPUncwS0dnbzogJ2ltYWdlL3BuZycsXHJcbiAgICAnLzlqLyc6ICdpbWFnZS9qcGcnXHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgZW52aXJvbm1lbnRcclxuICApIHsgXHJcbiAgICB0aGlzLmJhc2VVUkwgPSBlbnZpcm9ubWVudC5CQVNFX1VSTFxyXG4gIH1cclxuICBmZXRjaFZpc2l0RGV0YWlscyhcclxuICAgIHV1aWQ6c3RyaW5nLFxyXG4gICAgdiA9IFwiY3VzdG9tOihsb2NhdGlvbjooZGlzcGxheSksdXVpZCxkaXNwbGF5LHN0YXJ0RGF0ZXRpbWUsZGF0ZUNyZWF0ZWQsc3RvcERhdGV0aW1lLGVuY291bnRlcnM6KGRpc3BsYXksdXVpZCxlbmNvdW50ZXJEYXRldGltZSxlbmNvdW50ZXJUeXBlOihkaXNwbGF5KSxvYnM6KGRpc3BsYXksdXVpZCx2YWx1ZSxjb25jZXB0Oih1dWlkLGRpc3BsYXkpKSxlbmNvdW50ZXJQcm92aWRlcnM6KGRpc3BsYXkscHJvdmlkZXI6KHV1aWQsYXR0cmlidXRlcyxwZXJzb246KHV1aWQsZGlzcGxheSxnZW5kZXIsYWdlKSkpKSxwYXRpZW50Oih1dWlkLGlkZW50aWZpZXJzOihpZGVudGlmaWVyLGlkZW50aWZpZXJUeXBlOihuYW1lLHV1aWQsZGlzcGxheSkpLGF0dHJpYnV0ZXMscGVyc29uOihkaXNwbGF5LGdlbmRlcixhZ2UpKSxhdHRyaWJ1dGVzKVwiXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVSTH0vdmlzaXQvJHt1dWlkfT92PSR7dn1gO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogR2V0IHBhdGllbnQgZGV0YWlsc1xyXG4gICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gUGF0aWVudCB1dWlkXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gdiAtIHJlc3BvbnNlIGZvcm1hdFxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgcGF0aWVudEluZm8oaWQ6c3RyaW5nLCB2ID0gJ2N1c3RvbToodXVpZCxhdHRyaWJ1dGVzLGlkZW50aWZpZXJzLHBlcnNvbjoodXVpZCxkaXNwbGF5LGdlbmRlcixwcmVmZXJyZWROYW1lOihnaXZlbk5hbWUsZmFtaWx5TmFtZSxtaWRkbGVOYW1lKSxiaXJ0aGRhdGUsYWdlLHByZWZlcnJlZEFkZHJlc3M6KGNpdHlWaWxsYWdlLGFkZHJlc3MxLGFkZHJlc3MyLGFkZHJlc3MzLGFkZHJlc3M2LGNvdW50cnksc3RhdGVQcm92aW5jZSxjb3VudHlEaXN0cmljdCxwb3N0YWxDb2RlKSxhdHRyaWJ1dGVzOih2YWx1ZSxhdHRyaWJ1dGVUeXBlOihkaXNwbGF5KSkpKScpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVSTH0vcGF0aWVudC8ke2lkfT92PSR7dn1gO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogUGFyc2Ugb2JzZXJ2YXRpb24gZGF0YVxyXG4gICogQHBhcmFtIHthbnl9IGRhdGEgLSBPYnNlcnZhdGlvbiBkYXRhXHJcbiAgKiBAcmV0dXJuIHthbnl9IC0gT2JzZXJ2YXRpb24gZGF0YSB3aXRoIHBhcnNlZCB2YWx1ZVxyXG4gICovXHJcbiAgZ2V0RGF0YShkYXRhOiBhbnkpIHtcclxuICAgIGlmIChkYXRhPy52YWx1ZS50b1N0cmluZygpLnN0YXJ0c1dpdGgoXCJ7XCIpKSB7XHJcbiAgICAgIGxldCB2YWx1ZSA9IEpTT04ucGFyc2UoZGF0YS52YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgZGF0YS52YWx1ZSA9IHZhbHVlW1wiZW5cIl07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogT3BlbiB2aWV3IHZpc2l0IHByZXNjcmlwdGlvbiBtb2RhbFxyXG4gICogQHBhcmFtIHt7IHV1aWQ6IHN0cmluZyB9fSBkYXRhIC0gRGlhbG9nIGRhdGFcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gLSBEaWFsb2cgcmVzdWx0XHJcbiAgKi9cclxuICBvcGVuVmlzaXRQcmVzY3JpcHRpb25Nb2RhbChkYXRhOiB7IHV1aWQ6IHN0cmluZyB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTGliUHJlc2NpcHRpb25Db21wb25lbnQsIHsgcGFuZWxDbGFzczogJ21vZGFsLWxnJywgZGF0YSwgaGFzQmFja2Ryb3A6IHRydWUsIGRpc2FibGVDbG9zZTogdHJ1ZSB9KTtcclxuICAgIHJldHVybiBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogUmV0dXJuIE1JTUUgdHlwZSBmb3IgZ2l2ZSBiYXNlNjQgc3RyaW5nXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gYjY0IC0gQmFzZTY0IHN0cmluZ1xyXG4gICogQHJldHVybiB7c3RyaW5nfSAtIE1JTUUgdHlwZVxyXG4gICovXHJcbiAgZGV0ZWN0TWltZVR5cGUoYjY0OiBzdHJpbmcpIHtcclxuICAgIGZvciAoY29uc3QgcyBpbiB0aGlzLm1pbWVUeXBlcykge1xyXG4gICAgICBpZiAoYjY0LnN0YXJ0c1dpdGgocykpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5taW1lVHlwZXNbc107XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogR2V0IG9ic2VydmF0aW9ucyBmb3IgYSBnaXZlbiBjb25jZXB0IGlkIGFuZCBwYXRpZW50IGlkXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aWVudElkIC0gUGF0aWVudCB1dWlkXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gY29uY2VwdElkIC0gQ29uY2VwdCB1dWlkXHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICBnZXRPYnMocGF0aWVudElkOiBzdHJpbmcsIGNvbmNlcHRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVUkx9L29icz9wYXRpZW50PSR7cGF0aWVudElkfSZ2PWN1c3RvbToodXVpZCxjb21tZW50LHZhbHVlLGVuY291bnRlcjoodmlzaXQ6KHV1aWQpKSkmY29uY2VwdD0ke2NvbmNlcHRJZH1gO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcclxuICB9XHJcbn1cclxuIl19