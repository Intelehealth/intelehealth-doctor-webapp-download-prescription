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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: LibPresciptionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: LibPresciptionModule, imports: [LibPresciptionComponent,
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
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: LibPresciptionModule, providers: [
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXByZXNjaXB0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYi1wcmVzY2lwdGlvbi9zcmMvbGliL2xpYi1wcmVzY2lwdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkUsT0FBTyxFQUFtQixlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd2RSxPQUFPLFFBQVEsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRCxPQUFPLFFBQVEsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELDBCQUEwQjtBQUMxQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUs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IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaWJQcmVzY2lwdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbGliLXByZXNjaXB0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIHJlZ2lzdGVyTG9jYWxlRGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVMb2FkZXIsIFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IGxvY2FsZVJ1IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL3J1JztcbmltcG9ydCBsb2NhbGVFbiBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy9lbic7XG5pbXBvcnQgeyBUb2FzdHJNb2R1bGUgfSBmcm9tIFwibmd4LXRvYXN0clwiO1xuaW1wb3J0IHsgTmd4UGVybWlzc2lvbnNNb2R1bGUgfSBmcm9tIFwibmd4LXBlcm1pc3Npb25zXCI7XG4vLyBNYXRlcmlhbCBEZXNpZ24gSW1wb3J0c1xuaW1wb3J0IHsgTWF0RXhwYW5zaW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUsIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuaW1wb3J0IHsgQ2RrQWNjb3JkaW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9hY2NvcmRpb25cIjtcbmltcG9ydCB7IE1hdFRhYnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdGFic1wiO1xuaW1wb3J0IHsgTWF0U2lkZW5hdk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2XCI7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL21lbnVcIjtcbmltcG9ydCB7IE1hdFNuYWNrQmFyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhclwiO1xuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgTWF0TmF0aXZlRGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEVudkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Vudi5zZXJ2aWNlJztcbmltcG9ydCB7IEVOVl9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9jb25maWcudG9rZW4nOyAgXG4vLyBpbXBvcnQgeyBQcmVzY3JpcHRpb25Nb2RlbENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJlc2NyaXB0aW9uLW1vZGVsL3ByZXNjcmlwdGlvbi1tb2RlbC5jb21wb25lbnRcIjtcblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gSHR0cExvYWRlckZhY3RvcnkoaHR0cENsaWVudDogSHR0cENsaWVudCkge1xuLy8gICByZXR1cm4gbmV3IFRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cENsaWVudCwgJy4vYXNzZXRzL2kxOG4vJywgJy5qc29uJyk7XG4vLyB9XG5yZWdpc3RlckxvY2FsZURhdGEobG9jYWxlUnUpO1xucmVnaXN0ZXJMb2NhbGVEYXRhKGxvY2FsZUVuKTtcblxuQE5nTW9kdWxlKHtcbiAgIGRlY2xhcmF0aW9uczogW1xuICAgIC8vIExpYlByZXNjaXB0aW9uQ29tcG9uZW50LFxuICAgIC8vIFByZXNjcmlwdGlvbk1vZGVsQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbIFxuICAgIExpYlByZXNjaXB0aW9uQ29tcG9uZW50LFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgXG4gICAgLy8gVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgIC8vICAgbG9hZGVyOiB7XG4gICAgLy8gICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAvLyAgICAgdXNlRmFjdG9yeTogSHR0cExvYWRlckZhY3RvcnksXG4gICAgLy8gICAgIGRlcHM6IFtIdHRwQ2xpZW50XVxuICAgIC8vICAgfVxuICAgIC8vIH0pLFxuICAgIFRvYXN0ck1vZHVsZS5mb3JSb290KHtcbiAgICAgIHBvc2l0aW9uQ2xhc3M6ICd0b2FzdC1ib3R0b20tcmlnaHQnLFxuICAgICAgcHJldmVudER1cGxpY2F0ZXM6IHRydWUsXG4gICAgICBjbG9zZUJ1dHRvbjogdHJ1ZSxcbiAgICAgIHRhcFRvRGlzbWlzczogZmFsc2VcbiAgICB9KSxcbiAgICBOZ3hQZXJtaXNzaW9uc01vZHVsZS5mb3JSb290KHtcbiAgICAgIHBlcm1pc3Npb25zSXNvbGF0ZTogZmFsc2UsXG4gICAgICByb2xlc0lzb2xhdGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhdGlvbklzb2xhdGU6IGZhbHNlXG4gICAgfSksXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRCb3R0b21TaGVldE1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIENka0FjY29yZGlvbk1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsICAgXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMaWJQcmVzY2lwdGlvbkNvbXBvbmVudCxcbiAgICAvLyBQcmVzY3JpcHRpb25Nb2RlbENvbXBvbmVudCxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgQ2RrQWNjb3JkaW9uTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOZ3hQZXJtaXNzaW9uc01vZHVsZSxcbiAgICBUb2FzdHJNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTUFUX0RJQUxPR19EQVRBLCB1c2VWYWx1ZToge30gfSxcbiAgICB7IHByb3ZpZGU6IE1hdERpYWxvZ1JlZiwgdXNlVmFsdWU6IHt9IH0sXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLFxuICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMaWJQcmVzY2lwdGlvbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGVudjogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxMaWJQcmVzY2lwdGlvbk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTGliUHJlc2NpcHRpb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRW52Q29uZmlnU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiBFTlZfQ09ORklHLCB1c2VWYWx1ZTogZW52IH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG4gfVxuIl19