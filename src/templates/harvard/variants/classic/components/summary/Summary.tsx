import './Summary.css';

import {
  Separator
} from '@/shared/components';

import type {
  SummaryProps
} from './summary.schema';

export const Summary = ({
  collection,
  SectionItem,
}: SummaryProps) => {

  return (
    <section
      className='summary'
    >
      <Separator className='separator' />
      {
        collection.items.map((data) => (
          <SectionItem
            key={data.id}
            {...data}
          />
        ))
      }
    </section>
  )
}
