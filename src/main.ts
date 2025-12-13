import { provideZonelessChangeDetection } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { ModalExampleComponent } from "./app/modal-example/modal-example";
import { provideAnimations } from "@angular/platform-browser/animations";

bootstrapApplication(ModalExampleComponent, {
  providers: [provideZonelessChangeDetection(), provideAnimations()],
});
