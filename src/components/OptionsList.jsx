import React from 'react'
import { Center,Heading } from '@chakra-ui/react'

export default function OptionsList({index ,value, onAnswer}) {
  
  let colors = ["#1C6E7D", "#039590", "#4BBC8E", "#9BDE7E"]

  function shuffle(arr){ 
    for(let i = arr.length-1; i>0;i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
}

  return (
      <Center onClick={onAnswer} border={"2px solid"} borderRadius={"10px"} bg={colors[index]}>
        <Heading>{value}</Heading>
      </Center>
  )
}
