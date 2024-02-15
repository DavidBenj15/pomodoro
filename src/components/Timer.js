//Timer.js
import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Timer.module.css';

const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - (minutes * 60));

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
}

const testStyles = {
    backgroundColor: 'blue'
}


// we need to reset the timer every time the "seconds" prop changes
function Timer({seconds, timerIsRunning}) {
    const [timer, setTimer] = useState(seconds);
    const timerId = useRef();
    //const audioRef = useRef(new Audio('../images/vine-boom.mp3'));

    useEffect(() => {
        // clears and resets the timer to value of 'seconds' prop
        clearInterval(timerId.current);
        console.log('INSIDE TIMER: setting timer to ' + seconds);
        setTimer(seconds);
    }, [seconds]);

    useEffect(() => {

        // only start the timer if it is running
        if (timerIsRunning) {
            timerId.current = setInterval(() => {
                setTimer(prev => prev - 1)
            }, 1000);
        }

        return () => clearInterval(timerId.current);
    }, [timerIsRunning]);

    useEffect(() => {
        if (timer <= 0) {
            clearInterval(timerId.current);
            //audioRef.current.play();
        }
    }, [timer]);

    return (
        <div className={styles.container}>
            <h1 className={styles.clock}>{formatTime(timer)}</h1>
        </div>
    );
}

export default Timer;