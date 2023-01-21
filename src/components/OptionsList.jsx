import React from 'react'
import { Center,Heading } from '@chakra-ui/react'

export default function OptionsList({index ,value, onAnswer}) {
  
  let colors = ["#1C6E7D", "#039590", "#4BBC8E", "#9BDE7E"]

  return (
      <Center onClick={onAnswer} border={"2px solid"} borderRadius={"10px"} bg={colors[index]}>
        <Heading>{value}</Heading>
      </Center>
  )
}
