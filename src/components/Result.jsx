import React from 'react'

export default function Result({rightAns,wrongAns}) {
  return (
    <div className='result'>
        <h1>Your score is {rightAns}/10</h1>
    </div>
  )
}
