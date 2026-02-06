import { Component } from "@angular/core";
import { NxDatefieldDirective } from "@allianz/ng-aquila/datefield";
import { NxIsoDateModule } from "@allianz/ng-aquila/iso-date-adapter";
import { NxFormfieldComponent } from "@allianz/ng-aquila/formfield";
import { NxInputDirective } from "@allianz/ng-aquila/input";
import { FormsModule } from "@angular/forms";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-root",
  imports: [
    NxDatefieldDirective,
    NxFormfieldComponent,
    NxInputDirective,
    FormsModule,
    NxIsoDateModule,
    JsonPipe,
  ],
  templateUrl: "./datepicker.html",
  styleUrl: "./datepicker.css",
})
export class Datepicker {
  value: string | null = null;
}
