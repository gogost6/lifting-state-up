import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import BoilingVerdict from './BoilingVerdict';

describe('Boiling verdict', () => {
    let container = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('water doesn\'t boil', () => {
        act(() => {
            render(<BoilingVerdict />, container);
        });
        expect(container.textContent).toBe("The water would not boil.");
    });

    it('water boils', () => {
        act(() => {
            render(<BoilingVerdict celsius={100}/>, container);
        });
        expect(container.textContent).toBe("The water would boil.");
    })
})