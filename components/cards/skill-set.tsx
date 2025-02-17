import { SubContent } from '@/lib/types';
import Image from 'next/image';
import React from 'react'

interface SkillsetProps {
	title: string;
	image: string;
	data: SubContent[];
}

const SkillSetCard: React.FC<SkillsetProps> = ({ title, image, data }) => {
  return (
		<div className='skillset-card w-full h-full flex flex-col gap-2 p-10'>
			<div className="card-title-image overflow-hidden flex justify-center items-center">
				<Image 
					src={image} 
					alt={title} 
					className="object-cover object-center" 
					width={50}
					height={50}
				/>
			</div>
			<div className="heading text-[1.2rem] text-center">
				{title}
			</div>
			{data.map((tool) => (
				<div key={tool.id} className="tools flex justify-center items-center">
					<ul className="list-none grid grid-cols-3 gap-2 justify-center">
						{tool.skills.map((item) => (
							<li key={item.id} title={item.skill} className="overflow-hidden m-2 flex justify-center items-center">
								<Image 
									src={item.icon} 
									alt={item.skill} 
									width={30} 
									height={30}
									className="object-cover object-center"
								/>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
  )
}

export default SkillSetCard