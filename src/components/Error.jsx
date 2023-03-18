import styles from './Error.module.css'

const Error = ({ error }) => {
  return <p className={styles.error}>Error: {error}</p>
}

export default Error
