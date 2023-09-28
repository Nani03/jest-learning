import { render, screen } from "@testing-library/react";
import Option from "../Option";

test("should displays image for each scoop", async () => {
  render(<Option optionType="scoops" />);
  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images
  const alttext = scoopImages.map((el) => el.alt);
  expect(alttext).toEqual(["chocolate scoop", "vanilla scoop"]);
});

test("should dispolay image for toppings", async () => {
  render(<Option optionType="toppings" />);

  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  const alttext = toppingImages.map((el) => el.alt);
  expect(alttext).toEqual([
    "cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
