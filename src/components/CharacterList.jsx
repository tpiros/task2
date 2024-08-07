import './CharacterList.css';

function CharacterList({ characters }) {
  return (
    <div className="character-list">
      {characters.map((character, index) => (
        <div key={index} className="character">
          <h2>{character.name}</h2>
          <p>Wand: {character.wand}</p>
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
