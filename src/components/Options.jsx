import React from 'react'
import { Center,Heading } from '@chakra-ui/react'

export default function Options({value, onAnswer}) {
  return (
      <Center onClick={onAnswer} border={"2px solid"} borderRadius={"10px"}>
        <Heading>{value}</Heading>
      </Center>
  )
}
