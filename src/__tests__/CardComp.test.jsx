import { click } from "@testing-library/user-event/dist/click";
import CardComp from "../components/CardComp";
import App from "../App";

import { screen, render, fireEvent, waitFor } from "@testing-library/react";

// describe("bordo cambia colore al click", () => {
//     // Non riesco a capire perchè non rileva la classe
//   it.skip("la card ha una outline",  () => {
//     render(<CardComp selected />);
//     const card =  screen.getByTestId("card");
//     expect(getComputedStyle(card).getPropertyValue("outline")).not.toBeFalsy();
//   });
// });

describe("bordo cambia colore al click", () => {
  // Non riesco a capire perchè non rileva la classe
  it("la card ha una outline", () => {
    render(<App />);
    const card = screen.queryAllByTestId("card")[0];

    fireEvent.click(card);
    expect(card).toHaveStyle("outline: 2px solid red");
  });
});

describe("cliccare su una card diversa cambia il bordo", () => {
  it("la outline cambia quando clicchi?", () => {
    render(<App />);
    const card1 = screen.queryAllByTestId("card")[0];
    const card2 = screen.queryAllByTestId("card")[1];
    fireEvent.click(card1);
    expect(card1).toHaveStyle("outline: 2px solid red");
    expect(card2).not.toHaveStyle("outline: 2px solid red");

    fireEvent.click(card2);
    expect(card2).toHaveStyle("outline: 2px solid red");
    expect(card1).not.toHaveStyle("outline: 2px solid red");
  });
});

// describe("test commenti", () => {
//   it("le recensioni si visualizzano correttamente?", () => {
//     render(<App />)
//     const card = screen.queryAllByTestId('card')[5]
//     fireEvent.click(card)
//     const reviewArea = document.querySelector('commentsSidebar').childNodes[2]
//     if(reviewArea.hasChildNodes) {
//       expect(reviewArea.children).not.toBeNull
//     } else {
//       expect(reviewArea.children).toBeNull
//     }
    
//   });
// });
