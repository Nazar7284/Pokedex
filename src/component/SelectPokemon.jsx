import React from 'react'
import "./SelectPokemon.css"

export default function Select({ sort, setsort }) {
    return (
        <div className="select-type">
            <select value={sort} onChange={event => setsort(event.target.value)}>
                <option disabled value="all">Sort by type</option>
                <option value="">All</option>
                <option value="grass">Grass</option>
                <option value="poison">Poison</option>
                <option value="fire">Fire</option>
                <option value="flying">Flying</option>
                <option value="water">Water</option>
                <option value="bug">Bug</option>
            </select>
        </div>
    )
}
