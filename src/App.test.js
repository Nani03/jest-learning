import { render, screen } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";

describe("App main button", () => {
  test("buttom has initial coplor", () => {
    render(<App />);
    const buttonElement = screen.getByRole("button", {
      name: "Change to blue",
    });
    expect(buttonElement).toHaveStyle({ "background-color": "red" });
  });

  test("buttom color changes after click", async () => {
    user.setup();
    render(<App />);
    const buttonElement = screen.getByRole("button", {
      name: "Change to blue",
    });
    await user.click(buttonElement);

    expect(buttonElement).toHaveStyle({ "background-color": "blue" });
  });
});

describe("checkbox conditions", () => {
  test("should be enabled on default", () => {
    // render(<App />);
    // const checkBox = screen.getByRole("checkbox");
    // expect(checkBox).not.toBeChecked();
  });
});
