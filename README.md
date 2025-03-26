# Learning to Connect React with Express (aka frontend to backend)

## Steps
1. Create `client` (frontend) and `server` (backend) folder inside root folder

#### cd into `server` folder
2. npm init -y 
    * -y says yes to all the questions that WOULD have appeared
    * This cmd generates the package.json
3. In the new package.json...
    * change "index.js" of the `main` property to "server.js." Then rename the index.js that had been generated from step 3 to server.js.
      * NOTE: This is OPTIONAL, but I think server.js is a clearer indicator of backend than index.js 
    * add `"type": "module"` below `main` property
      * This allows you to import packages with the `import` keyword rather than `require`
    * under "script" property, add `"script": "node server"` and `"dev": "nodemon server"`
      * we can now run `nodemon server` with `npm run dev` too 
```js
// package.json - how it should look
{
...
  "main": "server.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "script": "node server",
    "dev": "nodemon server"
  },
...
}
```
```js
// server.js
const express = require('express'); --> import express from 'express'
```
4. Add code to `server.js` (like the one in this repo)
5. Run `npm run dev` and enter `http://localhost:5000/api` into a browser to see if it works
    * MAKE SURE you're in the `server` folder

### cd into `client` folder
6. OPTIONAL --> Delete everything from App.css and App.jsx. Use the `rafce` cmd in App.jsx to generate a template code.
7. Add code to `App.js` (like the one in this repo)
8. Run `npm start` and wait for it to automatically open a tab in a browser to see if it works

NOTE: The server and client should BOTH be running or else no data will be read from server

## Things to Install
* Inside `server` folder
  * npm i express
  * npm i nodemon -D
    * -D indicates it's a dev dependency
  * npm i cors
  * npm i axios

Tutorials Followed:
* [Arpan Neupane](https://www.youtube.com/watch?v=w3vs4a03y3I&list=LL&index=1)
* [CodersArts](https://www.youtube.com/watch?v=hYYd_3Tz6Zo)
  * Involves Axios and Cors

