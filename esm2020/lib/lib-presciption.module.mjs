import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { LibPresciptionComponent } from './lib-presciption.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import localeRu from '@angular/common/locales/ru';
import localeEn from '@angular/common/locales/en';
import { ToastrModule } from "ngx-toastr";
import { NgxPermissionsModule } from "ngx-permissions";
// Material Design Imports
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EnvConfigService } from './services/env.service';
import { ENV_CONFIG } from './config/config.token';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
import * as i2 from "ngx-permissions";
// import { PrescriptionModelComponent } from "./components/prescription-model/prescription-model.component";
// export function HttpLoaderFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
// }
registerLocaleData(localeRu);
registerLocaleData(localeEn);
export class LibPresciptionModule {
    static forRoot(env) {
        return {
            ngModule: LibPresciptionModule,
            providers: [
                EnvConfigService,
                { provide: ENV_CONFIG, useValue: env }
            ]
        };
    }
}
LibPresciptionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: LibPresciptionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LibPresciptionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: LibPresciptionModule, imports: [LibPresciptionComponent,
        RouterModule,
        CommonModule, i1.ToastrModule, i2.NgxPermissionsModule, MatPaginatorModule,
        MatTooltipModule,
        MatInputModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatBottomSheetModule,
        MatSnackBarModule,
        MatMenuModule,
        MatTableModule,
        MatIconModule,
        MatSidenavModule,
        MatTabsModule,
        CdkAccordionModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule], exports: [LibPresciptionComponent,
        // PrescriptionModelComponent,
        MatPaginatorModule,
        MatTooltipModule,
        MatInputModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatBottomSheetModule,
        MatSnackBarModule,
        MatMenuModule,
        MatTableModule,
        MatIconModule,
        MatSidenavModule,
        MatTabsModule,
        CdkAccordionModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPermissionsModule,
        ToastrModule,
        TranslateModule] });
LibPresciptionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: LibPresciptionModule, providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
    ], imports: [LibPresciptionComponent,
        RouterModule,
        CommonModule,
        // TranslateModule.forRoot({
        //   loader: {
        //     provide: TranslateLoader,
        //     useFactory: HttpLoaderFactory,
        //     deps: [HttpClient]
        //   }
        // }),
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            closeButton: true,
            tapToDismiss: false
        }),
        NgxPermissionsModule.forRoot({
            permissionsIsolate: false,
            rolesIsolate: false,
            configurationIsolate: false
        }),
        MatPaginatorModule,
        MatTooltipModule,
        MatInputModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatBottomSheetModule,
        MatSnackBarModule,
        MatMenuModule,
        MatTableModule,
        MatIconModule,
        MatSidenavModule,
        MatTabsModule,
        CdkAccordionModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule, 
        // PrescriptionModelComponent,
        MatPaginatorModule,
        MatTooltipModule,
        MatInputModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatBottomSheetModule,
        MatSnackBarModule,
        MatMenuModule,
        MatTableModule,
        MatIconModule,
        MatSidenavModule,
        MatTabsModule,
        CdkAccordionModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPermissionsModule,
        ToastrModule,
        TranslateModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: LibPresciptionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                    // LibPresciptionComponent,
                    // PrescriptionModelComponent,
                    ],
                    imports: [
                        LibPresciptionComponent,
                        RouterModule,
                        CommonModule,
                        // TranslateModule.forRoot({
                        //   loader: {
                        //     provide: TranslateLoader,
                        //     useFactory: HttpLoaderFactory,
                        //     deps: [HttpClient]
                        //   }
                        // }),
                        ToastrModule.forRoot({
                            positionClass: 'toast-bottom-right',
                            preventDuplicates: true,
                            closeButton: true,
                            tapToDismiss: false
                        }),
                        NgxPermissionsModule.forRoot({
                            permissionsIsolate: false,
                            rolesIsolate: false,
                            configurationIsolate: false
                        }),
                        MatPaginatorModule,
                        MatTooltipModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatExpansionModule,
                        MatBottomSheetModule,
                        MatSnackBarModule,
                        MatMenuModule,
                        MatTableModule,
                        MatIconModule,
                        MatSidenavModule,
                        MatTabsModule,
                        CdkAccordionModule,
                        MatDialogModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ],
                    exports: [
                        LibPresciptionComponent,
                        // PrescriptionModelComponent,
                        MatPaginatorModule,
                        MatTooltipModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatExpansionModule,
                        MatBottomSheetModule,
                        MatSnackBarModule,
                        MatMenuModule,
                        MatTableModule,
                        MatIconModule,
                        MatSidenavModule,
                        MatTabsModule,
                        CdkAccordionModule,
                        MatDialogModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgxPermissionsModule,
                        ToastrModule,
                        TranslateModule
                    ],
                    providers: [
                        { provide: MAT_DIALOG_DATA, useValue: {} },
                        { provide: MatDialogRef, useValue: {} },
                    ],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA,
                        NO_ERRORS_SCHEMA
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXByZXNjaXB0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYi1wcmVzY2lwdGlvbi9zcmMvbGliL2xpYi1wcmVzY2lwdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkUsT0FBTyxFQUFtQixlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd2RSxPQUFPLFFBQVEsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRCxPQUFPLFFBQVEsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELDBCQUEwQjtBQUMxQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUs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X0VMRU1FTlRTX1NDSEVNQSwgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGliUHJlc2NpcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2xpYi1wcmVzY2lwdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgcmVnaXN0ZXJMb2NhbGVEYXRhIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlTG9hZGVyLCBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCBsb2NhbGVSdSBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy9ydSc7XHJcbmltcG9ydCBsb2NhbGVFbiBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy9lbic7XHJcbmltcG9ydCB7IFRvYXN0ck1vZHVsZSB9IGZyb20gXCJuZ3gtdG9hc3RyXCI7XHJcbmltcG9ydCB7IE5neFBlcm1pc3Npb25zTW9kdWxlIH0gZnJvbSBcIm5neC1wZXJtaXNzaW9uc1wiO1xyXG4vLyBNYXRlcmlhbCBEZXNpZ24gSW1wb3J0c1xyXG5pbXBvcnQgeyBNYXRFeHBhbnNpb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9leHBhbnNpb24nO1xyXG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcclxuaW1wb3J0IHsgQ2RrQWNjb3JkaW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9hY2NvcmRpb25cIjtcclxuaW1wb3J0IHsgTWF0VGFic01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90YWJzXCI7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdlwiO1xyXG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL21lbnVcIjtcclxuaW1wb3J0IHsgTWF0U25hY2tCYXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0JztcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRW52Q29uZmlnU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZW52LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFTlZfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvY29uZmlnLnRva2VuJzsgIFxyXG4vLyBpbXBvcnQgeyBQcmVzY3JpcHRpb25Nb2RlbENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJlc2NyaXB0aW9uLW1vZGVsL3ByZXNjcmlwdGlvbi1tb2RlbC5jb21wb25lbnRcIjtcclxuXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gSHR0cExvYWRlckZhY3RvcnkoaHR0cENsaWVudDogSHR0cENsaWVudCkge1xyXG4vLyAgIHJldHVybiBuZXcgVHJhbnNsYXRlSHR0cExvYWRlcihodHRwQ2xpZW50LCAnLi9hc3NldHMvaTE4bi8nLCAnLmpzb24nKTtcclxuLy8gfVxyXG5yZWdpc3RlckxvY2FsZURhdGEobG9jYWxlUnUpO1xyXG5yZWdpc3RlckxvY2FsZURhdGEobG9jYWxlRW4pO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAvLyBMaWJQcmVzY2lwdGlvbkNvbXBvbmVudCxcclxuICAgIC8vIFByZXNjcmlwdGlvbk1vZGVsQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgaW1wb3J0czogWyBcclxuICAgIExpYlByZXNjaXB0aW9uQ29tcG9uZW50LFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgXHJcbiAgICAvLyBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAvLyAgIGxvYWRlcjoge1xyXG4gICAgLy8gICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcclxuICAgIC8vICAgICB1c2VGYWN0b3J5OiBIdHRwTG9hZGVyRmFjdG9yeSxcclxuICAgIC8vICAgICBkZXBzOiBbSHR0cENsaWVudF1cclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSksXHJcbiAgICBUb2FzdHJNb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgIHBvc2l0aW9uQ2xhc3M6ICd0b2FzdC1ib3R0b20tcmlnaHQnLFxyXG4gICAgICBwcmV2ZW50RHVwbGljYXRlczogdHJ1ZSxcclxuICAgICAgY2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgIHRhcFRvRGlzbWlzczogZmFsc2VcclxuICAgIH0pLFxyXG4gICAgTmd4UGVybWlzc2lvbnNNb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgIHBlcm1pc3Npb25zSXNvbGF0ZTogZmFsc2UsXHJcbiAgICAgIHJvbGVzSXNvbGF0ZTogZmFsc2UsXHJcbiAgICAgIGNvbmZpZ3VyYXRpb25Jc29sYXRlOiBmYWxzZVxyXG4gICAgfSksXHJcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXHJcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXHJcbiAgICBNYXRCb3R0b21TaGVldE1vZHVsZSxcclxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxyXG4gICAgTWF0TWVudU1vZHVsZSxcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXHJcbiAgICBNYXRUYWJzTW9kdWxlLFxyXG4gICAgQ2RrQWNjb3JkaW9uTW9kdWxlLFxyXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsICAgXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBMaWJQcmVzY2lwdGlvbkNvbXBvbmVudCxcclxuICAgIC8vIFByZXNjcmlwdGlvbk1vZGVsQ29tcG9uZW50LFxyXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxyXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxyXG4gICAgTWF0Qm90dG9tU2hlZXRNb2R1bGUsXHJcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcclxuICAgIE1hdE1lbnVNb2R1bGUsXHJcbiAgICBNYXRUYWJsZU1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxyXG4gICAgTWF0VGFic01vZHVsZSxcclxuICAgIENka0FjY29yZGlvbk1vZHVsZSxcclxuICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTmd4UGVybWlzc2lvbnNNb2R1bGUsXHJcbiAgICBUb2FzdHJNb2R1bGUsXHJcbiAgICBUcmFuc2xhdGVNb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgeyBwcm92aWRlOiBNQVRfRElBTE9HX0RBVEEsIHVzZVZhbHVlOiB7fSB9LFxyXG4gICAgeyBwcm92aWRlOiBNYXREaWFsb2dSZWYsIHVzZVZhbHVlOiB7fSB9LFxyXG4gIF0sXHJcbiAgc2NoZW1hczogW1xyXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSxcclxuICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJQcmVzY2lwdGlvbk1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoZW52OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPExpYlByZXNjaXB0aW9uTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTGliUHJlc2NpcHRpb25Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEVudkNvbmZpZ1NlcnZpY2UsXHJcbiAgICAgICAgeyBwcm92aWRlOiBFTlZfQ09ORklHLCB1c2VWYWx1ZTogZW52IH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbiB9XHJcbiJdfQ==