import { OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppConfigService } from '../lib/services/app-config.service';
import { VisitService } from '../lib/services/visit.service';
import { DiagnosisService } from '../lib/services/diagnosis.service';
import { ProfileService } from '../lib/services/profile.service';
import { DiagnosisModel, EncounterModel, FollowUpDataModel, MedicineModel, ObsModel, PatientModel, PatientVisitSection, ReferralModel, TestModel, VisitAttributeModel, VisitModel, VitalModel } from './model/model';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EnvConfigService } from './services/env.service';
import * as i0 from "@angular/core";
export declare class LibPresciptionComponent implements OnInit, OnDestroy {
    data: any;
    private dialogRef;
    appConfigService: AppConfigService;
    private translateService;
    private visitService;
    private diagnosisService;
    private profileService;
    private envService;
    isDownloadPrescription: boolean;
    visitId: string;
    download: Observable<any>;
    envProduction: boolean;
    configPublicURL: string;
    baseUrl: string;
    logoImageURL: string;
    hwPhoneNo: string;
    visit: VisitModel;
    patient: PatientModel;
    pvsConfigs: PatientVisitSection[];
    pvsConstant: {
        additional_documents: {
            logo: string;
            key: string;
        };
        additional_notes: {
            logo: string;
            key: string;
        };
        check_up_reason: {
            logo: string;
            key: string;
        };
        consultation_details: {
            logo: string;
            key: string;
        };
        medical_history: {
            logo: string;
            key: string;
        };
        physical_examination: {
            logo: string;
            key: string;
        };
        refer_to_specialist: {
            logo: string;
            key: string;
        };
        vitals: {
            logo: string;
            key: string;
        };
        diagnostics: {
            logo: string;
            key: string;
        };
    };
    patientRegFields: string[];
    completedEncounter: EncounterModel;
    visitNotePresent: EncounterModel;
    spokenWithPatient: string;
    notes: ObsModel[];
    medicines: MedicineModel[];
    existingDiagnosis: DiagnosisModel[];
    advices: ObsModel[];
    additionalInstructions: ObsModel[];
    tests: TestModel[];
    referrals: ReferralModel[];
    followUp: FollowUpDataModel;
    consultedDoctor: any;
    followUpInstructions: ObsModel[];
    dignosisSecondary: any;
    referralSecondary: string;
    conceptDiagnosis: string;
    conceptNote: string;
    conceptMed: string;
    conceptAdvice: string;
    conceptTest: string;
    conceptReferral: string;
    conceptFollow: string;
    conceptFollowUpInstruction: string;
    conceptDiscussionSummary: 'b673cd54-a01d-4d8a-9c07-8fb19bf4982c';
    signaturePicUrl: string;
    signatureFile: any;
    cheifComplaints: string[];
    vitalObs: ObsModel[];
    vitals: VitalModel[];
    hasVitalsEnabled: boolean;
    hasPatientOtherEnabled: boolean;
    hasPatientAddressEnabled: boolean;
    visitStatus: string;
    clinicName: string;
    providerName: string;
    eventsSubscription: any;
    prodBoolean: boolean;
    discussionSummary: string;
    checkUpReasonData: any;
    recommendation: {
        uuid: string;
        value: any;
    };
    brandName: boolean;
    constructor(data: any, dialogRef: MatDialogRef<LibPresciptionComponent>, appConfigService: AppConfigService, translateService: TranslateService, visitService: VisitService, diagnosisService: DiagnosisService, profileService: ProfileService, envService: EnvConfigService);
    ngOnInit(): void;
    /**
    * Get visit
    * @param {string} uuid - Visit uuid
    * @returns {void}
    */
    getVisit(uuid: string): void;
    /**
     * Get chief complaints and patient visit reason/summary
     * @param {EncounterModel[]} encounters - Array of encounters
     * @return {void}
     */
    getCheckUpReason(encounters: EncounterModel[]): void;
    /**
    * Get vital observations from the vital encounter
    * @param {EncounterModel[]} encounters - Array of encounters
    * @return {void}
    */
    getVitalObs(encounters: EncounterModel[]): void;
    /**
    * Check if patient interaction visit attrubute present or not
    * @param {VisitAttributeModel[]} attributes - Array of visit attributes
    * @returns {void}
    */
    checkIfPatientInteractionPresent(attributes: VisitAttributeModel[]): void;
    /**
    * Get diagnosis for the visit
    * @returns {void}
    */
    checkIfDiagnosisPresent(): void;
    /**
    * Get notes for the visit
    * @returns {void}
    */
    checkIfNotePresent(): void;
    /**
  * Get discussion summary present
  * @returns {void}
  */
    checkIfDiscussionSummaryPresent(): void;
    /**
    * Get medicines for the visit
    * @returns {void}
    */
    checkIfMedicationPresent(): void;
    /**
    * Get advices for the visit
    * @returns {void}
    */
    checkIfAdvicePresent(): void;
    /**
    * Get tests for the visit
    * @returns {void}
    */
    checkIfTestPresent(): void;
    /**
    * Get referrals for the visit
    * @returns {void}
    */
    checkIfReferralPresent(): void;
    /**
   * Get Recommendation for the visit
   * @returns {void}
   */
    checkIfRecommendationPresent(): void;
    /**
    * Get followup for the visit
    * @returns {void}
    */
    checkIfFollowUpPresent(): void;
    /**
    * Get patient identifier for a given identifier type
    * @param {string} identifierType - Identifier type
    * @returns {string} - Patient identifier for a given identifier type
    */
    getPatientIdentifier(identifierType: string): string;
    /**
    * Check visit status
    * @param {EncounterModel[]} encounters - Array of encounters
    * @return {void}
    */
    checkVisitStatus(encounters: EncounterModel[]): void;
    /**
    * Get encounter for a given encounter type
    * @param {EncounterModel[]} encounters - Array of encounters
    * @param {string} encounterType - Encounter type
    * @return {EncounterModel} - Encounter for a given encounter type
    */
    checkIfEncounterExists(encounters: EncounterModel[], encounterType: string): EncounterModel;
    /**
    * Get age of patient from birthdate
    * @param {string} birthdate - Birthdate
    * @return {string} - Age
    */
    getAge(birthdate: string): string;
    /**
    * Get person attribute value for a given attribute type
    * @param {str'} attrType - Person attribute type
    * @return {any} - Value for a given attribute type
    */
    getPersonAttributeValue(attrType: string): any;
    /**
    * Replcae the string charaters with *
    * @param {string} str - Original string
    * @return {string} - Modified string
    */
    replaceWithStar(str: string): string;
    /**
    * Get visit provider details
    * @param {EncounterModel[]} encounters - Array of visit encounters
    * @return {void}
    */
    getVisitProvider(encounters: EncounterModel[]): void;
    /**
    * Close modal
    * @param {boolean} val - Dialog result
    * @return {void}
    */
    close(val: boolean): void;
    /**
    * Getter for is prescription modal
    * @return {boolean} - True if prescription modal else false
    */
    get isPrescriptionModal(): boolean;
    /**
    * Getter for doctor provider attributes
    * @return {ProviderAttributeModel[]} - Doctor provider attributes
    */
    get attributes(): any;
    /**
    * Getter for signature type
    * @return {any} - Signature type
    */
    get signatureType(): any;
    /**
    * Getter for signature
    * @return {any} - Signature
    */
    get signature(): any;
    /**
    * Detect MIME type from the base 64 url
    * @param {string} b64 - Base64 url
    * @return {string} - MIME type
    */
    detectMimeType(b64: string): string;
    /**
    * Set signature
    * @param {string} signature - Signature
    * @param {string} signatureType - Signature type
    * @return {void}
    */
    setSignature(signature: RequestInfo, signatureType: any): void;
    /**
    * Get rows for make pdf doc defination for a given type
    * @param {string} type - row type
    * @return {any} - Rows
    */
    getRecords(type: string): any[];
    toObjectUrl(url: string): Promise<unknown>;
    ngOnDestroy(): void;
    /**
   * Get vital value for a given vital uuid
   * @param {string} uuid - Vital uuid
   * @return {any} - Obs value
   */
    getObsValue(uuid: string, key?: string): any;
    checkPatientRegField(fieldName: string): boolean;
    get shouldShowProfilePhoto(): boolean;
    getPersonalInfo(): {
        colSpan: number;
        layout: string;
        table: {
            widths: string[];
            body: (string | {
                colSpan: number;
                text: string;
                style: string;
            })[][];
        };
    };
    getAddress(): {
        colSpan: number;
        layout: string;
        table: {
            widths: string[];
            body: any[];
        };
    };
    getOtherInfo(): {
        colSpan: number;
        layout: string;
        table: {
            widths: string[];
            body: any[];
        };
    };
    checkIsVisibleSection(pvsConfig: {
        key: string;
        is_enabled: boolean;
    }): {
        is_enabled: boolean;
        expanded: boolean;
    };
    /**
     * Retrieve the appropriate language value from an element.
     * @param {any} element - An object containing `lang` and `name`.
     * @return {string} - The value in the selected language or the first available one.
     * Defaults to `element.name` if no language value is found.
     */
    getLanguageValue(element: any): string;
    isFeatureAvailable(featureName: string, notInclude?: boolean): boolean;
    renderReferralSectionPDF(): {
        widths: string[];
        headerRows: number;
        body: any[];
    };
    /**
    * Get followUpInstructions for the visit
    * @returns {void}
    */
    checkIfFollowUpInstructionsPresent(): void;
    getDoctorRecommandation(): (string | {
        colSpan: number;
        table: {
            widths: (string | number)[];
            headerRows: number;
            body: (({
                image: string;
                width: number;
                height: number;
                border: boolean[];
                text?: undefined;
                style?: undefined;
            } | {
                text: string;
                style: string;
                border: boolean[];
                image?: undefined;
                width?: undefined;
                height?: undefined;
            })[] | {
                colSpan: number;
                table: {
                    widths: string[];
                    headerRows: number;
                    body: any[];
                };
                layout: string;
            }[] | (string | {
                text: string;
                style: string;
                colSpan: number;
            })[] | {
                colSpan: number;
                ul: any[];
            }[])[];
        };
        layout: {
            defaultBorder: boolean;
        };
    })[][];
    /**
   * Download prescription
   * @return {Promise<void>}
   */
    downloadPrescription(): Promise<void>;
    generatePdf(): Promise<{
        pageSize: string;
        pageOrientation: string;
        pageMargins: number[];
        watermark: {
            text: string;
            color: string;
            opacity: number;
            bold: boolean;
            italics: boolean;
            angle: number;
            fontSize: number;
        };
        header: {
            columns: ({
                text: string;
                image?: undefined;
                width?: undefined;
                height?: undefined;
                alignment?: undefined;
                margin?: undefined;
            } | {
                image: any;
                width: number;
                height: number;
                alignment: string;
                margin: number[];
                text?: undefined;
            })[];
        };
        footer: (currentPage: {
            toString: () => string;
        }, pageCount: string) => {
            columns: (({
                text: string;
                bold: boolean;
                fontSize: number;
                margin: number[];
            } | {
                text: string;
                fontSize: number;
                margin: number[];
                bold?: undefined;
            })[] | {
                text: string;
                width: string;
                fontSize: number;
                margin: number[];
                alignment: string;
            })[];
        };
        content: {
            style: string;
            table: {
                widths: string[];
                body: ((string | {
                    colSpan: number;
                    table: {
                        widths: (string | number)[];
                        headerRows: number;
                        body: (({
                            image: string;
                            width: number;
                            height: number;
                            border: boolean[];
                            text?: undefined;
                            style?: undefined;
                        } | {
                            text: string;
                            style: string;
                            border: boolean[];
                            image?: undefined;
                            width?: undefined;
                            height?: undefined;
                        })[] | {
                            colSpan: number;
                            table: {
                                widths: string[];
                                headerRows: number;
                                body: any[];
                            };
                            layout: string;
                        }[] | (string | {
                            text: string;
                            style: string;
                            colSpan: number;
                        })[] | {
                            colSpan: number;
                            ul: any[];
                        }[])[];
                    };
                    layout: {
                        defaultBorder: boolean;
                    };
                })[] | {
                    colSpan: number;
                    layout: string;
                    table: {
                        widths: string[];
                        body: any[];
                    };
                }[] | ({
                    colSpan: number;
                    table: {
                        widths: (string | number)[];
                        headerRows: number;
                        body: (({
                            image: string;
                            width: number;
                            height: number;
                            border: boolean[];
                            text?: undefined;
                            style?: undefined;
                        } | {
                            text: string;
                            style: string;
                            border: boolean[];
                            image?: undefined;
                            width?: undefined;
                            height?: undefined;
                        })[] | {
                            colSpan: number;
                            table: {
                                widths: string[];
                                headerRows: number;
                                body: any[][];
                            };
                            layout: string;
                        }[])[];
                    };
                    layout: {
                        defaultBorder: boolean;
                    };
                } | {
                    colSpan?: undefined;
                    table?: undefined;
                    layout?: undefined;
                })[] | (string | {
                    colSpan: number;
                    fillColor: string;
                    text: string;
                    alignment: string;
                    style: string;
                })[] | (string | {
                    colSpan: number;
                    sectionName: string;
                    table: {
                        widths: (string | number)[];
                        headerRows: number;
                        body: (({
                            image: string;
                            width: number;
                            height: number;
                            border: boolean[];
                            text?: undefined;
                            style?: undefined;
                        } | {
                            text: string;
                            style: string;
                            border: boolean[];
                            image?: undefined;
                            width?: undefined;
                            height?: undefined;
                        })[] | {
                            colSpan: number;
                            ul: any[];
                        }[])[];
                    };
                    layout: {
                        defaultBorder: boolean;
                    };
                })[] | (string | {
                    colSpan: number;
                    sectionName: string;
                    table: {
                        widths: (string | number)[];
                        headerRows: number;
                        body: (({
                            image: string;
                            width: number;
                            height: number;
                            border: boolean[];
                            text?: undefined;
                            style?: undefined;
                        } | {
                            text: string;
                            style: string;
                            border: boolean[];
                            image?: undefined;
                            width?: undefined;
                            height?: undefined;
                        })[] | {
                            colSpan: number;
                            table: {
                                widths: string[];
                                headerRows: number;
                                body: any[];
                            };
                            layout: string;
                        }[])[];
                    };
                    layout: {
                        defaultBorder: boolean;
                    };
                })[] | (string | {
                    colSpan: number;
                    alignment: string;
                    stack: ({
                        image: string;
                        width: number;
                        height: number;
                        margin: number[];
                        text?: undefined;
                    } | {
                        text: string;
                        margin: number[];
                        image?: undefined;
                        width?: undefined;
                        height?: undefined;
                    } | {
                        text: string;
                        image?: undefined;
                        width?: undefined;
                        height?: undefined;
                        margin?: undefined;
                    })[];
                })[])[];
            };
            layout: string;
        }[];
        images: any;
        styles: {
            header: {
                fontSize: number;
                bold: boolean;
                margin: number[];
                font: string;
            };
            subheader: {
                fontSize: number;
                bold: boolean;
                margin: number[];
                font: string;
            };
            subsubheader: {
                fontSize: number;
                bold: boolean;
                margin: number[];
                font: string;
            };
            pval: {
                fontSize: number;
                margin: number[];
                font: string;
            };
            tableExample: {
                margin: number[];
                fontSize: number;
                font: string;
            };
            tableHeader: {
                bold: boolean;
                fontSize: number;
                color: string;
                font: string;
            };
            sectionheader: {
                fontSize: number;
                bold: boolean;
                margin: number[];
                font: string;
            };
        };
        defaultStyle: {
            font: string;
        };
        fonts: {
            DmSans: {
                normal: string;
                bold: string;
                italics: string;
                bolditalics: string;
            };
        };
    }>;
    getDiscussionSummary(): (string | {
        colSpan: number;
        sectionName: string;
        table: {
            widths: (string | number)[];
            headerRows: number;
            body: (({
                image: string;
                width: number;
                height: number;
                border: boolean[];
                text?: undefined;
                style?: undefined;
            } | {
                text: string;
                style: string;
                border: boolean[];
                image?: undefined;
                width?: undefined;
                height?: undefined;
            })[] | {
                colSpan: number;
                ul: {
                    text: string;
                    margin: number[];
                }[];
            }[])[];
        };
        layout: {
            defaultBorder: boolean;
        };
    })[][];
    getDiagnosis(): ({
        colSpan: number;
        table: {
            widths: (string | number)[];
            headerRows: number;
            body: (({
                image: string;
                width: number;
                height: number;
                border: boolean[];
                text?: undefined;
                style?: undefined;
            } | {
                text: string;
                style: string;
                border: boolean[];
                image?: undefined;
                width?: undefined;
                height?: undefined;
            })[] | {
                colSpan: number;
                table: {
                    widths: string[];
                    headerRows: number;
                    body: any[][];
                };
                layout: string;
            }[])[];
        };
        layout: {
            defaultBorder: boolean;
        };
    } | {
        colSpan?: undefined;
        table?: undefined;
        layout?: undefined;
    })[];
    static ɵfac: i0.ɵɵFactoryDeclaration<LibPresciptionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LibPresciptionComponent, "lib-presciption", never, { "isDownloadPrescription": "isDownloadPrescription"; "visitId": "visitId"; "download": "download"; }, {}, never, never, true>;
}
