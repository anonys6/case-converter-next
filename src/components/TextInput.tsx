'use client';

import styles from '@/styles/TextInput.module.css';
import { useRef } from 'react';

function TextInput() {
    const textInputRef = useRef<HTMLDivElement>(null);

    function handleInput() {
        const text = textInputRef.current?.innerText;
        console.log(text);
    }

    function handleClear() {
        if (textInputRef.current) {
            textInputRef.current.innerText = "";
        }
    }

    return (
        <div className={styles.container}>
            <div
                ref={textInputRef}
                contentEditable="true"
                className={styles.textInput}
                data-placeholder="Type here..."
                onInput={handleInput}
            />

            <div className={styles.controlContainer}>
                <button
                    className={styles.button}
                    onClick={handleClear}
                >Clear</button>
            </div>
        </div>
    )
}

export default TextInput