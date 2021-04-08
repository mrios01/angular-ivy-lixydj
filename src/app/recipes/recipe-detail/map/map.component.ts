import {
  Component,
  ViewChild,
  Inject,
  OnInit,
  AfterViewInit,
  ElementRef
} from "@angular/core";

import { LoggingService } from "../../../logging.service";

import { Store } from "@ngrx/store";
import * as fromApp from "../../../store/app.reducer";

/* Services */
import { MapBoxService } from "./mapBox.service";
/* Models */
import MapProps from "./mapProps.model";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapViewComponent implements OnInit, AfterViewInit {
  @ViewChild("map") mapElem: ElementRef;

  constructor(
    @Inject(MapBoxService) private mapBoxService,
    @Inject(LoggingService) private loggingService
  ) {}

  ngOnInit() {
    this.loggingService.printLog("MapViewComponent");
  }

  ngAfterViewInit() {
    let mapOptions: MapProps = {
      containerID: this.mapElem.nativeElement.id,
      lat: 151.274292,
      lang: -33.890842
    };
    this.mapBoxService.drawMap(mapOptions);
    console.log("I am here");
    console.log(this.mapElem.nativeElement.id);
  }
}
