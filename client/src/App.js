import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const App = () => {

  const [backendData, setBackendData] = useState([{}]);

  // useEffect(() => {
  //   fetch('/api').then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, []);

  const getData = async() => {
    const res = await Axios.get('/api');
    setBackendData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {(typeof backendData.users === 'undefined')
        ? (<p>Loading...</p>)
        : (
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )}
    </div>
  )
}

export default App