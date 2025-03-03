import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from "@angular/material/snack-bar";
import * as i0 from "@angular/core";
export declare class DiagnosisService {
    private http;
    private snackbar;
    diagnosisArray: any[];
    isVisitSummaryChanged: boolean;
    constructor(http: HttpClient, snackbar: MatSnackBar);
    /**
    * Get concept
    * @param {string} uuid - Concept uuid
    * @return {Observable<any>}
    */
    concept(baseURL: string, uuid: any): Observable<any>;
    /**
    * Delete observation
    * @param {string} uuid - Observation uuid
    * @return {Observable<any>}
    */
    deleteObs(baseURL: string, uuid: any): Observable<any>;
    /**
    * Get observations for a given concept id and patient id
    * @param {string} patientId - Patient uuid
    * @param {string} conceptId - Concept uuid
    * @return {Observable<any>}
    */
    getObs(baseURL: string, patientId: any, conceptId: any): Observable<any>;
    /**
    * Get diagnosis list
    * @param {string} term - Search term
    * @return {Observable<any>}
    */
    getDiagnosisList(baseURL: string, term: string): Observable<any>;
    /**
    * Check if logged-in doctor is same for the encounter provider
    * @return {boolean} - True if same doctor else false
    */
    isSameDoctor(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DiagnosisService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DiagnosisService>;
}
