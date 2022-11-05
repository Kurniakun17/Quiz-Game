import React from 'react'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import {FiLogOut} from 'react-icons/fi'

export default function Navbar({user, onLogout}) {
    function onLogoutHandler(){
        onLogout();
    }

    return (
    <Flex p={"15px"} bgGradient={"linear(to-l,#BBDBBE,#93BDAC)"} minH={"10vh"} alignItems={"center"}>
        <Heading>Hello, {user}</Heading>
        <Spacer></Spacer>
        <Flex gap={2} alignItems={"center"}>
            <FiLogOut cursor={"pointer"} size={"2.5rem"} onClick={onLogoutHandler}></FiLogOut>
            <Heading display={"inline-block"}>Logout</Heading>
        </Flex>
        
    </Flex>
  )
}
