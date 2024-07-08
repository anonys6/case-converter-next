// src/components/TextInput.tsx
'use client';

import styles from '@/styles/TextInput.module.css';
import { useRef, useEffect } from 'react';
import { useText } from '@/context/TextContext';

function TextInput() {
    const { text, setText } = useText();
    const textInputRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     if (textInputRef.current) {
    //         textInputRef.current.innerText = text;
    //     }
    // }, [text]);

    function handleInput() {
        const text = textInputRef.current?.innerText || '';
        setText(text);
    }

    function handleClear() {
        if (textInputRef.current) {
            textInputRef.current.innerText = '';
        }
        setText('');
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

export default TextInput;
