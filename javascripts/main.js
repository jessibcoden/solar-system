"use strict";

let planetsDiv = document.getElementById('planets-container');

const earth = require('./earth');
const jupiter = require('./jupiter');
const mars = require('./mars');
const mercury = require('./mercury');
const neptune = require('./neptune');
const saturn = require('./saturn');
const uranus = require('./uranus');
const venus = require('./venus');

planetsDiv.innerHTML += mercury();
planetsDiv.innerHTML += venus();
planetsDiv.innerHTML += earth();
planetsDiv.innerHTML += mars();
planetsDiv.innerHTML += jupiter();
planetsDiv.innerHTML += saturn();
planetsDiv.innerHTML += uranus();
planetsDiv.innerHTML += neptune();





