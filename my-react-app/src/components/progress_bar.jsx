import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';  

function Progress(props){
    const percentage = props.progress * 10 
    return (
        <div style={{ width: 90, height: 90 }}> 
            <CircularProgressbar 
            value={percentage} 
            text={`${percentage}%`} 
            strokeWidth={5}
            styles={buildStyles({
                textSize: '28px',
                pathTransitionDuration: 0.5,
                pathColor: '#392260',
                textColor: 'purple',
                trailColor: 'white',
                backgroundColor: 'red'
              })}
            />
        </div>
);
}
export default Progress;