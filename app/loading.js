'use client'
import React from 'react';
import { Blocks } from 'react-loader-spinner'
const MyComponent = () => {
    return (
        <div className='flex justify-center items-center py-24'>
            
            <Blocks
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  visible={true}
  />
        </div>
    );
}

export default MyComponent;
