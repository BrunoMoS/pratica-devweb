import { useEffect, useState } from 'react'

import styles from './Itens.module.css'

import ItemCard from './ItemCard'
import Loading from '../layout/Loading'

export default function Itens() {
    const [itens, setItens] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/shoplist', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setItens(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    }, [])

    let total = 0
    for(let i=0; i<itens.length; i++) {
        let {cost: cost} = itens[i]
        total += Number(cost) 
    }
    
    function removeItem(id) {
        fetch(`http://localhost:5000/shoplist/${id}`, {
            method: 'GET',
            headers: {
                'Conten-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(() => {
            setItens(itens.filter((item) => item.id !== id))
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div className={styles.list_buy}>
            {itens.length > 0 && <h2>Minhas Compras</h2>}
            <div className={styles.list_buy_inside}>
                {itens.length > 0 && itens.map((item) => (
                    <ItemCard
                        id={item.id} 
                        title={item.title}
                        place={item.place}
                        price={item.price}
                        quantity={item.quantity}
                        key={item.id}
                        handleRemove={removeItem}
                    />
                ))}
                {itens.length > 0 && <span className={styles.list_buy_inside_shopp0}>R$ {total.toFixed(2)}</span>}
                {!removeLoading && <Loading/>}
                {removeLoading && itens.length === 0 && (<p className={styles.list_buy_inside_shopp01} >Carrinho vazio</p>)}
            </div>
        </div>
    )
}