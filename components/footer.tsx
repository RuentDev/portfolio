import socials from '@/data/social.json'
import Image from 'next/image'
import Logo from './logo'
import Link from 'next/link'
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import Icon from './Icon';

const Footer = () => {
  return (
    <section className=" bg-[#7510F7] py-8 w-full">
        <div className=" flex flex-col items-center gap-2">
            <div className="logo-container flex justify-center items-center">
                <Logo 
                    size={30}
                    image="/icon/r-icon-white.png"
                />
            </div>

            <div className="icons-section flex justify-evenly my-4 md:w-full md:gap-4 md:justify-center">
				{socials.map(item => (
                    <Link 
                        key={item.id} 
                        title={item.title}
                        href={item.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className='w-10 h-10 flex'
                    >
                        <Icon 
                            name={item.icon as keyof typeof dynamicIconImports} 
                            className='text-white'
                        />
                    </Link>
				))}
			</div>

            <div className="credits text-center text-white">
                <p>Ruentgen Comia | FullStack JavaScript Developer © 2021</p>
                <div className='made-by flex items-center justify-center my-2'>
                    <p className="mx-2">Power by React</p>
                    <Image 
                        alt="React Logo" 
                        width={30}
                        height={30}
                        src="/images/svg/react-brands.svg" 
                    />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Footer