'use client'
import axios from 'axios'
import Link from 'next/link'

export default function Home() {
  const getImage = () => {
    axios.get('https://basic-node-lx95.onrender.com/test')
      .then((res) => {
        console.log("response for image:", res)
      })
      .catch(err => console.log("error in getting image", err))
  }
  return (
    <div>
      broo
      <button onClick={() => getImage()}>get my image</button>
      <button onClick={() => alert('you have used alert')}>click me </button>
    </div>
  )
}
