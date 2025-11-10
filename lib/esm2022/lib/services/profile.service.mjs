import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ProfileService {
    http;
    // base = "https://dev.intelehealth.org"
    // baseURL = "https://dev.intelehealth.org/openmrs/ws/rest/v1"
    mimeTypes = {
        JVBERi0: 'application/pdf',
        R0lGODdh: 'image/gif',
        R0lGODlh: 'image/gif',
        iVBORw0KGgo: 'image/png',
        '/9j/': 'image/jpg'
    };
    profilePic = new Subject();
    profilePicUpdateEvent = this.profilePic.asObservable();
    constructor(http) {
        this.http = http;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ProfileService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ProfileService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ProfileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGliLXByZXNjaXB0aW9uL3NyYy9saWIvc2VydmljZXMvcHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBSzNDLE1BQU0sT0FBTyxjQUFjO0lBZUw7SUFkcEIsd0NBQXdDO0lBQ3hDLDhEQUE4RDtJQUU5RCxTQUFTLEdBQUc7UUFDVixPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLE1BQU0sRUFBRSxXQUFXO0tBQ3BCLENBQUM7SUFFTSxVQUFVLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7SUFDNUQscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUV2RCxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUV6Qzs7Ozs7OztNQU9FO0lBQ0YsdUJBQXVCLENBQUMsT0FBZSxFQUFDLElBQVksRUFBRSxpQkFBeUIsRUFBRSxjQUFzQixFQUFFLGlCQUEwQixFQUFFLFlBQW9CO1FBQ3ZKLE1BQU0sR0FBRyxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sYUFBYSxJQUFJLGNBQWMsWUFBWSxFQUFFO1lBQ3JGLENBQUMsQ0FBQyxHQUFHLE9BQU8sYUFBYSxJQUFJLFlBQVksQ0FBQztRQUM1QyxNQUFNLElBQUksR0FBRztZQUNYLGFBQWEsRUFBRSxpQkFBaUI7WUFDaEMsS0FBSyxFQUFFLGNBQWM7WUFDckIsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7O01BSUU7SUFDRixrQkFBa0IsQ0FBQyxPQUFjLEVBQUMsSUFBWTtRQUM1QyxNQUFNLEdBQUcsR0FBRyxHQUFHLE9BQU8sY0FBYyxDQUFDO1FBQ3JDLE1BQU0sTUFBTSxHQUFHO1lBQ2IsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2FBQ25DLENBQUM7U0FDSCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7Ozs7O01BTUU7SUFDRixjQUFjLENBQUMsSUFBVyxFQUFDLFVBQWtCLEVBQUUsVUFBa0IsRUFBRSxRQUFnQjtRQUNqRixNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksYUFBYSxDQUFDO1FBQ2pDLE1BQU0sSUFBSSxHQUFHO1lBQ1gsVUFBVSxFQUFFLFVBQVU7WUFDdEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsVUFBVSxFQUFFLFVBQVU7U0FDdkIsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7Ozs7TUFLRTtJQUNGLGVBQWUsQ0FBQyxJQUFXLEVBQUMsSUFBSSxFQUFFLFVBQWtCO1FBQ2xELE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxhQUFhLENBQUM7UUFDakMsTUFBTSxJQUFJLEdBQUc7WUFDWCxJQUFJLEVBQUUsSUFBSTtZQUNWLFVBQVUsRUFBRSxVQUFVO1NBQ3ZCLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRix1QkFBdUIsQ0FBQyxPQUFjLEVBQUMsSUFBWSxFQUFFLFlBQW9CO1FBQ3ZFLE1BQU0sR0FBRyxHQUFHLEdBQUcsT0FBTyxhQUFhLElBQUksY0FBYyxZQUFZLEVBQUUsQ0FBQztRQUNwRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7OztNQUlFO0lBQ0YsY0FBYyxDQUFDLEdBQVc7UUFDeEIsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzlCLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLGFBQWEsQ0FBQyxXQUFXO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7dUdBbEhVLGNBQWM7MkdBQWQsY0FBYyxjQUZiLE1BQU07OzJGQUVQLGNBQWM7a0JBSDFCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xyXG4gIC8vIGJhc2UgPSBcImh0dHBzOi8vZGV2LmludGVsZWhlYWx0aC5vcmdcIlxyXG4gIC8vIGJhc2VVUkwgPSBcImh0dHBzOi8vZGV2LmludGVsZWhlYWx0aC5vcmcvb3Blbm1ycy93cy9yZXN0L3YxXCJcclxuXHJcbiAgbWltZVR5cGVzID0ge1xyXG4gICAgSlZCRVJpMDogJ2FwcGxpY2F0aW9uL3BkZicsXHJcbiAgICBSMGxHT0RkaDogJ2ltYWdlL2dpZicsXHJcbiAgICBSMGxHT0RsaDogJ2ltYWdlL2dpZicsXHJcbiAgICBpVkJPUncwS0dnbzogJ2ltYWdlL3BuZycsXHJcbiAgICAnLzlqLyc6ICdpbWFnZS9qcGcnXHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBwcm9maWxlUGljOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgcHJvZmlsZVBpY1VwZGF0ZUV2ZW50ID0gdGhpcy5wcm9maWxlUGljLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAvKipcclxuICAqIEFkZC91cGRhdGUgcHJvdmlkZXIgYXR0cmlidXRlXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gdXVpZCAtIFByb3ZpZGVyIHV1aWRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVUeXBlVXVpZCAtIFByb3ZpZGVyIGF0dHJpYnV0ZSB0eXBlIHV1aWRcclxuICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNFeGlzdGluZ1ByZXNlbnQgLSBSZWNvcmQgZm9yIHByb3ZpZGVyIGF0dHJpYnV0ZSB0eXBlIGFscmVhZHkgZXhpc3RzIHRydWUvZmFsc2VcclxuICAqIEBwYXJhbSB7Ym9vbGVhbn0gZXhpc3RpbmdVdWlkIC0gRXhpc3RpbmcgcHJvdmlkZXIgYXR0cmlidXRlIHJlY29yZCB1dWlkXHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICB1cGRhdGVQcm92aWRlckF0dHJpYnV0ZShiYXNlVVJMOiBzdHJpbmcsdXVpZDogc3RyaW5nLCBhdHRyaWJ1dGVUeXBlVXVpZDogc3RyaW5nLCBhdHRyaWJ1dGVWYWx1ZTogc3RyaW5nLCBpc0V4aXN0aW5nUHJlc2VudDogYm9vbGVhbiwgZXhpc3RpbmdVdWlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgVVJMID0gaXNFeGlzdGluZ1ByZXNlbnQgPyBgJHtiYXNlVVJMfS9wcm92aWRlci8ke3V1aWR9L2F0dHJpYnV0ZS8ke2V4aXN0aW5nVXVpZH1gXHJcbiAgICAgIDogYCR7YmFzZVVSTH0vcHJvdmlkZXIvJHt1dWlkfS9hdHRyaWJ1dGVgO1xyXG4gICAgY29uc3QganNvbiA9IHtcclxuICAgICAgYXR0cmlidXRlVHlwZTogYXR0cmlidXRlVHlwZVV1aWQsXHJcbiAgICAgIHZhbHVlOiBhdHRyaWJ1dGVWYWx1ZSxcclxuICAgICAgdm9pZGVkOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChVUkwsIGpzb24pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBBZGQvdXBkYXRlIHBlcnNvbiBpbWFnZVxyXG4gICogQHBhcmFtIHtPYmplY3R9IGpzb24gLSBQYXlsb2FkIHRvIHVwbG9hZCBwZXJzb24gaW1hZ2VcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIHVwZGF0ZVByb2ZpbGVJbWFnZShiYXNlVVJMOnN0cmluZyxqc29uOiBvYmplY3QpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgVVJMID0gYCR7YmFzZVVSTH0vcGVyc29uaW1hZ2VgO1xyXG4gICAgY29uc3QgaGVhZGVyID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSksXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFVSTCwganNvbiwgaGVhZGVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQ3JlYXRlIHNpZ25hdHVyZVxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHByb3ZpZGVySWQgLSBQcm92aWRlciB1dWlkXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dE9mU2lnbiAtIFNpZ25hdHVyZSB0ZXh0XHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gZm9udE5hbWUgLSBGb250IG5hbWUgdG8gYmUgdXNlZFxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgY3JlYXRTaWduYXR1cmUoYmFzZTpzdHJpbmcscHJvdmlkZXJJZDogc3RyaW5nLCB0ZXh0T2ZTaWduOiBzdHJpbmcsIGZvbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgVVJMID0gYCR7YmFzZX0vY3JlYXRlc2lnbmA7XHJcbiAgICBjb25zdCBqc29uID0ge1xyXG4gICAgICB0ZXh0T2ZTaWduOiB0ZXh0T2ZTaWduLFxyXG4gICAgICBmb250TmFtZTogZm9udE5hbWUsXHJcbiAgICAgIHByb3ZpZGVySWQ6IHByb3ZpZGVySWRcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoVVJMLCBqc29uKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVXBkYXRlIHNpZ25hdHVyZVxyXG4gICogQHBhcmFtIHtGaWxlfSBmaWxlIC0gU2lnbmF0dXJlIGZpbGVcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBwcm92aWRlcklkIC0gUHJvdmlkZXIgdXVpZFxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgdXBkYXRlU2lnbmF0dXJlKGJhc2U6c3RyaW5nLGZpbGUsIHByb3ZpZGVySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBVUkwgPSBgJHtiYXNlfS91cGxvYWRzaWduYDtcclxuICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgIGZpbGU6IGZpbGUsXHJcbiAgICAgIHByb3ZpZGVyaWQ6IHByb3ZpZGVySWRcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoVVJMLCBqc29uKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogRGVsZXRlIHByb3ZpZGVyIGF0dHJpYnV0ZVxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHV1aWQgLSBQcm92aWRlciB1dWlkXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gZXhpc3RpbmdVdWlkIC0gUHJvdmlkZXIgYXR0cmlidXRlIHV1aWRcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIGRlbGV0ZVByb3ZpZGVyQXR0cmlidXRlKGJhc2VVUkw6c3RyaW5nLHV1aWQ6IHN0cmluZywgZXhpc3RpbmdVdWlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgVVJMID0gYCR7YmFzZVVSTH0vcHJvdmlkZXIvJHt1dWlkfS9hdHRyaWJ1dGUvJHtleGlzdGluZ1V1aWR9YDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFVSTCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFJldHVybiBNSU1FIHR5cGUgZm9yIGdpdmUgYmFzZTY0IHN0cmluZ1xyXG4gICogQHBhcmFtIHtzdHJpbmd9IGI2NCAtIEJhc2U2NCBzdHJpbmdcclxuICAqIEByZXR1cm4ge3N0cmluZ30gLSBNSU1FIHR5cGVcclxuICAqL1xyXG4gIGRldGVjdE1pbWVUeXBlKGI2NDogc3RyaW5nKSB7XHJcbiAgICBmb3IgKGNvbnN0IHMgaW4gdGhpcy5taW1lVHlwZXMpIHtcclxuICAgICAgaWYgKGI2NC5zdGFydHNXaXRoKHMpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWltZVR5cGVzW3NdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFNldCBwcm9maWxlIHBpY3R1cmVcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZUJhc2U2NCAtIEJhc2U2NFxyXG4gICogQHJldHVybiB7dm9pZH1cclxuICAqL1xyXG4gIHNldFByb2ZpbGVQaWMoaW1hZ2VCYXNlNjQpIHtcclxuICAgIHRoaXMucHJvZmlsZVBpYy5uZXh0KGltYWdlQmFzZTY0KTtcclxuICB9XHJcbn1cclxuIl19