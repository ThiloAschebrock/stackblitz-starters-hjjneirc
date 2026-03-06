import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NxCheckboxComponent } from "@allianz/ng-aquila/checkbox";
import {
  NxRadioGroupComponent,
  NxRadioComponent,
} from "@allianz/ng-aquila/radio-button";
import {
  NxCircleToggleGroupComponent,
  NxCircleToggleComponent,
} from "@allianz/ng-aquila/circle-toggle";
import {
  NxRadioToggleComponent,
  NxRadioToggleButtonComponent,
} from "@allianz/ng-aquila/radio-toggle";

@Component({
  selector: "app-selection-controls",
  standalone: true,
  imports: [
    FormsModule,
    NxCheckboxComponent,
    NxRadioGroupComponent,
    NxRadioComponent,
    NxCircleToggleGroupComponent,
    NxCircleToggleComponent,
    NxRadioToggleComponent,
    NxRadioToggleButtonComponent,
  ],
  template: `
    <fieldset>
      <legend>Checkbox Control</legend>
      <nx-checkbox [(ngModel)]="checkboxValue">Accept Terms</nx-checkbox>
    </fieldset>

    <fieldset>
      <legend>Radio Button Group</legend>
      <nx-radio-group [(ngModel)]="radioValue" name="radioGroup">
        <nx-radio value="one">Option One</nx-radio>
        <nx-radio value="two">Option Two</nx-radio>
      </nx-radio-group>
    </fieldset>

    <fieldset>
      <legend>Toggle Button Group</legend>
      <nx-circle-toggle-group [(ngModel)]="toggleValue" name="toggleGroup">
        <nx-circle-toggle value="on" label="Toggle One" />
        <nx-circle-toggle value="off" label="Toggle Off" />
      </nx-circle-toggle-group>
    </fieldset>

    <fieldset>
      <legend>Toggle Button</legend>
      <nx-radio-toggle>
        <nx-radio-toggle-button value="A" [selected]="true">Option A</nx-radio-toggle-button>
        <nx-radio-toggle-button value="B">Option B</nx-radio-toggle-button>
      </nx-radio-toggle>
    </fieldset>
  `,
})
export class SelectionControls {
  checkboxValue = false;
  radioValue = "one";
  toggleValue = "on";
}
