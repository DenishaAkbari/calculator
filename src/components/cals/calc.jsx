import React, { useRef } from 'react';
import './calc.css';    

const Calculator = () => {
    const inputRef = useRef(null);

    const handleClick = (e) => {
        inputRef.current.value += e.target.name;
    };
        
    const clear = () => {
        inputRef.current.value = "";
    };

    const calculate = () => {
      
        inputRef.current.value = eval(inputRef.current.value).toString();
     
    };

    return (
        <div className="calculator">
            <input  type="text" ref={inputRef} className="calculator-input " readOnly />
            <div className="calc-btn">
                <button name="/" className='btn1' onClick={handleClick}>&divide;</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button name="*" className='btn1'  onClick={handleClick}>&times;</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button name="-" className='btn1'  onClick={handleClick}>&ndash;</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button name="+" className='btn1'  onClick={handleClick}>+</button>
                <button name="0" onClick={handleClick}>0</button>
                <button name="." className='btn1'  onClick={handleClick}>.</button>
                <button className='btn1'  onClick={calculate}>=</button>
                <button onClick={clear}  className="clear-btn">Clear</button>
            </div>
        </div>
    );
};

export default Calculator;