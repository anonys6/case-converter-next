"use client";

import { useText } from "@/context/TextContext";
import styles from "@/styles/OutputDiv.module.css";
import { BsCopy } from "react-icons/bs";

function ItalicTextPage() {
    const { text, setText } = useText();
    let italicText = text.replace(/\n/g, '<br />');

    const handleClear = () => {
        setText("");
    };

    return (
        <div className={styles.container}>
            <div
                style={{ fontStyle: "italic" }}
                className={styles.textOutput}
                contentEditable="true"
                data-placeholder="italic text Output..."
                dangerouslySetInnerHTML={{ __html: italicText }}
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

export default ItalicTextPage;
