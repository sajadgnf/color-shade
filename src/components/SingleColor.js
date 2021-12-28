import React, { useEffect, useState } from 'react';

// styles
import styles from "./SingleColor.module.css"

const Colors = ({ weight, hex, index }) => {

    const [alert, setAlert] = useState(false)
    
    const hexValue = `#${hex}`

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 3000)
        return () => clearTimeout(timeout)
    }, [alert])

    const copyHandler = () => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
    }

    return (
        <article
            className={index > 10 ? styles.lightColor : styles.darkColor}
            onClick={copyHandler}
            style={{ background: hexValue }
            }>
            <p className={styles.colorWeight}>{weight}%</p>
            <p>#{hex}</p>
            {alert && <p className={styles.alert}>copy to clip bord</p>}
        </article>
    );
};

export default Colors;