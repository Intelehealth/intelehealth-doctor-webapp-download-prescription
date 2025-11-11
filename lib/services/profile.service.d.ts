import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ProfileService {
    private http;
    mimeTypes: {
        JVBERi0: string;
        R0lGODdh: string;
        R0lGODlh: string;
        iVBORw0KGgo: string;
        '/9j/': string;
    };
    private profilePic;
    profilePicUpdateEvent: Observable<string>;
    constructor(http: HttpClient);
    /**
    * Add/update provider attribute
    * @param {string} uuid - Provider uuid
    * @param {string} attributeTypeUuid - Provider attribute type uuid
    * @param {boolean} isExistingPresent - Record for provider attribute type already exists true/false
    * @param {boolean} existingUuid - Existing provider attribute record uuid
    * @return {Observable<any>}
    */
    updateProviderAttribute(baseURL: string, uuid: string, attributeTypeUuid: string, attributeValue: string, isExistingPresent: boolean, existingUuid: string): Observable<any>;
    /**
    * Add/update person image
    * @param {Object} json - Payload to upload person image
    * @return {Observable<any>}
    */
    updateProfileImage(baseURL: string, json: object): Observable<any>;
    /**
    * Create signature
    * @param {string} providerId - Provider uuid
    * @param {string} textOfSign - Signature text
    * @param {string} fontName - Font name to be used
    * @return {Observable<any>}
    */
    creatSignature(base: string, providerId: string, textOfSign: string, fontName: string): Observable<any>;
    /**
    * Update signature
    * @param {File} file - Signature file
    * @param {string} providerId - Provider uuid
    * @return {Observable<any>}
    */
    updateSignature(base: string, file: any, providerId: string): Observable<any>;
    /**
    * Delete provider attribute
    * @param {string} uuid - Provider uuid
    * @param {string} existingUuid - Provider attribute uuid
    * @return {Observable<any>}
    */
    deleteProviderAttribute(baseURL: string, uuid: string, existingUuid: string): Observable<any>;
    /**
    * Return MIME type for give base64 string
    * @param {string} b64 - Base64 string
    * @return {string} - MIME type
    */
    detectMimeType(b64: string): any;
    /**
    * Set profile picture
    * @param {string} imageBase64 - Base64
    * @return {void}
    */
    setProfilePic(imageBase64: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProfileService>;
}
