import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrafficListReaderComponent} from "./traffic-list-reader.component";
import {ConvertToSpacesPipe} from "../shared/convert-to-spaces.pipe";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";


@NgModule({
  declarations: [
    TrafficListReaderComponent,
    ConvertToSpacesPipe],
  imports: [
    RouterModule.forChild([
      {path: 'trafficroads', component: TrafficListReaderComponent},
    ]),
    SharedModule,
    DataTablesModule
  ]
})

export class TrafficListReaderModule {
}
