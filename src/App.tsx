import { useState, useEffect } from 'react'
import './App.css'
import ModelList from "./ModelList.tsx"

interface ModelItem {
  name: string
  url: string
  org: string
}

function App() {
  const [models, setModels] = useState([]);
  const getData = () => {
    fetch('/model_openness_benchmark/index.json'
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
      .then(function (data) {
        setModels(data.map((d: ModelItem,k: string)=> ({...d, "id": k})))
      });
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h1 style={{}}>Model Openness Benchmark</h1>
        {
          models && models.length > 0 && ModelList({models})
        }
    </>
  )
}

export default App
