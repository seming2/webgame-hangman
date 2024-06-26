import LetterGrid from "./letter-grid";
import ButtonGrid from "./button-grid";
// eslint-disable-next-line import/no-anonymous-default-export
export default function({secretWord}){
  return(
    <div>
        <LetterGrid 
          secretWord={secretWord}
          guessedLetters = {['a','r','c']}
          />
        <ButtonGrid/>
    </div>
  );

}