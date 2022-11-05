import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Quiz from './components/Quiz'
import Result from './components/Result'
import Login from './components/Login';
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  const [user, setUser] = useState(()=>localStorage.getItem('user')||'');
  const [questions, setQuestions] = useState(()=>JSON.parse(localStorage.getItem('questions'))||[]);
  const [num, setNum] = useState(()=>JSON.parse(localStorage.getItem('num'))||0);
  const [loading, setLoading] = useState(false);
  const [rightAns, setRightAns] = useState(()=>JSON.parse(localStorage.getItem('rightAns'))||0);
  const [wrongAns, setWrongAns] = useState(()=>JSON.parse(localStorage.getItem('wrongAns'))||0);

  async function FetchData(){
    setLoading(true);
    axios.get('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy').then(response =>{
        setQuestions(response.data.results)
        localStorage.setItem("questions", JSON.stringify(response.data.results))
        localStorage.setItem("rightAns", 0);
        localStorage.setItem("wrongAns", 0)
        setLoading(false)
      }).catch(err=>{
        setLoading(false)
        console.log(err)
      })
  }

  function resetData(){
    localStorage.clear()
    setQuestions([])
    setNum(0);
    setRightAns(0);
    setWrongAns(0);
  }

  function onAnswerHandler(option, correctAnswer){
    localStorage.setItem('num', num+1);
    setNum((prevNum)=>prevNum+1)
    if(correctAnswer === option){
      setRightAns((prevRightAns)=>prevRightAns+1);
      localStorage.setItem('rightAns', rightAns+1);
      return
    }
    localStorage.setItem('wrongAns', wrongAns+1);
    setWrongAns((prevWrongAns)=>prevWrongAns+1)
  }

  function onLoginSubmit(username){
    setUser(username);
    FetchData();
    localStorage.setItem('user', username);
  }

  function onLogoutHandler(){
    resetData();
    setUser('')
  }

  function onResetHandler(){
    resetData();
    localStorage.setItem("user", user);
    FetchData();
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

  return (
    <>
      <Box minH={"100vh"}>
        <Navbar user={user} onLogout={onLogoutHandler}></Navbar>
        {/*
          <Routes>
            <Route path="/quiz" element/>
            <Route path="/result/>
          </Routes>
         */}
        {num === 10?<Result onReset={onResetHandler} rightAns={rightAns} wrongAns={wrongAns}></Result>:<Quiz question={questions[num]} onAnswer={onAnswerHandler} num={num} loading={loading} ></Quiz>}
      </Box>
    </>
  )
}

export default App
