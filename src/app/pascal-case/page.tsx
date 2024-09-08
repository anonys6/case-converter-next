'use client';

import { useText } from "@/context/TextContext";
import styles from "@/styles/OutputDiv.module.css";
import { BsCopy } from "react-icons/bs";

function toPascalCase(text: string): string {
    return text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join("")
        .replace(/\n/g, '<br />');
}

function PascalCasePage() {
    const { text, setText } = useText();
    let pascalCaseText = toPascalCase(text);

    const handleClear = () => {
        setText("");
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.textOutput}
                contentEditable="true"
                data-placeholder="PascalCase Output..."
                dangerouslySetInnerHTML={{ __html: pascalCaseText }}
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

export default PascalCasePage;