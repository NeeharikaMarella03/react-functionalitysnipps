import React, { useEffect, useState } from 'react';
import './quiz.css'

export default function Quiz(){
    const [quizArr, setQuizArr] = useState([])
    useEffect(()=>{
        fetch('https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple').then(res=> {
            return res.json()}
            ).then(data => {
                // console.log(data)
                // return data.results;
                setQuizArr(data.results)
            });
                
    },[])

    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    console.log(quizArr)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    if(quizArr.length>0){
        const correctAnswer = quizArr[currentQuestion].correct_answer;
        const incorrectAnswers = quizArr[currentQuestion].incorrect_answers;
        var optionsArr = [...incorrectAnswers, correctAnswer]
        optionsArr.sort(()=> Math.random()-0.5)
        console.log(optionsArr)
    }
    
    function decodedContent(content){
        const divElement = document.createElement('div');
        divElement.innerHTML = content;
        return divElement.innerText;
    }

    function handleOptions(e){
        let answer = quizArr[currentQuestion].correct_answer
        const nextQuestion = currentQuestion +1

        console.log(e, answer)
        if(answer === e){
            setScore(()=> score+1)
        }
        if(nextQuestion < quizArr.length){
            setCurrentQuestion(nextQuestion)
        }else{
            setShowScore(true)
        }
    }
    
    return(
        <div className='quiz-page'>
            {
            quizArr.length === 0 ? <div>Loading...</div> 
                : 
                showScore ? (<div className="quiz-card">
                    <div className='score-card'>
                         You Scored {score} out of {quizArr.length}
                    </div>
                </div>
                ) : (
                    <div className='quiz-card'>
                    <div className='question-cont'>
                        <h2 >Question {`${currentQuestion+1}/${quizArr.length}`}</h2>
                        {/* <p >{quizArr[currentQuestion].question}</p> */}
                        <p>{decodedContent(quizArr[currentQuestion].question)}</p>

                    </div>
                    {/* <div onClick={()=>setCurrentQuestion(()=>currentQuestion+1)}>Hello</div> */}
                    <div>

                        {
                            optionsArr.map((option,index)=>{
                                return <div key={index} className='options' onClick={()=>handleOptions(option)}>
                                    {/* <div ></div> */}
                                    {/* <div className='options'>{option}</div>
                                    <div className='options'>{option}</div>
                                    <div className='options'>{option}</div> */}
                                    {option}
                                </div>
                            })
                            
                        }
                    </div>
                </div>

                )
                
            }
            
        </div>
    ) 
}