'use client';

import { useText } from '@/context/TextContext';
import styles from '@/styles/OutputDiv.module.css';

function toKebabCase(text: string): string {
    return text.split('\n').map(line => line.toLowerCase().replace(/\s+/g, '-')).join('\n');
}

function PascalCasePage() {
    const { text } = useText();
    const camelCaseText = toKebabCase(text);

    return (
        <div className={styles.container}>
            <div
                className={styles.textOutput}
                contentEditable="true"
                data-placeholder="PascalCase Output..."
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

export default PascalCasePage;
