import React, { useState, useEffect } from 'react';
import styles from '../styles/Button.module.css';

function StartPauseButton({timerIsRunning, onClick}) {
    const buttonStyle = {
        padding: 15,
        width: '90px'
    }

    const [isRunning, setIsRunning] = useState(timerIsRunning);
    function handleClick() {
        // invert status
        setIsRunning(!isRunning);
    }

    useEffect(() => {
        setIsRunning(timerIsRunning);
    }, [timerIsRunning]);

    return (
        <button 
            style={buttonStyle}
            className={styles.button}
            onClick={() => {
                onClick();
                handleClick();
            }}>
            {isRunning ? 'Pause' : 'Start'}
        </button>
    );
}

export default StartPauseButton;