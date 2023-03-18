import styles from './Heading.module.css'

const Heading = ({ content }) => {
  return <h1 className={styles.heading}>{content}</h1>
}

export default Heading
