

function Rezultat(props){
    return(
        <>
        <div>
        Postigao si {props.tocniOdgovori} od {props.ukupnoPitanja}
        </div>
        <button onClick={props.onRestart}>Igraj ponovno</button>
        </>
        
    )
}
export default Rezultat