import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <ul>
                <li><a href="/">Main</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/contacts">Contacts</a></li>
                <li><a href="/adress">Adress</a></li>
                <li><a href="/vacancies">Vacancies</a></li>
                <li><a href="/support">Support</a></li>
            </ul>
        </div>
    );
}

export default Header;