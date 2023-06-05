
# Angular Content Projection
Examples how content projection can be realized
 [Guide page from Angular from where examples where taken](https://angular.io/guide/content-projection)


## Topics
- Simple Single-slot content projection using `<ng-content>` (src\app\zippy-basic\zippy-basic.component.ts)
- Multi-slot content projection <-> basically naming and referencing `<ng-content>` sections (src\app\zippy-multislot\zippy-multislot.component.ts)
- Conditional content projection (src\app\example-zippy.component.ts && src\app\example-zippy.template.html)
- Projecting a component in a more complex structure with `ngProjectAs` (src\app\zippy-ngprojectas\zippy-ngprojectas.component.ts)

## Angular Info
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.