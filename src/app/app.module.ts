// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
// import { v4 as uuidv4 } from 'uuid';
//
import { HttpClientModule} from '@angular/common/http';
//
// App Specific
// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MessageFromAppFormComponent } from './messageform/MessageFromAppForm.component';
import { FeedComponent } from './feed/feed.component';
import { CreateComponent } from './feed/create/create.component'
import { ListComponent } from './feed/list/list.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
// General UI
// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//
// Angular Material UI /
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input/';;
import { MatCardModule } from  '@angular/material/card';
import { MatPaginatorModule } from  '@angular/material/paginator';

// import { MatDrawer } from '@angular/material';
// import { MatSidenav } from '@angular/material/sidenav';
// Directives
import { ParallaxDirective } from './directives/parallax/parallax.directive';
import { FloatingDirective } from './directives/floating/floating.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageFromAppFormComponent,
    FeedComponent,
    FooterComponent,
    NavbarComponent,
    AboutMeComponent,
    ParallaxDirective,
    FloatingDirective,
    ListComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
