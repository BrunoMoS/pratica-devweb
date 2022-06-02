import { useState } from 'react'

import Input from '../form/Input'
import InputEdit from '../form/InputEdit'
import SubmitButton from '../form/SubmitButton'

import styles from './ListForm.module.css'

export default function ListForm({handleSubmit, btnText, itemData}) {
    const [item, setItem] = useState(itemData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(item)
    }
    
    function handleChange(e) {
        setItem({...item, [e.target.name]: e.target.value})
    }
    
    return (
        <form onSubmit={submit} className={styles.form_buy}>
            <div className={styles.form_control}>
                <Input
                    type='text'
                    text='Adicione um Item'
                    name='title'
                    placeholder='Informe o item'
                    handleOnChange={handleChange}
                    value={item.title ? item.title : ''}
                />
                <Input
                    type='number'
                    text='Quantidade:'
                    name='quantity'
                    placeholder='Informe a quantidade'
                    handleOnChange={handleChange}
                    value={item.quantity ? item.quantity : ''}
                />
                <InputEdit
                    type='number'
                    text='Preço:'
                    name='price'
                    placeholder='Informe o preço'
                    handleOnChange={handleChange}
                    value={item.price ? item.price : ''}
                />
                <InputEdit
                    type='text'
                    text='Local:'
                    name='place'
                    placeholder='Informe o local'
                    handleOnChange={handleChange}
                    value={item.place ? item.place : ''}
                />
            </div>
            <SubmitButton text={btnText}/>
        </form>
    )
}