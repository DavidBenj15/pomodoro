import React from 'react';
import GeneralContent from './GeneralContent';
import TimerContent from './TimerContent';
import AccountContent from './AccountContent';

export default function Content({ value, settings, onSettingsChange }) {
    function handleSettingsChange(updatedSettings) {
        // call onSettingsChange prop in parent (Modal.js)
        // console.log('in content: ');
        // console.log(updatedSettings);
        onSettingsChange(updatedSettings);
    }

    if (!value) return <></>
    return (
        <>
            {value === 'General' && <GeneralContent settings={settings} onSettingsChange={handleSettingsChange} />}
            {value === 'Timer' && <TimerContent settings={settings} onSettingsChange={handleSettingsChange} />}
            {value === 'Account' && <AccountContent settings={settings} onSettingsChange={handleSettingsChange} />}
        </>
    );
}
