import { screen, fireEvent, render} from "@testing-library/react";
import QuiLl203 from "./QuizL203";

describe("checkbox conditions", () => {
    test("should be enabled on default", () => {
      render(<QuiLl203 />);
      const checkBox = screen.getByRole("checkbox");
      expect(checkBox).not.toBeChecked();
    });
    test("should enable on click", () => {
        render(<QuiLl203 />);
        const checkBox = screen.getByRole("checkbox", {
            name : 'Disable Button'
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
  });