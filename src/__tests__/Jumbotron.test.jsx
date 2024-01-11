import Jumboweh from "../components/Jumbotron";
import { screen, render } from "@testing-library/react";

describe("montaggio di welcome", () => {
  it("welcome è montato correttamente", () => {
    render(<Jumboweh />);
    const welcome = screen.getByText(/Briccolibrary/i);

    expect(welcome).toBeInTheDocument();
  });
});
