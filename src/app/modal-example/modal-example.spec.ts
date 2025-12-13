import { describe, it, expect, vi } from "vitest";
import { ModalExampleComponent } from "./modal-example";
import { render, screen, waitFor } from "@testing-library/angular";
import { userEvent } from "@testing-library/user-event";
import { outputBinding } from "@angular/core";

describe("ModalExample", () => {
  it("mounts dialog when opened", async () => {
    const user = userEvent.setup();
    await render(ModalExampleComponent);

    await user.click(screen.getByRole("button", { name: "Open" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("submits after opened event", async () => {
    const user = userEvent.setup();
    const afterOpened = vi.fn();
    await render(ModalExampleComponent, {
      bindings: [outputBinding("afterOpened", afterOpened)],
    });

    await user.click(screen.getByRole("button", { name: "Open" }));

    await waitFor(() => {
      expect(afterOpened).toHaveBeenCalled();
    });
  });

  it("removes dialog when closed", async () => {
    const user = userEvent.setup();
    await render(ModalExampleComponent);

    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Close dialog" }));

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("submits before closed event", async () => {
    const user = userEvent.setup();
    const beforeClosed = vi.fn();
    await render(ModalExampleComponent, {
      bindings: [outputBinding("beforeClosed", beforeClosed)],
    });

    await user.click(screen.getByRole("button", { name: "Open" }));
    await user.click(screen.getByRole("button", { name: "Close dialog" }));

    await waitFor(() => {
      expect(beforeClosed).toHaveBeenCalled();
    });
  });

  it("submits after closed event", async () => {
    const user = userEvent.setup();
    const afterClosed = vi.fn();
    await render(ModalExampleComponent, {
      bindings: [outputBinding("afterClosed", afterClosed)],
    });

    await user.click(screen.getByRole("button", { name: "Open" }));
    await user.click(screen.getByRole("button", { name: "Close dialog" }));

    await waitFor(() => {
      expect(afterClosed).toHaveBeenCalled();
    });
  });
});
