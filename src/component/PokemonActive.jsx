import React from 'react';
import "./PokemonActive.css"

const PokemonActive = ({ pokemon, activePokemon, visible, setVisible }) => {
    const nameofclass = ["details"];
    let PokemonDetails = [];
    if (visible === 'true') {
        nameofclass.push("visible");
        pokemon.forEach(element => {
            if (element.name === activePokemon.toLowerCase()) {
                PokemonDetails = element;
                console.log(PokemonDetails)
            }
        });
    }

    const name = activePokemon.charAt(0)?.toUpperCase() + activePokemon?.slice(1);

    return (
        <div className={nameofclass.join(" ")} onClick={() => setVisible(false)}>
            <img src={PokemonDetails?.sprites?.other?.dream_world["front_default"]} alt={PokemonDetails.name} />
            <h2>{name} #{PokemonDetails?.id?.toString()?.padStart(3, "0")} </h2>
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Fire</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Attack</td>
                        <td>{PokemonDetails?.stats?.[1]?.base_stat}</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>{PokemonDetails?.stats?.[2]?.base_stat}</td>
                    </tr>
                    <tr>
                        <td>HP</td>
                        <td>{PokemonDetails?.stats?.[1]?.base_stat}</td>
                    </tr>
                    <tr>
                        <td>SP Attack</td>
                        <td>{PokemonDetails?.stats?.[3]?.base_stat}</td>
                    </tr>
                    <tr>
                        <td>SP Defense</td>
                        <td>{PokemonDetails?.stats?.[4]?.base_stat}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>{PokemonDetails?.stats?.[5]?.base_stat}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{PokemonDetails?.weight}</td>
                    </tr>
                    <tr>
                        <td>Total moves</td>
                        <td>{PokemonDetails?.moves?.length}</td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}

export default PokemonActive;
