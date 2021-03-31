/* =======================================================
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({

    declarations: [
        AppComponent
    ],

    imports: [
        FormsModule,
        RouterModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [],

    bootstrap: [AppComponent]
})
export class AppModule { }
