"use strict";

const uranus = {
	"name": "Uranus",
	"adjectives":	"Uranian",
	"yearDiscovered": 1781,
	"radius": "15,759 mi",
	"distFromSun": "1.784 billion mi",
	"dayLength": "0d 17h 14m",
	"atmosComp": "Molecular Hydrogen: 82.5%, Helium: 15.2%, Methane: 2.3%",
	"satellites": "27 Known Satellites",
	"visitors": "Voyager 2, closest approach in 1986"
};

let uraDom = '';

function outputTo(domElement) {
	let uraDom = "";
	uraDom += `<div class="col-md-6 col-md-offset-3 planet-card">`;
	uraDom +=		`<div class="planet-header">`;
  	uraDom += 			`<h2>${uranus.name}</h2>`;
  	uraDom +=		`</div>`;
  	uraDom +=		`<div class="planet-info">`;
  	uraDom += 			`<h3>Adjectives: ${uranus.adjectives}</h3>`;
  	uraDom += 			`<h3>Discovered: ${uranus.yearDiscovered}</h3>`;
  	uraDom += 			`<h3>Radius: ${uranus.radius}</h3>`;
  	uraDom += 			`<h3>Distance From Sun: ${uranus.distFromSun}</h3>`;
  	uraDom += 			`<h3>Length Of Day: ${uranus.dayLength}</h3>`;
	uraDom += 			`<h3>Atmosphere Composition: ${uranus.atmosComp}</h3>`; 
	uraDom += 			`<h3>Satellites: ${uranus.satellites}</h3>`; 
	uraDom += 			`<h3>Visitors: ${uranus.visitors}</h3>`; 
	uraDom +=		`</div>`;
	uraDom += `</div>`; 	

   	return uraDom;
}

module.exports = outputTo;

