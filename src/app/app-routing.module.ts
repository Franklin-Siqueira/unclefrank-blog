// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageFromAppFormComponent } from './messageform/MessageFromAppForm.component';
import { FeedComponent } from './feed/feed.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'message', component: MessageFromAppFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
