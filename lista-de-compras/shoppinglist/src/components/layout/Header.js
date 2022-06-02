import styles from './Header.module.css'

import icon from '../img/icon.png'

export default function Header() {
    return (
        <header className={styles.buy_header}>
            <img src={icon} alt='listou'/> <h1>Listou</h1>
        </header>
    )
}