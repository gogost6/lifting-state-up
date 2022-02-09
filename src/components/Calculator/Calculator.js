import { useState } from "react";
import BoilingFertict from "../BoilingVerdict/BoilingVerdict";
import TemperatureInput from "../TemperatureInput/TemperatureInput";
import * as utils from '../../utils/functions';

const Calculator = () => {
    const [state, setState] = useState({
        scale: '',
        temperature: ''
    });

    function handleCelsiusChange(temperature) {
        setState({ scale: 'c', temperature });
    }

    function handleFahrenheitChange(temperature) {
        setState({ scale: 'f', temperature });
    }

    const celsius = state.scale === 'f' ? utils.tryConvert(state.temperature, utils.toCelsius) : state.temperature;
    const fahrenheit = state.scale === 'c' ? utils.tryConvert(state.temperature, utils.toFahrenheit) : state.temperature;

    return (
        <div>
            <TemperatureInput scale="c"
                temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale="f"
                temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            <BoilingFertict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;