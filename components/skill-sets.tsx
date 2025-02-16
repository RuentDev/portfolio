import { SkillCategory, SubContent } from '@/libs/types'
import SkillSetCard from './cards/skill-set'
import React from 'react'

interface SkillSetsProps {
    skills: SkillCategory[]
}

const SkillSets = ({ skills }: SkillSetsProps) => {
  return (
    <div className="skill-set h-[50vh] w-3/4 bg-white rounded-lg shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="skill-set-container w-full h-full flex">
            {skills.map((skillset) => (
                <SkillSetCard
                    key={skillset.id}
                    data={skillset.subContent as SubContent[]}
                    title={skillset.title}
                    image={skillset.image}
                />
            ))}
        </div>
    </div>
  )
}

export default SkillSets