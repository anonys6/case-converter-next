"use client";

import { useText } from "@/context/TextContext";
import styles from "@/styles/OutputDiv.module.css";
import { BsCopy } from "react-icons/bs";

function toUnicodeText(text: string): string {
    return text
        .split("")
        .map((char) => `&#${char.charCodeAt(0)};`)
        .join("");
}

function UnicodeTextPage() {
    const { text } = useText();
    let unicodeText = toUnicodeText(text);

    const handleClear = () => {
        unicodeText = "";
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.textOutput}
                contentEditable="true"
                data-placeholder="UNICODE TEXT Output..."
            >
                {unicodeText}
            </div>

            <div className={styles.controlContainer}>
                <button className={styles.button} onClick={handleClear}>
                    Clear
                </button>
                <button
                    className={styles.button}
                    onClick={() => navigator.clipboard.writeText(unicodeText)}
                >
                    <BsCopy />
                </button>
            </div>
        </div>
    );
}

export default UnicodeTextPage;
