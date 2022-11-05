import { Flex, Heading, Spacer } from '@chakra-ui/react';
import React, {useEffect, useState} from 'react'

export default function CounterHeader({num}) {
    const [seconds, setSeconds] = useState(localStorage.getItem('seconds')||60);

    useEffect(()=>{
        const counter = setTimeout(()=>{
            if(seconds > 0){
                setSeconds((prevSeconds)=>prevSeconds-1);
                localStorage.setItem('seconds', seconds)
            }else{
                clearInterval(counter)
                localStorage.removeItem('seconds')
            }
        },1000)

        return ()=>{
            clearInterval(counter)
        }
    },[seconds])

    

    return (
        <Flex>
            <Heading>{num+1}/10</Heading>
            <Spacer></Spacer>
            <Heading>{seconds}</Heading>
        </Flex>
    )
}
