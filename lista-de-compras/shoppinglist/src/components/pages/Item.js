import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Loading from '../layout/Loading'
import ListForm from './ListForm'

import styles from './Item.module.css'

export default function Item() {
    const {id} = useParams()
    const [item, setItem] = useState([])
    const [showListForm, setShowListForm] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/shoplist/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setItem(data)
        })
        .catch((err) => console.log(err))
    }, [id])

    function editPost(item) {
        let priceItem
        priceItem = item.price*item.quantity
        item.cost = priceItem.toFixed(2)

        fetch(`http://localhost:5000/shoplist/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setItem(data)
            setShowListForm(false)
        })
        .catch((err) => console.log(err))
    }

    function toggleListForm() {
        setShowListForm(!showListForm)
    }

    return (
        <>
            {item.title ? ( 
                <div className={styles.item}>
                    <div className={styles.details_container}>
                        <h1>{item.title}</h1>
                        {!showListForm ? (
                            <div>
                                <p>
                                    <span>Quantidade:</span> {item.quantity}
                                </p>
                                <p>
                                    <span>Preço:</span> R${item.price}
                                </p>
                                <p>
                                    <span>Local:</span> {item.place}
                                </p>
                                <p>
                                    <span>Total:</span>  R${item.cost}
                                </p>
                            </div>
                        ) : (
                            <div>
                                <ListForm handleSubmit={editPost} btnText='Salvar' itemData={item}/>
                            </div>
                        )}
                        <button className={styles.btn} onClick={toggleListForm}>
                            {!showListForm ? 'Editar Item' : 'Fechar'}
                        </button>
                    </div>
                </div>
            ) : (
                <Loading/>
            )}
        </>
    )
}