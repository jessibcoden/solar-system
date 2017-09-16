"use strict";

const mars = {
	"name": "Mars",
	"adjectives": "Martian, Martial, Arean",
	"yearDiscovered": 1659,
	"radius": "2,106 mi",
	"distFromSun": "141.6 million miles",
	"dayLength": "1d 0h 40m",
	"atmosComp": "95.32% Carbon Dioxide, 2.7% Nitrogen, 1.6% Argon, 0.13% Carbon Monoxide",
	"satellites": "Phobos and Deimos",
	"visitors": "Matt Damon"
};

function outputTo(domElement) {
	let marsDom = "";
	marsDom += `<div class="planet-card">`;
	marsDom +=		`<div class="planet-header">`;
  	marsDom += 			`<h2>${mars.name}</h2>`;
  	marsDom +=		`</div>`;
  	marsDom +=		`<div class="planet-info">`;
  	marsDom += 			`<h3>Adjectives: ${mars.adjectives}</h3>`;
  	marsDom += 			`<h3>Discovered: ${mars.yearDiscovered}</h3>`;
  	marsDom += 			`<h3>Radius: ${mars.radius}</h3>`;
  	marsDom += 			`<h3>Distance From Sun: ${mars.distFromSun}</h3>`;
  	marsDom += 			`<h3>Length Of Day: ${mars.dayLength}</h3>`;
	marsDom += 			`<h3>Atmosphere Composition: ${mars.atmosComp}</h3>`; 
	marsDom += 			`<h3>Satellites: ${mars.satellites}</h3>`; 
	marsDom += 			`<h3>Visitors: ${mars.visitors}</h3>`; 
	marsDom +=		`</div>`;
	marsDom += `</div>`; 	

  domElement.innerHTML += marsDom;
}

module.exports = outputTo;
