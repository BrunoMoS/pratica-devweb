import style from './InputEdit.module.css'

export default function InputEdit({type, text, name, placeholder, handleOnChange, value}) {
    return (
        <div className={style.form_control}>
            <label htmlFor={name}>{text}</label>
                <input 
                type={type} 
                text={text}
                name={name} 
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                />
        </div>
    )
}