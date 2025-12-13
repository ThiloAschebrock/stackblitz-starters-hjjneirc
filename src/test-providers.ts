import { provideZonelessChangeDetection } from "@angular/core";
import { provideNoopAnimations } from "@angular/platform-browser/animations";

export default [provideZonelessChangeDetection(), provideNoopAnimations()];
