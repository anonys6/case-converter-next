"use client";

import { useText } from "@/context/TextContext";
import styles from "@/styles/OutputDiv.module.css";
import { BsCopy } from "react-icons/bs";

function toPascalCase(text: string): string {
    return text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join("");
}

function PascalCasePage() {
    const { text } = useText();
    let pascalCaseText = toPascalCase(text);

    const handleClear = () => {
        pascalCaseText = "";
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.textOutput}
                contentEditable="true"
                data-placeholder="PascalCase Output..."
            >
                {pascalCaseText}
            </div>

            <div className={styles.controlContainer}>
                <button className={styles.button} onClick={handleClear}>
                    Clear
                </button>
                <button
                    className={styles.button}
                    onClick={() => navigator.clipboard.writeText(pascalCaseText)}
                >
                    <BsCopy />
                </button>
            </div>
        </div>
    );
}

export default PascalCasePage;
