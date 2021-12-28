import React, { useState } from 'react';
import Values from 'values.js';

// styles
import styles from "./Colors.module.css"

// components
import SingleColor from './SingleColor'

const Form = () => {

    const [color, setColor] = useState("")
    const [error, setError] = useState(false)
    const [list, setList] = useState(new Values('#e04040').all(10))

    const submitHandler = event => {
        event.preventDefault()
        try {
            let colors = new Values(color).all(10)
            setList(colors)
        } catch (error) {
            setError(true)
            console.log(error)
        }
    }

    return (
        <>
            <section className={styles.header}>
                <h1 className={styles.title}>Color Generator</h1>
                <form onSubmit={submitHandler} className={styles.form}>
                    <input
                        type="text"
                        placeholder='#e04040'
                        className={error ? styles.error : null}
                        value={color}
                        onChange={e => { setColor(e.target.value) }}
                        onFocus={() => setError(false)}
                    />
                    <button className={styles.submitBtn} type='submit'>Submit</button>
                </form>
            </section>
            <section className={styles.colorContainer}>
                {list.map((color, index) => <SingleColor key={index} hex={color.hex} {...color} index={index} />)}
            </section>
        </>
    );
};

export default Form;