import './Summary.css';

import type {
  SummaryProps
} from './summary.config';

export const Summary = ({
  contents
}: SummaryProps) => {

  return (
    <section
      className='sumary'
    >
      {
        contents.display && (
          contents.data?.map(({ id, value }) => (
            <p
              key={id}
              className='sumary-paragraph paragraph'
            >
              {value}
            </p>
          ))
        )
      }
    </section>
  )
}
