import React from 'react'
import RecentWorkCard from './cards/recent-work'
import { RecentWork } from '@/lib/types'


const RecentWorks = ({ title, data }: {title: string, data: RecentWork[]}) => {
  return (
    <div className="h-auto w-full flex flex-col items-center">
      <p className="my-2 text-center text-[1.5rem] font-bold">
        {title}
      </p>
      <div className="w-3/4 my-8 mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((work: RecentWork) => (
          <RecentWorkCard
            key={work.id}
            image={work.image}
            title={work.title}
            icon={work.logo}
            path={work.link}
          />
        ))}
      </div>
    </div>
  )
}

export default RecentWorks