import { provideZonelessChangeDetection } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { SelectionControls } from "./app/selection-controls/selection-controls";

bootstrapApplication(SelectionControls, {
  providers: [provideZonelessChangeDetection()],
});
