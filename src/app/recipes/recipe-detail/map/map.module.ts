import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MapViewComponent } from "./map.component";
import { MapBoxService } from "./mapBox.service";

/* Store */
import { StoreModule } from "@ngrx/store";
import { mapsReducer } from "../store/maps.reducer";

@NgModule({
  declarations: [MapViewComponent],
  imports: [CommonModule, StoreModule.forRoot({ Maps: mapsReducer })],
  providers: [MapBoxService],
  bootstrap: [AppComponent]
})
export class MapModule {}
