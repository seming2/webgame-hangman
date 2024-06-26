import { useState } from "react";
//word-select
// eslint-disable-next-line import/no-anonymous-default-export
export default function({wordSelected, isShown}){
    const [secretWord, setSecretWord] = useState('');

    return(
        <div>
            <input 
            type="text"
            onChange={e=>setSecretWord(e.target.value)}
            />
            <button onClick={e=>wordSelected(secretWord) }>Set Word</button>
        </div>
    );
}