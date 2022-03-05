import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios';
import spinner from './img/loading.gif'

function App() {  
  
  const [nama, setNama] = useState("")
  const [usia, setUsia] = useState(0)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const url = "https://your_service_host/students"

  useEffect(()=>{
    getData()
  }, [])

  const getData = () => {
    setLoading(true)
    axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Bypass-Tunnel-Reminder': 'false'
      }
    })
    .then((res)=>{
      setLoading(false)
      setData(res.data.students)
      console.log(res.data.students)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const postData = () => {
    setLoading(true)
    let body = {
      nama: nama,
      usia: usia
    }
    axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        'Bypass-Tunnel-Reminder': 'false'
      }
    })
    .then((res)=>{
      getData()
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className="App">
      <header className="App-header">

        <input type="text" placeholder="Nama" onChange={e=>setNama(e.target.value)}/>
        <input type="number" placeholder="Usia" onChange={e=>setUsia(e.target.value)}/>
        <button onClick={postData}>Kirim</button>

        {
          loading ? <img alt="spinner" src={spinner}/> : ""
        }
        
        <div>
        {data.map((val, i) => (<p key={i}>{val.nama} {val.usia}</p>))}
        </div>

      </header>
    </div>
  );
}

export default App;
