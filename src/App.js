//App.js
//TODO: handle end of timer.
import React, { useState } from 'react';
import styles from './styles/App.module.css';
import Background from './components/Background';
import Timer from './components/Timer';
import LengthButton from './components/LengthButton';
import StartPauseButton from './components/StartPauseButton';
import ResetButton from './components/ResetButton';
import SettingsButton from './components/SettingsButton';

const minutesToSeconds = 60;

function App() {
  const [timerSeconds, setTimerSeconds] = useState(25 * minutesToSeconds);
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [settings, setSettings] = useState({
    timerMinutesPomodoro: 25,
    timerMinutesShortBreak: 5,
    timerMinutesLongBreak: 10,
    backgroundIndex: 0,
  });

  function handleLengthButtonClick(seconds) {
    setTimerIsRunning(false);
    setTimerSeconds(0);
    setTimeout(() => {
      setTimerSeconds(seconds);
    }, 0);
  }

  function handleStartPauseButtonClick() {
    setTimerIsRunning((prev) => !prev);
  }

  function handleResetButtonClick() {
    // set timer seconds to 0 and then to original value, so useEffect is triggered in Timer.js
    setTimerIsRunning(false);
    setTimerSeconds(1);
    setTimeout(() => {
      setTimerSeconds(timerSeconds);
    }, 0);
  }

  function handleUpdateSettings(newSettings) {
    setSettings(newSettings);
    // automatically sets timer to Pomodoro option (arbitrarily) after changing settings
    setTimerSeconds(settings.timerMinutesPomodoro * minutesToSeconds);
  }

  //paste this jawn back 
  return (
    <Background className={styles.background} settings={settings}>
      <div className={styles.container}>
        <LengthButton label='Pomodoro' seconds={settings.timerMinutesPomodoro * minutesToSeconds} onClick={handleLengthButtonClick}/>
        <LengthButton label='Short Break' seconds={settings.timerMinutesShortBreak * minutesToSeconds} onClick={handleLengthButtonClick}/>
        <LengthButton label='Long Break' seconds={settings.timerMinutesLongBreak * minutesToSeconds} onClick={handleLengthButtonClick}/>
      </div>
      <Timer seconds={timerSeconds} timerIsRunning={timerIsRunning} />
      <div className={styles.container}>
        <StartPauseButton timerIsRunning={timerIsRunning} onClick={handleStartPauseButtonClick}/>
        <ResetButton onClick={handleResetButtonClick}/>
        <SettingsButton settings={settings} onUpdateSettings={handleUpdateSettings}/>
      </div>
    </Background>
  );
}

export default App;
