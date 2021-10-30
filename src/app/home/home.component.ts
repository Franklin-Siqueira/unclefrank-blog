// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
/**
 *
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  appTitleNav = "UncleFrank | Blog";
  appHeroMessage = this.appTitleNav;
  heroImageLink = "./../../assets/img/thirdparty/kojirou-sasaki-DLdDrb2d4F4-unsplash.jpg"
  heroImageCredits = "Photo by Kojirou Sasaki";
  heroImageCreditsLink = "https://unsplash.com/@chelsea777?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  heroImageSourceUrl = "https://unsplash.com/s/photos/dog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";


  constructor(private renderer: Renderer2, private elementRef: ElementRef) {  }

  ngOnInit(): void {}

  ngOnDestroy() {

    // We execute both functions to remove the respectives listeners

    // Remove "listen" listener
    // this.listenFunction();

    // // Remove "listenGlobal" listener
    // this.globalListenFunc();


  }
}
