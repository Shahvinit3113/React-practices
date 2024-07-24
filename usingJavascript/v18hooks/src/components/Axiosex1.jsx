import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function Axiosex1() {
    const [myData, setMyData] = useState([]);
    const [errMsg, setErrMsg] = useState("")

    // without Await
    // useEffect(()=> {
    //     axios
    //     .get('https://jsonplaceholder.typicode.com/posts')
    //     .then((res) => setMyData(res.data))
    // },[])

    // with Await

    const getApiData = async() => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setMyData(res.data)
            
        } catch (error) {
            setErrMsg(error.message)
        }
    }


    useEffect(()=> {
        getApiData();
    },[])

  return (
    <div>
      <h1>Axios Example</h1>
      <p>{errMsg != "" && <h2>{errMsg}</h2>}</p>
      <div className='grid'>
        {myData.slice(0, 9).map((post) =>{
            const {id, title, body} = post;
            return <div key ={id} className='card'>
                  <h2>  {title}</h2>
                  <p>{body}</p>
                </div>
        })}
        </div>
    </div>
  )
}

export default Axiosex1
