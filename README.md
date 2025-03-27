# LibPresciption

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Code scaffolding

Run `ng generate component component-name --project lib-presciption` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project lib-presciption`.
> Note: Don't forget to add `--project lib-presciption` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build lib-presciption` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build lib-presciption`, go to the dist folder `cd dist/lib-presciption` and run `npm publish`.

## Running unit tests

Run `ng test lib-presciption` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Installation

To install the Presciption Library, run the following command:

### Install from GitHub

```bash

npm install git+https://github.com/Intelehealth/intelehealth-doctor-webapp-download-prescription#build_0.1

```

Note: The --force flag is used to override any dependency conflicts. Use it cautiously to avoid breaking changes in your project.

#build_0.1 refers the git branch where build files are placed

### Usage
Once the package is installed, you can import the `LibPresciptionModule` in your Angular application.

### Import the Module
In your Angular module (e.g., `app.module.ts`), import the `LibPresciptionModule`:


```typescript
import { LibPresciptionModule } from 'lib-presciption';

@NgModule({
  declarations: [AppComponent],
  imports: [ LibPresciptionModule.forRoot(environment),],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Using the Component
To use the presciption component, add the <lib-presciption> selector to your template file:

```html
<lib-presciption></lib-presciption>
```

### Using the env files
To use the env file from the application to the plugin 

In your Angular module (e.g., `app.module.ts`)

```
import { LibPresciptionModule } from 'lib-presciption';
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [ LibPresciptionModule.forRoot(environment),],
  providers: [{ provide: 'environment', useValue: environment }],
  bootstrap: [AppComponent]
})
export class AppModule {}

```
