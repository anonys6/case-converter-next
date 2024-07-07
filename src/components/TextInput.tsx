import styles from '@/styles/TextInput.module.css';

function TextInput() {
    return (
        <div className={styles.container}>
            <div contentEditable="true" className={styles.textInput} data-placeholder="Type here..." />
            <div className={styles.controlContainer}>

            </div>
        </div>
    )
}

export default TextInput