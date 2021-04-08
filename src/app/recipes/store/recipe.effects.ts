import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { switchMap, map, withLatestFrom, mergeMap } from "rxjs/operators";

import * as MapsActions from "../recipe-detail/map/store/maps.actions";
import * as RecipesActions from "./recipe.actions";
import { Recipe } from "../recipe.model";
import * as fromApp from "../../store/app.reducer";

@Injectable()
export class RecipeEffects {
  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(RecipesActions.FETCH_RECIPES),
    switchMap(() => {
      return this.http.get<Recipe[]>(
        "https://smartapartmentdata-3a07d-default-rtdb.firebaseio.com/recipes.json"
      );
    }),
    map(recipes => {
      return recipes.map(recipe => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : []
        };
      });
    }),
    map(recipes => {
      return new RecipesActions.SetRecipes(recipes);
    })
  );

  @Effect()
  loadpins = this.actions$.pipe(
    ofType(RecipesActions.LOAD_PINS),
    withLatestFrom(this.store.select("recipes")),
    map(([action = RecipesActions.LoadPins, recipesState]) => {
      const geoJsonPath =
        recipesState.recipes[(action as any).payload].geoJsonPath;
      console.log("geoJsonPath ", geoJsonPath);
      return new MapsActions.LoadMapPins(geoJsonPath);
    })
  );

  @Effect({ dispatch: false })
  storeRecipes = this.actions$.pipe(
    ofType(RecipesActions.STORE_RECIPES),
    withLatestFrom(this.store.select("recipes")),
    switchMap(([actionData, recipesState]) => {
      return this.http.put(
        "https://smartapartmentdata-3a07d-default-rtdb.firebaseio.com/recipes.json",
        recipesState.recipes
      );
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
