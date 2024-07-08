import SentenceCase from "@/components/SentenceCase";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <SentenceCase />
        </main>
    );
}
