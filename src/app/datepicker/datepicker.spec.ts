import { describe, it, expect } from "vitest";
import { Datepicker } from "./datepicker";
import { TestBed } from "@angular/core/testing";

describe("Datepicker", () => {
  it("mounts component without error", async () => {
    const fixture = TestBed.createComponent(Datepicker);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
