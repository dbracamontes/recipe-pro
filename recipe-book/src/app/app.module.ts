import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeBookAppComponent } from "./recipe-book.component";
import { HeaderComponent } from "./header.component";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    RecipeBookAppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListComponent,
    ShoppingListComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule {}
