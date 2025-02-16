import Image from 'next/image'
import React from 'react'
const Avatar = () => {
  return (
    <div className='w-[200px] h-[200px]'>
			<Image 
				src="/images/svg/mf-avatar.svg" 
				alt="avatar" 
				className="avatar-image object-cover object-center w-full"
				width={200}
				height={200}
			/>
    </div>
  )
}

export default Avatar