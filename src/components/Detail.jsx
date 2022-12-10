import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
    const [character, setCharacter] = React.useState([]);

    const { detailId } = useParams();

    console.log(detailId);
    
    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No characters with this ID');
              }
           })
           .catch((err) => {
              window.alert('No characters with this ID');
           });
        // return setCharacter({});
    }, []);

    return (
        <div>
            {character ? (
                <div>
                    <h1>{character.name}</h1>
                    <img src={character.image} />
                    <h5>{character.status}</h5>
                    <h5>{character.species}</h5>
                    <h5>{character.gender}</h5>
                    <h5>{character.origin?.name}</h5>
                </div>
            ) : (
                ""
            )}
        </div>
    )
}