"use strict";

const jupiter = {
	"name": "Jupiter",
	"adjectives": "Jovian, Jovial, Jupiterian",
	"yearDiscovered": 1610,
	"radius": "43,441 mi",
	"distFromSun": "778.5 million miles",
	"dayLength": "0d 9h 56m",
	"atmosComp": "Hydrogen, Helium",
	"satellites": "53 confirmed",
	"visitors": "Pioneer 10 & 11, Voyager 1 & 2, Galileo, Ulysses, Cassini, New Horizon, Juno"
};

function outputTo(domElement) {
	let jupDom = "";
	jupDom += `<div class="planet-card">`;
	jupDom +=		`<div class="planet-header">`;
  	jupDom += 		`<h2>${jupiter.name}</h2>`;
  	jupDom +=		`</div>`;
  	jupDom +=		`<div class="planet-info">`;
  	jupDom += 		`<h3>Adjectives: ${jupiter.adjectives}</h3>`;
  	jupDom += 		`<h3>Discovered: ${jupiter.yearDiscovered}</h3>`;
  	jupDom += 		`<h3>Radius: ${jupiter.radius}</h3>`;
  	jupDom += 		`<h3>Distance From Sun: ${jupiter.distFromSun}</h3>`;
  	jupDom += 		`<h3>Length Of Day: ${jupiter.dayLength}</h3>`;
	jupDom += 		`<h3>Atmosphere Composition: ${jupiter.atmosComp}</h3>`; 
	jupDom += 		`<h3>Satellites: ${jupiter.satellites}</h3>`; 
	jupDom += 		`<h3>Visitors: ${jupiter.visitors}</h3>`; 
	jupDom +=		`</div>`;
	jupDom += `</div>`; 	

  domElement.innerHTML += jupDom;
}

module.exports = outputTo;
