'use client';

import { useText } from '@/context/TextContext';
import styles from '@/styles/OutputDiv.module.css';
import { BsCopy } from 'react-icons/bs';

function toUpperCase(text: string): string {
    return text.toUpperCase().replace(/\n/g, '<br />');
}

function UpperCasePage() {
    const { text, setText } = useText();
    let upperCaseText = toUpperCase(text);

    const handleClear = () => {
        setText("");
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.textOutput}
                contentEditable="true"
                data-placeholder="upper case Output..."
                dangerouslySetInnerHTML={{ __html: upperCaseText }}
            />
            <div className={styles.controlContainer}>
                <button className={styles.button} onClick={handleClear}>
                    Clear
                </button>
                <button
                    className={styles.button}
                    onClick={() => navigator.clipboard.writeText(text)}
                >
                    <BsCopy />
                </button>
            </div>
        </div>
    );
}

export default UpperCasePage;