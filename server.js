// Start by making a directory - Monitoring interactive
//  Build a server.js file
//  Build a directory 'public' and put an index.html inside
//
//  In the terminal start with:      npm init -y      This builds the json packet
//  Next terminal command:          npm i express       This installs express - why not cors?    

// add .gitignore to top layer and add node_modules/    - this stops all of our dependency modules from being uploaded to github


const express = require('express');  // This function starts your .js requiring express to be used
const path = require('path');  //talks with our html file 
const app = express();  //This is the function that puts express to use

app.use(express.json()); //this is used to have our website be able to take json information into the process

app.get('/', function(req, res) {
    res.sendfile(path.join(__dirname, '/public/index.html')) //res is a built in body, sendfile being a build in method to send back a file at a specific path
                            //path.join - join the location of index.html to the current directory
})          //__dirname - always the first argument of the directory at this location (monitoring-interactive)

const port = process.eventNames.PORT || 4545;
app.listen(port, function() {console.log(`Server is working on ${port}`)});   // npm start ---- after this point we can 'npm start' to see if the server will run