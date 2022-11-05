import { Box, Flex, Center, Heading, Grid, Spacer } from '@chakra-ui/react';
import Options from './OptionsList'
import React from 'react'
import CounterHeader from './CounterHeader';

export default function Quiz({question, onAnswer, num}) {
    let options = [...question.incorrect_answers, question.correct_answer]

    function shuffle(arr){ 
        for(let i = arr.length-1; i>0;i--){
            const j = Math.floor(Math.random() * (i+1));
            const temp = arr[i];
            arr[i] = arr[j]
            arr[j] = temp
        }
        return arr
    }

    options = shuffle(options)

    return (
        <Center mt={13}>
            <Box p={"15px"} w="80%">
                <CounterHeader num={num}></CounterHeader>
                <Flex minH={"80vh"} direction={"column"} >
                    <Center flex={"1 1 0"}>
                        <Heading>
                            {question.question}
                        </Heading>
                    </Center>
                    <Box flex={"1 1 0"}>
                        <Grid gridTemplateColumns={"repeat(2,1fr)"} minH={"100%"} gap={3}>
                            {options.map((option,index)=><Options key={index} value={option} onAnswer={()=>onAnswer(option, question.correct_answer)}></Options>)}
                        </Grid>
                    </Box>
                </Flex>
            </Box>
        </Center>
    )
}
