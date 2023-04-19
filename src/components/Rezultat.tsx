import '../styles.css'

function Rezultat(props){

    const odlicno=0.9
    const vrloDobar =0.8
    const dobar= 0.65;
    const dovoljan = 0.5;
    

    const ratio = props.tocniOdgovori / props.ukupnoPitanja;
    

    return(
        <>
        <div className='rez'>
        Score:  {props.tocniOdgovori} of {props.ukupnoPitanja}
        </div>
        <div className="result">
        {ratio > odlicno && <div>Excellent result!</div>}
    {ratio <= odlicno && ratio > vrloDobar && (
      <div>Very good result!</div>
    )}
    {ratio <= vrloDobar && ratio > dobar && <div>Good result!</div>}
    {ratio <= dobar && ratio >= dovoljan && (
      <div>Sufficient result.</div>
    )}
    {ratio < dovoljan && <div>Insufficient result, Try again!</div>}
        </div>
        <button onClick={props.onRestart}>Play again!</button>
        </>
        
    )
}
export default Rezultat