"use client";

import { useText } from "@/context/TextContext";
import styles from "@/styles/OutputDiv.module.css";
import { BsCopy } from "react-icons/bs";

function toTitleCase(text: string): string {
    return text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

function TitleCasePage() {
    const { text } = useText();
    let titleCaseText = toTitleCase(text);

    const handleClear = () => {
        titleCaseText = "";
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.textOutput}
                contentEditable="true"
                data-placeholder="Title Case Output..."
            >
                {titleCaseText}
            </div>

            <div className={styles.controlContainer}>
                <button className={styles.button} onClick={handleClear}>
                    Clear
                </button>
                <button
                    className={styles.button}
                    onClick={() => navigator.clipboard.writeText(titleCaseText)}
                >
                    <BsCopy />
                </button>
            </div>
        </div>
    );
}

export default TitleCasePage;
