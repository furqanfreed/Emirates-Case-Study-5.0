import styles from "./Header.module.scss"
import emiratesLogo from "../../../assets/images/emirates-logo.jpg"

export default function Header() {
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.header}>
                <img src={emiratesLogo} alt="Emirates logo" />
            </div>
        </header>
    )
}