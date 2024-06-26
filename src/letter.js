
// eslint-disable-next-line import/no-anonymous-default-export
export default function({value, isShown}){
    let output ='';
    if(isShown){
        output = value;
    }
  return(
    <span className="letter">{output}</span>
  );

}