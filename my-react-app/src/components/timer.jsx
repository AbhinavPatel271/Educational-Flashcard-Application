import React , {useState , useEffect} from 'react';
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';  

function Timer(props){
    const [time , setTime] = useState(100);
    useEffect(() => { 
        setTimeout(() => {
            setTime(prev => prev-1);
          }, 1000);
      }, [time]);

    if(time>0){
     return (
        <div className="clock" style={{ width: 80, height: 80 }}> 
            <CircularProgressbar 
                value={time} 
                text={`${time}`} 
                strokeWidth={5}
                styles={buildStyles({
                rotation: 0.0,
                strokeLinecap: 'butt',
                textSize: '28px',
                pathTransitionDuration: 0,
                pathColor: 'white',
                textColor: 'rgb(214, 37, 37)',
                trailColor: 'rgb(214, 37, 37)',
                backgroundColor: 'red'
              })}
            />
        </div>
    );}
    else{
        props.timeOver(true);
        if(props.finalProgress === 10){
           return (
          <div className='timeout'>HURRAH!<br/>Your Final Progress:<br/>{props.finalProgress*10}%</div>
        )
    }
    else{
    return(
        <div className='timeout'>OOPS!<br/> TIME UP<br/> Your Final Progress:{props.finalProgress*10}%</div>
    )
  }
 }
}
export default Timer;