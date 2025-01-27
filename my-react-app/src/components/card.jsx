import React, { useState } from 'react';
import {content , progressCheck} from './content.jsx';
import Card_Pagination from './card_number.jsx';
import Progress from './progress_bar.jsx';
import Timer from './timer.jsx';
import ReactCardFlip from 'react-card-flip';
 

function Card() {
  const [doAnimation, controlAnimation] = useState(false);
  const [timeUp , updateTimeUp] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progCheck , updateProgress] = useState(progressCheck)
  const [card_num , set_card_num] = useState(1)
  const [progress , setProgress] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    setIsFlipped(prevState => !prevState);
    if( progCheck[card_num].done === 0 && timeUp === false ){
        updateProgress((prev)=>
        prev.map((item)=>
            item.id === card_num ? {...item , done: 1} : item
       )
      )
      handleProgress();
    }
  }
  function handleCardChange(event , value){
    controlAnimation(true);
    setTimeout(() => {
      controlAnimation(false);
    }, 250);
      setIsFlipped(false);
      setTimeout(() => {
        set_card_num(value);
      }, 20);    
  }
  function handleProgress(){
    setProgress(prevProgress => prevProgress + 1)
  }

  return (
    <>
    <div className="timer"> <Timer timeOver={updateTimeUp} finalProgress={progress}/> </div>
    <div className='container'> 
    <Progress progress={progress} />
    <div className={doAnimation ? 'animation' : ''}> 
    <ReactCardFlip 
      isFlipped={isFlipped} 
      flipDirection="horizontal"
      flipSpeedBackToFront="0.6"
      flipSpeedFrontToBack="0.6"
      className='animating'
    >
      <div className='card card-front' onClick={handleClick}>
         {content[card_num].question}
      </div>
      <div className='card card-back' onClick={handleClick}>
      {content[card_num].answer}
      </div> 
      </ReactCardFlip>
    </div>
    <Card_Pagination
     handleChange={handleCardChange}  
    />
    </div>
    </>
  );
}

export default Card; 

 

