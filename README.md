# SpaceX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Deployed URL link

https://space-x-59933.web.app/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Folder Structure

Created 3 folders for our application, Components(For components like sidebar, items list and item details), Models(For constant, where I have given http link, this is small application but If we want to create a big application then we can store type files and in constant file we can give multiple API base links for application, for now I have created only contant file for http link, so that IF in future I ahve to change in http link, I can change it from 1 place), Service(This folder is for services file, I have stored shared service file and spacex service file for API calling)

## Components

We have 3 main components and they all are interlinked. API calling and filtering part is hapening in Sidebar component and through @Output transfering the data(Emit the event) into Mission-container component(they both are link in app.component.html file). In Mission-Container I have used @Input for listening the event. and finally I ahve created a Mission component which I am using to show the details, In future If we want to delete/add something we can use this Mission component only, no need to do any change in Mission-container file(For add purpose we have to do some change Sidebar component if its related to API data, otherwise no need to change anything).

## Services

In this folder we have 2 type of services(If we want we can create 2 more folders inside this, so that we can store shared service and normal services for API seprately). Shared service is used to set and get data. Through Sidebar folder I am calling the api and set the data in Shared service and In mission-container file I am getting this stored data through get Data. For API calling I have used SpaceX service file, and in this I have used only one api calling method. The data wich I am getting from API is huge, thats why I have used async await method to get the API data.

## Pagination

As we know, data is huge which we are getting from API calling thats why I have used pagination, so that my application don't take much time to load the data on webpage. At one time I am showing only 10 records at one page.

## SSR (Server Side Rendering)

For SSR run `ng add @nguniversal/express-engine` and to run the applicatioin on server side locally use this command `npm run dev:ssr`.

## Firebase

For hosting I have choosed `firebase`. Run few commands of firebase like firebase init, firebase login(logged in from my gmail id), change the dist path in firebase.json file and finally run firebase deploy command.

## Travis

I have used Travis for CI pipeline. Now If anybody wants to commit and push the changes into master and if there any error in the code then this pipeline whouldn't allow to push the changes into master, until fix it. For more details steps are below to check CI pipeline status -

Github repo > just below the Code tab click on commits > all the commits are there
