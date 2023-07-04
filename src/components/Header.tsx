import styles from "./Header.module.css"
import IgniteLogo from "../assets/ignite-logo.svg"
export function Header(){
    return (
        <header className={styles.header}> 
            <img src={ IgniteLogo } alt="Logo do Ignite" />
            <div className={styles.headerTitle}>
                Ignite Feed
            </div>
        </header>
        
    )
}
