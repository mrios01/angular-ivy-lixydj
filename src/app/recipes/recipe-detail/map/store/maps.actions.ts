import { Action } from "@ngrx/store";

import { Maps } from "../map.model";

export const LOAD_MAP_PINS = "[Maps] Load Map Pins";
export const REPLACE_PINS = "[Maps] Replace Pins Dynamically";
export const ZOOM_PINS = "[Maps] Add Zoom A Specific Pin Location";
export const AUTOZOOM_PINS = "[Maps] Auto Zoom All Pins";

export class LoadMapPins implements Action {
  readonly type = LOAD_MAP_PINS;

  constructor(public payload: string) {}
}

export class ReplacePins implements Action {
  readonly type = REPLACE_PINS;

  constructor(public payload: number) {}
}

export class ZoomPins implements Action {
  readonly type = ZOOM_PINS;

  constructor(public payload: number) {}
}

export class AutoZoomPins implements Action {
  readonly type = AUTOZOOM_PINS;

  constructor(public payload: number) {}
}

export type MapsActions = LoadMapPins | ReplacePins | ZoomPins | AutoZoomPins;
