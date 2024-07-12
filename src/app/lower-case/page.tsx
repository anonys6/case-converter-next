'use client';

import { useText } from '@/context/TextContext';
import styles from '@/styles/OutputDiv.module.css';
import { BsCopy } from 'react-icons/bs';

function toLowerCase(text: string): string {
    return text.toLowerCase();
}

function LowerCasePage() {
    const { text } = useText();
    let lowerCaseText = toLowerCase(text);

    const handleClear = () => {
        lowerCaseText = '';
    }

    return (
        <div className={styles.container}>
            <div
                className={styles.textOutput}
                contentEditable="true"
                data-placeholder="lower case Output..."
            >
                {lowerCaseText}
            </div>

            <div className={styles.controlContainer}>
                <button
                    className={styles.button}
                    onClick={handleClear}
                >Clear</button>
                <button
                    className={styles.button}
                    onClick={() => navigator.clipboard.writeText(lowerCaseText)}
                >
                    <BsCopy />
                </button>

            </div>
        </div>
    )
}

export default LowerCasePage;
