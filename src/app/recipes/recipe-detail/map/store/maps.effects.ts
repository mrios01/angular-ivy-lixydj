import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { switchMap, map, withLatestFrom, tap } from "rxjs/operators";

import * as MapsActions from "./maps.actions";
import * as http.service from "../http.service";
import { MapBoxService } from "../mapBox.service"

import { Maps } from "../map.model";
import * as fromApp from "../../../../store/app.reducer";

@Injectable()
export class MapsEffects {
  @Effect()
  loadpins = this.actions$.pipe(
    ofType(MapsActions.LOAD_MAP_PINS),
    map(action => {
      const geoJsonPath = (action as any).payload;
      console.log("LoadPinsFunctions: ", geoJsonPath);

      return this.mapBoxService.drawFeatures(geoJsonPath);
      //return geoJsonPath;
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>,
    private mapBoxService: MapBoxService
  ) {}
}
