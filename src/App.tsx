import { useState, useEffect } from 'react'
import './App.css'
import Badge from "./Badge.tsx"

interface ModelItem {
  name: string
  url: string
}

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('index.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h1>Model Openness Benchmark</h1>
      <div>
        {
          data && data.length > 0 && data.map((item: ModelItem, key) => <tr key={key}>
            <td >
              <a href={`https://github.com/lfai/model_openness_tool/blob/main${item.url}`}>{item.name}</a>
            </td>
            <td ><span >Beijing Academy of Artificial Intelligence (BAAl)</span></td>
            <td>{Badge()}</td>
          </tr>)
        }
      </div>
    </>
  )
}

export default App
