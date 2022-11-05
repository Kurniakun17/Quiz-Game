import { Box, Button, ButtonGroup, Center, Heading, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Result({onReset, rightAns,wrongAns }) {
  return (
    <Box p={"15px"}  minH={"100%"} color="white">
      <Center minH={"80vh"}>
        <Flex direction={"column"} alignItems={"center"} p={"80px"} borderRadius={"20px"} bgGradient={"linear(to-b,#406470 ,#2F4858)"} fontSize={"3xl"} fontWeight="bold">
          <Heading >Your score is {rightAns}/10</Heading>
          <Box mt={"3vh"}>
            <Text color={"#99C3A6"}>Right Answer : {rightAns}</Text>
            <Text color={"#bd4040"}>Wrong Answer : {wrongAns}</Text>
            <Text color={"#b0aeae"}>Not Answered : {10 - (wrongAns+rightAns)}</Text>
          </Box>
          <ButtonGroup margin={"5vh"}>
            <Button  onClick={onReset} fontWeight={"bold"} color={"black"}>Play Again</Button>
          </ButtonGroup>
        </Flex>
      </Center>
    </Box>
  )
}
