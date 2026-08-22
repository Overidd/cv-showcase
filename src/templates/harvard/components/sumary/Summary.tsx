import './Summary.css';

import type {
  SummaryProps
} from './summary.config';

export const Summary = ({
  contents
}: SummaryProps) => {

  return (
    <section
      className='summary'
    >
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
