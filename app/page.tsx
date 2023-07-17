import axios from 'axios'
import Link from 'next/link'

export default function Home() {
  const getImage = () => {
    axios.get('/getimage')
      .then((res) => {
        console.log("response for image:", res)
      })
      .catch(err => console.log("error in getting image", err))
  }
  return (
    <div>
      <button onClick={getImage}>get my image</button>
    </div>
  )
}
