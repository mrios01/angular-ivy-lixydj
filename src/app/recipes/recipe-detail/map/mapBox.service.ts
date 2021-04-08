import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

/* Mapbox */
import mapboxgl from "mapbox-gl";
/* Store */
import { Store } from "@ngrx/store";
import { AppState } from '../../../store/app.reducer';
/* Rxjs */
import { Observable, Subject } from "rxjs";

/* Models */
import MapProps from "./mapProps.model";
/*Services*/
import { HttpService } from './http.service';

/* Actions */

@Injectable({
  providedIn: "root"
})
export class MapBoxService {

	currLocationUpdated = new Subject<any>();
	defaultCoordinates = [151.274292, -33.890842]; // BondiBeach
	currLocationData;
	state;
	map;

	constructor(
		private store: Store<AppState>,
		//private toastService: ToasterService,
		private httpService: HttpService
	) {

		mapboxgl.accessToken = environment.accessToken;

		this.store.select(state => state).subscribe(data => {
			this.state = data;
		});
	}


  drawMap(mapProps: MapProps) {

		if(!mapProps?.containerID) return;

    console.log("mapProps ");
    console.log(mapProps);

		this.map = new mapboxgl.Map({
			container: mapProps.containerID,
			style: 'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=CH1cYDfxBV9ZBu1lHGqh ',
			center: [
				mapProps?.lat || this.defaultCoordinates[0],
				mapProps?.lang || this.defaultCoordinates[1]
			],
			zoom: 12
		});}


    drawFeatures(geoJsonPath: string){

      console.log("Draw Features ", geaoJsonPath);

    }

}
