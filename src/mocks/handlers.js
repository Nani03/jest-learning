import { rest } from "msw";

export const handlers = [
  rest.get("https://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "chocolate", imagePath: "images/chocolate.png" },
        { name: "vannilla", imagepath: "/images/vanilla.png" },
      ])
    );
  }),
  rest.get("https://localhost:3030/toppings", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Cherries", imagePath: "images/cherries.png" },
        { name: "M&Ms", imagepath: "/images/m-and-ms.png" },
        { name: "Hot fudge", imagepath: "/images/hot-fudge.png" },
      ])
    );
  }),
];
