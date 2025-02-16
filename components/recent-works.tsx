import React from 'react'
import RecentWorkCard from './cards/recent-work'


const RecentWorks = ({ title, data }: any) => {
  return (
    <div className="h-auto w-full">
      <p className="my-2 text-center text-[1.5rem] font-bold">
        {title}
      </p>
      <div className="my-8 mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {data.map((work: any) => (
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