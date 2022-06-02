import { useState } from 'react'

import {FcOk} from 'react-icons/fc'

import Message from '../layout/Message'
import ListForm from './ListForm'

import styles from './ShoppingList.module.css'
 
export default function ShoppingList() {
    const [itemMessage, setItemMessage] = useState('')

    function createItem(item) {
        let priceItem
        priceItem = item.price*item.quantity
        item.cost = priceItem.toFixed(2)    

        fetch('http://localhost:5000/shoplist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setTimeout(() => {
                window.location.reload()
            }, 300)
            setItemMessage('vai dar certo, quando der certo')
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.list_buy}>
            <ListForm handleSubmit={createItem} btnText='Salvar'/>
            {itemMessage && <Message msg={<FcOk/>}/>}
        </div>
    )
}