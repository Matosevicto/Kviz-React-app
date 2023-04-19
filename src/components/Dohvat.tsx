import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pitanja from './Pitanja';
import Odgovori from './Odgovori';
import Rezultat from './Rezultat';
import Tezina from './Tezina';
import Kategorija from './Kategorija';
import BrojPitanja from './BrojPitanja';

function Dohvat() {
  const [pitanja, postaviPitanja] = useState([]);
  const [trenutnoPitanjeIndex, postaviTrenutnoPitanjeIndex] = useState(0);
  const [tocniOdgovori, postaviTocneOdgovore] = useState(0);
  const [prikaziRezultat, postaviPrikaziRezultat] = useState(false);
  const [odabranaTezina, postaviOdabranuTezinu] = useState('');
  const [kategorija, postaviKategoriju]=useState('9')
  const [brojPitanja , postaviBrojPitanja]=useState('5')
  const [apiUrl, postaviApiUrl]=useState(`https://opentdb.com/api.php?amount=10&category=${kategorija}&difficulty=${odabranaTezina}`)

  const handleTezinaClick = (event) => {
    if (event?.target?.value) {
    const novaTezina = event.target.value;
      postaviOdabranuTezinu(novaTezina);
      postaviApiUrl(
        `https://opentdb.com/api.php?amount=${brojPitanja}&category=${kategorija}&difficulty=${novaTezina}`
      );
      postaviTrenutnoPitanjeIndex(0); 
      postaviTocneOdgovore(0); 
    fetchQuestions();
      }
  };

  const handleKategorijaChange=(event)=>{
    if (event?.target?.value){
    const novaKategorija = event.target.value;
    postaviKategoriju(novaKategorija);
    postaviApiUrl(
      `https://opentdb.com/api.php?amount=${brojPitanja}&category=${novaKategorija}&difficulty=${odabranaTezina}`
      );
      postaviTrenutnoPitanjeIndex(0); 
      postaviTocneOdgovore(0);
    fetchQuestions();
    }
  };
  
  const handleBrojPitanjaChange=(event)=>{
    if(event?.target?.value){
      const noviBrojPitanja =event.target.value;
      postaviBrojPitanja(noviBrojPitanja);
      postaviApiUrl (
        `https://opentdb.com/api.php?amount=${noviBrojPitanja}&category=${kategorija}&difficulty=${odabranaTezina}`
        );
        postaviTrenutnoPitanjeIndex(0); 
        postaviTocneOdgovore(0); 
      fetchQuestions(); 
    }
  }



    useEffect(()=>{
      fetchQuestions();

    },[apiUrl]);

    const fetchQuestions = async()=>{
      const response =await axios.get(apiUrl);
      postaviPitanja(response.data.results);
    }

    const handleAnswer =(answer)=>{
      const trenutnoPitanje = pitanja[trenutnoPitanjeIndex];
      if(answer===trenutnoPitanje.correct_answer){
        postaviTocneOdgovore(tocniOdgovori+1);
      }
      const sljedcePitanjeIndex = trenutnoPitanjeIndex + 1;
      if (sljedcePitanjeIndex < pitanja.length){
        postaviTrenutnoPitanjeIndex(sljedcePitanjeIndex)

      } else{
        postaviPrikaziRezultat(true);
      }
    }

    const Restart = () => {
      postaviTrenutnoPitanjeIndex(0);
      postaviTocneOdgovore(0);
      postaviPrikaziRezultat(false);
      fetchQuestions();
    };

    if (prikaziRezultat) {
      return (
        <Rezultat
          ukupnoPitanja={pitanja.length}
          tocniOdgovori={tocniOdgovori}
          onRestart={Restart}
        />
      );
    }
  
    if (pitanja.length === 0) {
      return <div>Loading ...</div>;
    }
    
    
   const trenutnoPitanje =pitanja[trenutnoPitanjeIndex]

   const listaPitanja = pitanja.map((pitanje, index) => {
    return (
      <button key={index} onClick={() => postaviTrenutnoPitanjeIndex(index)}>
        Pitanje {index + 1}
      </button>
    );
  });

    return (
      <div>
        <div>
      <Tezina naPromjenuTezine={handleTezinaClick} />
      <Kategorija kategorija={kategorija} onKategorijaChange={handleKategorijaChange} />
      <BrojPitanja brojPitanja={brojPitanja} onBrojPitanjaChange={handleBrojPitanjaChange}/>

    </div>
        <div>
        {listaPitanja}
      </div>
        <div>
      Pitanja {trenutnoPitanjeIndex + 1} od {pitanja.length}
      </div>
      <div>
        Rezultat: {tocniOdgovori}/{trenutnoPitanjeIndex}
      </div>
      <Pitanja text={trenutnoPitanje.question}/>
      <div>
      {trenutnoPitanje.incorrect_answers.map((answer) => (
            <Odgovori
              key={answer}
              text={answer}
              onClick={() => handleAnswer(answer)}
            />
            ))}
            <Odgovori
            key={trenutnoPitanje.correct_answer}
            text={trenutnoPitanje.correct_answer}
            onClick={()=>handleAnswer(trenutnoPitanje.correct_answer)}
            />
      </div>
    </div>
    
    );
  }
export default Dohvat;