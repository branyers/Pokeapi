import React, { useState, useEffect } from 'react'
import { getDataPoke, getPokemon } from './Services/API'
import './App.css';
import NavBar from './Components/NavBar';
import PokeDes from './Components/PokeDes';
import SearchBar from './Components/SearchBar';
import { getPokes } from './Services/API'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const getPoke = async () => {
    const Poke = await getPokemon()
    const promise = Poke.data.results.map(async (pokes) => {
      return await getDataPoke(pokes.url)
    })
    const result = await Promise.all(promise)
    setPokemon(result)
    setLoading(false)

  }

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return getPoke();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await getPokes(pokemon);
    console.log(result.data)
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemon([result.data]);
    }
    setLoading(false);
    setSearching(false);
  };


  useEffect(() => {
    if (!searching) {
      getPoke();
    }
  }, [searching]);



  useEffect(() => {
    getPoke()

  }, [])

  return (
    <div>
      <NavBar />
      <div>
        <SearchBar onSearch={onSearch} />

        {notFound ? <div className="not-found-text">
          No se encontro el Pokemon que buscabas 😭
            </div>
          : <PokeDes Poke={pokemon} />}
      </div>
    </div>
  );
}

export default App;
