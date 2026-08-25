import {
  ProgressBar
} from '@/templates/harvard/components'

import type {
  LanguageItemProps
} from './language.schema'

export const LanguageItem = ({
  language,
}: LanguageItemProps) => {

  return (
    <li className={`language__item paragraph language__item--${language.variant}`}>
      {language.display &&
        language.variant === 'progress-bar' &&
        <ProgressBar
          range={language.value.range}
          label={language.value.label}
          value={language.value.value}
        />
      }
      {language.variant !== 'progress-bar' &&
        <p className='language__item-value'>
          {language.value.value}
        </p>
      }
    </li>
  )
}
