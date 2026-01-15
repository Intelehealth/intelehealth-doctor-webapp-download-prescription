import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
// import { environment } from "src/environments/environment";
export class VisitService {
    constructor(http) {
        this.http = http;
        // private baseURL = environment.baseURL; //'https://dev.intelehealth.org/openmrs/ws/rest/v1'
        // private mindmapURL = environment.mindmapURL;
        // private baseURLAbha = environment.abhaURL; 
        this.isVisitSummaryShow = false;
        this.isHelpButtonShow = false;
        this.triggerAction = new Subject();
    }
    /**
    * Get visit
    * @param {string} uuid - Visit uuid
    * @return {Observable<any>}
    */
    getVisit(baseURL, uuid) {
        // tslint:disable-next-line:max-line-length
        const url = `${baseURL}/visit/${uuid}?includeInactive=false&v=custom:(uuid,patient:(uuid,identifiers:(identifier,identifierType:(name,uuid,display)),person:(display,gender,age,birthdate)),location:(display),encounters:(display,encounterDatetime,voided,encounterType:(display),encounterProviders),attributes)`;
        return this.http.get(url);
    }
    /**
    * Get visits for a patient
    * @param {string} id - Patient uuid
    * @return {Observable<any>}
    */
    recentVisits(baseURL, id) {
        const url = `${baseURL}/visit?patient=${id}&v=full`;
        return this.http.get(url);
    }
    /**
    * Get visit
    * @param {string} uuid - Visit uuid
    * @param {string} v - response version format
    * @return {Observable<any>}
    */
    fetchVisitDetails(baseURL, uuid, v = "custom:(location:(display),uuid,display,startDatetime,dateCreated,stopDatetime,encounters:(display,uuid,encounterDatetime,encounterType:(display),obs:(display,uuid,value,concept:(uuid,display)),encounterProviders:(display,provider:(uuid,attributes,person:(uuid,display,gender,age)))),patient:(uuid,identifiers:(identifier,identifierType:(name,uuid,display)),attributes,person:(display,gender,age)),attributes)") {
        // tslint:disable-next-line:max-line-length
        const url = `${baseURL}/visit/${uuid}?v=${v}`;
        return this.http.get(url);
    }
    /**
    * Get visit
    * @param {string} uuid - Visit uuid
    * @param {string} v - response version format
    * @return {Observable<any>}
    */
    fetchVisitDetails2(externalPrescriptionCred, baseURL, uuid, v = "custom:(location:(display),uuid,display,startDatetime,dateCreated,stopDatetime,encounters:(display,uuid,encounterDatetime,encounterType:(display),obs:(display,uuid,value,concept:(uuid,display)),encounterProviders:(display,provider:(uuid,attributes,person:(uuid,display,gender,age)))),patient:(uuid,identifiers:(identifier,identifierType:(name,uuid,display)),attributes,person:(display,gender,age)),attributes)") {
        // tslint:disable-next-line:max-line-length
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Basic ' + externalPrescriptionCred);
        const url = `${baseURL}/visit/${uuid}?v=${v}`;
        return this.http.get(url, { headers });
    }
    /**
    * Get visit
    * @param {string} uuid - Visit uuid
    * @param {string} v - response format
    * @return {Observable<any>}
    */
    fetchVisitPatient(externalPrescriptionCred, baseURL, uuid, v = "custom:(uuid,patient:(attributes,identifiers:(identifier,identifierType:(name,uuid,display))))") {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Basic ' + externalPrescriptionCred);
        const url = `${baseURL}/visit/${uuid}?v=${v}`;
        return this.http.get(url, { headers });
    }
    /**
    * Get visit
    * @param {string} uuid - Visit uuid
    * @param {string} v - response version format
    * @return {Observable<any>}
    */
    getVisitDetails(baseURL, uuid, v = "custom:(location:(display),uuid,display,startDatetime,stopDatetime,encounters:(display,uuid,encounterDatetime,encounterType:(display),obs:(display,uuid,value),encounterProviders:(display,provider:(uuid,person:(uuid,display,gender,age),attributes))),patient:(uuid,identifiers:(identifier,identifierType:(name,uuid,display)),person:(display,gender,age)))") {
        // tslint:disable-next-line:max-line-length
        const url = `${baseURL}/visit/${uuid}?v=${v}`;
        return this.http.get(url);
    }
    /**
    * Get visit attributes
    * @param {string} visitId - Visit uuid
    * @return {Observable<any>}
    */
    getAttribute(baseURL, visitId) {
        const url = `${baseURL}/visit/${visitId}/attribute`;
        return this.http.get(url);
    }
    /**
    * Post visit attribute
    * @param {string} visitId - Visit uuid
    * @param {any} json - Attribute payload
    * @return {Observable<any>}
    */
    postAttribute(baseURL, visitId, json) {
        const url = `${baseURL}/visit/${visitId}/attribute`;
        return this.http.post(url, json);
    }
    /**
    * Update visit attribute
    * @param {string} visitId - Visit uuid
    * @param {string} attributeUuid - Visit attribute uuid
    * @param {any} json - Attribute payload
    * @return {Observable<any>}
    */
    updateAttribute(baseURL, visitId, attributeUuid, json) {
        const url = `${baseURL}/visit/${visitId}/attribute/${attributeUuid}`;
        return this.http.post(url, json);
    }
    /**
    * Delete visit attribute
    * @param {string} visitId - Visit uuid
    * @param {string} uuid - Visit attribute uuid
    * @return {Observable<any>}
    */
    deleteAttribute(baseURL, visitId, uuid) {
        const url = `${baseURL}/visit/${visitId}/attribute/${uuid}`;
        return this.http.delete(url);
    }
    /**
    * Get patient details
    * @param {string} id - Patient uuid
    * @param {string} v - response format
    * @return {Observable<any>}
    */
    patientInfo(baseURL, id, v = 'custom:(uuid,attributes,identifiers,person:(uuid,display,gender,preferredName:(givenName,familyName,middleName),birthdate,age,preferredAddress:(cityVillage,address1,address2,country,stateProvince,countyDistrict,postalCode),attributes:(value,attributeType:(display))))') {
        // tslint:disable-next-line: max-line-length
        const url = `${baseURL}/patient/${id}?v=${v}`;
        return this.http.get(url);
    }
    /**
    * Get whatsapp link
    * @param {string} whatsapp - Whatspp number
    * @param {string} msg - Message to be sent
    * @return {Observable<any>}
    */
    getWhatsappLink(whatsapp, msg = `Hello I'm calling for consultation`) {
        let text = encodeURI(msg);
        let whatsappLink = `https://wa.me/${whatsapp}?text=${text}`;
        return whatsappLink;
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
    * Parse custom observation data
    * @param {any} data - Custom observation data
    * @return {any} - Observation data with parsed value
    */
    getData2(data) {
        if (data?.value_text.toString().startsWith("{")) {
            let value = JSON.parse(data.value_text.toString());
            data.value_text = value["en"];
        }
        return data;
    }
    /**
    * Get awaiting visits
    * @param {string} speciality - Visit speciality
    * @param {number} page - Page number
    * @return {Observable<any>}
    */
    getAwaitingVisits(mindmapURL, speciality, page = 1) {
        return this.http.get(`${mindmapURL}/openmrs/getAwaitingVisits?speciality=${speciality}&page=${page}`);
    }
    /**
    * Get priority visits
    * @param {string} speciality - Visit speciality
    * @param {number} page - Page number
    * @return {Observable<any>}
    */
    getPriorityVisits(mindmapURL, speciality, page = 1) {
        return this.http.get(`${mindmapURL}/openmrs/getPriorityVisits?speciality=${speciality}&page=${page}`);
    }
    /**
    * Get inprogress visits
    * @param {string} speciality - Visit speciality
    * @param {number} page - Page number
    * @return {Observable<any>}
    */
    getInProgressVisits(mindmapURL, speciality, page = 1) {
        return this.http.get(`${mindmapURL}/openmrs/getInProgressVisits?speciality=${speciality}&page=${page}`);
    }
    /**
    * Get completed visits
    * @param {string} speciality - Visit speciality
    * @param {number} page - Page number
    * @return {Observable<any>}
    */
    getCompletedVisits(mindmapURL, speciality, page = 1, countOnly = false) {
        return this.http.get(`${mindmapURL}/openmrs/getCompletedVisits?speciality=${speciality}&page=${page}&countOnly=${countOnly}`);
    }
    /**
     * Get follow up visits
     * @param {string} speciality - Visit speciality
     * @param {number} page - Page number
     * @return {Observable<any>}
     */
    getFollowUpVisits(mindmapURL, speciality, page = 1, countOnly = false) {
        return this.http.get(`${mindmapURL}/openmrs/getFollowUpVisits?speciality=${speciality}&page=${page}&countOnly=${countOnly}`);
    }
    /**
    * Get ended visits
    * @param {string} speciality - Visit speciality
    * @param {number} page - Page number
    * @return {Observable<any>}
    */
    getEndedVisits(mindmapURL, speciality, page = 1) {
        return this.http.get(`${mindmapURL}/openmrs/getEndedVisits?speciality=${speciality}&page=${page}`);
    }
    /**
     * Post visit data to abdm
     * @param {any} json - Attribute payload
     * @return {Observable<any>}
     */
    postVisitToABDM(baseURLAbha, json) {
        const url = `${baseURLAbha}/abha/post-care-context`;
        return this.http.post(url, json);
    }
    formatMedicineDisplay(medicine, uuid) {
        const splitMed = medicine?.split?.(':');
        let med = {
            drug: splitMed?.[0] ?? '-',
            dose: splitMed?.[1] ?? '-',
            durationNo: splitMed?.[2] ?? '-',
            durationUnit: splitMed?.[3] ?? '-',
            instructRemark: splitMed?.[4] ?? '-',
            frequency: splitMed?.[5] ?? '-'
        };
        if (uuid)
            med.uuid = uuid;
        return med;
    }
}
VisitService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: VisitService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
VisitService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: VisitService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: VisitService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYi1wcmVzY2lwdGlvbi9zcmMvbGliL3NlcnZpY2VzL3Zpc2l0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUMzQyw4REFBOEQ7QUFLOUQsTUFBTSxPQUFPLFlBQVk7SUFVdkIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVJwQyw2RkFBNkY7UUFDN0YsK0NBQStDO1FBQy9DLDhDQUE4QztRQUN2Qyx1QkFBa0IsR0FBWSxLQUFLLENBQUM7UUFDcEMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLGtCQUFhLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7SUFHWCxDQUFDO0lBRXpDOzs7O01BSUU7SUFDRixRQUFRLENBQUMsT0FBZSxFQUFFLElBQUk7UUFDNUIsMkNBQTJDO1FBQzNDLE1BQU0sR0FBRyxHQUFHLEdBQUcsT0FBTyxVQUFVLElBQUksZ1JBQWdSLENBQUM7UUFDclQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLFlBQVksQ0FBQyxPQUFlLEVBQUUsRUFBRTtRQUM5QixNQUFNLEdBQUcsR0FBRyxHQUFHLE9BQU8sa0JBQWtCLEVBQUUsU0FBUyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7OztNQUtFO0lBQ0YsaUJBQWlCLENBQ2YsT0FBZSxF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QUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbi8vIGltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcInNyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBcInJvb3RcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIFZpc2l0U2VydmljZSB7XHJcblxyXG4gIC8vIHByaXZhdGUgYmFzZVVSTCA9IGVudmlyb25tZW50LmJhc2VVUkw7IC8vJ2h0dHBzOi8vZGV2LmludGVsZWhlYWx0aC5vcmcvb3Blbm1ycy93cy9yZXN0L3YxJ1xyXG4gIC8vIHByaXZhdGUgbWluZG1hcFVSTCA9IGVudmlyb25tZW50Lm1pbmRtYXBVUkw7XHJcbiAgLy8gcHJpdmF0ZSBiYXNlVVJMQWJoYSA9IGVudmlyb25tZW50LmFiaGFVUkw7IFxyXG4gIHB1YmxpYyBpc1Zpc2l0U3VtbWFyeVNob3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgaXNIZWxwQnV0dG9uU2hvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyB0cmlnZ2VyQWN0aW9uOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHB1YmxpYyBjaGF0VmlzaXRJZDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAvKipcclxuICAqIEdldCB2aXNpdFxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHV1aWQgLSBWaXNpdCB1dWlkXHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICBnZXRWaXNpdChiYXNlVVJMOiBzdHJpbmcsIHV1aWQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vdmlzaXQvJHt1dWlkfT9pbmNsdWRlSW5hY3RpdmU9ZmFsc2Umdj1jdXN0b206KHV1aWQscGF0aWVudDoodXVpZCxpZGVudGlmaWVyczooaWRlbnRpZmllcixpZGVudGlmaWVyVHlwZToobmFtZSx1dWlkLGRpc3BsYXkpKSxwZXJzb246KGRpc3BsYXksZ2VuZGVyLGFnZSxiaXJ0aGRhdGUpKSxsb2NhdGlvbjooZGlzcGxheSksZW5jb3VudGVyczooZGlzcGxheSxlbmNvdW50ZXJEYXRldGltZSx2b2lkZWQsZW5jb3VudGVyVHlwZTooZGlzcGxheSksZW5jb3VudGVyUHJvdmlkZXJzKSxhdHRyaWJ1dGVzKWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXQgdmlzaXRzIGZvciBhIHBhdGllbnRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIFBhdGllbnQgdXVpZFxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgcmVjZW50VmlzaXRzKGJhc2VVUkw6IHN0cmluZywgaWQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vdmlzaXQ/cGF0aWVudD0ke2lkfSZ2PWZ1bGxgO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogR2V0IHZpc2l0XHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gdXVpZCAtIFZpc2l0IHV1aWRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB2IC0gcmVzcG9uc2UgdmVyc2lvbiBmb3JtYXRcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIGZldGNoVmlzaXREZXRhaWxzKFxyXG4gICAgYmFzZVVSTDogc3RyaW5nLCBcclxuICAgIHV1aWQsXHJcbiAgICB2ID0gXCJjdXN0b206KGxvY2F0aW9uOihkaXNwbGF5KSx1dWlkLGRpc3BsYXksc3RhcnREYXRldGltZSxkYXRlQ3JlYXRlZCxzdG9wRGF0ZXRpbWUsZW5jb3VudGVyczooZGlzcGxheSx1dWlkLGVuY291bnRlckRhdGV0aW1lLGVuY291bnRlclR5cGU6KGRpc3BsYXkpLG9iczooZGlzcGxheSx1dWlkLHZhbHVlLGNvbmNlcHQ6KHV1aWQsZGlzcGxheSkpLGVuY291bnRlclByb3ZpZGVyczooZGlzcGxheSxwcm92aWRlcjoodXVpZCxhdHRyaWJ1dGVzLHBlcnNvbjoodXVpZCxkaXNwbGF5LGdlbmRlcixhZ2UpKSkpLHBhdGllbnQ6KHV1aWQsaWRlbnRpZmllcnM6KGlkZW50aWZpZXIsaWRlbnRpZmllclR5cGU6KG5hbWUsdXVpZCxkaXNwbGF5KSksYXR0cmlidXRlcyxwZXJzb246KGRpc3BsYXksZ2VuZGVyLGFnZSkpLGF0dHJpYnV0ZXMpXCJcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vdmlzaXQvJHt1dWlkfT92PSR7dn1gO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogR2V0IHZpc2l0XHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gdXVpZCAtIFZpc2l0IHV1aWRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB2IC0gcmVzcG9uc2UgdmVyc2lvbiBmb3JtYXRcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIGZldGNoVmlzaXREZXRhaWxzMihcclxuICAgIGV4dGVybmFsUHJlc2NyaXB0aW9uQ3JlZDogc3RyaW5nLFxyXG4gICAgYmFzZVVSTDogc3RyaW5nLCBcclxuICAgIHV1aWQ6IHN0cmluZyxcclxuICAgIHY6IHN0cmluZyA9IFwiY3VzdG9tOihsb2NhdGlvbjooZGlzcGxheSksdXVpZCxkaXNwbGF5LHN0YXJ0RGF0ZXRpbWUsZGF0ZUNyZWF0ZWQsc3RvcERhdGV0aW1lLGVuY291bnRlcnM6KGRpc3BsYXksdXVpZCxlbmNvdW50ZXJEYXRldGltZSxlbmNvdW50ZXJUeXBlOihkaXNwbGF5KSxvYnM6KGRpc3BsYXksdXVpZCx2YWx1ZSxjb25jZXB0Oih1dWlkLGRpc3BsYXkpKSxlbmNvdW50ZXJQcm92aWRlcnM6KGRpc3BsYXkscHJvdmlkZXI6KHV1aWQsYXR0cmlidXRlcyxwZXJzb246KHV1aWQsZGlzcGxheSxnZW5kZXIsYWdlKSkpKSxwYXRpZW50Oih1dWlkLGlkZW50aWZpZXJzOihpZGVudGlmaWVyLGlkZW50aWZpZXJUeXBlOihuYW1lLHV1aWQsZGlzcGxheSkpLGF0dHJpYnV0ZXMscGVyc29uOihkaXNwbGF5LGdlbmRlcixhZ2UpKSxhdHRyaWJ1dGVzKVwiXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgaGVhZGVycyA9IGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBleHRlcm5hbFByZXNjcmlwdGlvbkNyZWQpO1xyXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vdmlzaXQvJHt1dWlkfT92PSR7dn1gO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7IGhlYWRlcnMgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEdldCB2aXNpdFxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHV1aWQgLSBWaXNpdCB1dWlkXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gdiAtIHJlc3BvbnNlIGZvcm1hdFxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgZmV0Y2hWaXNpdFBhdGllbnQoZXh0ZXJuYWxQcmVzY3JpcHRpb25DcmVkOiBzdHJpbmcsIGJhc2VVUkw6IHN0cmluZywgdXVpZDogc3RyaW5nLCB2OiBzdHJpbmcgPSBcImN1c3RvbToodXVpZCxwYXRpZW50OihhdHRyaWJ1dGVzLGlkZW50aWZpZXJzOihpZGVudGlmaWVyLGlkZW50aWZpZXJUeXBlOihuYW1lLHV1aWQsZGlzcGxheSkpKSlcIik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMgPSBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgZXh0ZXJuYWxQcmVzY3JpcHRpb25DcmVkKTtcclxuICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVUkx9L3Zpc2l0LyR7dXVpZH0/dj0ke3Z9YDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwgeyBoZWFkZXJzIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXQgdmlzaXRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB1dWlkIC0gVmlzaXQgdXVpZFxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHYgLSByZXNwb25zZSB2ZXJzaW9uIGZvcm1hdFxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgZ2V0VmlzaXREZXRhaWxzKFxyXG4gICAgYmFzZVVSTDogc3RyaW5nLCBcclxuICAgIHV1aWQ6IHN0cmluZyxcclxuICAgIHY6IHN0cmluZyA9IFwiY3VzdG9tOihsb2NhdGlvbjooZGlzcGxheSksdXVpZCxkaXNwbGF5LHN0YXJ0RGF0ZXRpbWUsc3RvcERhdGV0aW1lLGVuY291bnRlcnM6KGRpc3BsYXksdXVpZCxlbmNvdW50ZXJEYXRldGltZSxlbmNvdW50ZXJUeXBlOihkaXNwbGF5KSxvYnM6KGRpc3BsYXksdXVpZCx2YWx1ZSksZW5jb3VudGVyUHJvdmlkZXJzOihkaXNwbGF5LHByb3ZpZGVyOih1dWlkLHBlcnNvbjoodXVpZCxkaXNwbGF5LGdlbmRlcixhZ2UpLGF0dHJpYnV0ZXMpKSkscGF0aWVudDoodXVpZCxpZGVudGlmaWVyczooaWRlbnRpZmllcixpZGVudGlmaWVyVHlwZToobmFtZSx1dWlkLGRpc3BsYXkpKSxwZXJzb246KGRpc3BsYXksZ2VuZGVyLGFnZSkpKVwiXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVUkx9L3Zpc2l0LyR7dXVpZH0/dj0ke3Z9YDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEdldCB2aXNpdCBhdHRyaWJ1dGVzXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gdmlzaXRJZCAtIFZpc2l0IHV1aWRcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIGdldEF0dHJpYnV0ZShiYXNlVVJMOiBzdHJpbmcsIHZpc2l0SWQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vdmlzaXQvJHt2aXNpdElkfS9hdHRyaWJ1dGVgO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogUG9zdCB2aXNpdCBhdHRyaWJ1dGVcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB2aXNpdElkIC0gVmlzaXQgdXVpZFxyXG4gICogQHBhcmFtIHthbnl9IGpzb24gLSBBdHRyaWJ1dGUgcGF5bG9hZFxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgcG9zdEF0dHJpYnV0ZShiYXNlVVJMOiBzdHJpbmcsIHZpc2l0SWQsIGpzb24pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vdmlzaXQvJHt2aXNpdElkfS9hdHRyaWJ1dGVgO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwganNvbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFVwZGF0ZSB2aXNpdCBhdHRyaWJ1dGVcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB2aXNpdElkIC0gVmlzaXQgdXVpZFxyXG4gICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVV1aWQgLSBWaXNpdCBhdHRyaWJ1dGUgdXVpZFxyXG4gICogQHBhcmFtIHthbnl9IGpzb24gLSBBdHRyaWJ1dGUgcGF5bG9hZFxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgdXBkYXRlQXR0cmlidXRlKGJhc2VVUkw6IHN0cmluZywgdmlzaXRJZCwgYXR0cmlidXRlVXVpZCwganNvbik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS92aXNpdC8ke3Zpc2l0SWR9L2F0dHJpYnV0ZS8ke2F0dHJpYnV0ZVV1aWR9YDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGpzb24pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBEZWxldGUgdmlzaXQgYXR0cmlidXRlXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gdmlzaXRJZCAtIFZpc2l0IHV1aWRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB1dWlkIC0gVmlzaXQgYXR0cmlidXRlIHV1aWRcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIGRlbGV0ZUF0dHJpYnV0ZShiYXNlVVJMOiBzdHJpbmcsIHZpc2l0SWQsIHV1aWQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vdmlzaXQvJHt2aXNpdElkfS9hdHRyaWJ1dGUvJHt1dWlkfWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXQgcGF0aWVudCBkZXRhaWxzXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBQYXRpZW50IHV1aWRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB2IC0gcmVzcG9uc2UgZm9ybWF0XHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICBwYXRpZW50SW5mbyhiYXNlVVJMOiBzdHJpbmcsIGlkLCB2ID0gJ2N1c3RvbToodXVpZCxhdHRyaWJ1dGVzLGlkZW50aWZpZXJzLHBlcnNvbjoodXVpZCxkaXNwbGF5LGdlbmRlcixwcmVmZXJyZWROYW1lOihnaXZlbk5hbWUsZmFtaWx5TmFtZSxtaWRkbGVOYW1lKSxiaXJ0aGRhdGUsYWdlLHByZWZlcnJlZEFkZHJlc3M6KGNpdHlWaWxsYWdlLGFkZHJlc3MxLGFkZHJlc3MyLGNvdW50cnksc3RhdGVQcm92aW5jZSxjb3VudHlEaXN0cmljdCxwb3N0YWxDb2RlKSxhdHRyaWJ1dGVzOih2YWx1ZSxhdHRyaWJ1dGVUeXBlOihkaXNwbGF5KSkpKScpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVUkx9L3BhdGllbnQvJHtpZH0/dj0ke3Z9YDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEdldCB3aGF0c2FwcCBsaW5rXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gd2hhdHNhcHAgLSBXaGF0c3BwIG51bWJlclxyXG4gICogQHBhcmFtIHtzdHJpbmd9IG1zZyAtIE1lc3NhZ2UgdG8gYmUgc2VudFxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgZ2V0V2hhdHNhcHBMaW5rKHdoYXRzYXBwOiBzdHJpbmcsIG1zZzogc3RyaW5nID0gYEhlbGxvIEknbSBjYWxsaW5nIGZvciBjb25zdWx0YXRpb25gKSB7XHJcbiAgICBsZXQgdGV4dCA9IGVuY29kZVVSSShtc2cpO1xyXG4gICAgbGV0IHdoYXRzYXBwTGluayA9IGBodHRwczovL3dhLm1lLyR7d2hhdHNhcHB9P3RleHQ9JHt0ZXh0fWA7XHJcbiAgICByZXR1cm4gd2hhdHNhcHBMaW5rO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBQYXJzZSBvYnNlcnZhdGlvbiBkYXRhXHJcbiAgKiBAcGFyYW0ge2FueX0gZGF0YSAtIE9ic2VydmF0aW9uIGRhdGFcclxuICAqIEByZXR1cm4ge2FueX0gLSBPYnNlcnZhdGlvbiBkYXRhIHdpdGggcGFyc2VkIHZhbHVlXHJcbiAgKi9cclxuICBnZXREYXRhKGRhdGE6IGFueSkge1xyXG4gICAgaWYgKGRhdGE/LnZhbHVlLnRvU3RyaW5nKCkuc3RhcnRzV2l0aChcIntcIikpIHtcclxuICAgICAgbGV0IHZhbHVlID0gSlNPTi5wYXJzZShkYXRhLnZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICBkYXRhLnZhbHVlID0gdmFsdWVbXCJlblwiXTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBQYXJzZSBjdXN0b20gb2JzZXJ2YXRpb24gZGF0YVxyXG4gICogQHBhcmFtIHthbnl9IGRhdGEgLSBDdXN0b20gb2JzZXJ2YXRpb24gZGF0YVxyXG4gICogQHJldHVybiB7YW55fSAtIE9ic2VydmF0aW9uIGRhdGEgd2l0aCBwYXJzZWQgdmFsdWVcclxuICAqL1xyXG4gIGdldERhdGEyKGRhdGE6IGFueSkge1xyXG4gICAgaWYgKGRhdGE/LnZhbHVlX3RleHQudG9TdHJpbmcoKS5zdGFydHNXaXRoKFwie1wiKSkge1xyXG4gICAgICBsZXQgdmFsdWUgPSBKU09OLnBhcnNlKGRhdGEudmFsdWVfdGV4dC50b1N0cmluZygpKTtcclxuICAgICAgZGF0YS52YWx1ZV90ZXh0ID0gdmFsdWVbXCJlblwiXTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXQgYXdhaXRpbmcgdmlzaXRzXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gc3BlY2lhbGl0eSAtIFZpc2l0IHNwZWNpYWxpdHlcclxuICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIC0gUGFnZSBudW1iZXJcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIGdldEF3YWl0aW5nVmlzaXRzKG1pbmRtYXBVUkw6IHN0cmluZywgc3BlY2lhbGl0eTogc3RyaW5nLCBwYWdlOiBudW1iZXIgPSAxKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke21pbmRtYXBVUkx9L29wZW5tcnMvZ2V0QXdhaXRpbmdWaXNpdHM/c3BlY2lhbGl0eT0ke3NwZWNpYWxpdHl9JnBhZ2U9JHtwYWdlfWApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXQgcHJpb3JpdHkgdmlzaXRzXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gc3BlY2lhbGl0eSAtIFZpc2l0IHNwZWNpYWxpdHlcclxuICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIC0gUGFnZSBudW1iZXJcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIGdldFByaW9yaXR5VmlzaXRzKG1pbmRtYXBVUkw6IHN0cmluZywgc3BlY2lhbGl0eTogc3RyaW5nLCBwYWdlOiBudW1iZXIgPSAxKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke21pbmRtYXBVUkx9L29wZW5tcnMvZ2V0UHJpb3JpdHlWaXNpdHM/c3BlY2lhbGl0eT0ke3NwZWNpYWxpdHl9JnBhZ2U9JHtwYWdlfWApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXQgaW5wcm9ncmVzcyB2aXNpdHNcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBzcGVjaWFsaXR5IC0gVmlzaXQgc3BlY2lhbGl0eVxyXG4gICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgLSBQYWdlIG51bWJlclxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgZ2V0SW5Qcm9ncmVzc1Zpc2l0cyhtaW5kbWFwVVJMOiBzdHJpbmcsIHNwZWNpYWxpdHk6IHN0cmluZywgcGFnZTogbnVtYmVyID0gMSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHttaW5kbWFwVVJMfS9vcGVubXJzL2dldEluUHJvZ3Jlc3NWaXNpdHM/c3BlY2lhbGl0eT0ke3NwZWNpYWxpdHl9JnBhZ2U9JHtwYWdlfWApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXQgY29tcGxldGVkIHZpc2l0c1xyXG4gICogQHBhcmFtIHtzdHJpbmd9IHNwZWNpYWxpdHkgLSBWaXNpdCBzcGVjaWFsaXR5XHJcbiAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSAtIFBhZ2UgbnVtYmVyXHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICBnZXRDb21wbGV0ZWRWaXNpdHMobWluZG1hcFVSTDogc3RyaW5nLCBzcGVjaWFsaXR5OiBzdHJpbmcsIHBhZ2U6IG51bWJlciA9IDEsIGNvdW50T25seTpib29sZWFuID0gZmFsc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7bWluZG1hcFVSTH0vb3Blbm1ycy9nZXRDb21wbGV0ZWRWaXNpdHM/c3BlY2lhbGl0eT0ke3NwZWNpYWxpdHl9JnBhZ2U9JHtwYWdlfSZjb3VudE9ubHk9JHtjb3VudE9ubHl9YCk7XHJcbiAgfVxyXG5cclxuIC8qKlxyXG4gICogR2V0IGZvbGxvdyB1cCB2aXNpdHNcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBzcGVjaWFsaXR5IC0gVmlzaXQgc3BlY2lhbGl0eVxyXG4gICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgLSBQYWdlIG51bWJlclxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiBnZXRGb2xsb3dVcFZpc2l0cyhtaW5kbWFwVVJMOiBzdHJpbmcsIHNwZWNpYWxpdHk6IHN0cmluZywgcGFnZTogbnVtYmVyID0gMSwgY291bnRPbmx5OmJvb2xlYW4gPSBmYWxzZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7bWluZG1hcFVSTH0vb3Blbm1ycy9nZXRGb2xsb3dVcFZpc2l0cz9zcGVjaWFsaXR5PSR7c3BlY2lhbGl0eX0mcGFnZT0ke3BhZ2V9JmNvdW50T25seT0ke2NvdW50T25seX1gKTtcclxuIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXQgZW5kZWQgdmlzaXRzXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gc3BlY2lhbGl0eSAtIFZpc2l0IHNwZWNpYWxpdHlcclxuICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIC0gUGFnZSBudW1iZXJcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIGdldEVuZGVkVmlzaXRzKG1pbmRtYXBVUkw6IHN0cmluZywgc3BlY2lhbGl0eTogc3RyaW5nLCBwYWdlOiBudW1iZXIgPSAxKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke21pbmRtYXBVUkx9L29wZW5tcnMvZ2V0RW5kZWRWaXNpdHM/c3BlY2lhbGl0eT0ke3NwZWNpYWxpdHl9JnBhZ2U9JHtwYWdlfWApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUG9zdCB2aXNpdCBkYXRhIHRvIGFiZG1cclxuICAgKiBAcGFyYW0ge2FueX0ganNvbiAtIEF0dHJpYnV0ZSBwYXlsb2FkXHJcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIHBvc3RWaXNpdFRvQUJETShiYXNlVVJMQWJoYTogc3RyaW5nLCBqc29uOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTEFiaGF9L2FiaGEvcG9zdC1jYXJlLWNvbnRleHRgXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBqc29uKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdE1lZGljaW5lRGlzcGxheShtZWRpY2luZTogc3RyaW5nLCB1dWlkPzogc3RyaW5nKTogb2JqZWN0IHtcclxuICAgIGNvbnN0IHNwbGl0TWVkID0gbWVkaWNpbmU/LnNwbGl0Py4oJzonKTtcclxuICAgIGxldCBtZWQ6IGFueSA9IHtcclxuICAgICAgZHJ1Zzogc3BsaXRNZWQ/LlswXSA/PyAnLScsXHJcbiAgICAgIGRvc2U6IHNwbGl0TWVkPy5bMV0gPz8gJy0nICAsXHJcbiAgICAgIGR1cmF0aW9uTm86IHNwbGl0TWVkPy5bMl0gPz8gJy0nLFxyXG4gICAgICBkdXJhdGlvblVuaXQ6IHNwbGl0TWVkPy5bM10gPz8gJy0nLFxyXG4gICAgICBpbnN0cnVjdFJlbWFyazogc3BsaXRNZWQ/Lls0XSA/PyAnLScsXHJcbiAgICAgIGZyZXF1ZW5jeTogc3BsaXRNZWQ/Lls1XSA/PyAnLSdcclxuICAgIH07XHJcbiAgICBpZiAodXVpZCkgbWVkLnV1aWQgPSB1dWlkO1xyXG4gICAgcmV0dXJuIG1lZDtcclxuICB9XHJcbn1cclxuIl19