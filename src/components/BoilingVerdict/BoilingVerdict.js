import styles from './styles.module.css';

const BoilingFertict = ({celsius}) => {
    if (celsius >= 100) {
        return <p data-testid="boiling-p" className={styles.p}>The water would boil.</p>;
    }
    return <p data-testid="boiling-p" className={styles.p}>The water would not boil.</p>;
}

export default BoilingFertict;