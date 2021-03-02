import React from 'react'
import Pokemon from './Pokemon'

const PokeDes = ({ Poke }) => {
    return (
        <div>

            <div className="header">
                <h2>PokeDex</h2>
            </div>
            <div className="pokedex-grid"> 
                {Poke && (
                    Poke.map((poke,id) => {
                        return <Pokemon pokemon={poke} key={id} />;
                    })
                )

                }
            </div>
        </div>
    )
}

export default PokeDes
