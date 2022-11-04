import React from 'react'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import {FiLogOut} from 'react-icons/fi'

export default function Navbar({user, onLogout}) {
    function onLogoutHandler(){
        onLogout();
    }

    return (
    <Flex p={"15px"} backgroundColor='gray.400'>
        <Heading>Hello, {user}</Heading>
        <Spacer></Spacer>
        <Flex gap={2} align={"center"}>
            <FiLogOut size={"2rem"} onClick={onLogoutHandler}></FiLogOut>
            <Heading display={"inline-block"}>Logout</Heading>
        </Flex>
        
    </Flex>
  )
}
