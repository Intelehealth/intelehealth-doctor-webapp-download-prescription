import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
// import { environment } from "src/environments/environment";
export class VisitService {
    http;
    // private baseURL = environment.baseURL; //'https://dev.intelehealth.org/openmrs/ws/rest/v1'
    // private mindmapURL = environment.mindmapURL;
    // private baseURLAbha = environment.abhaURL; 
    isVisitSummaryShow = false;
    isHelpButtonShow = false;
    triggerAction = new Subject();
    chatVisitId;
    constructor(http) {
        this.http = http;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: VisitService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: VisitService, providedIn: "root" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: VisitService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYi1wcmVzY2lwdGlvbi9zcmMvbGliL3NlcnZpY2VzL3Zpc2l0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUMzQyw4REFBOEQ7QUFLOUQsTUFBTSxPQUFPLFlBQVk7SUFVSDtJQVJwQiw2RkFBNkY7SUFDN0YsK0NBQStDO0lBQy9DLDhDQUE4QztJQUN2QyxrQkFBa0IsR0FBWSxLQUFLLENBQUM7SUFDcEMsZ0JBQWdCLEdBQVksS0FBSyxDQUFDO0lBQ2xDLGFBQWEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUM1QyxXQUFXLENBQVM7SUFFM0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekM7Ozs7TUFJRTtJQUNGLFFBQVEsQ0FBQyxPQUFlLEVBQUUsSUFBSTtRQUM1QiwyQ0FBMkM7UUFDM0MsTUFBTSxHQUFHLEdBQUcsR0FBRyxPQUFPLFVBQVUsSUFBSSxnUkFBZ1IsQ0FBQztRQUNyVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztNQUlFO0lBQ0YsWUFBWSxDQUFDLE9BQWUsRUFBRSxFQUFFO1FBQzlCLE1BQU0sR0FBRyxHQUFHLEdBQUcsT0FBTyxrQkFBa0IsRUFBRSxTQUFTLENBQUM7UUFDcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7O01BS0U7SUFD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O21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwic3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudFwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBWaXNpdFNlcnZpY2Uge1xuXG4gIC8vIHByaXZhdGUgYmFzZVVSTCA9IGVudmlyb25tZW50LmJhc2VVUkw7IC8vJ2h0dHBzOi8vZGV2LmludGVsZWhlYWx0aC5vcmcvb3Blbm1ycy93cy9yZXN0L3YxJ1xuICAvLyBwcml2YXRlIG1pbmRtYXBVUkwgPSBlbnZpcm9ubWVudC5taW5kbWFwVVJMO1xuICAvLyBwcml2YXRlIGJhc2VVUkxBYmhhID0gZW52aXJvbm1lbnQuYWJoYVVSTDsgXG4gIHB1YmxpYyBpc1Zpc2l0U3VtbWFyeVNob3c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzSGVscEJ1dHRvblNob3c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHRyaWdnZXJBY3Rpb246IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBjaGF0VmlzaXRJZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgLyoqXG4gICogR2V0IHZpc2l0XG4gICogQHBhcmFtIHtzdHJpbmd9IHV1aWQgLSBWaXNpdCB1dWlkXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAqL1xuICBnZXRWaXNpdChiYXNlVVJMOiBzdHJpbmcsIHV1aWQpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS92aXNpdC8ke3V1aWR9P2luY2x1ZGVJbmFjdGl2ZT1mYWxzZSZ2PWN1c3RvbToodXVpZCxwYXRpZW50Oih1dWlkLGlkZW50aWZpZXJzOihpZGVudGlmaWVyLGlkZW50aWZpZXJUeXBlOihuYW1lLHV1aWQsZGlzcGxheSkpLHBlcnNvbjooZGlzcGxheSxnZW5kZXIsYWdlLGJpcnRoZGF0ZSkpLGxvY2F0aW9uOihkaXNwbGF5KSxlbmNvdW50ZXJzOihkaXNwbGF5LGVuY291bnRlckRhdGV0aW1lLHZvaWRlZCxlbmNvdW50ZXJUeXBlOihkaXNwbGF5KSxlbmNvdW50ZXJQcm92aWRlcnMpLGF0dHJpYnV0ZXMpYDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xuICB9XG5cbiAgLyoqXG4gICogR2V0IHZpc2l0cyBmb3IgYSBwYXRpZW50XG4gICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gUGF0aWVudCB1dWlkXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAqL1xuICByZWNlbnRWaXNpdHMoYmFzZVVSTDogc3RyaW5nLCBpZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vdmlzaXQ/cGF0aWVudD0ke2lkfSZ2PWZ1bGxgO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCk7XG4gIH1cblxuICAvKipcbiAgKiBHZXQgdmlzaXRcbiAgKiBAcGFyYW0ge3N0cmluZ30gdXVpZCAtIFZpc2l0IHV1aWRcbiAgKiBAcGFyYW0ge3N0cmluZ30gdiAtIHJlc3BvbnNlIHZlcnNpb24gZm9ybWF0XG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAqL1xuICBmZXRjaFZpc2l0RGV0YWlscyhcbiAgICBiYXNlVVJMOiBzdHJpbmcsIFxuICAgIHV1aWQsXG4gICAgdiA9IFwiY3VzdG9tOihsb2NhdGlvbjooZGlzcGxheSksdXVpZCxkaXNwbGF5LHN0YXJ0RGF0ZXRpbWUsZGF0ZUNyZWF0ZWQsc3RvcERhdGV0aW1lLGVuY291bnRlcnM6KGRpc3BsYXksdXVpZCxlbmNvdW50ZXJEYXRldGltZSxlbmNvdW50ZXJUeXBlOihkaXNwbGF5KSxvYnM6KGRpc3BsYXksdXVpZCx2YWx1ZSxjb25jZXB0Oih1dWlkLGRpc3BsYXkpKSxlbmNvdW50ZXJQcm92aWRlcnM6KGRpc3BsYXkscHJvdmlkZXI6KHV1aWQsYXR0cmlidXRlcyxwZXJzb246KHV1aWQsZGlzcGxheSxnZW5kZXIsYWdlKSkpKSxwYXRpZW50Oih1dWlkLGlkZW50aWZpZXJzOihpZGVudGlmaWVyLGlkZW50aWZpZXJUeXBlOihuYW1lLHV1aWQsZGlzcGxheSkpLGF0dHJpYnV0ZXMscGVyc29uOihkaXNwbGF5LGdlbmRlcixhZ2UpKSxhdHRyaWJ1dGVzKVwiXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVUkx9L3Zpc2l0LyR7dXVpZH0/dj0ke3Z9YDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xuICB9XG5cbiAgLyoqXG4gICogR2V0IHZpc2l0XG4gICogQHBhcmFtIHtzdHJpbmd9IHV1aWQgLSBWaXNpdCB1dWlkXG4gICogQHBhcmFtIHtzdHJpbmd9IHYgLSByZXNwb25zZSB2ZXJzaW9uIGZvcm1hdFxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgKi9cbiAgZmV0Y2hWaXNpdERldGFpbHMyKFxuICAgIGV4dGVybmFsUHJlc2NyaXB0aW9uQ3JlZDogc3RyaW5nLFxuICAgIGJhc2VVUkw6IHN0cmluZywgXG4gICAgdXVpZDogc3RyaW5nLFxuICAgIHY6IHN0cmluZyA9IFwiY3VzdG9tOihsb2NhdGlvbjooZGlzcGxheSksdXVpZCxkaXNwbGF5LHN0YXJ0RGF0ZXRpbWUsZGF0ZUNyZWF0ZWQsc3RvcERhdGV0aW1lLGVuY291bnRlcnM6KGRpc3BsYXksdXVpZCxlbmNvdW50ZXJEYXRldGltZSxlbmNvdW50ZXJUeXBlOihkaXNwbGF5KSxvYnM6KGRpc3BsYXksdXVpZCx2YWx1ZSxjb25jZXB0Oih1dWlkLGRpc3BsYXkpKSxlbmNvdW50ZXJQcm92aWRlcnM6KGRpc3BsYXkscHJvdmlkZXI6KHV1aWQsYXR0cmlidXRlcyxwZXJzb246KHV1aWQsZGlzcGxheSxnZW5kZXIsYWdlKSkpKSxwYXRpZW50Oih1dWlkLGlkZW50aWZpZXJzOihpZGVudGlmaWVyLGlkZW50aWZpZXJUeXBlOihuYW1lLHV1aWQsZGlzcGxheSkpLGF0dHJpYnV0ZXMscGVyc29uOihkaXNwbGF5LGdlbmRlcixhZ2UpKSxhdHRyaWJ1dGVzKVwiXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xuICAgIGhlYWRlcnMgPSBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgZXh0ZXJuYWxQcmVzY3JpcHRpb25DcmVkKTtcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS92aXNpdC8ke3V1aWR9P3Y9JHt2fWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7IGhlYWRlcnMgfSk7XG4gIH1cblxuICAvKipcbiAgKiBHZXQgdmlzaXRcbiAgKiBAcGFyYW0ge3N0cmluZ30gdXVpZCAtIFZpc2l0IHV1aWRcbiAgKiBAcGFyYW0ge3N0cmluZ30gdiAtIHJlc3BvbnNlIGZvcm1hdFxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgKi9cbiAgZmV0Y2hWaXNpdFBhdGllbnQoZXh0ZXJuYWxQcmVzY3JpcHRpb25DcmVkOiBzdHJpbmcsIGJhc2VVUkw6IHN0cmluZywgdXVpZDogc3RyaW5nLCB2OiBzdHJpbmcgPSBcImN1c3RvbToodXVpZCxwYXRpZW50OihhdHRyaWJ1dGVzLGlkZW50aWZpZXJzOihpZGVudGlmaWVyLGlkZW50aWZpZXJUeXBlOihuYW1lLHV1aWQsZGlzcGxheSkpKSlcIik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgaGVhZGVycyA9IGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBleHRlcm5hbFByZXNjcmlwdGlvbkNyZWQpO1xuICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVUkx9L3Zpc2l0LyR7dXVpZH0/dj0ke3Z9YDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIHsgaGVhZGVycyB9KTtcbiAgfVxuXG4gIC8qKlxuICAqIEdldCB2aXNpdFxuICAqIEBwYXJhbSB7c3RyaW5nfSB1dWlkIC0gVmlzaXQgdXVpZFxuICAqIEBwYXJhbSB7c3RyaW5nfSB2IC0gcmVzcG9uc2UgdmVyc2lvbiBmb3JtYXRcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XG4gICovXG4gIGdldFZpc2l0RGV0YWlscyhcbiAgICBiYXNlVVJMOiBzdHJpbmcsIFxuICAgIHV1aWQ6IHN0cmluZyxcbiAgICB2OiBzdHJpbmcgPSBcImN1c3RvbToobG9jYXRpb246KGRpc3BsYXkpLHV1aWQsZGlzcGxheSxzdGFydERhdGV0aW1lLHN0b3BEYXRldGltZSxlbmNvdW50ZXJzOihkaXNwbGF5LHV1aWQsZW5jb3VudGVyRGF0ZXRpbWUsZW5jb3VudGVyVHlwZTooZGlzcGxheSksb2JzOihkaXNwbGF5LHV1aWQsdmFsdWUpLGVuY291bnRlclByb3ZpZGVyczooZGlzcGxheSxwcm92aWRlcjoodXVpZCxwZXJzb246KHV1aWQsZGlzcGxheSxnZW5kZXIsYWdlKSxhdHRyaWJ1dGVzKSkpLHBhdGllbnQ6KHV1aWQsaWRlbnRpZmllcnM6KGlkZW50aWZpZXIsaWRlbnRpZmllclR5cGU6KG5hbWUsdXVpZCxkaXNwbGF5KSkscGVyc29uOihkaXNwbGF5LGdlbmRlcixhZ2UpKSlcIlxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS92aXNpdC8ke3V1aWR9P3Y9JHt2fWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcbiAgfVxuXG4gIC8qKlxuICAqIEdldCB2aXNpdCBhdHRyaWJ1dGVzXG4gICogQHBhcmFtIHtzdHJpbmd9IHZpc2l0SWQgLSBWaXNpdCB1dWlkXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAqL1xuICBnZXRBdHRyaWJ1dGUoYmFzZVVSTDogc3RyaW5nLCB2aXNpdElkKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS92aXNpdC8ke3Zpc2l0SWR9L2F0dHJpYnV0ZWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcbiAgfVxuXG4gIC8qKlxuICAqIFBvc3QgdmlzaXQgYXR0cmlidXRlXG4gICogQHBhcmFtIHtzdHJpbmd9IHZpc2l0SWQgLSBWaXNpdCB1dWlkXG4gICogQHBhcmFtIHthbnl9IGpzb24gLSBBdHRyaWJ1dGUgcGF5bG9hZFxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgKi9cbiAgcG9zdEF0dHJpYnV0ZShiYXNlVVJMOiBzdHJpbmcsIHZpc2l0SWQsIGpzb24pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVUkx9L3Zpc2l0LyR7dmlzaXRJZH0vYXR0cmlidXRlYDtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBqc29uKTtcbiAgfVxuXG4gIC8qKlxuICAqIFVwZGF0ZSB2aXNpdCBhdHRyaWJ1dGVcbiAgKiBAcGFyYW0ge3N0cmluZ30gdmlzaXRJZCAtIFZpc2l0IHV1aWRcbiAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVXVpZCAtIFZpc2l0IGF0dHJpYnV0ZSB1dWlkXG4gICogQHBhcmFtIHthbnl9IGpzb24gLSBBdHRyaWJ1dGUgcGF5bG9hZFxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgKi9cbiAgdXBkYXRlQXR0cmlidXRlKGJhc2VVUkw6IHN0cmluZywgdmlzaXRJZCwgYXR0cmlidXRlVXVpZCwganNvbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vdmlzaXQvJHt2aXNpdElkfS9hdHRyaWJ1dGUvJHthdHRyaWJ1dGVVdWlkfWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwganNvbik7XG4gIH1cblxuICAvKipcbiAgKiBEZWxldGUgdmlzaXQgYXR0cmlidXRlXG4gICogQHBhcmFtIHtzdHJpbmd9IHZpc2l0SWQgLSBWaXNpdCB1dWlkXG4gICogQHBhcmFtIHtzdHJpbmd9IHV1aWQgLSBWaXNpdCBhdHRyaWJ1dGUgdXVpZFxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgKi9cbiAgZGVsZXRlQXR0cmlidXRlKGJhc2VVUkw6IHN0cmluZywgdmlzaXRJZCwgdXVpZCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vdmlzaXQvJHt2aXNpdElkfS9hdHRyaWJ1dGUvJHt1dWlkfWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsKTtcbiAgfVxuXG4gIC8qKlxuICAqIEdldCBwYXRpZW50IGRldGFpbHNcbiAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSBQYXRpZW50IHV1aWRcbiAgKiBAcGFyYW0ge3N0cmluZ30gdiAtIHJlc3BvbnNlIGZvcm1hdFxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgKi9cbiAgcGF0aWVudEluZm8oYmFzZVVSTDogc3RyaW5nLCBpZCwgdiA9ICdjdXN0b206KHV1aWQsYXR0cmlidXRlcyxpZGVudGlmaWVycyxwZXJzb246KHV1aWQsZGlzcGxheSxnZW5kZXIscHJlZmVycmVkTmFtZTooZ2l2ZW5OYW1lLGZhbWlseU5hbWUsbWlkZGxlTmFtZSksYmlydGhkYXRlLGFnZSxwcmVmZXJyZWRBZGRyZXNzOihjaXR5VmlsbGFnZSxhZGRyZXNzMSxhZGRyZXNzMixjb3VudHJ5LHN0YXRlUHJvdmluY2UsY291bnR5RGlzdHJpY3QscG9zdGFsQ29kZSksYXR0cmlidXRlczoodmFsdWUsYXR0cmlidXRlVHlwZTooZGlzcGxheSkpKSknKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVUkx9L3BhdGllbnQvJHtpZH0/dj0ke3Z9YDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xuICB9XG5cbiAgLyoqXG4gICogR2V0IHdoYXRzYXBwIGxpbmtcbiAgKiBAcGFyYW0ge3N0cmluZ30gd2hhdHNhcHAgLSBXaGF0c3BwIG51bWJlclxuICAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgLSBNZXNzYWdlIHRvIGJlIHNlbnRcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XG4gICovXG4gIGdldFdoYXRzYXBwTGluayh3aGF0c2FwcDogc3RyaW5nLCBtc2c6IHN0cmluZyA9IGBIZWxsbyBJJ20gY2FsbGluZyBmb3IgY29uc3VsdGF0aW9uYCkge1xuICAgIGxldCB0ZXh0ID0gZW5jb2RlVVJJKG1zZyk7XG4gICAgbGV0IHdoYXRzYXBwTGluayA9IGBodHRwczovL3dhLm1lLyR7d2hhdHNhcHB9P3RleHQ9JHt0ZXh0fWA7XG4gICAgcmV0dXJuIHdoYXRzYXBwTGluaztcbiAgfVxuXG4gIC8qKlxuICAqIFBhcnNlIG9ic2VydmF0aW9uIGRhdGFcbiAgKiBAcGFyYW0ge2FueX0gZGF0YSAtIE9ic2VydmF0aW9uIGRhdGFcbiAgKiBAcmV0dXJuIHthbnl9IC0gT2JzZXJ2YXRpb24gZGF0YSB3aXRoIHBhcnNlZCB2YWx1ZVxuICAqL1xuICBnZXREYXRhKGRhdGE6IGFueSkge1xuICAgIGlmIChkYXRhPy52YWx1ZS50b1N0cmluZygpLnN0YXJ0c1dpdGgoXCJ7XCIpKSB7XG4gICAgICBsZXQgdmFsdWUgPSBKU09OLnBhcnNlKGRhdGEudmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICBkYXRhLnZhbHVlID0gdmFsdWVbXCJlblwiXTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgKiBQYXJzZSBjdXN0b20gb2JzZXJ2YXRpb24gZGF0YVxuICAqIEBwYXJhbSB7YW55fSBkYXRhIC0gQ3VzdG9tIG9ic2VydmF0aW9uIGRhdGFcbiAgKiBAcmV0dXJuIHthbnl9IC0gT2JzZXJ2YXRpb24gZGF0YSB3aXRoIHBhcnNlZCB2YWx1ZVxuICAqL1xuICBnZXREYXRhMihkYXRhOiBhbnkpIHtcbiAgICBpZiAoZGF0YT8udmFsdWVfdGV4dC50b1N0cmluZygpLnN0YXJ0c1dpdGgoXCJ7XCIpKSB7XG4gICAgICBsZXQgdmFsdWUgPSBKU09OLnBhcnNlKGRhdGEudmFsdWVfdGV4dC50b1N0cmluZygpKTtcbiAgICAgIGRhdGEudmFsdWVfdGV4dCA9IHZhbHVlW1wiZW5cIl07XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICogR2V0IGF3YWl0aW5nIHZpc2l0c1xuICAqIEBwYXJhbSB7c3RyaW5nfSBzcGVjaWFsaXR5IC0gVmlzaXQgc3BlY2lhbGl0eVxuICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIC0gUGFnZSBudW1iZXJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XG4gICovXG4gIGdldEF3YWl0aW5nVmlzaXRzKG1pbmRtYXBVUkw6IHN0cmluZywgc3BlY2lhbGl0eTogc3RyaW5nLCBwYWdlOiBudW1iZXIgPSAxKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHttaW5kbWFwVVJMfS9vcGVubXJzL2dldEF3YWl0aW5nVmlzaXRzP3NwZWNpYWxpdHk9JHtzcGVjaWFsaXR5fSZwYWdlPSR7cGFnZX1gKTtcbiAgfVxuXG4gIC8qKlxuICAqIEdldCBwcmlvcml0eSB2aXNpdHNcbiAgKiBAcGFyYW0ge3N0cmluZ30gc3BlY2lhbGl0eSAtIFZpc2l0IHNwZWNpYWxpdHlcbiAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSAtIFBhZ2UgbnVtYmVyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAqL1xuICBnZXRQcmlvcml0eVZpc2l0cyhtaW5kbWFwVVJMOiBzdHJpbmcsIHNwZWNpYWxpdHk6IHN0cmluZywgcGFnZTogbnVtYmVyID0gMSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7bWluZG1hcFVSTH0vb3Blbm1ycy9nZXRQcmlvcml0eVZpc2l0cz9zcGVjaWFsaXR5PSR7c3BlY2lhbGl0eX0mcGFnZT0ke3BhZ2V9YCk7XG4gIH1cblxuICAvKipcbiAgKiBHZXQgaW5wcm9ncmVzcyB2aXNpdHNcbiAgKiBAcGFyYW0ge3N0cmluZ30gc3BlY2lhbGl0eSAtIFZpc2l0IHNwZWNpYWxpdHlcbiAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSAtIFBhZ2UgbnVtYmVyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAqL1xuICBnZXRJblByb2dyZXNzVmlzaXRzKG1pbmRtYXBVUkw6IHN0cmluZywgc3BlY2lhbGl0eTogc3RyaW5nLCBwYWdlOiBudW1iZXIgPSAxKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHttaW5kbWFwVVJMfS9vcGVubXJzL2dldEluUHJvZ3Jlc3NWaXNpdHM/c3BlY2lhbGl0eT0ke3NwZWNpYWxpdHl9JnBhZ2U9JHtwYWdlfWApO1xuICB9XG5cbiAgLyoqXG4gICogR2V0IGNvbXBsZXRlZCB2aXNpdHNcbiAgKiBAcGFyYW0ge3N0cmluZ30gc3BlY2lhbGl0eSAtIFZpc2l0IHNwZWNpYWxpdHlcbiAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSAtIFBhZ2UgbnVtYmVyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAqL1xuICBnZXRDb21wbGV0ZWRWaXNpdHMobWluZG1hcFVSTDogc3RyaW5nLCBzcGVjaWFsaXR5OiBzdHJpbmcsIHBhZ2U6IG51bWJlciA9IDEsIGNvdW50T25seTpib29sZWFuID0gZmFsc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke21pbmRtYXBVUkx9L29wZW5tcnMvZ2V0Q29tcGxldGVkVmlzaXRzP3NwZWNpYWxpdHk9JHtzcGVjaWFsaXR5fSZwYWdlPSR7cGFnZX0mY291bnRPbmx5PSR7Y291bnRPbmx5fWApO1xuICB9XG5cbiAvKipcbiAgKiBHZXQgZm9sbG93IHVwIHZpc2l0c1xuICAqIEBwYXJhbSB7c3RyaW5nfSBzcGVjaWFsaXR5IC0gVmlzaXQgc3BlY2lhbGl0eVxuICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIC0gUGFnZSBudW1iZXJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XG4gICovXG4gZ2V0Rm9sbG93VXBWaXNpdHMobWluZG1hcFVSTDogc3RyaW5nLCBzcGVjaWFsaXR5OiBzdHJpbmcsIHBhZ2U6IG51bWJlciA9IDEsIGNvdW50T25seTpib29sZWFuID0gZmFsc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuICByZXR1cm4gdGhpcy5odHRwLmdldChgJHttaW5kbWFwVVJMfS9vcGVubXJzL2dldEZvbGxvd1VwVmlzaXRzP3NwZWNpYWxpdHk9JHtzcGVjaWFsaXR5fSZwYWdlPSR7cGFnZX0mY291bnRPbmx5PSR7Y291bnRPbmx5fWApO1xuIH1cblxuICAvKipcbiAgKiBHZXQgZW5kZWQgdmlzaXRzXG4gICogQHBhcmFtIHtzdHJpbmd9IHNwZWNpYWxpdHkgLSBWaXNpdCBzcGVjaWFsaXR5XG4gICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgLSBQYWdlIG51bWJlclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgKi9cbiAgZ2V0RW5kZWRWaXNpdHMobWluZG1hcFVSTDogc3RyaW5nLCBzcGVjaWFsaXR5OiBzdHJpbmcsIHBhZ2U6IG51bWJlciA9IDEpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke21pbmRtYXBVUkx9L29wZW5tcnMvZ2V0RW5kZWRWaXNpdHM/c3BlY2lhbGl0eT0ke3NwZWNpYWxpdHl9JnBhZ2U9JHtwYWdlfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFBvc3QgdmlzaXQgZGF0YSB0byBhYmRtXG4gICAqIEBwYXJhbSB7YW55fSBqc29uIC0gQXR0cmlidXRlIHBheWxvYWRcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgcG9zdFZpc2l0VG9BQkRNKGJhc2VVUkxBYmhhOiBzdHJpbmcsIGpzb246IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTEFiaGF9L2FiaGEvcG9zdC1jYXJlLWNvbnRleHRgXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwganNvbik7XG4gIH1cblxuICBmb3JtYXRNZWRpY2luZURpc3BsYXkobWVkaWNpbmU6IHN0cmluZywgdXVpZD86IHN0cmluZyk6IG9iamVjdCB7XG4gICAgY29uc3Qgc3BsaXRNZWQgPSBtZWRpY2luZT8uc3BsaXQ/LignOicpO1xuICAgIGxldCBtZWQ6IGFueSA9IHtcbiAgICAgIGRydWc6IHNwbGl0TWVkPy5bMF0gPz8gJy0nLFxuICAgICAgZG9zZTogc3BsaXRNZWQ/LlsxXSA/PyAnLScgICxcbiAgICAgIGR1cmF0aW9uTm86IHNwbGl0TWVkPy5bMl0gPz8gJy0nLFxuICAgICAgZHVyYXRpb25Vbml0OiBzcGxpdE1lZD8uWzNdID8/ICctJyxcbiAgICAgIGluc3RydWN0UmVtYXJrOiBzcGxpdE1lZD8uWzRdID8/ICctJyxcbiAgICAgIGZyZXF1ZW5jeTogc3BsaXRNZWQ/Lls1XSA/PyAnLSdcbiAgICB9O1xuICAgIGlmICh1dWlkKSBtZWQudXVpZCA9IHV1aWQ7XG4gICAgcmV0dXJuIG1lZDtcbiAgfVxufVxuIl19