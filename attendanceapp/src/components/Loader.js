import React from 'react'
import loader from '../assets/loading.gif'

const Loader = () => {
  return (
    <div style={{textAlign: 'center', marginTop: '100px'}}>
        <img src={loader} alt="" />
    </div>
  )
}

export default Loader