"use strict";

const saturn = {
	"name": "Saturn",
	"adjectives": "Saturnian, Cronian",
	"yearDiscovered": "First Observation: ~700BCE",
	"radius": "36,184 mi",
	"distFromSun": "888.2 million mi",
	"dayLength": "0d 10h 42m",
	"atmosComp": "96.3% Molecular Hydrogen and 3.25% Helium by volume",
	"satellites": "62",
	"visitors": "Pioneer 10 & 11, Voyager 1 & 2, Galileo, Ulysses, Cassini, New Horizon, Juno"
};

function outputTo(domElement) {
	let satDom = "";
	satDom += `<div class="planet-card">`;
	satDom +=		`<div class="planet-header">`;
  	satDom += 		`<h2>${saturn.name}</h2>`;
  	satDom +=		`</div>`;
  	satDom +=		`<div class="planet-info">`;
  	satDom += 		`<h3>Adjectives: ${saturn.adjectives}</h3>`;
  	satDom += 		`<h3>Discovered: ${saturn.yearDiscovered}</h3>`;
  	satDom += 		`<h3>Radius: ${saturn.radius}</h3>`;
  	satDom += 		`<h3>Distance From Sun: ${saturn.distFromSun}</h3>`;
  	satDom += 		`<h3>Length Of Day: ${saturn.dayLength}</h3>`;
	satDom += 		`<h3>Atmosphere Composition: ${saturn.atmosComp}</h3>`; 
	satDom += 		`<h3>Satellites: ${saturn.satellites}</h3>`; 
	satDom += 		`<h3>Visitors: ${saturn.visitors}</h3>`; 
	satDom +=		`</div>`;
	satDom += `</div>`; 	

  domElement.innerHTML += satDom;
}

module.exports = outputTo;
