import React from 'react'
import code from './images/image-qr-code.png'

const Image = () => {
  return (
    <>
      <div>
        <img src={code} className='rounded-lg w-64 h-auto mt-4 smX:w-64 smX:h-auto smX:mt-4 smM:w-64 smM:h-auto smM:mt-4 smL:w-64 smL:h-auto smL:mt-4' />
      </div>
    </>  
  )
}

export default Image;