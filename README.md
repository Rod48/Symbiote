# Symbiont

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Core
A core module is a NgModule that instantiates the app and loads core functions that will be used globally across the application.

Thus any singleton service should be implemented in a core module. A header, footer, or navigation bar are examples of this type of module.

All services that have to have one and only one instance per application (singleton services) should be implemented here. Examples include an authentication service or user service.

Feature
A feature module represents code that makes up the features of your app. In an online shopping app, for example, you might have a feature module for adding items to a cart and a separate module for making payments.

Shared
Shared modules are made of functions that can be combined to create feature modules. An example is a search function that could be used across multiple features.

Structuring the code this way makes things easier to locate and increases opportunities for reusability of code.