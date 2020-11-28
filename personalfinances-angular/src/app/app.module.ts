import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header.component';
import {SideMenuComponent} from './sidemenu.component';
import {MiniCardComponent} from './minicard.component';
import {AddTransacButton} from './AddTransacButton.component';
import { AddExpenseModal } from './AddExpenseModal.component';
import { AddRevenueModal } from './AddRevenueModal.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    MiniCardComponent,
    AddTransacButton,
    AddExpenseModal,
    AddRevenueModal
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
