function Tezina(props) {
    return (
      <div>
        <button value="easy" onClick={props.naPromjenuTezine}>
          Lako
        </button>
        <button value="medium" onClick={props.naPromjenuTezine}>
          Srednje
        </button>
        <button value="hard" onClick={props.naPromjenuTezine}>
          Teško
        </button>
      </div>
    );
  }
  
  export default Tezina;







