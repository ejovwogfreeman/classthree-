import React from 'react'
import img from '../assets/crypto.jpg'
import '../css/Home.css'
import { FiMessageCircle, FiMessageSquare} from 'react-icons/fi'

// const Home = (props) => {
//   return (
//     <div>Home - {props.x} {props.t}</div>
//   )
// }

// export default Home

// const Home = ({x, t}) => {
//   return (
//     <div>Home - {x} {t}</div>
//   )
// }

const Home = () => {
  return (
    <div className='home'>
      <img src={img} alt="" />
      <FiMessageCircle/> <FiMessageSquare/>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default Home