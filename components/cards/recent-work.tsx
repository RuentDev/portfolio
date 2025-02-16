import React from "react"
import Image from "next/image"
import Link from "next/link"


interface RecentWorkCardProps {
    image: string
    icon: string
    title: string
    path: string
}

const RecentWorkCard: React.FC<RecentWorkCardProps> = ({ image, icon, title, path }) => {
	return (
		<div className="card group shadow-xl">
			<div className="card-inner relative h-[300px] w-full rounded-lg">
				<div className="absolute w-full h-full backface-hidden bg-center bg-no-repeat bg-cover rounded-lg" style={{backgroundImage: `url(${image})`}} >
					<div  className={`overlay w-full h-full rounded-lg bg-black bg-opacity-0 group-hover:bg-opacity-70 flex flex-col justify-center items-center  transform-style-preserve-3d transition-all ease-in-out duration-500`}>
						<div className="image-container overflow-hidden group-hover:opacity-100 opacity-0 transform-style-preserve-3d transition-all ease-in-out duration-500 ">
							<Image 
								src={icon} 
								alt={title} 
								width={100}
								height={100}
								className="w-auto h-auto object-center object-contain" 
							/>
						</div>
						<div className="content group-hover:opacity-100 opacity-0 transform-style-preserve-3d transition-all ease-in-out duration-500 ">
							<Link target="_blank" href={path} className="inline-block h-auto py-2 px-4 text-center border border-white rounded-2xl my-8 text-white font-bold hover:bg-white hover:text-[#7510F7] transition-all ease-in-out duration-300">
								Check it!
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RecentWorkCard