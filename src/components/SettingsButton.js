import React, { useState } from 'react';
import styles from '../styles/Button.module.css';
import Modal from './Modal';
import settingsIcon from './resources/settings.png';


export default function SettingsButton({ settings, onUpdateSettings }) {
    const buttonStyle = {
        padding: 15,
        width: '90px'
    }
    const [isOpen, setIsOpen] = useState(false);

    function handleSaveChanges(updatedSettings) {
        // call next parent function
        setIsOpen(false);
        onUpdateSettings(updatedSettings);
    }
    
    return (
        <div>
            <button style={buttonStyle} className={styles.button} onClick={() => setIsOpen(true)}>
                <img width='20' src={settingsIcon} alt='settings'/>
            </button>
            <Modal open={isOpen} 
                settings={settings} 
                onClose={() => setIsOpen(false)} 
                onSaveChanges={handleSaveChanges}>
            </Modal>
        </div>

    );
}