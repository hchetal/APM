import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms'

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star-component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail.component';
import { WelcomeComponent} from '../app/home/welcome.component';
import {RouterModule} from '@angular/router';
import { ProductGuardService } from './product/product-guard.service';

@NgModule({
  declarations: [
    AppComponent,ProductListComponent,ConvertToSpacesPipe, StarComponent, ProductDetailComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : "products" , component: ProductListComponent},
      { path : "products/:id" , canActivate: [ProductGuardService], component : ProductDetailComponent },
      { path : "welcome", component : WelcomeComponent},
      { path : "" , redirectTo : "welcome", pathMatch:"full"},
      { path : "**" ,  redirectTo : "welcome", pathMatch: "full"}
    ])
  ],
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
