import { screen, render } from "@testing-library/react";
import SidebarComp from "../components/SidebarComp";

describe("rendering completato", () => {
  it("il rendering di sidebar ha avuto successo", () => {
    render(<SidebarComp comments={[]}/>)
    const textbox = screen.getByPlaceholderText('write a comment')
    expect(textbox).toBeInTheDocument()
  });
});
