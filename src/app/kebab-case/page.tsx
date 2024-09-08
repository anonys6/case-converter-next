'use client';

import { useText } from '@/context/TextContext';
import styles from '@/styles/OutputDiv.module.css';

function toKebabCase(text: string): string {
    return text.split('\n').map(line => line.toLowerCase().replace(/\s+/g, '-')).join('<br />');
}

function KebabCasePage() {
    const { text, setText } = useText();
    const kebabCaseText = toKebabCase(text);

    const handleClear = () => {
        setText("");
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.textOutput}
                contentEditable="true"
                data-placeholder="kebab-case Output..."
                dangerouslySetInnerHTML={{ __html: kebabCaseText }}
            />
            <div className={styles.controlContainer}>
                <button className={styles.button} onClick={handleClear}>
                    Clear
                </button>
            </div>
        </div>
    );
}

export default KebabCasePage;