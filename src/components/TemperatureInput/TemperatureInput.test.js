import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TemperatureInput from './TemperatureInput';

describe('Temperature Input', () => {
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

    it('Temperature in Celsius', () => {
        act(() => {
            render(<TemperatureInput scale={'c'} />, container);
        });
        expect(container.textContent).toBe("Enter temperature in Celsius");
    });

    it('Temperature in Fahrenhait', () => {
        act(() => {
            render(<TemperatureInput scale={'f'} />, container);
        });
        expect(container.textContent).toBe("Enter temperature in Fahrenhait");
    });
})