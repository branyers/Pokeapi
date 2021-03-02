import axios from 'axios'



export const getPokes = async (pokemon) => await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)


export const getPokemon = async (limit=10,ofset=0) => await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${ofset}`)


export const getDataPoke = async (url) => await axios.get(`${url}`)