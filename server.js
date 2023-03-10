const express = require('express');
const path = require('path')
const app = express();
const fs = require('fs');
const uuid = require("./helpers/uuid");

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// html routes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});
// api routes
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/db/notes.json'));
});

app.get('*', (req, res) => {
    res.sendFile(path.json(__dirname, '/public/index.html'))
})

app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});