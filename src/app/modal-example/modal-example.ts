import { NxButtonComponent } from "@allianz/ng-aquila/button";
import { NxDialogService, NxModalRef } from "@allianz/ng-aquila/modal";
import { Component, DestroyRef, inject, output } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  template: `<h3>Modal Dialog</h3>`,
})
export class SimpleModalComponent {}

/**
 * @title Modal opening example
 */
@Component({
  selector: "modal-example",
  templateUrl: "./modal-example.html",
  styleUrls: ["./modal-example.css"],
  imports: [NxButtonComponent],
})
export class ModalExampleComponent {
  componentDialogRef?: NxModalRef<SimpleModalComponent>;

  private readonly dialogService = inject(NxDialogService);
  private readonly destroyRef = inject(DestroyRef);
  readonly afterOpened = output();
  readonly afterClosed = output();
  readonly beforeClosed = output();

  openFromComponent(): void {
    this.componentDialogRef = this.dialogService.open(SimpleModalComponent, {
      ariaLabel: "A simple dialog",
      showCloseIcon: true,
    });
    this.componentDialogRef
      .afterOpened()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.afterOpened.emit();
      });
    this.componentDialogRef
      .beforeClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.beforeClosed.emit();
      });

    this.componentDialogRef
      .afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.afterClosed.emit();
      });
  }
}
