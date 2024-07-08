'use client';

import { useText } from '@/context/TextContext';
import styles from '@/styles/OutputDiv.module.css';

function toCamelCase(text: string): string {
    return text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
        index === 0 ? match.toLowerCase() : match.toUpperCase()
    ).replace(/\s+/g, '');
}

function toKebabCase(text: string): string {
    return text.split('\n').map(line => line.toLowerCase().replace(/\s+/g, '-')).join('\n');
}

function KebabCasePage() {
    const { text } = useText();
    const camelCaseText = toKebabCase(text);

    return (
        <div className={styles.container}>
            <div
                className={styles.textOutput}
                contentEditable="true"
                data-placeholder="kebab-case Output..."
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

export default KebabCasePage;
