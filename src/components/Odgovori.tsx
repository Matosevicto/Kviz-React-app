import '../styles.css'

function Odgovori(props){
    return(
        <div>
        <button onClick={props.onClick}>{props.text}</button>
        </div>
    )
}
export default Odgovori;