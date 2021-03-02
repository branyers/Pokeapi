import React from 'react'

const Pokemon = ({ pokemon }) => {
    const { data,name } = pokemon
    console.log(name,"Name")
    console.log(pokemon.data)
    console.log(data)
    return (
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img
                    src={data.sprites.front_default}
                    alt={data.name}
                    className="pokemon-img"
                />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{data.name}</h3>
                    <div>#{data.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {data.types.map((type, idx) => {
                            return (
                                <div key={idx} className="pokemon-type-text">
                                    {type.type.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon
