import { fetchData } from './CustomFunc/fetchData'
import { Suspense } from 'react'
import './App.css'

const apiData = fetchData("http://localhost:8080/api/v1/document");
function App() {
  const data = apiData.read();
  console.log(data)
  return (
    <>
      <div className="App">
      <h1>Fetch like a Pro</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {data?.map((item) => (
            <li key={item.idDocumentType
            }>{item.documentTypeName}</li>
          ))}
        </ul>
      </Suspense>
    </div>
    </>
  )
}

export default App
