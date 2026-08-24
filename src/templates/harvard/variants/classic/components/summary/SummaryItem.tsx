import type {
  SummaryItemProps
} from './summary.schema'

export const SummaryItem = ({
  summary
}: SummaryItemProps) => {

  return (
    <>
      {
        summary.display &&
        <p
          className='summary__paragraph paragraph'
        >
          {summary.value}
        </p>
      }
    </>
  )
}