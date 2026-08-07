import styles from './aside.module.css';
import logo from './logo.png'
import Image from 'next/image';
export const Aside = () => {
    return (
        <aside className={styles.aside}>
        {/*<img src="/logo.png" alt="logo-code-conect" />} */}
            <Image src={logo} alt="logo-code-conect" />
        </aside>
    )
}