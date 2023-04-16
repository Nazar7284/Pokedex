import React from 'react';
import "./ListPokemon.css"

const ListPokemon = ({ photo, name, type, setActivePokemon, setVisible }) => {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    let types = type.map(type => type.type.name);
    types = types.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    const typeDivs = types.map((type, index) => (
        <div className={type.toLowerCase()} key={index}>{type}</div>
    ));
    return (
        <div className='card-pokemon'
            onClick={() => {
                setActivePokemon(name)
                setVisible("true");
            }}>
            <img src={photo} alt={name} />
            <h2>{name}</h2>
            <div className='type-pokemon'>{typeDivs}</div>
        </div>
    );
}

export default ListPokemon;
