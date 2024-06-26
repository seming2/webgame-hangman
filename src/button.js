import { useState } from 'react'; // useState 로드
// eslint-disable-next-line import/no-anonymous-default-export
export default function({value, onClick}){
    const [isClicked, setIsClicked] = useState(false);
    let className = 'button';
    if(isClicked){
        // className = className + 'guessed';
        className += ' guessed'
    }
    function clickHandler(){
        setIsClicked(true)
        onClick(value);
    }
  return(
    <button 
    className={className}
    onClick={clickHandler}
    >{value}</button>
  );

}