// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appTitleNav = "UncleFrank | Blog";
  appHeroMessage = this.appTitleNav;


  constructor() { }

  ngOnInit(): void {
  }

  loginUser (){

  }

}
