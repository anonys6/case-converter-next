'use client';

import { useText } from "@/context/TextContext";
import styles from "@/styles/OutputDiv.module.css";
import { BsCopy } from "react-icons/bs";

function toUnicodeText(text: string): string {
    return text
        .split('\n')
        .map(line => line.split('').map(char => `&#${char.charCodeAt(0)};`).join(''))
        .join('<br />');
}

function UnicodeTextPage() {
    const { text, setText } = useText();
    let unicodeText = toUnicodeText(text);

    const handleClear = () => {
        setText("");
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.textOutput}
                contentEditable="true"
                data-placeholder="UNICODE TEXT Output..."
                dangerouslySetInnerHTML={{ __html: unicodeText }}
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

export default UnicodeTextPage;