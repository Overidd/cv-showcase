import './HarvardStyle.css';

import type {
  TemplateProps
} from '@/core/props';

export const HarvardClassic = ({ main, ...props }: TemplateProps) => {
  return (
    <div
      className='cv-var cv-harvard'
      {...props}
    >
      {main}
    </div>
  )
}