import React from 'react';
import styles from './styles/SidebarButton.module.css';

export default function SidebarButton({ value, onClick }) {
    return (
        <button 
            className={styles.button}
            onClick={() => {onClick(value)}}>
            {value}
        </button>
    );
}