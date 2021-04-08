import { LngLatLike, LngLatBounds } from "mapbox-gl";

export interface Maps {
  center: LngLatLike;
  zoom: number;
  bbox: LngLatBounds;
  geoJSON: any;
}
