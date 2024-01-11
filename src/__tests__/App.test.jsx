import { screen, render, fireEvent } from "@testing-library/react";
import App from "../App";


// describe("number of cards equal to number of items in data", () => {
//   it("number of cards is equal", () => {
//     render(<App />);
//     const images = screen.queryAllByRole("img");

//     expect(images).toHaveLength(150);
//   });
// });

describe("filtraggio della navbar", () => {
    it('filtraggio funziona correttamente', () => {
        render(<App />)
        const searchbar = screen.getByTestId('search')
        const images = screen.queryAllByRole("img");
        expect(images).toHaveLength(150);
    
        fireEvent.change(searchbar, {target: {value: 'pe'}})
        const images2 = screen.queryAllByRole("img");
        expect(images2).not.toHaveLength(150);

        fireEvent.change(searchbar, {target: {value: 'sda'}})
        const images3 = screen.queryAllByRole("img");
        expect(images3).toHaveLength(1);



    })
})