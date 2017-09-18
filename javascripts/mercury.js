"use strict";

const mercury = {
	"name": "Mercury",
	"adjectives": "Mercurian, Mercurial, Hermean/Hermeian",
	"yearDiscovered": "One of the earliest records of Mercury comes from the Sumerians around 3,000 BC.",
	"radius": "1,516 mi",
	"distFromSun": "35.98 million miles",
	"dayLength": "58d 15h 30m",
	"atmosComp": "Contains small amounts of Hydrogen, Helium, and Oxygen. It also has even tinier amounts of Sodium, Potassium, Calcium, and Magnesium ",
	"satellites": "No natural satellites",
	"visitors": "United States' Mariner 10"
};

let mercDom = '';

function outputTo(domElement) {
	let mercDom = "";
	mercDom += `<div class="col-md-6 col-md-offset-3 planet-card">`;
	mercDom +=		`<div class="planet-header">`;
  	mercDom += 			`<h2>${mercury.name}</h2>`;
  	mercDom +=		`</div>`;
  	mercDom +=		`<div class="planet-info">`;
  	mercDom += 			`<h3>Adjectives: ${mercury.adjectives}</h3>`;
  	mercDom += 			`<h3>Discovered: ${mercury.yearDiscovered}</h3>`;
  	mercDom += 			`<h3>Radius: ${mercury.radius}</h3>`;
  	mercDom += 			`<h3>Distance From Sun: ${mercury.distFromSun}</h3>`;
  	mercDom += 			`<h3>Length Of Day: ${mercury.dayLength}</h3>`;
	mercDom += 			`<h3>Atmosphere Composition: ${mercury.atmosComp}</h3>`; 
	mercDom += 			`<h3>Satellites: ${mercury.satellites}</h3>`; 
	mercDom += 			`<h3>Visitors: ${mercury.visitors}</h3>`; 
	mercDom +=		`</div>`;
	mercDom += `</div>`; 

	return mercDom;
}

module.exports = outputTo;

