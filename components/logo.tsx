import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'



interface LogoProps {
    className?: string
    image: string
    size?: number
}

const Logo: React.FC<LogoProps> = ({className, image, size = 50}) => {
  return (
    <div className={cn(`${className} clflex items-center justify-center overflow-hidden`)}>
        <Image 
            alt="Logo" 
            src={image} 
            className='w-full h-full object-contain object-center' 
            width={size}
            height={size}
        />
    </div>
  )
}

export default Logo