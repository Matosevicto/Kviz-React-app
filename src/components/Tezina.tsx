

function Tezina(props) {
    
        const handleEasyClick = () => {
          props.naPromjenuTezine('easy');
        };
      
        const handleMediumClick = () => {
          props.naPromjenuTezine('medium');
        };
      
        const handleHardClick = () => {
          props.naPromjenuTezine('hard');
        };
      

  return (
    <div>
      <button onClick={handleEasyClick}>
        Lako
      </button>
      <button onClick={handleMediumClick}>
        Srednje
      </button>
      <button onClick={handleHardClick}>
        Teško
      </button>
       
    </div>
  );
}
export default Tezina;







