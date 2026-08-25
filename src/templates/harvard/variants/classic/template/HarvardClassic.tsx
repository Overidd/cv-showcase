import './styles.css';

import {
  themeConfig
} from '@/core/config'

import {
  HarvardClassicTheme
} from './HarvardClassicTheme'

import { profileDefinition } from '../components/profile'
import { summaryDefinition } from '../components/summary';
import { workExperienceDefinition } from '../components/workExperience';
import { academyDefinition } from '../components/academy';
import { skillDefinition } from '../components/skill'
import { languageDefinition } from '../components/language'
import { projectDefinition } from '../components/project';

import { baseArgsProfile } from '../components/profile/Profile.stories'
import { baseArgsSummary } from '../components/summary/Summary.stories'
import { baseArgsWorkExperienceData } from '../components/workExperience/WorkExperience.stories'
import { academyData } from '../components/academy/Academy.stories';
import { baseArgsSkill } from '../components/skill/Skill.stories';
import { baseArgsLenguage } from '../components/language/Language.stories';
import { baseArgsProjectData } from '../components/project/Project.stories';

export const HarvardClassic = () => {

  return (
    <div
      style={themeConfig(HarvardClassicTheme)}
      className='cv-var cv-harvard'
    >
      <profileDefinition.component
        {...baseArgsProfile}
      />

      <summaryDefinition.component
        {...baseArgsSummary}
      />

      <workExperienceDefinition.component
        {...baseArgsWorkExperienceData}
      />

      <projectDefinition.component
        {...baseArgsProjectData}
      />

      <academyDefinition.component
        {...academyData}
      />

      <skillDefinition.component
        {...baseArgsSkill}
      />
      <languageDefinition.component
        {...baseArgsLenguage}
      />
    </div >
  )
}