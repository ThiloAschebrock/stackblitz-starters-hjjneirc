import { provideZonelessChangeDetection } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { Datepicker } from "./app/datepicker/datepicker";

bootstrapApplication(Datepicker, {
  providers: [provideZonelessChangeDetection()],
});
