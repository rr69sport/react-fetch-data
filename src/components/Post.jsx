import styles from './Post.module.css'

const Post = ({ title, body }) => {
  return (
    <li className={styles.post}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
    </li>
  )
}
export default Post
