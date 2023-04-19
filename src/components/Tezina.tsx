import '../styles.css'



function Tezina(props) {

 
    return (
      <div className='tezina'>
        <button value="easy" onClick={props.naPromjenuTezine} 
         >
          Easy
        </button>
        <button   value="medium" onClick={props.naPromjenuTezine} 
         >
          
          Medium
        </button>
        <button  value="hard" onClick={props.naPromjenuTezine}
       >
     
          Hard
        </button>
      </div>
    );
  }
  
  export default Tezina;







