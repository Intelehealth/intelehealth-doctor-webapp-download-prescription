import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class LibPresciptionService {
    private http;
    private dialog;
    private baseURL;
    mimeTypes: any;
    constructor(http: HttpClient, dialog: MatDialog, environment: any);
    fetchVisitDetails(uuid: string, v?: string): Observable<any>;
    /**
    * Get patient details
    * @param {string} id - Patient uuid
    * @param {string} v - response format
    * @return {Observable<any>}
    */
    patientInfo(id: string, v?: string): Observable<any>;
    /**
    * Parse observation data
    * @param {any} data - Observation data
    * @return {any} - Observation data with parsed value
    */
    getData(data: any): any;
    /**
    * Open view visit prescription modal
    * @param {{ uuid: string }} data - Dialog data
    * @return {Observable<any>} - Dialog result
    */
    openVisitPrescriptionModal(data: {
        uuid: string;
    }): Observable<any>;
    /**
    * Return MIME type for give base64 string
    * @param {string} b64 - Base64 string
    * @return {string} - MIME type
    */
    detectMimeType(b64: string): any;
    /**
    * Get observations for a given concept id and patient id
    * @param {string} patientId - Patient uuid
    * @param {string} conceptId - Concept uuid
    * @return {Observable<any>}
    */
    getObs(patientId: string, conceptId: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LibPresciptionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LibPresciptionService>;
}
