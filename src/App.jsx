import React from 'react'
import Image from './Components/Image';
import Heading from './Components/Heading';
import Paragraph from './Components/Paragraph';
const App = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen w-full'> 
        <div className='flex justify-center items-center bg-White flex-col rounded-2xl drop-shadow-md h-auto w-72 smX:h-auto smX:w-72 smM:h-auto smM:w-72 smL:h-auto smL:w-72'>
          <Image />
          <Heading />
          <Paragraph />
        </div>
      </div>
    </>
  )
}

export default App;