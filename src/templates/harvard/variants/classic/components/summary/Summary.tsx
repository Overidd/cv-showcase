import './Summary.css';

import {
  Separator
} from '@/shared/components';

import type {
  SummaryProps
} from './summary.schema';

export const Summary = ({
  contents,
}: SummaryProps) => {

  return (
    <section
      className='summary'
    >
      <Separator className='separator' />
      {
        contents.display && (
          contents.data?.map(({ id, value }) => (
            <p
              key={id}
              className='summary__paragraph paragraph'
            >
              {value}
            </p>
          ))
        )
      }
    </section>
  )
}
