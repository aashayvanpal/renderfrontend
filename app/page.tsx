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
      .catch(err => {
        alert("error occured" + err)
        console.log("error in getting image", err)
      })
  }

  return (
    <div className='flex flex-col gap-8'>
      <div className=''>
        <button className='border rounded-lg bg-red-300 p-4 hover:bg-green-500' onClick={() => getTestData()}>get test Data</button>
        <button onClick={() => alert('you have used alert')}>click me </button>
      </div>
      <div>

        {/* <button onClick={() => alert('you have used alert')}>Get Menu Card </button> */}
        <Link className='border rounded-lg p-4 hover:bg-green-500' href={"https://basic-node-lx95.onrender.com/getMenuCard"}>Get Menu Card</Link>
      </div>


      <div>

        <Link className='border rounded-lg bg-black text-white p-4 hover:bg-red-500' href={"/calendar"}>Calendar Menu</Link>
      </div>

      <div>
        {
          users.map(user => <div key={user.name}>{user.id} {user.name} {user.email}</div>)
        }
      </div>
    </div>
  )
}
