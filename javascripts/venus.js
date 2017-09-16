"use strict";

const venus = {
	"name": "Venus",
	"adjectives": "Venusian or (rarely) Cytherean, Venerean",
	"yearDiscovered": "Since Venus is so bright and noticable in the sky, it was probably seen by the first groups of humans",
	"radius": "3,760 mi",
	"distFromSun": "67.689 million miles",
	"dayLength": "116d 18h 0m",
	"atmosComp": "primarily Carbon Dioxide",
	"satellites": "No natural satellites",
	"visitors": "United States Mariner 10, Russian Venera 9"
};

function outputTo(domElement) {
	let venDom = "";
	venDom += `<div class="planet-card">`;
	venDom +=		`<div class="planet-header">`;
  	venDom += 			`<h2>${venus.name}</h2>`;
  	venDom +=		`</div>`;
  	venDom +=		`<div class="planet-info">`;
  	venDom += 			`<h3>Adjectives: ${venus.adjectives}</h3>`;
  	venDom += 			`<h3>Discovered: ${venus.yearDiscovered}</h3>`;
  	venDom += 			`<h3>Radius: ${venus.radius}</h3>`;
  	venDom += 			`<h3>Distance From Sun: ${venus.distFromSun}</h3>`;
  	venDom += 			`<h3>Length Of Day: ${venus.dayLength}</h3>`;
	venDom += 			`<h3>Atmosphere Composition: ${venus.atmosComp}</h3>`; 
	venDom += 			`<h3>Satellites: ${venus.satellites}</h3>`; 
	venDom += 			`<h3>Visitors: ${venus.visitors}</h3>`; 
	venDom +=		`</div>`;
	venDom += `</div>`; 	

  domElement.innerHTML += venDom;
}

module.exports = outputTo;