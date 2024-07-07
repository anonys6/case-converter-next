import React from 'react'
import styles from '@/styles/OutputDiv.module.css';

function page() {
    return (
        <div>
            <div className={styles.container}>
                <div
                    className={styles.textOutput}

                />

                <div className={styles.controlContainer}>
                    <button
                        className={styles.button}
                    >Clear</button>
                </div>
            </div>
        </div>
    )
}

export default page