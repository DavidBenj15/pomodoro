import React from 'react';
import styles from '../styles/Button.module.css';

function LengthButton({onClick, seconds, label}) {
    return (
        <button 
            className={styles.button}
            onClick={() => onClick(seconds)}>
                {label}
        </button>
    );
}

export default LengthButton;