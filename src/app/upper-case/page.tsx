'use client';

import { useText } from '@/context/TextContext';
import styles from '@/styles/OutputDiv.module.css';
import { BsCopy } from 'react-icons/bs';

function toUpperCase(text: string): string {
    return text.toUpperCase();
}

function UpperCasePage() {
    const { text } = useText();
    let upperCaseText = toUpperCase(text);

    const handleClear = () => {
        upperCaseText = '';
    }

    return (
        <div className={styles.container}>
            <div
                className={styles.textOutput}
                contentEditable="true"
                data-placeholder="upper case Output..."
            >
                {upperCaseText}
            </div>

            <div className={styles.controlContainer}>
                <button
                    className={styles.button}
                    onClick={handleClear}
                >Clear</button>
                <button
                    className={styles.button}
                    onClick={() => navigator.clipboard.writeText(upperCaseText)}
                >
                    <BsCopy />
                </button>

            </div>
        </div>
    )
}

export default UpperCasePage;
