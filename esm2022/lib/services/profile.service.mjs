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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGliLXByZXNjaXB0aW9uL3NyYy9saWIvc2VydmljZXMvcHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCw4REFBOEQ7QUFDOUQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBSzNDLE1BQU0sT0FBTyxjQUFjO0lBZUw7SUFkcEIsd0NBQXdDO0lBQ3hDLDhEQUE4RDtJQUU5RCxTQUFTLEdBQUc7UUFDVixPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLE1BQU0sRUFBRSxXQUFXO0tBQ3BCLENBQUM7SUFFTSxVQUFVLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7SUFDNUQscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUV2RCxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUV6Qzs7Ozs7OztNQU9FO0lBQ0YsdUJBQXVCLENBQUMsT0FBZSxFQUFDLElBQVksRUFBRSxpQkFBeUIsRUFBRSxjQUFzQixFQUFFLGlCQUEwQixFQUFFLFlBQW9CO1FBQ3ZKLE1BQU0sR0FBRyxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sYUFBYSxJQUFJLGNBQWMsWUFBWSxFQUFFO1lBQ3JGLENBQUMsQ0FBQyxHQUFHLE9BQU8sYUFBYSxJQUFJLFlBQVksQ0FBQztRQUM1QyxNQUFNLElBQUksR0FBRztZQUNYLGFBQWEsRUFBRSxpQkFBaUI7WUFDaEMsS0FBSyxFQUFFLGNBQWM7WUFDckIsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7O01BSUU7SUFDRixrQkFBa0IsQ0FBQyxPQUFjLEVBQUMsSUFBWTtRQUM1QyxNQUFNLEdBQUcsR0FBRyxHQUFHLE9BQU8sY0FBYyxDQUFDO1FBQ3JDLE1BQU0sTUFBTSxHQUFHO1lBQ2IsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2FBQ25DLENBQUM7U0FDSCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7Ozs7O01BTUU7SUFDRixjQUFjLENBQUMsSUFBVyxFQUFDLFVBQWtCLEVBQUUsVUFBa0IsRUFBRSxRQUFnQjtRQUNqRixNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksYUFBYSxDQUFDO1FBQ2pDLE1BQU0sSUFBSSxHQUFHO1lBQ1gsVUFBVSxFQUFFLFVBQVU7WUFDdEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsVUFBVSxFQUFFLFVBQVU7U0FDdkIsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7Ozs7TUFLRTtJQUNGLGVBQWUsQ0FBQyxJQUFXLEVBQUMsSUFBSSxFQUFFLFVBQWtCO1FBQ2xELE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxhQUFhLENBQUM7UUFDakMsTUFBTSxJQUFJLEdBQUc7WUFDWCxJQUFJLEVBQUUsSUFBSTtZQUNWLFVBQVUsRUFBRSxVQUFVO1NBQ3ZCLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRix1QkFBdUIsQ0FBQyxPQUFjLEVBQUMsSUFBWSxFQUFFLFlBQW9CO1FBQ3ZFLE1BQU0sR0FBRyxHQUFHLEdBQUcsT0FBTyxhQUFhLElBQUksY0FBYyxZQUFZLEVBQUUsQ0FBQztRQUNwRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7OztNQUlFO0lBQ0YsY0FBYyxDQUFDLEdBQVc7UUFDeEIsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzlCLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLGFBQWEsQ0FBQyxXQUFXO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7dUdBbEhVLGNBQWM7MkdBQWQsY0FBYyxjQUZiLE1BQU07OzJGQUVQLGNBQWM7a0JBSDFCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG4vLyBpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XG4gIC8vIGJhc2UgPSBcImh0dHBzOi8vZGV2LmludGVsZWhlYWx0aC5vcmdcIlxuICAvLyBiYXNlVVJMID0gXCJodHRwczovL2Rldi5pbnRlbGVoZWFsdGgub3JnL29wZW5tcnMvd3MvcmVzdC92MVwiXG5cbiAgbWltZVR5cGVzID0ge1xuICAgIEpWQkVSaTA6ICdhcHBsaWNhdGlvbi9wZGYnLFxuICAgIFIwbEdPRGRoOiAnaW1hZ2UvZ2lmJyxcbiAgICBSMGxHT0RsaDogJ2ltYWdlL2dpZicsXG4gICAgaVZCT1J3MEtHZ286ICdpbWFnZS9wbmcnLFxuICAgICcvOWovJzogJ2ltYWdlL2pwZydcbiAgfTtcblxuICBwcml2YXRlIHByb2ZpbGVQaWM6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgcHJvZmlsZVBpY1VwZGF0ZUV2ZW50ID0gdGhpcy5wcm9maWxlUGljLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgLyoqXG4gICogQWRkL3VwZGF0ZSBwcm92aWRlciBhdHRyaWJ1dGVcbiAgKiBAcGFyYW0ge3N0cmluZ30gdXVpZCAtIFByb3ZpZGVyIHV1aWRcbiAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVHlwZVV1aWQgLSBQcm92aWRlciBhdHRyaWJ1dGUgdHlwZSB1dWlkXG4gICogQHBhcmFtIHtib29sZWFufSBpc0V4aXN0aW5nUHJlc2VudCAtIFJlY29yZCBmb3IgcHJvdmlkZXIgYXR0cmlidXRlIHR5cGUgYWxyZWFkeSBleGlzdHMgdHJ1ZS9mYWxzZVxuICAqIEBwYXJhbSB7Ym9vbGVhbn0gZXhpc3RpbmdVdWlkIC0gRXhpc3RpbmcgcHJvdmlkZXIgYXR0cmlidXRlIHJlY29yZCB1dWlkXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAqL1xuICB1cGRhdGVQcm92aWRlckF0dHJpYnV0ZShiYXNlVVJMOiBzdHJpbmcsdXVpZDogc3RyaW5nLCBhdHRyaWJ1dGVUeXBlVXVpZDogc3RyaW5nLCBhdHRyaWJ1dGVWYWx1ZTogc3RyaW5nLCBpc0V4aXN0aW5nUHJlc2VudDogYm9vbGVhbiwgZXhpc3RpbmdVdWlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IFVSTCA9IGlzRXhpc3RpbmdQcmVzZW50ID8gYCR7YmFzZVVSTH0vcHJvdmlkZXIvJHt1dWlkfS9hdHRyaWJ1dGUvJHtleGlzdGluZ1V1aWR9YFxuICAgICAgOiBgJHtiYXNlVVJMfS9wcm92aWRlci8ke3V1aWR9L2F0dHJpYnV0ZWA7XG4gICAgY29uc3QganNvbiA9IHtcbiAgICAgIGF0dHJpYnV0ZVR5cGU6IGF0dHJpYnV0ZVR5cGVVdWlkLFxuICAgICAgdmFsdWU6IGF0dHJpYnV0ZVZhbHVlLFxuICAgICAgdm9pZGVkOiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFVSTCwganNvbik7XG4gIH1cblxuICAvKipcbiAgKiBBZGQvdXBkYXRlIHBlcnNvbiBpbWFnZVxuICAqIEBwYXJhbSB7T2JqZWN0fSBqc29uIC0gUGF5bG9hZCB0byB1cGxvYWQgcGVyc29uIGltYWdlXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAqL1xuICB1cGRhdGVQcm9maWxlSW1hZ2UoYmFzZVVSTDpzdHJpbmcsanNvbjogb2JqZWN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBVUkwgPSBgJHtiYXNlVVJMfS9wZXJzb25pbWFnZWA7XG4gICAgY29uc3QgaGVhZGVyID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSksXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoVVJMLCBqc29uLCBoZWFkZXIpO1xuICB9XG5cbiAgLyoqXG4gICogQ3JlYXRlIHNpZ25hdHVyZVxuICAqIEBwYXJhbSB7c3RyaW5nfSBwcm92aWRlcklkIC0gUHJvdmlkZXIgdXVpZFxuICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0T2ZTaWduIC0gU2lnbmF0dXJlIHRleHRcbiAgKiBAcGFyYW0ge3N0cmluZ30gZm9udE5hbWUgLSBGb250IG5hbWUgdG8gYmUgdXNlZFxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgKi9cbiAgY3JlYXRTaWduYXR1cmUoYmFzZTpzdHJpbmcscHJvdmlkZXJJZDogc3RyaW5nLCB0ZXh0T2ZTaWduOiBzdHJpbmcsIGZvbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IFVSTCA9IGAke2Jhc2V9L2NyZWF0ZXNpZ25gO1xuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICB0ZXh0T2ZTaWduOiB0ZXh0T2ZTaWduLFxuICAgICAgZm9udE5hbWU6IGZvbnROYW1lLFxuICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXJJZFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFVSTCwganNvbik7XG4gIH1cblxuICAvKipcbiAgKiBVcGRhdGUgc2lnbmF0dXJlXG4gICogQHBhcmFtIHtGaWxlfSBmaWxlIC0gU2lnbmF0dXJlIGZpbGVcbiAgKiBAcGFyYW0ge3N0cmluZ30gcHJvdmlkZXJJZCAtIFByb3ZpZGVyIHV1aWRcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XG4gICovXG4gIHVwZGF0ZVNpZ25hdHVyZShiYXNlOnN0cmluZyxmaWxlLCBwcm92aWRlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IFVSTCA9IGAke2Jhc2V9L3VwbG9hZHNpZ25gO1xuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICBmaWxlOiBmaWxlLFxuICAgICAgcHJvdmlkZXJpZDogcHJvdmlkZXJJZFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFVSTCwganNvbik7XG4gIH1cblxuICAvKipcbiAgKiBEZWxldGUgcHJvdmlkZXIgYXR0cmlidXRlXG4gICogQHBhcmFtIHtzdHJpbmd9IHV1aWQgLSBQcm92aWRlciB1dWlkXG4gICogQHBhcmFtIHtzdHJpbmd9IGV4aXN0aW5nVXVpZCAtIFByb3ZpZGVyIGF0dHJpYnV0ZSB1dWlkXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAqL1xuICBkZWxldGVQcm92aWRlckF0dHJpYnV0ZShiYXNlVVJMOnN0cmluZyx1dWlkOiBzdHJpbmcsIGV4aXN0aW5nVXVpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBVUkwgPSBgJHtiYXNlVVJMfS9wcm92aWRlci8ke3V1aWR9L2F0dHJpYnV0ZS8ke2V4aXN0aW5nVXVpZH1gO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFVSTCk7XG4gIH1cblxuICAvKipcbiAgKiBSZXR1cm4gTUlNRSB0eXBlIGZvciBnaXZlIGJhc2U2NCBzdHJpbmdcbiAgKiBAcGFyYW0ge3N0cmluZ30gYjY0IC0gQmFzZTY0IHN0cmluZ1xuICAqIEByZXR1cm4ge3N0cmluZ30gLSBNSU1FIHR5cGVcbiAgKi9cbiAgZGV0ZWN0TWltZVR5cGUoYjY0OiBzdHJpbmcpIHtcbiAgICBmb3IgKGNvbnN0IHMgaW4gdGhpcy5taW1lVHlwZXMpIHtcbiAgICAgIGlmIChiNjQuc3RhcnRzV2l0aChzKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW1lVHlwZXNbc107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICogU2V0IHByb2ZpbGUgcGljdHVyZVxuICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZUJhc2U2NCAtIEJhc2U2NFxuICAqIEByZXR1cm4ge3ZvaWR9XG4gICovXG4gIHNldFByb2ZpbGVQaWMoaW1hZ2VCYXNlNjQpIHtcbiAgICB0aGlzLnByb2ZpbGVQaWMubmV4dChpbWFnZUJhc2U2NCk7XG4gIH1cbn1cbiJdfQ==