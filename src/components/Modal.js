import React, { useState } from 'react';
import styles from '../styles/Modal.module.css';
import SidebarButton from './settings_components/SidebarButton';
import Content from './settings_components/Content';
import SaveChangesButton from './settings_components/SaveChangesButton';

export default function Modal({ open, children, onClose, settings, onSaveChanges }) {
    const [content, setContent] = useState('General');
    const [updatedSettings, setUpdatedSettings] = useState(settings);

    function handleSaveChangesButtonClick() {
        // console.log('in modal: ');
        // console.log(updatedSettings);
        onSaveChanges(updatedSettings);
    }

    function handleSidebarButtonClick(value) {
        setContent(value);
    }

    function handleSettingsChange(updatedSettings) {
        setUpdatedSettings(updatedSettings);
    }

    if (!open) return null;
    
    return (
        <>
            <div className={styles.overlay} onClick={onClose}/>
            <div className={styles.modal}>
                <button onClick={onClose} className={styles.closeButton}>X</button>
                <ul className={styles.sideBar}>
                    <SidebarButton value='General' onClick={handleSidebarButtonClick} />
                    <SidebarButton value='Timer' onClick={handleSidebarButtonClick} />
                    <SidebarButton value='Account' onClick={handleSidebarButtonClick} />
                </ul>
                <Content value={content} settings={settings} onSettingsChange={handleSettingsChange}/>
                <SaveChangesButton onClick={handleSaveChangesButtonClick} updatedSettings={updatedSettings}/>
            </div>
        </>

    )
}
