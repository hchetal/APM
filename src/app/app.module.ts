import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms'

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star-component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,ProductListComponent,ConvertToSpacesPipe, StarComponent, ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
