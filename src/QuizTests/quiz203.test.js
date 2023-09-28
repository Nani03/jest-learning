import { screen, fireEvent, render } from "@testing-library/react";
import QuiLl203 from "./QuizL203";
import { replaceCamelWithSpaces } from "./QuizL203";

describe("checkbox conditions", () => {
  test("should be enabled on default", () => {
    render(<QuiLl203 />);
    const checkBox = screen.getByRole("checkbox");
    expect(checkBox).not.toBeChecked();
  });
  test("should enable on click", () => {
    render(<QuiLl203 />);
    const checkBox = screen.getByRole("checkbox", {
      name: "Disable Button",
    });
    fireEvent.click(checkBox);
    expect(checkBox).toBeChecked();
  });
  test("should disable on 2 click", () => {
    render(<QuiLl203 />);
    const checkBox = screen.getByRole("checkbox");
    fireEvent.click(checkBox);
    fireEvent.click(checkBox);
    expect(checkBox).not.toBeChecked();
  });
  test("should enabled on 3 click", () => {
    render(<QuiLl203 />);
    const checkBox = screen.getByRole("checkbox");
    fireEvent.click(checkBox);
    fireEvent.click(checkBox);
    fireEvent.click(checkBox);
    expect(checkBox).toBeChecked();
  });
  test("should enabled on click", () => {
    render(<QuiLl203 />);
    const buttonElement = screen.getByRole("button", {
      name: "Change to MidnightBlue",
    });
    const checkBox = screen.getByRole("checkbox");
    fireEvent.click(checkBox);
    expect(checkBox).toBeChecked();
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveStyle({ "background-color": "gray" });
  });
});

describe("spaces before camel case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("works for one inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlueLight")).toBe(
      "Midnight Blue Light"
    );
  });
});
