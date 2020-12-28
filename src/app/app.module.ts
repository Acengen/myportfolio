import { SingleProdComponent } from './my-projects/single-prod/single-prod.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { OverlayLoadingPageComponent } from './overlay-loading-page/overlay-loading-page.component';
import { LoadingSpinnerPageComponent } from './loading-spinner-page/loading-spinner-page.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { StartComponentComponent } from './my-projects/start-component/start-component.component';

import { MyGamesComponent } from './my-games/my-games.component';
import { SingleGameComponent } from './my-games/single-game/single-game.component';
import { FooterContactComponent } from './footer-contact/footer-contact.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [	
    AppComponent,
    OverlayLoadingPageComponent,
    LoadingSpinnerPageComponent,
    HeaderComponent,
    AboutMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    SingleProdComponent,
    StartComponentComponent,
    MyGamesComponent,
    SingleGameComponent,
    FooterContactComponent,
    WelcomeComponent
   ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
