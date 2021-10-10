import styles from "./PageHeading.module.scss"

export default function PageHeading({heading}) {
    return (
        <div className={styles.pageHeading}>
            <h1>{heading}</h1>
        </div>
    )
}