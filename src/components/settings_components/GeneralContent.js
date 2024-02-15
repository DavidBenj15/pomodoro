import React, { useState } from 'react';

export default function GeneralContent({ settings, onSettingsChange }) {
  const [updatedSettings, setUpdatedSettings] = useState(settings);

  function handleInputChange(e) {
    // updates settings
    setUpdatedSettings((prevSettings) => ({
      ...prevSettings,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div>
      <select value={updatedSettings.backgroundImg} onChange={handleInputChange}>
        {/* will need to mappictures to options */}
      </select>
    </div>
  )
}
