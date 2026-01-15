import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ProfileService {
    constructor(http) {
        this.http = http;
        // base = "https://dev.intelehealth.org"
        // baseURL = "https://dev.intelehealth.org/openmrs/ws/rest/v1"
        this.mimeTypes = {
            JVBERi0: 'application/pdf',
            R0lGODdh: 'image/gif',
            R0lGODlh: 'image/gif',
            iVBORw0KGgo: 'image/png',
            '/9j/': 'image/jpg'
        };
        this.profilePic = new Subject();
        this.profilePicUpdateEvent = this.profilePic.asObservable();
    }
    /**
    * Add/update provider attribute
    * @param {string} uuid - Provider uuid
    * @param {string} attributeTypeUuid - Provider attribute type uuid
    * @param {boolean} isExistingPresent - Record for provider attribute type already exists true/false
    * @param {boolean} existingUuid - Existing provider attribute record uuid
    * @return {Observable<any>}
    */
    updateProviderAttribute(baseURL, uuid, attributeTypeUuid, attributeValue, isExistingPresent, existingUuid) {
        const URL = isExistingPresent ? `${baseURL}/provider/${uuid}/attribute/${existingUuid}`
            : `${baseURL}/provider/${uuid}/attribute`;
        const json = {
            attributeType: attributeTypeUuid,
            value: attributeValue,
            voided: false
        };
        return this.http.post(URL, json);
    }
    /**
    * Add/update person image
    * @param {Object} json - Payload to upload person image
    * @return {Observable<any>}
    */
    updateProfileImage(baseURL, json) {
        const URL = `${baseURL}/personimage`;
        const header = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
        };
        return this.http.post(URL, json, header);
    }
    /**
    * Create signature
    * @param {string} providerId - Provider uuid
    * @param {string} textOfSign - Signature text
    * @param {string} fontName - Font name to be used
    * @return {Observable<any>}
    */
    creatSignature(base, providerId, textOfSign, fontName) {
        const URL = `${base}/createsign`;
        const json = {
            textOfSign: textOfSign,
            fontName: fontName,
            providerId: providerId
        };
        return this.http.post(URL, json);
    }
    /**
    * Update signature
    * @param {File} file - Signature file
    * @param {string} providerId - Provider uuid
    * @return {Observable<any>}
    */
    updateSignature(base, file, providerId) {
        const URL = `${base}/uploadsign`;
        const json = {
            file: file,
            providerid: providerId
        };
        return this.http.post(URL, json);
    }
    /**
    * Delete provider attribute
    * @param {string} uuid - Provider uuid
    * @param {string} existingUuid - Provider attribute uuid
    * @return {Observable<any>}
    */
    deleteProviderAttribute(baseURL, uuid, existingUuid) {
        const URL = `${baseURL}/provider/${uuid}/attribute/${existingUuid}`;
        return this.http.delete(URL);
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
    * Set profile picture
    * @param {string} imageBase64 - Base64
    * @return {void}
    */
    setProfilePic(imageBase64) {
        this.profilePic.next(imageBase64);
    }
}
ProfileService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ProfileService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
ProfileService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ProfileService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ProfileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGliLXByZXNjaXB0aW9uL3NyYy9saWIvc2VydmljZXMvcHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBSzNDLE1BQU0sT0FBTyxjQUFjO0lBZXpCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFkcEMsd0NBQXdDO1FBQ3hDLDhEQUE4RDtRQUU5RCxjQUFTLEdBQUc7WUFDVixPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLE1BQU0sRUFBRSxXQUFXO1NBQ3BCLENBQUM7UUFFTSxlQUFVLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7UUFDNUQsMEJBQXFCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUVmLENBQUM7SUFFekM7Ozs7Ozs7TUFPRTtJQUNGLHVCQUF1QixDQUFDLE9BQWUsRUFBQyxJQUFZLEVBQUUsaUJBQXlCLEVBQUUsY0FBc0IsRUFBRSxpQkFBMEIsRUFBRSxZQUFvQjtRQUN2SixNQUFNLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLGFBQWEsSUFBSSxjQUFjLFlBQVksRUFBRTtZQUNyRixDQUFDLENBQUMsR0FBRyxPQUFPLGFBQWEsSUFBSSxZQUFZLENBQUM7UUFDNUMsTUFBTSxJQUFJLEdBQUc7WUFDWCxhQUFhLEVBQUUsaUJBQWlCO1lBQ2hDLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE1BQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7OztNQUlFO0lBQ0Ysa0JBQWtCLENBQUMsT0FBYyxFQUFDLElBQVk7UUFDNUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxPQUFPLGNBQWMsQ0FBQztRQUNyQyxNQUFNLE1BQU0sR0FBRztZQUNiLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjthQUNuQyxDQUFDO1NBQ0gsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7Ozs7OztNQU1FO0lBQ0YsY0FBYyxDQUFDLElBQVcsRUFBQyxVQUFrQixFQUFFLFVBQWtCLEVBQUUsUUFBZ0I7UUFDakYsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLGFBQWEsQ0FBQztRQUNqQyxNQUFNLElBQUksR0FBRztZQUNYLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFVBQVUsRUFBRSxVQUFVO1NBQ3ZCLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRixlQUFlLENBQUMsSUFBVyxFQUFDLElBQUksRUFBRSxVQUFrQjtRQUNsRCxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksYUFBYSxDQUFDO1FBQ2pDLE1BQU0sSUFBSSxHQUFHO1lBQ1gsSUFBSSxFQUFFLElBQUk7WUFDVixVQUFVLEVBQUUsVUFBVTtTQUN2QixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7OztNQUtFO0lBQ0YsdUJBQXVCLENBQUMsT0FBYyxFQUFDLElBQVksRUFBRSxZQUFvQjtRQUN2RSxNQUFNLEdBQUcsR0FBRyxHQUFHLE9BQU8sYUFBYSxJQUFJLGNBQWMsWUFBWSxFQUFFLENBQUM7UUFDcEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLGNBQWMsQ0FBQyxHQUFXO1FBQ3hCLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM5QixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQjtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7O01BSUU7SUFDRixhQUFhLENBQUMsV0FBVztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQyxDQUFDOzsyR0FsSFUsY0FBYzsrR0FBZCxjQUFjLGNBRmIsTUFBTTsyRkFFUCxjQUFjO2tCQUgxQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbi8vIGltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTZXJ2aWNlIHtcclxuICAvLyBiYXNlID0gXCJodHRwczovL2Rldi5pbnRlbGVoZWFsdGgub3JnXCJcclxuICAvLyBiYXNlVVJMID0gXCJodHRwczovL2Rldi5pbnRlbGVoZWFsdGgub3JnL29wZW5tcnMvd3MvcmVzdC92MVwiXHJcblxyXG4gIG1pbWVUeXBlcyA9IHtcclxuICAgIEpWQkVSaTA6ICdhcHBsaWNhdGlvbi9wZGYnLFxyXG4gICAgUjBsR09EZGg6ICdpbWFnZS9naWYnLFxyXG4gICAgUjBsR09EbGg6ICdpbWFnZS9naWYnLFxyXG4gICAgaVZCT1J3MEtHZ286ICdpbWFnZS9wbmcnLFxyXG4gICAgJy85ai8nOiAnaW1hZ2UvanBnJ1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgcHJvZmlsZVBpYzogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG4gIHByb2ZpbGVQaWNVcGRhdGVFdmVudCA9IHRoaXMucHJvZmlsZVBpYy5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgKiBBZGQvdXBkYXRlIHByb3ZpZGVyIGF0dHJpYnV0ZVxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHV1aWQgLSBQcm92aWRlciB1dWlkXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVHlwZVV1aWQgLSBQcm92aWRlciBhdHRyaWJ1dGUgdHlwZSB1dWlkXHJcbiAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzRXhpc3RpbmdQcmVzZW50IC0gUmVjb3JkIGZvciBwcm92aWRlciBhdHRyaWJ1dGUgdHlwZSBhbHJlYWR5IGV4aXN0cyB0cnVlL2ZhbHNlXHJcbiAgKiBAcGFyYW0ge2Jvb2xlYW59IGV4aXN0aW5nVXVpZCAtIEV4aXN0aW5nIHByb3ZpZGVyIGF0dHJpYnV0ZSByZWNvcmQgdXVpZFxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgdXBkYXRlUHJvdmlkZXJBdHRyaWJ1dGUoYmFzZVVSTDogc3RyaW5nLHV1aWQ6IHN0cmluZywgYXR0cmlidXRlVHlwZVV1aWQ6IHN0cmluZywgYXR0cmlidXRlVmFsdWU6IHN0cmluZywgaXNFeGlzdGluZ1ByZXNlbnQ6IGJvb2xlYW4sIGV4aXN0aW5nVXVpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IFVSTCA9IGlzRXhpc3RpbmdQcmVzZW50ID8gYCR7YmFzZVVSTH0vcHJvdmlkZXIvJHt1dWlkfS9hdHRyaWJ1dGUvJHtleGlzdGluZ1V1aWR9YFxyXG4gICAgICA6IGAke2Jhc2VVUkx9L3Byb3ZpZGVyLyR7dXVpZH0vYXR0cmlidXRlYDtcclxuICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgIGF0dHJpYnV0ZVR5cGU6IGF0dHJpYnV0ZVR5cGVVdWlkLFxyXG4gICAgICB2YWx1ZTogYXR0cmlidXRlVmFsdWUsXHJcbiAgICAgIHZvaWRlZDogZmFsc2VcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoVVJMLCBqc29uKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQWRkL3VwZGF0ZSBwZXJzb24gaW1hZ2VcclxuICAqIEBwYXJhbSB7T2JqZWN0fSBqc29uIC0gUGF5bG9hZCB0byB1cGxvYWQgcGVyc29uIGltYWdlXHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICB1cGRhdGVQcm9maWxlSW1hZ2UoYmFzZVVSTDpzdHJpbmcsanNvbjogb2JqZWN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IFVSTCA9IGAke2Jhc2VVUkx9L3BlcnNvbmltYWdlYDtcclxuICAgIGNvbnN0IGhlYWRlciA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChVUkwsIGpzb24sIGhlYWRlcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIENyZWF0ZSBzaWduYXR1cmVcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBwcm92aWRlcklkIC0gUHJvdmlkZXIgdXVpZFxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHRleHRPZlNpZ24gLSBTaWduYXR1cmUgdGV4dFxyXG4gICogQHBhcmFtIHtzdHJpbmd9IGZvbnROYW1lIC0gRm9udCBuYW1lIHRvIGJlIHVzZWRcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIGNyZWF0U2lnbmF0dXJlKGJhc2U6c3RyaW5nLHByb3ZpZGVySWQ6IHN0cmluZywgdGV4dE9mU2lnbjogc3RyaW5nLCBmb250TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IFVSTCA9IGAke2Jhc2V9L2NyZWF0ZXNpZ25gO1xyXG4gICAgY29uc3QganNvbiA9IHtcclxuICAgICAgdGV4dE9mU2lnbjogdGV4dE9mU2lnbixcclxuICAgICAgZm9udE5hbWU6IGZvbnROYW1lLFxyXG4gICAgICBwcm92aWRlcklkOiBwcm92aWRlcklkXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFVSTCwganNvbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFVwZGF0ZSBzaWduYXR1cmVcclxuICAqIEBwYXJhbSB7RmlsZX0gZmlsZSAtIFNpZ25hdHVyZSBmaWxlXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gcHJvdmlkZXJJZCAtIFByb3ZpZGVyIHV1aWRcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIHVwZGF0ZVNpZ25hdHVyZShiYXNlOnN0cmluZyxmaWxlLCBwcm92aWRlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgVVJMID0gYCR7YmFzZX0vdXBsb2Fkc2lnbmA7XHJcbiAgICBjb25zdCBqc29uID0ge1xyXG4gICAgICBmaWxlOiBmaWxlLFxyXG4gICAgICBwcm92aWRlcmlkOiBwcm92aWRlcklkXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFVSTCwganNvbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIERlbGV0ZSBwcm92aWRlciBhdHRyaWJ1dGVcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB1dWlkIC0gUHJvdmlkZXIgdXVpZFxyXG4gICogQHBhcmFtIHtzdHJpbmd9IGV4aXN0aW5nVXVpZCAtIFByb3ZpZGVyIGF0dHJpYnV0ZSB1dWlkXHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICBkZWxldGVQcm92aWRlckF0dHJpYnV0ZShiYXNlVVJMOnN0cmluZyx1dWlkOiBzdHJpbmcsIGV4aXN0aW5nVXVpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IFVSTCA9IGAke2Jhc2VVUkx9L3Byb3ZpZGVyLyR7dXVpZH0vYXR0cmlidXRlLyR7ZXhpc3RpbmdVdWlkfWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShVUkwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBSZXR1cm4gTUlNRSB0eXBlIGZvciBnaXZlIGJhc2U2NCBzdHJpbmdcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBiNjQgLSBCYXNlNjQgc3RyaW5nXHJcbiAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gTUlNRSB0eXBlXHJcbiAgKi9cclxuICBkZXRlY3RNaW1lVHlwZShiNjQ6IHN0cmluZykge1xyXG4gICAgZm9yIChjb25zdCBzIGluIHRoaXMubWltZVR5cGVzKSB7XHJcbiAgICAgIGlmIChiNjQuc3RhcnRzV2l0aChzKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbWVUeXBlc1tzXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBTZXQgcHJvZmlsZSBwaWN0dXJlXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2VCYXNlNjQgLSBCYXNlNjRcclxuICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgKi9cclxuICBzZXRQcm9maWxlUGljKGltYWdlQmFzZTY0KSB7XHJcbiAgICB0aGlzLnByb2ZpbGVQaWMubmV4dChpbWFnZUJhc2U2NCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==