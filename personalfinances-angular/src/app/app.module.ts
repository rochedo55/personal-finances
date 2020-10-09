import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MiniCardComponent } from './mini-card/mini-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    MiniCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
