import { describe, it, expect, beforeEach } from "vitest";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SelectionControls } from "./selection-controls";
import { page } from "vitest/browser";

describe("SelectionControls - Role-based Locator Issue", () => {
  let fixture: ComponentFixture<SelectionControls>;
  // Change to click by force
  const force = false;

  beforeEach(async () => {
    await page.viewport(1024, 768);
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(SelectionControls);
    await fixture.whenStable();
  });

  it("should click checkbox by role without force", async () => {
    // Which locator can be used to click without force and to assert the state?
    const checkbox = page.getByRole("checkbox", { name: "Accept Terms" });
    // const checkbox = page.getByText("Accept Terms");

    await checkbox.click({ force });
    await expect.element(checkbox).toBeChecked();

    await checkbox.click({ force });
    await expect.element(checkbox).not.toBeChecked();
  });

  it.only("should click radio button by role without force", async () => {
    // Which locator can be used to click without force and to assert the state?
    const radioOptionOne = page.getByRole("radio", { name: "Option One" });
    const radioOptionTwo = page.getByRole("radio", { name: "Option Two" });
    // const radioOptionOne = page.getByText("Option One");
    // const radioOptionTwo = page.getByText("Option Two");

    await radioOptionOne.click({ force });
    await expect.element(radioOptionOne).toBeChecked();
    await expect.element(radioOptionTwo).not.toBeChecked();

    await radioOptionTwo.click({ force });
    await expect.element(radioOptionOne).not.toBeChecked();
    await expect.element(radioOptionTwo).toBeChecked();
  });

  it.only("should click circle toggle by role without force", async () => {
    // Which locator can be used to click without force and to assert the state?
    const toggleOn = page.getByRole("radio", { name: "Toggle On" });
    const toggleOff = page.getByRole("radio", { name: "Toggle Off" });
    // const toggleOn = page.getByText("Toggle One");
    // const toggleOff = page.getByText("Toggle Off");

    await toggleOn.click({ force });
    await expect.element(toggleOn).toBeChecked();
    await expect.element(toggleOff).not.toBeChecked();

    await toggleOff.click({ force });
    await expect.element(toggleOn).not.toBeChecked();
    await expect.element(toggleOff).toBeChecked();
  });

  it("should click toggle button by role without force", async () => {
    // Which locator can be used to click without force and to assert the state?
    const toggleOptionA = page.getByRole("radio", { name: "Option A" });
    const toggleOptionB = page.getByRole("radio", { name: "Option B" });
    // const toggleOptionA = page.getByText("Option A");
    // const toggleOptionB = page.getByText("Option B");

    await toggleOptionA.click({ force });
    await expect.element(toggleOptionA).toBeChecked();
    await expect.element(toggleOptionB).not.toBeChecked();

    await toggleOptionB.click({ force });
    await expect.element(toggleOptionA).not.toBeChecked();
    await expect.element(toggleOptionB).toBeChecked();
  });
});
