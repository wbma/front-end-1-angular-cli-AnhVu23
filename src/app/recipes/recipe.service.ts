import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            // tslint:disable-next-line:max-line-length
            'Lasagne',
            'Hot Meal!', 'http://img.taste.com.au/iaDIyGWp/w720-h480-cfill-q80/taste/2016/11/beef-and-prosciutto-lasagne-62904-1.jpeg',
            [
                new Ingredient('Tomato', 1),
                new Ingredient('Lasagne', 6),
                new Ingredient('Mince beef', 200),
                new Ingredient('Mozarella', 400)
            ]),
        new Recipe(
            // tslint:disable-next-line:max-line-length
            'Pizza',
            'Italian Gift!', 'https://www.cicis.com/media/1243/pizza_adven_zestypepperoni.png',
            [
                new Ingredient('Tomato', 1),
                new Ingredient('Wheat Flour', 500),
                new Ingredient('Pepperoni', 200),
                new Ingredient('Mozarella', 400)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
