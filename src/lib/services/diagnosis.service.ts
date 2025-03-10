import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { environment } from '../../environments/environment';
import { MatSnackBar } from "@angular/material/snack-bar";
import { getCacheData, getEncounterProviderUUID } from '../utils/utility-functions';
import { doctorDetails, conceptIds } from '../config/constant';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {
  diagnosisArray = [];
  public isVisitSummaryChanged = false
  // private baseURL = "https://dev.intelehealth.org/openmrs/ws/rest/v1"

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  /**
  * Get concept
  * @param {string} uuid - Concept uuid
  * @return {Observable<any>}
  */
  concept(baseURL: string,uuid): Observable<any> {
    const url = `${baseURL}/concept/${uuid}`;
    return this.http.get(url);
  }

  /**
  * Delete observation
  * @param {string} uuid - Observation uuid
  * @return {Observable<any>}
  */
  deleteObs(baseURL: string,uuid): Observable<any> {
    const url = `${baseURL}/obs/${uuid}`;
    return this.http.delete(url);
  }

  /**
  * Get observations for a given concept id and patient id
  * @param {string} patientId - Patient uuid
  * @param {string} conceptId - Concept uuid
  * @return {Observable<any>}
  */
  getObs(baseURL: string,patientId, conceptId): Observable<any> {
    // tslint:disable-next-line: max-line-length
    const url = `${baseURL}/obs?patient=${patientId}&v=custom:(uuid,comment,value,encounter:(visit:(uuid)))&concept=${conceptId}`;
    return this.http.get(url);
  }

  /**
  * Get diagnosis list
  * @param {string} term - Search term
  * @return {Observable<any>}
  */
  getDiagnosisList(baseURL: string,term: string): Observable<any> {
    const url = `${baseURL}/concept?class=${conceptIds.conceptDiagnosisClass}&source=ICD10&q=${term}`;
    return this.http.get(url);
  }

  /**
  * Check if logged-in doctor is same for the encounter provider
  * @return {boolean} - True if same doctor else false
  */
  isSameDoctor(): boolean {
    const providerDetails = getCacheData(true, doctorDetails.PROVIDER);
    const providerUuid = providerDetails.uuid;
    if (providerDetails && providerUuid === getEncounterProviderUUID()) {
      return true;
    } else {
      this.snackbar.open("Another doctor is viewing this case", null, {
        duration: 4000,
      });
      return false;
    }
  }
}
