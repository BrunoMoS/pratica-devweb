import style from './Input.module.css'

export default function Input({type, text, name, placeholder, handleOnChange, value}) {
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
                required
                />
        </div>
    )
}