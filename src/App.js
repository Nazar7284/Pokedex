import { useState, useEffect } from "react";
import "./App.css"
import axios from "axios"
import ListPokemon from "./component/ListPokemon";
import PokemonActive from "./component/PokemonActive";
import SelectPokemon from "./component/SelectPokemon"
import { useMemo } from "react";

function App() {
  const [pokemonData, setpokemonData] = useState([]);
  const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [activePokemon, setActivePokemon] = useState("");
  const [visible, setVisible] = useState("false");
  const [sort, setsort] = useState('');

  const getPokemonName = async () => {
    function getDataPokemon(res) {
      res.forEach(async (pokemon) => {
        const dataPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        setpokemonData(current => ([...current, dataPokemon.data]));
      });
    }
    const data = await axios.get(url);
    seturl(data.data.next);
    getDataPokemon(data.data.results)
  }

  const filterPokemon = useMemo(() => {
    if (!sort || sort === "all") {
      return pokemonData;
    }

    return (pokemonData.filter((data) => {
      for (let i = 0; i < data.types.length; i++) {
        if (data.types[i].type.name === sort) {
          return true;
        }
      }
    }))

  }, [pokemonData, sort])

  useEffect(() => {
    console.log('render')
    getPokemonName();
  }, []);

  return (
    <div>
      {pokemonData.length
        ? <div className="App">
          <p>Pokedex</p>
          <SelectPokemon sort={sort} setsort={setsort} />
          <div className="list-pokemon">
            {filterPokemon.map((pokemon, index) => {
              return (<ListPokemon
                key={index}
                photo={pokemon.sprites.other.dream_world["front_default"]}
                name={pokemon.name}
                type={pokemon.types}
                setActivePokemon={setActivePokemon}
                setVisible={setVisible}
              />)
            })}
            <button className="btn-load-more" onClick={getPokemonName}>Load more</button>
            <div className="details-pokemon">
              <PokemonActive visible={visible} setVisible={setVisible} pokemon={pokemonData} activePokemon={activePokemon} />
            </div>
          </div >
        </div>
        : <div className="loading">Loading...</div>
      }
    </div>
  );
}

export default App;