import { useEffect, useState } from 'react'
import styles from './Message.module.css'

export default function Message({msg}) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg) {
            setVisible(false)
            return
        }
        setVisible(true)
    }, [msg])

    return (
        <>
            {visible && (
                <div className={styles.message}>{msg}</div>
            )}
        </>
    )
}
