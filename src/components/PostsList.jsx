import styles from './PostsList.module.css'
import Post from './Post'

const PostsList = ({ posts }) => {
  return (
    <ul className={styles.postsList}>
      {
        posts?.map(post => {
          const { id, title, body } = post

          return (
            <Post key={id} title={title} body={body} />
          )
        })
      }
    </ul>
  )
}

export default PostsList
