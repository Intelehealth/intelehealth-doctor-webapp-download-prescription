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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYi1wcmVzY2lwdGlvbi9zcmMvbGliL3NlcnZpY2VzL3Zpc2l0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUMzQyw4REFBOEQ7QUFLOUQsTUFBTSxPQUFPLFlBQVk7SUFVSDtJQVJwQiw2RkFBNkY7SUFDN0YsK0NBQStDO0lBQy9DLDhDQUE4QztJQUN2QyxrQkFBa0IsR0FBWSxLQUFLLENBQUM7SUFDcEMsZ0JBQWdCLEdBQVksS0FBSyxDQUFDO0lBQ2xDLGFBQWEsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUM1QyxXQUFXLENBQVM7SUFFM0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekM7Ozs7TUFJRTtJQUNGLFFBQVEsQ0FBQyxPQUFlLEVBQUUsSUFBSTtRQUM1QiwyQ0FBMkM7UUFDM0MsTUFBTSxHQUFHLEdBQUcsR0FBRyxPQUFPLFVBQVUsSUFBSSxnUkFBZ1IsQ0FBQztRQUNyVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztNQUlFO0lBQ0YsWUFBWSxDQUFDLE9BQWUsRUFBRSxFQUFFO1FBQzlCLE1BQU0sR0FBRyxHQUFHLEdBQUcsT0FBTyxrQkFBa0IsRUFBRSxTQUFTLENBQUM7UUFDcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRixpQkFBaUIsQ0FDZixPQUFlLEVBQ2YsSUFBSSxFQUNKLENBQUMsR0FBRywyWkFBMlo7UUFFL1osMkNBQTJDO1FBQzNDLE1BQU0sR0FBRyxHQUFHLEdBQUcsT0FBTyxVQUFVLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7TUFLRTtJQUNGLGtCQUFrQixDQUNoQix3QkFBZ0MsRUFDaEMsT0FBZSxFQUNmLElBQVksRUFDWixJQUFZLDJaQUEyWjtRQUV2YSwyQ0FBMkM7UUFDM0MsSUFBSSxPQUFPLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFDN0MsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFFBQVEsR0FBRyx3QkFBd0IsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sR0FBRyxHQUFHLEdBQUcsT0FBTyxVQUFVLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7OztNQUtFO0lBQ0YsaUJBQWlCLENBQUMsd0JBQWdDLEVBQUUsT0FBZSxFQUFFLElBQVksRUFBRSxJQUFZLGdHQUFnRztRQUM3TCxJQUFJLE9BQU8sR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM3QyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsUUFBUSxHQUFHLHdCQUF3QixDQUFDLENBQUM7UUFDL0UsTUFBTSxHQUFHLEdBQUcsR0FBRyxPQUFPLFVBQVUsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQzlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRixlQUFlLENBQ2IsT0FBZSxFQUNmLElBQVksRUFDWixJQUFZLGtXQUFrVztRQUU5VywyQ0FBMkM7UUFDM0MsTUFBTSxHQUFHLEdBQUcsR0FBRyxPQUFPLFVBQVUsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQzlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O01BSUU7SUFDRixZQUFZLENBQUMsT0FBZSxFQUFFLE9BQU87UUFDbkMsTUFBTSxHQUFHLEdBQUcsR0FBRyxPQUFPLFVBQVUsT0FBTyxZQUFZLENBQUM7UUFDcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRixhQUFhLENBQUMsT0FBZSxFQUFFLE9BQU8sRUFBRSxJQUFJO1FBQzFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsT0FBTyxVQUFVLE9BQU8sWUFBWSxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7Ozs7O01BTUU7SUFDRixlQUFlLENBQUMsT0FBZSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSTtRQUMzRCxNQUFNLEdBQUcsR0FBRyxHQUFHLE9BQU8sVUFBVSxPQUFPLGNBQWMsYUFBYSxFQUFFLENBQUM7UUFDckUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7OztNQUtFO0lBQ0YsZUFBZSxDQUFDLE9BQWUsRUFBRSxPQUFPLEVBQUUsSUFBSTtRQUM1QyxNQUFNLEdBQUcsR0FBRyxHQUFHLE9BQU8sVUFBVSxPQUFPLGNBQWMsSUFBSSxFQUFFLENBQUM7UUFDNUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRixXQUFXLENBQUMsT0FBZSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsNlFBQTZRO1FBQ2hULDRDQUE0QztRQUM1QyxNQUFNLEdBQUcsR0FBRyxHQUFHLE9BQU8sWUFBWSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRixlQUFlLENBQUMsUUFBZ0IsRUFBRSxNQUFjLG9DQUFvQztRQUNsRixJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxZQUFZLEdBQUcsaUJBQWlCLFFBQVEsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUM1RCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7TUFJRTtJQUNGLE9BQU8sQ0FBQyxJQUFTO1FBQ2YsSUFBSSxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMxQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O01BSUU7SUFDRixRQUFRLENBQUMsSUFBUztRQUNoQixJQUFJLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQy9DLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRixpQkFBaUIsQ0FBQyxVQUFrQixFQUFFLFVBQWtCLEVBQUUsT0FBZSxDQUFDO1FBQ3hFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLHlDQUF5QyxVQUFVLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRixpQkFBaUIsQ0FBQyxVQUFrQixFQUFFLFVBQWtCLEVBQUUsT0FBZSxDQUFDO1FBQ3hFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLHlDQUF5QyxVQUFVLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRixtQkFBbUIsQ0FBQyxVQUFrQixFQUFFLFVBQWtCLEVBQUUsT0FBZSxDQUFDO1FBQzFFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLDJDQUEyQyxVQUFVLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRixrQkFBa0IsQ0FBQyxVQUFrQixFQUFFLFVBQWtCLEVBQUUsT0FBZSxDQUFDLEVBQUUsWUFBb0IsS0FBSztRQUNwRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSwwQ0FBMEMsVUFBVSxTQUFTLElBQUksY0FBYyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ2hJLENBQUM7SUFFRjs7Ozs7T0FLRztJQUNILGlCQUFpQixDQUFDLFVBQWtCLEVBQUUsVUFBa0IsRUFBRSxPQUFlLENBQUMsRUFBRSxZQUFvQixLQUFLO1FBQ3BHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLHlDQUF5QyxVQUFVLFNBQVMsSUFBSSxjQUFjLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDOUgsQ0FBQztJQUVBOzs7OztNQUtFO0lBQ0YsY0FBYyxDQUFDLFVBQWtCLEVBQUUsVUFBa0IsRUFBRSxPQUFlLENBQUM7UUFDckUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsc0NBQXNDLFVBQVUsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsZUFBZSxDQUFDLFdBQW1CLEVBQUUsSUFBUztRQUM1QyxNQUFNLEdBQUcsR0FBRyxHQUFHLFdBQVcseUJBQXlCLENBQUE7UUFDbkQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHFCQUFxQixDQUFDLFFBQWdCLEVBQUUsSUFBYTtRQUNuRCxNQUFNLFFBQVEsR0FBRyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxHQUFHLEdBQVE7WUFDYixJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztZQUMxQixJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztZQUMxQixVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztZQUNoQyxZQUFZLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztZQUNsQyxjQUFjLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztZQUNwQyxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRztTQUNoQyxDQUFDO1FBQ0YsSUFBSSxJQUFJO1lBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDMUIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO3VHQWpSVSxZQUFZOzJHQUFaLFlBQVksY0FGWCxNQUFNOzsyRkFFUCxZQUFZO2tCQUh4QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwic3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudFwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlzaXRTZXJ2aWNlIHtcclxuXHJcbiAgLy8gcHJpdmF0ZSBiYXNlVVJMID0gZW52aXJvbm1lbnQuYmFzZVVSTDsgLy8naHR0cHM6Ly9kZXYuaW50ZWxlaGVhbHRoLm9yZy9vcGVubXJzL3dzL3Jlc3QvdjEnXHJcbiAgLy8gcHJpdmF0ZSBtaW5kbWFwVVJMID0gZW52aXJvbm1lbnQubWluZG1hcFVSTDtcclxuICAvLyBwcml2YXRlIGJhc2VVUkxBYmhhID0gZW52aXJvbm1lbnQuYWJoYVVSTDsgXHJcbiAgcHVibGljIGlzVmlzaXRTdW1tYXJ5U2hvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc0hlbHBCdXR0b25TaG93OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHRyaWdnZXJBY3Rpb246IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIGNoYXRWaXNpdElkOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICogR2V0IHZpc2l0XHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gdXVpZCAtIFZpc2l0IHV1aWRcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIGdldFZpc2l0KGJhc2VVUkw6IHN0cmluZywgdXVpZCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS92aXNpdC8ke3V1aWR9P2luY2x1ZGVJbmFjdGl2ZT1mYWxzZSZ2PWN1c3RvbToodXVpZCxwYXRpZW50Oih1dWlkLGlkZW50aWZpZXJzOihpZGVudGlmaWVyLGlkZW50aWZpZXJUeXBlOihuYW1lLHV1aWQsZGlzcGxheSkpLHBlcnNvbjooZGlzcGxheSxnZW5kZXIsYWdlLGJpcnRoZGF0ZSkpLGxvY2F0aW9uOihkaXNwbGF5KSxlbmNvdW50ZXJzOihkaXNwbGF5LGVuY291bnRlckRhdGV0aW1lLHZvaWRlZCxlbmNvdW50ZXJUeXBlOihkaXNwbGF5KSxlbmNvdW50ZXJQcm92aWRlcnMpLGF0dHJpYnV0ZXMpYDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEdldCB2aXNpdHMgZm9yIGEgcGF0aWVudFxyXG4gICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gUGF0aWVudCB1dWlkXHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICByZWNlbnRWaXNpdHMoYmFzZVVSTDogc3RyaW5nLCBpZCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS92aXNpdD9wYXRpZW50PSR7aWR9JnY9ZnVsbGA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXQgdmlzaXRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB1dWlkIC0gVmlzaXQgdXVpZFxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHYgLSByZXNwb25zZSB2ZXJzaW9uIGZvcm1hdFxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgZmV0Y2hWaXNpdERldGFpbHMoXHJcbiAgICBiYXNlVVJMOiBzdHJpbmcsIFxyXG4gICAgdXVpZCxcclxuICAgIHYgPSBcImN1c3RvbToobG9jYXRpb246KGRpc3BsYXkpLHV1aWQsZGlzcGxheSxzdGFydERhdGV0aW1lLGRhdGVDcmVhdGVkLHN0b3BEYXRldGltZSxlbmNvdW50ZXJzOihkaXNwbGF5LHV1aWQsZW5jb3VudGVyRGF0ZXRpbWUsZW5jb3VudGVyVHlwZTooZGlzcGxheSksb2JzOihkaXNwbGF5LHV1aWQsdmFsdWUsY29uY2VwdDoodXVpZCxkaXNwbGF5KSksZW5jb3VudGVyUHJvdmlkZXJzOihkaXNwbGF5LHByb3ZpZGVyOih1dWlkLGF0dHJpYnV0ZXMscGVyc29uOih1dWlkLGRpc3BsYXksZ2VuZGVyLGFnZSkpKSkscGF0aWVudDoodXVpZCxpZGVudGlmaWVyczooaWRlbnRpZmllcixpZGVudGlmaWVyVHlwZToobmFtZSx1dWlkLGRpc3BsYXkpKSxhdHRyaWJ1dGVzLHBlcnNvbjooZGlzcGxheSxnZW5kZXIsYWdlKSksYXR0cmlidXRlcylcIlxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS92aXNpdC8ke3V1aWR9P3Y9JHt2fWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXQgdmlzaXRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB1dWlkIC0gVmlzaXQgdXVpZFxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHYgLSByZXNwb25zZSB2ZXJzaW9uIGZvcm1hdFxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgZmV0Y2hWaXNpdERldGFpbHMyKFxyXG4gICAgZXh0ZXJuYWxQcmVzY3JpcHRpb25DcmVkOiBzdHJpbmcsXHJcbiAgICBiYXNlVVJMOiBzdHJpbmcsIFxyXG4gICAgdXVpZDogc3RyaW5nLFxyXG4gICAgdjogc3RyaW5nID0gXCJjdXN0b206KGxvY2F0aW9uOihkaXNwbGF5KSx1dWlkLGRpc3BsYXksc3RhcnREYXRldGltZSxkYXRlQ3JlYXRlZCxzdG9wRGF0ZXRpbWUsZW5jb3VudGVyczooZGlzcGxheSx1dWlkLGVuY291bnRlckRhdGV0aW1lLGVuY291bnRlclR5cGU6KGRpc3BsYXkpLG9iczooZGlzcGxheSx1dWlkLHZhbHVlLGNvbmNlcHQ6KHV1aWQsZGlzcGxheSkpLGVuY291bnRlclByb3ZpZGVyczooZGlzcGxheSxwcm92aWRlcjoodXVpZCxhdHRyaWJ1dGVzLHBlcnNvbjoodXVpZCxkaXNwbGF5LGdlbmRlcixhZ2UpKSkpLHBhdGllbnQ6KHV1aWQsaWRlbnRpZmllcnM6KGlkZW50aWZpZXIsaWRlbnRpZmllclR5cGU6KG5hbWUsdXVpZCxkaXNwbGF5KSksYXR0cmlidXRlcyxwZXJzb246KGRpc3BsYXksZ2VuZGVyLGFnZSkpLGF0dHJpYnV0ZXMpXCJcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzID0gaGVhZGVycy5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIGV4dGVybmFsUHJlc2NyaXB0aW9uQ3JlZCk7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS92aXNpdC8ke3V1aWR9P3Y9JHt2fWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIHsgaGVhZGVycyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogR2V0IHZpc2l0XHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gdXVpZCAtIFZpc2l0IHV1aWRcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB2IC0gcmVzcG9uc2UgZm9ybWF0XHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICBmZXRjaFZpc2l0UGF0aWVudChleHRlcm5hbFByZXNjcmlwdGlvbkNyZWQ6IHN0cmluZywgYmFzZVVSTDogc3RyaW5nLCB1dWlkOiBzdHJpbmcsIHY6IHN0cmluZyA9IFwiY3VzdG9tOih1dWlkLHBhdGllbnQ6KGF0dHJpYnV0ZXMsaWRlbnRpZmllcnM6KGlkZW50aWZpZXIsaWRlbnRpZmllclR5cGU6KG5hbWUsdXVpZCxkaXNwbGF5KSkpKVwiKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgaGVhZGVycyA9IGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBleHRlcm5hbFByZXNjcmlwdGlvbkNyZWQpO1xyXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vdmlzaXQvJHt1dWlkfT92PSR7dn1gO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7IGhlYWRlcnMgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEdldCB2aXNpdFxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHV1aWQgLSBWaXNpdCB1dWlkXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gdiAtIHJlc3BvbnNlIHZlcnNpb24gZm9ybWF0XHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICBnZXRWaXNpdERldGFpbHMoXHJcbiAgICBiYXNlVVJMOiBzdHJpbmcsIFxyXG4gICAgdXVpZDogc3RyaW5nLFxyXG4gICAgdjogc3RyaW5nID0gXCJjdXN0b206KGxvY2F0aW9uOihkaXNwbGF5KSx1dWlkLGRpc3BsYXksc3RhcnREYXRldGltZSxzdG9wRGF0ZXRpbWUsZW5jb3VudGVyczooZGlzcGxheSx1dWlkLGVuY291bnRlckRhdGV0aW1lLGVuY291bnRlclR5cGU6KGRpc3BsYXkpLG9iczooZGlzcGxheSx1dWlkLHZhbHVlKSxlbmNvdW50ZXJQcm92aWRlcnM6KGRpc3BsYXkscHJvdmlkZXI6KHV1aWQscGVyc29uOih1dWlkLGRpc3BsYXksZ2VuZGVyLGFnZSksYXR0cmlidXRlcykpKSxwYXRpZW50Oih1dWlkLGlkZW50aWZpZXJzOihpZGVudGlmaWVyLGlkZW50aWZpZXJUeXBlOihuYW1lLHV1aWQsZGlzcGxheSkpLHBlcnNvbjooZGlzcGxheSxnZW5kZXIsYWdlKSkpXCJcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vdmlzaXQvJHt1dWlkfT92PSR7dn1gO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogR2V0IHZpc2l0IGF0dHJpYnV0ZXNcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB2aXNpdElkIC0gVmlzaXQgdXVpZFxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgZ2V0QXR0cmlidXRlKGJhc2VVUkw6IHN0cmluZywgdmlzaXRJZCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS92aXNpdC8ke3Zpc2l0SWR9L2F0dHJpYnV0ZWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBQb3N0IHZpc2l0IGF0dHJpYnV0ZVxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHZpc2l0SWQgLSBWaXNpdCB1dWlkXHJcbiAgKiBAcGFyYW0ge2FueX0ganNvbiAtIEF0dHJpYnV0ZSBwYXlsb2FkXHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICBwb3N0QXR0cmlidXRlKGJhc2VVUkw6IHN0cmluZywgdmlzaXRJZCwganNvbik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS92aXNpdC8ke3Zpc2l0SWR9L2F0dHJpYnV0ZWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBqc29uKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVXBkYXRlIHZpc2l0IGF0dHJpYnV0ZVxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHZpc2l0SWQgLSBWaXNpdCB1dWlkXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVXVpZCAtIFZpc2l0IGF0dHJpYnV0ZSB1dWlkXHJcbiAgKiBAcGFyYW0ge2FueX0ganNvbiAtIEF0dHJpYnV0ZSBwYXlsb2FkXHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICB1cGRhdGVBdHRyaWJ1dGUoYmFzZVVSTDogc3RyaW5nLCB2aXNpdElkLCBhdHRyaWJ1dGVVdWlkLCBqc29uKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVUkx9L3Zpc2l0LyR7dmlzaXRJZH0vYXR0cmlidXRlLyR7YXR0cmlidXRlVXVpZH1gO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwganNvbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIERlbGV0ZSB2aXNpdCBhdHRyaWJ1dGVcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB2aXNpdElkIC0gVmlzaXQgdXVpZFxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHV1aWQgLSBWaXNpdCBhdHRyaWJ1dGUgdXVpZFxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgZGVsZXRlQXR0cmlidXRlKGJhc2VVUkw6IHN0cmluZywgdmlzaXRJZCwgdXVpZCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS92aXNpdC8ke3Zpc2l0SWR9L2F0dHJpYnV0ZS8ke3V1aWR9YDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEdldCBwYXRpZW50IGRldGFpbHNcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIFBhdGllbnQgdXVpZFxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHYgLSByZXNwb25zZSBmb3JtYXRcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIHBhdGllbnRJbmZvKGJhc2VVUkw6IHN0cmluZywgaWQsIHYgPSAnY3VzdG9tOih1dWlkLGF0dHJpYnV0ZXMsaWRlbnRpZmllcnMscGVyc29uOih1dWlkLGRpc3BsYXksZ2VuZGVyLHByZWZlcnJlZE5hbWU6KGdpdmVuTmFtZSxmYW1pbHlOYW1lLG1pZGRsZU5hbWUpLGJpcnRoZGF0ZSxhZ2UscHJlZmVycmVkQWRkcmVzczooY2l0eVZpbGxhZ2UsYWRkcmVzczEsYWRkcmVzczIsY291bnRyeSxzdGF0ZVByb3ZpbmNlLGNvdW50eURpc3RyaWN0LHBvc3RhbENvZGUpLGF0dHJpYnV0ZXM6KHZhbHVlLGF0dHJpYnV0ZVR5cGU6KGRpc3BsYXkpKSkpJyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vcGF0aWVudC8ke2lkfT92PSR7dn1gO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogR2V0IHdoYXRzYXBwIGxpbmtcclxuICAqIEBwYXJhbSB7c3RyaW5nfSB3aGF0c2FwcCAtIFdoYXRzcHAgbnVtYmVyXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gbXNnIC0gTWVzc2FnZSB0byBiZSBzZW50XHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICBnZXRXaGF0c2FwcExpbmsod2hhdHNhcHA6IHN0cmluZywgbXNnOiBzdHJpbmcgPSBgSGVsbG8gSSdtIGNhbGxpbmcgZm9yIGNvbnN1bHRhdGlvbmApIHtcclxuICAgIGxldCB0ZXh0ID0gZW5jb2RlVVJJKG1zZyk7XHJcbiAgICBsZXQgd2hhdHNhcHBMaW5rID0gYGh0dHBzOi8vd2EubWUvJHt3aGF0c2FwcH0/dGV4dD0ke3RleHR9YDtcclxuICAgIHJldHVybiB3aGF0c2FwcExpbms7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFBhcnNlIG9ic2VydmF0aW9uIGRhdGFcclxuICAqIEBwYXJhbSB7YW55fSBkYXRhIC0gT2JzZXJ2YXRpb24gZGF0YVxyXG4gICogQHJldHVybiB7YW55fSAtIE9ic2VydmF0aW9uIGRhdGEgd2l0aCBwYXJzZWQgdmFsdWVcclxuICAqL1xyXG4gIGdldERhdGEoZGF0YTogYW55KSB7XHJcbiAgICBpZiAoZGF0YT8udmFsdWUudG9TdHJpbmcoKS5zdGFydHNXaXRoKFwie1wiKSkge1xyXG4gICAgICBsZXQgdmFsdWUgPSBKU09OLnBhcnNlKGRhdGEudmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgIGRhdGEudmFsdWUgPSB2YWx1ZVtcImVuXCJdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFBhcnNlIGN1c3RvbSBvYnNlcnZhdGlvbiBkYXRhXHJcbiAgKiBAcGFyYW0ge2FueX0gZGF0YSAtIEN1c3RvbSBvYnNlcnZhdGlvbiBkYXRhXHJcbiAgKiBAcmV0dXJuIHthbnl9IC0gT2JzZXJ2YXRpb24gZGF0YSB3aXRoIHBhcnNlZCB2YWx1ZVxyXG4gICovXHJcbiAgZ2V0RGF0YTIoZGF0YTogYW55KSB7XHJcbiAgICBpZiAoZGF0YT8udmFsdWVfdGV4dC50b1N0cmluZygpLnN0YXJ0c1dpdGgoXCJ7XCIpKSB7XHJcbiAgICAgIGxldCB2YWx1ZSA9IEpTT04ucGFyc2UoZGF0YS52YWx1ZV90ZXh0LnRvU3RyaW5nKCkpO1xyXG4gICAgICBkYXRhLnZhbHVlX3RleHQgPSB2YWx1ZVtcImVuXCJdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEdldCBhd2FpdGluZyB2aXNpdHNcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBzcGVjaWFsaXR5IC0gVmlzaXQgc3BlY2lhbGl0eVxyXG4gICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgLSBQYWdlIG51bWJlclxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgZ2V0QXdhaXRpbmdWaXNpdHMobWluZG1hcFVSTDogc3RyaW5nLCBzcGVjaWFsaXR5OiBzdHJpbmcsIHBhZ2U6IG51bWJlciA9IDEpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7bWluZG1hcFVSTH0vb3Blbm1ycy9nZXRBd2FpdGluZ1Zpc2l0cz9zcGVjaWFsaXR5PSR7c3BlY2lhbGl0eX0mcGFnZT0ke3BhZ2V9YCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEdldCBwcmlvcml0eSB2aXNpdHNcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBzcGVjaWFsaXR5IC0gVmlzaXQgc3BlY2lhbGl0eVxyXG4gICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgLSBQYWdlIG51bWJlclxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgZ2V0UHJpb3JpdHlWaXNpdHMobWluZG1hcFVSTDogc3RyaW5nLCBzcGVjaWFsaXR5OiBzdHJpbmcsIHBhZ2U6IG51bWJlciA9IDEpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7bWluZG1hcFVSTH0vb3Blbm1ycy9nZXRQcmlvcml0eVZpc2l0cz9zcGVjaWFsaXR5PSR7c3BlY2lhbGl0eX0mcGFnZT0ke3BhZ2V9YCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEdldCBpbnByb2dyZXNzIHZpc2l0c1xyXG4gICogQHBhcmFtIHtzdHJpbmd9IHNwZWNpYWxpdHkgLSBWaXNpdCBzcGVjaWFsaXR5XHJcbiAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSAtIFBhZ2UgbnVtYmVyXHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuICBnZXRJblByb2dyZXNzVmlzaXRzKG1pbmRtYXBVUkw6IHN0cmluZywgc3BlY2lhbGl0eTogc3RyaW5nLCBwYWdlOiBudW1iZXIgPSAxKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke21pbmRtYXBVUkx9L29wZW5tcnMvZ2V0SW5Qcm9ncmVzc1Zpc2l0cz9zcGVjaWFsaXR5PSR7c3BlY2lhbGl0eX0mcGFnZT0ke3BhZ2V9YCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEdldCBjb21wbGV0ZWQgdmlzaXRzXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gc3BlY2lhbGl0eSAtIFZpc2l0IHNwZWNpYWxpdHlcclxuICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIC0gUGFnZSBudW1iZXJcclxuICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAqL1xyXG4gIGdldENvbXBsZXRlZFZpc2l0cyhtaW5kbWFwVVJMOiBzdHJpbmcsIHNwZWNpYWxpdHk6IHN0cmluZywgcGFnZTogbnVtYmVyID0gMSwgY291bnRPbmx5OmJvb2xlYW4gPSBmYWxzZSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHttaW5kbWFwVVJMfS9vcGVubXJzL2dldENvbXBsZXRlZFZpc2l0cz9zcGVjaWFsaXR5PSR7c3BlY2lhbGl0eX0mcGFnZT0ke3BhZ2V9JmNvdW50T25seT0ke2NvdW50T25seX1gKTtcclxuICB9XHJcblxyXG4gLyoqXHJcbiAgKiBHZXQgZm9sbG93IHVwIHZpc2l0c1xyXG4gICogQHBhcmFtIHtzdHJpbmd9IHNwZWNpYWxpdHkgLSBWaXNpdCBzcGVjaWFsaXR5XHJcbiAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSAtIFBhZ2UgbnVtYmVyXHJcbiAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgKi9cclxuIGdldEZvbGxvd1VwVmlzaXRzKG1pbmRtYXBVUkw6IHN0cmluZywgc3BlY2lhbGl0eTogc3RyaW5nLCBwYWdlOiBudW1iZXIgPSAxLCBjb3VudE9ubHk6Ym9vbGVhbiA9IGZhbHNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICByZXR1cm4gdGhpcy5odHRwLmdldChgJHttaW5kbWFwVVJMfS9vcGVubXJzL2dldEZvbGxvd1VwVmlzaXRzP3NwZWNpYWxpdHk9JHtzcGVjaWFsaXR5fSZwYWdlPSR7cGFnZX0mY291bnRPbmx5PSR7Y291bnRPbmx5fWApO1xyXG4gfVxyXG5cclxuICAvKipcclxuICAqIEdldCBlbmRlZCB2aXNpdHNcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBzcGVjaWFsaXR5IC0gVmlzaXQgc3BlY2lhbGl0eVxyXG4gICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgLSBQYWdlIG51bWJlclxyXG4gICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICovXHJcbiAgZ2V0RW5kZWRWaXNpdHMobWluZG1hcFVSTDogc3RyaW5nLCBzcGVjaWFsaXR5OiBzdHJpbmcsIHBhZ2U6IG51bWJlciA9IDEpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7bWluZG1hcFVSTH0vb3Blbm1ycy9nZXRFbmRlZFZpc2l0cz9zcGVjaWFsaXR5PSR7c3BlY2lhbGl0eX0mcGFnZT0ke3BhZ2V9YCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQb3N0IHZpc2l0IGRhdGEgdG8gYWJkbVxyXG4gICAqIEBwYXJhbSB7YW55fSBqc29uIC0gQXR0cmlidXRlIHBheWxvYWRcclxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgICovXHJcbiAgcG9zdFZpc2l0VG9BQkRNKGJhc2VVUkxBYmhhOiBzdHJpbmcsIGpzb246IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMQWJoYX0vYWJoYS9wb3N0LWNhcmUtY29udGV4dGBcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGpzb24pO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0TWVkaWNpbmVEaXNwbGF5KG1lZGljaW5lOiBzdHJpbmcsIHV1aWQ/OiBzdHJpbmcpOiBvYmplY3Qge1xyXG4gICAgY29uc3Qgc3BsaXRNZWQgPSBtZWRpY2luZT8uc3BsaXQ/LignOicpO1xyXG4gICAgbGV0IG1lZDogYW55ID0ge1xyXG4gICAgICBkcnVnOiBzcGxpdE1lZD8uWzBdID8/ICctJyxcclxuICAgICAgZG9zZTogc3BsaXRNZWQ/LlsxXSA/PyAnLScgICxcclxuICAgICAgZHVyYXRpb25Obzogc3BsaXRNZWQ/LlsyXSA/PyAnLScsXHJcbiAgICAgIGR1cmF0aW9uVW5pdDogc3BsaXRNZWQ/LlszXSA/PyAnLScsXHJcbiAgICAgIGluc3RydWN0UmVtYXJrOiBzcGxpdE1lZD8uWzRdID8/ICctJyxcclxuICAgICAgZnJlcXVlbmN5OiBzcGxpdE1lZD8uWzVdID8/ICctJ1xyXG4gICAgfTtcclxuICAgIGlmICh1dWlkKSBtZWQudXVpZCA9IHV1aWQ7XHJcbiAgICByZXR1cm4gbWVkO1xyXG4gIH1cclxufVxyXG4iXX0=