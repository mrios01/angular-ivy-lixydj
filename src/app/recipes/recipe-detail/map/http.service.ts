import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Map, LngLatLike, LngLatBounds } from "mapbox-gl";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  jsonGet(bbox: LngLatBounds) {
    const JsonData = this.httpClient.get(
      "https://opendata.arcgis.com/datasets/c57777877aa041ecaef98ff2519aabf6_44.geojson"
    );
  }
}
