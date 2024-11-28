import { useState } from 'react';
import { getMulti } from './Upgrades.jsx';

function Count() {
    const [count, setCount] = useState(0);
    const [highScore, setHighScore] = useState(0);

    function scoreKeeper() {
        const multi = getMulti();
        if (highScore > count) {
            setCount(count + multi);
        } else {
            setHighScore(count + multi)
            setCount(count + multi);
        }
    }

    return(
        <>
        <div className="counter">
            <div className="labels">
                <label>Count: {count}</label>
                <label>Highscore: {highScore}</label>
            </div>
            <div className="btns">
                <button onClick={() => scoreKeeper()} className="increase-btn">Click Me</button>
            </div>
        </div>
    </>
    );
}

export default Count