import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroesPage = () => {
  const { isLoading, data, error, isError, isFetching, refetch } = useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      enabled: false
    }
  )

  console.log({ isLoading, isFetching })

  if (isLoading || isFetching) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fetch</button>
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>
      })}
    </>
  )
}

export default RQSuperHeroesPage
