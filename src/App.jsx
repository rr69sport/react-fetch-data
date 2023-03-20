import useFetch from './hooks/useFetch'
import Loading from './components/Loading'
import Error from './components/Error'
import PostsList from './components/PostsList'
import Heading from './components/Heading'

const url = 'https://dummyjson.com/posts/search?q=love'

const App = () => {
  const { data, loading, error } = useFetch({ url })

  return (
    <>
      <Heading content='Fetching de Datos' />

      {error && <Error error={error} />}
      {loading ? <Loading /> : <PostsList posts={data.posts} />}
    </>
  )
}
export default App
