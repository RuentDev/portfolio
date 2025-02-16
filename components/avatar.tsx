import Image from 'next/image'
import React from 'react'
const Avatar = () => {
  return (
    <div className='w-[200px] h-[200px] relative overflow-hidden rounded-full group'>
		<Image 
			src="/me.jpg" 
			alt="avatar" 
			width={200}
			height={200}
			className="avatar-image object-cover object-center w-full absolute top-0 left-0 opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition-all ease-in-out duration-500"
		/>
		<Image 
			src="/images/svg/mf-avatar.svg" 
			alt="avatar" 
			width={200}
			height={200}
			className="avatar-image object-cover object-center w-full absolute top-0 left-0 z-1 group-hover:scale-90 group-hover:opacity-0 transition-all ease-in-out duration-500"
		/>
    </div>
  )
}

export default Avatar