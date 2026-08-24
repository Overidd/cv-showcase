import './Summary.css';

import {
  Separator
} from '@/shared/components';

import type {
  SummaryProps
} from './summary.schema';

export const Summary = ({
  items,
  Item,
}: SummaryProps) => {

  return (
    <section
      className='summary'
    >
      <Separator className='separator' />
      {
        items.map((data) => (
          <Item
            key={data.id}
            {...data}
          />
        ))
      }
    </section>
  )
}
