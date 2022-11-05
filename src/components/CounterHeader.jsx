import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import React, {useEffect, useState} from 'react'

export default function CounterHeader({num, TimesUp}) {
    const [seconds, setSeconds] = useState(localStorage.getItem('seconds')||60);

    useEffect(()=>{
        const counter = setTimeout(()=>{
            if(seconds > 0){
                setSeconds((prevSeconds)=>prevSeconds-1);
                localStorage.setItem('seconds', seconds)
            }else{
                clearInterval(counter)
                TimesUp();
                localStorage.removeItem('seconds');
            }
        },1000)

        return ()=>{
            clearInterval(counter)
        }
    },[seconds])

    

    return (
        <Flex color={"white"}>
            <Box bg={"#2F4858"} p={"10px"} borderRadius={"10px"}>
                <Heading>{num+1}/10</Heading>
            </Box>
            <Spacer></Spacer>
            <Box bg={"#2F4858"} p={"10px"} borderRadius={"10px"}>
                <Heading>00:{seconds}</Heading>
            </Box>
        </Flex>
    )
}
