import React from 'react'
import { parseISO, format } from 'date-fns';
export default function Date({ dateString }) {
    const date = parseISO(dateString)

  return (
    <div>
        <p>
          Date Published: <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')} </time>
        </p>
    </div>
  )
}