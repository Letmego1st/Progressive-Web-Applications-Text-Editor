# Progressive-Web-Applications-Text-Editor

## Description

My task is to build a text editor that runs in the browser. The app will be a single-page application (SPA) that meets the criteria of a Progressive Web App (PWA). It will feature various data persistence techniques to ensure redundancy in case one of the options is not supported by the browser. The text editor application will also have the ability to function offline, providing a seamless user experience regardless of internet connectivity.

## Table of Contents

- [Accectance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [References](#references)
- [Questions](#questions)


## Acceptance Criteria
```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Installation

 This application will utilize the following npm packages:
```
  - npm install express (express.js)
  - npm install --save-dev webpack (Webpack)
  - npm install webpack-dev-server --save-dev (webpack-dev-server)
  - npm install --save-dev webpack-pwa-manifest (WebpackPwaManifest)
  - npm install babel (Babel)
  - npm install --save-dev css-loader (CSS-loader)
  - npm install concurrently --save (run multiple commands concurrently.) (Concurrently)
  - npm npm install idb (IndexedDB)
  ```

## Usage

### Screenshots
```
The following animation demonstrates the application functionality:
```

![Alt Gif Here](./client/src/images/homework-demo-01.gif)

```
The following image shows the application's manifest.json file:
```
![](./client/src/images/19-pwa-homework-demo-02.png)
```
The following image shows the application's registered service worker:
```
![](./client/src/images/19-pwa-homework-demo-03.png)
```
The following image shows the application's IndexedDB storage:
```
![](./client/src/images/19-pwa-homework-demo-04.png)

## Deployment:

- Heroku


## References:

- Course Curriculum
- Tutors
- Udemy Course
- YouTube Tutorials


## Questions:
Feel free to contact me for any questions through the following means:

- [Email](mailto:imcodong4real@gmail.com)
- [Github Account](https://github.com/Letmego1st)




