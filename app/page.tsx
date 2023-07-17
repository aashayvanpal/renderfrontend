'use client'
import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [users, setUsers] = useState<any[]>([])
  const getTestData = () => {
    axios.get('https://basic-node-lx95.onrender.com/test')
      .then((res) => {
        console.log("response for image:", res.data)
        setUsers(res.data)
      })
      .catch(err => console.log("error in getting image", err))
  }

  return (
    <div>
      <div className='pb-10'>
        <button onClick={() => getTestData()}>get test Data</button>
        <button onClick={() => alert('you have used alert')}>click me </button>
      </div>
      <div>

        {/* <button onClick={() => alert('you have used alert')}>Get Menu Card </button> */}
        <Link className='border rounded-lg p-4 hover:bg-green-500' href={"https://basic-node-lx95.onrender.com/getMenuCard"}>Get Menu Card</Link>
      </div>

      <div>
        {
          users.map(user => <div>{user.id} {user.name} {user.email}</div>)
        }
      </div>
    </div>
  )
}
