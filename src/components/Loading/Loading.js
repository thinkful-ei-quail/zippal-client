import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Loading.css'

function Loading() {
  return (
    <div className='Loading'>
      <FontAwesomeIcon className='Loading__spinner' icon='spinner' spin />
      <p>Loading...</p>
    </div>
  )
}

export default Loading