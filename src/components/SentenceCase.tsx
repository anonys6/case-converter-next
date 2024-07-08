'use client';

import { useText } from '@/context/TextContext';
import styles from '@/styles/OutputDiv.module.css';

function toSentenceCase(text: string): string {
    return text
        .toLowerCase()
        .replace(/(^[\s]*\w|[.!?]\s*\w|\n\s*\w)/g, c => c.toUpperCase())
}

function CamelCasePage() {
    const { text } = useText();
    const camelCaseText = toSentenceCase(text);

    return (
        <div className={styles.container}>
            <div
                className={styles.textOutput}
                contentEditable="true"
            >
                {camelCaseText}
            </div>

            <div className={styles.controlContainer}>
                <button
                    className={styles.button}
                >Clear</button>
            </div>
        </div>
    )
}

export default CamelCasePage;
