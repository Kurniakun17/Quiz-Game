import { Box, Button, Center, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react'


export default function Login({onLogin}) {
    const[keyword,setKeyword] = useState("");


    function onSubmitHandler(e){
        e.preventDefault()
        console.log("Fired")
        onLogin(keyword);
    }

    return (
        <>
            <Box>
                <Center minHeight={'100vh'}>
                    <form onSubmit={onSubmitHandler}>
                        <FormControl>
                            <Center>
                                <Heading m={10}>Login</Heading>
                            </Center>
                            <FormLabel>Username</FormLabel>
                            <Input color="black" type={"text"} value={keyword} onChange={(e)=>setKeyword(e.target.value)} mb='10'></Input>
                            <Button type='submit'>Submit</Button>
                        </FormControl>
                    </form>
                </Center>
            </Box>
            {/* <Text>Kurnia</Text> */}
            {/* <h1></h1>
            <form onSubmit={onSubmitHandler}>
                <input type="text" value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form> */}
        </>
    )
}
