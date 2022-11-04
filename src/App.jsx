import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Quiz from './components/Quiz'
import Result from './components/Result'
import Login from './components/Login';
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  // const navigate = useNavi
  const [user, setUser] = useState(()=>localStorage.getItem('user')||'');
  const [questions, setQuestions] = useState(0)
  const [num, setNum] = useState(0)
  const [loading, setLoading] = useState(true)
  const [rightAns, setRightAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);
  
  
  useEffect(()=>{
    setLoading(true)
    axios.get('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy').then(response =>{
      setQuestions(response.data.results)
      setLoading(false)
    }).catch(err=>{
      setLoading(false)
      console.log(err)
    })
  },[])

  function onAnswerHandler(option, correctAnswer){
    setNum((prevNum)=>prevNum+1)
    if(correctAnswer === option){
      setRightAns((prevRightAns)=>prevRightAns+1);
      return
    }
    setWrongAns((prevWrongAns)=>prevWrongAns+1)
  }
  
  function onLoginSubmit(username){
    setUser(username);
    localStorage.setItem('user', username);
    console.log("Fired!");
  }

  if(!user){
    return(
    <>
    <Routes>
      <Route path='/*' element={<Login onLogin={onLoginSubmit}></Login>}></Route>
    </Routes>
    </>
    );
  }

  if(loading){
    return <p>Loading...</p>
  }

  function onLogoutHandler(){
    setUser('');
    localStorage.setItem("user", '');
  }

  return (
    <>
      <Box minH={"100vh"}>
        <Navbar user={user} onLogout={onLogoutHandler}></Navbar>
        {num === 10?<Result rightAns={rightAns} wrongAns={wrongAns}></Result>:<Quiz question={questions[num]} onAnswer={onAnswerHandler} num={num}></Quiz>}
      </Box>
    </>
  )
}

export default App
