import Card from './Card';

export default function Cards(props) {
   const {characters, onClose} = props;
   return (
      <div>
         {
            characters.map((character) => (
               <Card key={character.name}
                     name={character.name}
                     species={character.species}
                     gender={character.gender}
                     image={character.image}
                     id={character.id}
                     onClose={() => onClose(character.id)}
               />
            ))
         }
      </div>
   )
}
            
