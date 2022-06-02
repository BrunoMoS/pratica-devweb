import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copy_right}><span>Listou</span> &copy; 2022</p>
        </footer>
    )
}