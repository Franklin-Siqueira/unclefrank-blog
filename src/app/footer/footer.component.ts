// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faGithub, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faAddressCard, faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Social icons | todo: convert to array/list
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  // Other
  faMobile = faMobile;
  faEnvelope = faEnvelope;
  faAddressCard = faAddressCard;

  constructor() { }

  ngOnInit(): void {
  }

}
