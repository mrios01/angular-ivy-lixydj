//import { Map, MapSourceDataEvent } from "mapbox-gl";
import { Maps } from "../map.model";
import { createReducer, on } from "@ngrx/store";

import * as MapsActions from "./maps.actions";

/* Store */
import { Store } from "@ngrx/store";
import { AppState } from "../../../../store/app.reducer";

import { LngLatLike, LngLatBounds } from "mapbox-gl";

export interface State {
  maps: Maps[];
}

export const initialState: State = {
  maps: []
};

export function mapReducer(
  state = initialState,
  action: MapsActions.MapsActions
) {
  return state;
}
