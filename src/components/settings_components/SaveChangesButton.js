import React from 'react';
import styles from './styles/Button.module.css';

export default function SaveChangesButton({ onClick }) {
    const saveChangesButtonStyles = {
        gridColumn: '3 / 4',
        gridRow: '3 / 4',
        alignSelf: 'center'
    }

    return (
        <button style={saveChangesButtonStyles} className={styles.button} onClick={onClick}>
            Save changes
        </button>
    )
}
