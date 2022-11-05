import { Button } from '@chakra-ui/react'
import React from 'react'

export default function Result({onReset, rightAns,wrongAns }) {
  return (
    <div className='result'>
        <h1>Your score is {rightAns}/10</h1>
        <Button onClick={onReset}>Play Again</Button>
    </div>
  )
}
