# Angular
 Learning Angular by project

The further commands assume that we have Node 8.9+ and  NPM 5.5.1+  installed.  Node is required by the Angular CLI. 
Currenlty i will be using NPM - Node Version Manager — a POSIX-compliant bash script to install and manage multiple Node.js versions in machine.

Install Angular CLI:

$ npm install -g @angular/cli

This installs the latest Angular CLI version on the system.

Next we need to initialise our porject:

$ ng new <enter-project-name>

The project name needs to start with lower case and have only alphanumeric characters and should not include special characters, not even underscore(_).
It will then ask for Angular Routing and Stylesheet -> Choose CSS.

My project-name is 'first-angular'.

Now, go to your project’s root folder and run the local development server using these commands:

$ cd first-angular
$ ng serve

The angular app will initialise and will be available to view on:

http://localhost:4200/

Let the development server running on this terminal.

We can now add different modules.
Let us add the Angular HttpClient.

We need to go to the following path:
first-angular/src/app/app.module.ts
and add the HttpClient module there.


Angular is made up of components. These components will be helpful to aid our UI.
Go to another terminal and go to your project directory :
$ ~/first-angular/
$ ng g component homepage

The new component will be available here : 

first-angular/src/app/homepage

Next, generate the 'about' component:

$ ng g component about
(This is a shortcut to 'ng generate component about')

Similarly add any other components required.

Now, we will use 'Angular Material' in the project and build our application UI using Material components.
Go to your terminal and run this command from the root of your project:

$ ng add @angular/material
Choose the default options for the prompts.

Add the material imports to app.module.ts file.
