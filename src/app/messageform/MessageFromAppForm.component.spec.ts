// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFromAppFormComponent } from './MessageFromAppForm.component';

describe('ContactComponent', () => {
  let component: MessageFromAppFormComponent;
  let fixture: ComponentFixture<MessageFromAppFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageFromAppFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFromAppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
