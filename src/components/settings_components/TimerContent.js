import React, { useState, useEffect } from 'react';
import styles from './styles/TimerContent.module.css';

export default function TimerContent({ settings, onSettingsChange }) {
  const inputProps = {
    type: 'number',
    className: styles.input,
  }

  const [updatedSettings, setUpdatedSettings] = useState(settings);

  // helps combat asynchronous nature of react, making sure
  // settings are updated at the correct time.
  useEffect(() => {
    onSettingsChange(updatedSettings);
  }, [updatedSettings, onSettingsChange]);

  function handleInputChange(e) {
    // updates settings
    setUpdatedSettings((prevSettings) => ({
      ...prevSettings,
      [e.target.name]: Number(e.target.value)
    }))
  }

  return (
    <div className={styles.container}>
      <label>Pomodoro</label>
      <input {...inputProps} name='timerMinutesPomodoro' defaultValue={settings.timerMinutesPomodoro} onChange={handleInputChange}/>
      <label>Short Break</label>
      <input {...inputProps} name='timerMinutesShortBreak' defaultValue={settings.timerMinutesShortBreak} onChange={handleInputChange}/>
      <label>Long Break</label>
      <input {...inputProps} name='timerMinutesLongBreak' defaultValue={settings.timerMinutesLongBreak} onChange={handleInputChange}/>
    </div>
  )
}
