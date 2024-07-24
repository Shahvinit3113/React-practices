import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Crud() {

    const [data, setData] = useState([])

    useEffect(()=>{

        
        axios.get('http://localhost:8000/users')
        .then(res =>setData(res.data))
        .catch(err =>  console.log(err))
        
    },[])

    const handleDelete = (id) => {
        const confirm = window.confirm("Would you like to Delete?")
        if(confirm){
            axios.delete('http://localhost:8000/users/'+ id)
            .then(res => {
            location.reload();
            }).catch(err => console.log(err))
        }
    }

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <h1 className='flex justify-center px-6 py-12 lg:px-8'>List of Users</h1>
      <div className='flex flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='d-flex justify-content-end'>
            <Link to='/create' className='btn btn-success'>Add +</Link>
        </div>
        <table>
            <thead>
                <tr className='px-6 py-12 lg:px-8'>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((d, i) => (
                        <tr key={i}>
                            <td className='flex justify-center px-2 py-3 lg:px-8'>{d.id}</td>
                            <td className='flex justify-center px-2 py-3 lg:px-8'>{d.name}</td>
                            <td>{d.email}</td>
                            <td>{d.phone}</td>
                            
                            <td>
                               {d.role === 'admin'? <Link to={`/read/${d.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">Read</Link>
     : null} 
                                <Link to={`/update/${d.id}`}  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  rounded">Edit</Link>
                                <button onClick={e => handleDelete(d.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 mx-2 px-4 rounded">Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Crud
