"use client";

import { useText } from "@/context/TextContext";
import styles from "@/styles/OutputDiv.module.css";
import { BsCopy } from "react-icons/bs";

function toCamelCase(text: string): string {
    return text
        .split(" ")
        .map((word, index) =>
            index === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join("");
}

function CamelCasePage() {
    const { text, setText } = useText();
    let camelCaseText = toCamelCase(text).replace(/\n/g, '<br />');

    const handleClear = () => {
        setText("");
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.textOutput}
                contentEditable="true"
                data-placeholder="camelCase Output..."
                dangerouslySetInnerHTML={{ __html: camelCaseText }}
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

export default CamelCasePage;
