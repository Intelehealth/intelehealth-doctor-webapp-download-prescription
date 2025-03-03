import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { LibPresciptionComponent } from './lib-presciption.component';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from '@angular/common/http';
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
// import { PrescriptionModelComponent } from "./components/prescription-model/prescription-model.component";


// export function HttpLoaderFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
// }
registerLocaleData(localeRu);
registerLocaleData(localeEn);

@NgModule({
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
})
export class LibPresciptionModule {
  static forRoot(env: any): ModuleWithProviders<LibPresciptionModule> {
    return {
      ngModule: LibPresciptionModule,
      providers: [
        EnvConfigService,
        { provide: ENV_CONFIG, useValue: env }
      ]
    };
  }
 }
