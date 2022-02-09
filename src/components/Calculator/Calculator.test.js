import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TemperatureInput from '../TemperatureInput/TemperatureInput';
import BoilingVerdict from '../BoilingVerdict/BoilingVerdict';
import Calculator from "./Calculator";

const MockedCalculator = () => {
    return <Calculator>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
        <BoilingVerdict />
    </Calculator>
}

describe('Calculator is working', () => {
    let container = null;
    let cInput;
    let fInput;
    let boilingP;

    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);

        act(() => {
            render(<MockedCalculator />, container);
        });

        cInput = screen.getByTestId('c-input');
        fInput = screen.getByTestId('f-input');
        boilingP = screen.getByTestId('boiling-p');
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('with default data', () => {
        expect(cInput.value).toBe('');
        expect(fInput.value).toBe('');
        expect(boilingP.textContent).toBe('The water would not boil.');
    })

    describe('with user type', () => {
        it('exact 100 Celsius', () => {
            userEvent.type(cInput, '100');
            expect(screen.getByTestId('boiling-p').textContent).toBe('The water would boil.');
        })

        it('above 100 Celsius', () => {
            userEvent.type(cInput, '101');
            expect(screen.getByTestId('boiling-p').textContent).toBe('The water would boil.');
        })

        it('below 100 Celsius', () => {
            userEvent.type(cInput, '9');
            expect(screen.getByTestId('boiling-p').textContent).toBe('The water would not boil.');
        })

        it('exact 212 Fahrenhait', () => {
            userEvent.type(fInput, '212');
            expect(screen.getByTestId('boiling-p').textContent).toBe('The water would boil.');
        })

        it('above 212 Fahrenhait', () => {
            userEvent.type(fInput, '213');
            expect(screen.getByTestId('boiling-p').textContent).toBe('The water would boil.');
        })

        it('below 212 Fahrenhait', () => {
            userEvent.type(fInput, '130');
            expect(screen.getByTestId('boiling-p').textContent).toBe('The water would not boil.');
        })
    })
})