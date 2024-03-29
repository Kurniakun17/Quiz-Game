import { Box, Button, Center, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react'


export default function Login({onLogin}) {
    const[keyword,setKeyword] = useState("");

    function onSubmitHandler(e){
        e.preventDefault()
        onLogin(keyword);
    }

    return (
        <>
            <Box bgGradient={"linear(to-l,#406470, #2F4858)"}>
                <Center minHeight={'100vh'}>
                    <form onSubmit={onSubmitHandler}>
                        <Box borderRadius={"10px"} bg="white" p={"30px"} shadow="2xl">
                            <FormControl>
                                <Center>
                                    <Heading m={"5"}>Login</Heading>
                                </Center>
                                <FormLabel>Username</FormLabel>
                                <Input color="black" type={"text"} value={keyword} onChange={(e)=>setKeyword(e.target.value)} mb='10'></Input>
                                <Button type='submit'>Submit</Button>
                            </FormControl>
                        </Box>
                    </form>
                </Center>
            </Box>
        </>
    )
}
