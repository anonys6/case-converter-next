"use client";

import { useText } from "@/context/TextContext";
import styles from "@/styles/OutputDiv.module.css";
import { BsCopy } from "react-icons/bs";

function ItalicTextPage() {
    const { text } = useText();
    let italicText = text;

    const handleClear = () => {
        italicText = "";
    };

    return (
        <div className={styles.container}>
            <div
                style={
                    {
                        fontStyle: "italic"
                    }
                }
                className={styles.textOutput}
                contentEditable="true"
                data-placeholder="italic text Output..."
            >
                {italicText}
            </div>

            <div className={styles.controlContainer}>
                <button className={styles.button} onClick={handleClear}>
                    Clear
                </button>
                <button
                    className={styles.button}
                    onClick={() => navigator.clipboard.writeText(italicText)}
                >
                    <BsCopy />
                </button>
            </div>
        </div >
    );
}

export default ItalicTextPage;
