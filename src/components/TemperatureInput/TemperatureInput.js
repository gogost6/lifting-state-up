import styles from './styles.module.css';

const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => {
    function handleChange(e) {
        onTemperatureChange(e.target.value);
    }

    return scale == 'c' ? <fieldset className={styles.fieldset}>
        <legend>Enter temperature in Celsius</legend>
        <input data-testid="c-input" type="text" value={temperature} onChange={handleChange} />
    </fieldset> : <fieldset className={styles.fieldset}>
        <legend>Enter temperature in Fahrenhait</legend>
        <input data-testid="f-input" type="text" value={temperature} onChange={handleChange} />
    </fieldset>
}

export default TemperatureInput;