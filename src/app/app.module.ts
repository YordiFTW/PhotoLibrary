import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoComponent } from './photo/photo.component';
import { SinglephotoComponent } from './singlephoto/singlephoto.component';
import {HttpClientModule} from '@angular/common/http';
import { CombinedComponent } from './combined/combined.component';
import { MarkupcombinedComponent } from './markupcombined/markupcombined.component'

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    SinglephotoComponent,
    CombinedComponent,
    MarkupcombinedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
