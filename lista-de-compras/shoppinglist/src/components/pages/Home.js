import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.home}>
            <section className={styles.home_container}>
                <h3>Bem vindo</h3>
                <p>Lembrar apenas quando chegar em casa, nunca mais !</p>
            </section>
        </div>
    )
}