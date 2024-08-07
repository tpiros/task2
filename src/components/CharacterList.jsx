import './CharacterList.css';

function CharacterList({ characters }) {
  const handleError = (e) => {
    e.target.src = '../assets/confused.webp';
  };
  return (
    <div className="character-list">
      {characters.map((character, index) => (
        <div key={index} className="character">
          <h2>{character.name}</h2>
          <p>House: {character.house}</p>
          {character.wand ? (
            <p>
              Wand: {character.wand.wood},{' '}
              {character.wand.core ? character.wand.core : 'Unknown core'},{' '}
              {character.wand.length}
            </p>
          ) : (
            <p>Wand: Unknown</p>
          )}
          <p>{character.bio}</p>
          <img
            src={character.imageurl}
            alt={character.name}
            className="character-image"
            onError={handleError}
          />
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
