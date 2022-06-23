import { gql, useQuery} from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"


const GET_LESSONS_QUERY = gql`
    quary{
      lessons{
        id
        title

        teacher{
          name
        }
      }
    }
      
    `
interface Lesson {
      id: string;
      title: string;
    }
function App() {
  // useEffect(() =>{
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(response => {
  //     console.log(response.data)
  //   })

  // })
  const{data} = useQuery<{lessons: Lesson[] }>(GET_LESSONS_QUERY)

  console.log(data);
  

  return (
  //  <h1 className="text-6xl font-bold text-cyan-600">Hello World</h1>
  <ul>
    {data?.lessons.map(lesson =>{
      return<li>{lesson.title}</li>
    })}


  </ul>
  )
}

export default App
