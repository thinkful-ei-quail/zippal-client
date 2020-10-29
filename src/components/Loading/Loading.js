import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Loading.css'

function Loading() {
  return (
    <div className='Loading'>
      <div className='Loading__content'>
        <FontAwesomeIcon className='Loading__spinner' icon='spinner' spin />
        <p>Loading...</p>
      </div>
    </div>
  )
}

export default Loading