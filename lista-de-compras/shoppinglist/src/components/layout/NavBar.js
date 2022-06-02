import styles from './NavBar.module.css'

import {BsCart3, BsPlusSquare} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_shopp01}>
                <Link to='/shoppinglist'><BsPlusSquare/></Link>
            </div>
            <div className={styles.navbar_shopp02}>
                <Link to='/itens'><BsCart3/></Link>
            </div>
        </div>
    )
}