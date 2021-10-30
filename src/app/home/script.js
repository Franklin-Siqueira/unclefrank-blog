// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

var container = document.getElementsByClassName('hero');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1600 - windowHeight;
var hero = document.getElementsByClassName('heroPara')[0];

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;

  hero.style.top = 50 - scrollPercent*window.innerWidth*-0.03 + '%';
});
