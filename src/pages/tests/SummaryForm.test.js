import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import user from "@testing-library/user-event";

test("Initial conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", async () => {
  user.setup();
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  await user.click(checkbox);
  expect(confirmButton).toBeEnabled();

  await user.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

describe("popover tests", () => {
  test("should respond to hover", async () => {
    user.setup();
    render(<SummaryForm />);

    //popover starts hidden
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();
    // popover apperas on hover
    const termsAndConds = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConds);
    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();
    // popover disappear on unhover
    await user.unhover(termsAndConds);
    expect(popover).not.toBeInTheDocument();
  });
});
