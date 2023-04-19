import '../styles.css'
function Kategorija(props){
    return(
        <>
        <div className='kategorija'>
    <label htmlFor="category-select">Category: </label>
      <select id="category-select" value={props.kategorija} onChange={props.onKategorijaChange}>
        <option value="9">General Knowledge</option>
        <option value="10">Entertainment: Books</option>
        <option value="11">Entertainment: Film</option>
        <option value="15">Entertainment: Video Games</option>
        <option value="17">Science & Nature</option>
        <option value="18">Science: Computers</option>
        <option value="21">Sports</option>
        <option value="23">History</option>
        <option value="27">Animals</option>
        <option value="28">Vehicles</option>
      </select>
    </div>
        </>
    )
}
export default Kategorija