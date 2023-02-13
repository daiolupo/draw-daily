/*
Draw Daily 365 JavaScript Interactivity
filename: main.js

Author: Dwain Aiolupotea
Date: 22 September 2021
updated: 24 September 2021
*/

"use strict";

// Automated year for copyright footer content
const latestDate = document.querySelector(".latest-date");
const date = new Date();
let year = date.getFullYear();
latestDate.innerHTML = ` ${year}©drawdaily365`;

// Responsive Navigation menu bar
function showMenu() {
  document.querySelector(".navigation").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("hide");
  document.querySelector(".close").classList.toggle("show");
}
