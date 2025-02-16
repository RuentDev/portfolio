import dynamicIconImports from 'lucide-react/dynamicIconImports';


export interface Skill {
    id: string;
    skill: string;
    icon: keyof typeof dynamicIconImports;
}

export interface SubContent {
    id: string;
    label: string;
    skills: Skill[];
}

export interface SkillCategory {
    id: number;
    title: string;
    image: string;
    subContent: SubContent[];
}

export interface RecentWork {
    id: number;
    title: string;
    image: string;
    logo: string;
    link: string;
}
