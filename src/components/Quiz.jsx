import { Box, Flex, Center, Heading, Grid, Spacer } from '@chakra-ui/react';
import Options from './OptionsList'
import React, { useState } from 'react'
import CounterHeader from './CounterHeader';
import Result from './Result';

export default function Quiz({question, onAnswer, num, onReset, rightAns, wrongAns}) {
    const [isEnded,setIsEnded] = useState(false);
    
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

    function TimesUp(){
        setIsEnded(true)
    }

    if(isEnded){
        return <Result onReset={onReset} rightAns={rightAns} wrongAns={wrongAns}></Result>
    }

    return (
        <Center mt={"5vh"} color="white">
            <Box p={"70px"} w="80%"  bgGradient={"linear(to-b,#406470 ,#2F4858)"} borderRadius={"10px"} marginBottom={"5vh"}>
                <CounterHeader num={num} TimesUp={TimesUp}></CounterHeader>
                <Flex minH={"60vh"} direction={"column"} >
                    <Center flex={"1 1 0"}>
                        <Heading>
                            {question.question}
                        </Heading>
                    </Center>
                    <Box flex={"1 1 0"}>
                        <Grid gridTemplateColumns={"repeat(2,1fr)"} minH={"100%"} gap={3}>
                            {options.map((option,index)=><Options key={index} index={index} value={option} onAnswer={()=>onAnswer(option, question.correct_answer)}></Options>)}
                        </Grid>
                    </Box>
                </Flex>
            </Box>
        </Center>
    )
}
