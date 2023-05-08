import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { describe, it } from "vitest";

describe("App", () => {
  it("renders App", () => {
    render(<App />);
    expect(screen.getByText("Vite + React"));
  });
});
