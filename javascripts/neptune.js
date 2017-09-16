"use strict";

const neptune = {
	"name": "Neptune",
	"adjectives": "Neptunian",
	"year-discovered": 1846,
	"radius": "15,299 mi",
	"distFromSun": "2.795 billion mi",
	"dayLength": "0d 16h 6m",
	"atmosComp": "Hydrogen and Helium, with trace amounts of Methane, Water, Ammonia and other ices",
	"satellites": "13 known moons, Triton being the largest",
	"visitors": "Voyager 2 has been the only man-made probe to approach Neptune"
};

function outputTo(domElement) {
	let nepDom = "";
	nepDom += `<div class="planet-card">`;
	nepDom +=		`<div class="planet-header">`;
  	nepDom += 		`<h2>${neptune.name}</h2>`;
  	nepDom +=		`</div>`;
  	nepDom +=		`<div class="planet-info">`;
  	nepDom += 		`<h3>Adjectives: ${neptune.adjectives}</h3>`;
  	nepDom += 		`<h3>Discovered: ${neptune.yearDiscovered}</h3>`;
  	nepDom += 		`<h3>Radius: ${neptune.radius}</h3>`;
  	nepDom += 		`<h3>Distance From Sun: ${neptune.distFromSun}</h3>`;
  	nepDom += 		`<h3>Length Of Day: ${neptune.dayLength}</h3>`;
	nepDom += 		`<h3>Atmosphere Composition: ${neptune.atmosComp}</h3>`; 
	nepDom += 		`<h3>Satellites: ${neptune.satellites}</h3>`; 
	nepDom += 		`<h3>Visitors: ${neptune.visitors}</h3>`; 
	nepDom +=		`</div>`;
	nepDom += `</div>`; 	

  domElement.innerHTML += nepDom;
}

module.exports = outputTo;
