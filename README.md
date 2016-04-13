# SPA DQL URL used [Yeoman](http://yeoman.io) generator to generate App

## Describtion 
This SPA (Single Page Application) takes a DQL query from the URL or input field and render the results in a table. Also it can open pdf documents using `PDF.js`.
The SPA takes the DQL query in this format `localhost:3000/#/q=select * from dm_cabinet`

## Project Dependencies

* [NodeJS](https://nodejs.org/) is used to run the app on a server.
* [AngularJS](https://angularjs.org/) is used as the frontend framework.
* [Gulp](http://gulpjs.com/) jobs for development, building, emulating, running your app, compiles and concatenates Sass files, local development server with live reload.

### Getting Started

* This doc assumes you have [NodeJS](https://nodejs.org/en/download/) and `gulp` installed globally (`npm install -g gulp`).
* Clone the project using `git clone git@github.com:mmohen/spa-dql-url.git`. After the project is cloned navigate to the project directory and run `npm install & bower install` using `sudo` may be required.
* Use `gulp serve` to compile and run the project in the browser
