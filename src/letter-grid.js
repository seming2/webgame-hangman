import Letter from "./letter";
// eslint-disable-next-line import/no-anonymous-default-export
export default function({secretWord, guessedLetters}){
    //함수 <span>각각의 글자<span>
    //<span>r</span>\
    let letters = secretWord
                .split('')
                .map((letter,index)=>{
                    let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
                    return(
                        <Letter
                            value={letter}
                            isShown = {isShown}
                            key ={index}
                        />
                    )
                });
  return(
    <div className="flex">
        {letters}
    </div>
  );

}