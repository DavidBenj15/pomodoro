//ResetButton.js
import React from 'react';
import styles from '../styles/Button.module.css';
import resetIcon from './resources/reset-arrow.png';


function ResetButton({onClick}) {
    const buttonStyle = {
        padding: 15,
        width: '90px'
    }
    return (
        <button 
            className={styles.button}
            onClick={onClick}
            style={buttonStyle}>
            <img src={resetIcon} width='20' alt='reset button'/>
        </button>
    );
}

export default ResetButton;