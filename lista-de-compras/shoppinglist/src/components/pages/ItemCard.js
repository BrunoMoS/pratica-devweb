import {Link} from 'react-router-dom'

import {BsPencilSquare, BsFillCartDashFill} from 'react-icons/bs'

import styles from './ItemCard.module.css'

export default function ItemCard({id, title, price, quantity, handleRemove}) {
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.shopp}>
            <p>
                <span className={styles.shopp_sp0}>{quantity.slice(0,3)}</span>
                <span className={styles.shopp_sp1}>{title.slice(0,20)}</span>
                <span className={styles.shopp_sp2}> {price && price.slice(0,7)} </span>
                <span className={styles.shopp_sp3}><Link to={`/item/${id}`}><BsPencilSquare/></Link></span>
                <span className={styles.shopp_sp4} onClick={remove}><BsFillCartDashFill/></span>
            </p>
        </div>
    )
}