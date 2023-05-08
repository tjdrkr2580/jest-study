import { render, screen } from "@testing-library/react";
import App from "./App";

test("Initial color Red", () => {
  render(<App />);
  const redButton = screen.getByRole("button", {
    name: "hello",
  });
  expect(redButton);
});
