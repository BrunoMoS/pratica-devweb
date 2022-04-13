import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link to='/'></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/'>Home</Link></li>
                    <li className={styles.item}><Link to='/projects'>Projetos</Link></li>
                    <li className={styles.item}><Link to='/company'>Empresa</Link></li>
                    <li className={styles.item}><Link to='/contact'>Contato</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
