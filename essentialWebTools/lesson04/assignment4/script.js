// reference dependencies
let Particles = require('particlesjs');
var $ = require('jquery');
require('bootstrap/dist/js/bootstrap');
require('./node_modules/bootstrap/dist/css/bootstrap.css');

// load navbar
$(document).ready(function () {
  $('#navMenu').load('./partial_nav.html');
});

// generate particles
let particleHome = {
  selector: '.background',
  connectParticles: true,
  speed: 5,
  color: ['#7FFF00', '#DC143C', '#1E90FF'],
};

let particleAbout = {
  selector: '.background',
  connectParticles: false,
  sizeVariations: 15,
  maxParticles: 50,
  speed: 2,
  color: ['#DC143C', '#1E90FF'],
};

let particleContact = {
  selector: '.background',
  connectParticles: true,
  sizeVariations: 5,
  speed: 2,
  color: ['#DC143C'],
};

let particleAccount = {
  selector: '.background',
  connectParticles: false,
  sizeVariations: 3,
  speed: 1,
  color: ['#DC143C'],
};

window.onload = function () {
  setTimeout(function () {
    let url = window.location.href.split('/').pop();
    if (url === 'index.html') {
      Particles.init(particleHome);
    } else if (url === 'about.html') {
      Particles.init(particleAbout);
    } else if (url === 'contact.html') {
      Particles.init(particleContact);
    } else if (url === 'account.html') {
      Particles.init(particleAccount);
    }
  }, 500);
};
