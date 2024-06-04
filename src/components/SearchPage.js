import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios';
import Facts from './Facts';

const SearchPage = () => {
  const [queryInput, setQueryInput] = useState("");
  const [facts, setFacts] = useState([]);
  const [loaded, setLoaded] = useState(0)

  const submitInputHandler = async () => {
    try {
      if (queryInput.length>0){
        const response = await axios.get(
        `https://api.chucknorris.io/jokes/search?query=${queryInput}`)

        setLoaded(1)
        if (response) {
          setFacts(response.data.result);
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="mx-5">
      <div className="d-flex">
        <h1 className="my-5">Search Facts</h1>
        <div className="my-5 mx-5 d-flex">
          <input
            type="text"
            value={queryInput}
            placeholder="Busqueda"
            onChange={(e) => setQueryInput(e.target.value)}
          ></input>
          <Button className="mx-1" onClick={submitInputHandler}>
            Enviar
          </Button>
        </div>
      </div>
      {facts.length === 0 && loaded ? <p>No facts found.</p> : <Facts facts={facts} />}
    </div>
  );
}

export default SearchPage