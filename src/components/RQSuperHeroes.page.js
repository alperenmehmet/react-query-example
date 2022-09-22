import { useQuery } from 'react-query'
import axios from 'axios'

const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery('super-heroes', () => {
    return axios.get('http://localhost:4000/superheroes')
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  console.log(data)

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>
      })}
    </>
  )
}

export default RQSuperHeroesPage
