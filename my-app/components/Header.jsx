import styles from '../styles/header.module.css';

export default function Header( {props} ) {
    return (
        <h1 className={styles.header}>{props}</h1>
    );
}