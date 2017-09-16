"use strict";

const earth = {
	"name": "Earth",
	"adjectives": "Crowded, Fragile, Endangered",
	"yearDiscovered": "Ask ET...",
	"radius": "3,959 mi",
	"distFromSun": "92.96 million miles",
	"dayLength": "0d 23h 56m",
	"atmosComp": "8% Nitrogen, 21% Oxygen, 1% Argon",
	"satellites": "Moon",
	"visitors": "Wonder Woman, Super Man"
};

function outputTo(domElement) {
	let earthDom = "";
	earthDom += `<div class="planet-card">`;
	earthDom +=		`<div class="planet-header">`;
  	earthDom += 		`<h2>${earth.name}</h2>`;
  	earthDom +=		`</div>`;
  	earthDom +=		`<div class="planet-info">`;
  	earthDom += 		`<h3>Adjectives: ${earth.adjectives}</h3>`;
  	earthDom += 		`<h3>Discovered: ${earth.yearDiscovered}</h3>`;
  	earthDom += 		`<h3>Radius: ${earth.radius}</h3>`;
  	earthDom += 		`<h3>Distance From Sun: ${earth.distFromSun}</h3>`;
  	earthDom += 		`<h3>Length Of Day: ${earth.dayLength}</h3>`;
	earthDom += 		`<h3>Atmosphere Composition: ${earth.atmosComp}</h3>`; 
	earthDom += 		`<h3>Satellites: ${earth.satellites}</h3>`; 
	earthDom += 		`<h3>Visitors: ${earth.visitors}</h3>`; 
	earthDom +=		`</div>`;
	earthDom += `</div>`;

  domElement.innerHTML += earthDom;
}

module.exports = outputTo;
