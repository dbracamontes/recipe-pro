import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeBookAppComponent } from "./recipe-book.component";
import { HeaderComponent } from "./header.component";

@NgModule({
  declarations: [
    RecipeBookAppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule {}
