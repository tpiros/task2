import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CharacterInfo() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacters = async () => {
      let data = [];
      try {
        const response = await fetch(
          `http://localhost:8080/api/characters/id/${id}`
        );
        data = await response.json();
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setCharacter(data);
      }
    };

    fetchCharacters();
  }, [id]);

  const handleError = (e) => {
    if (e.target.src !== '/confused.webp') {
      e.target.src = '/confused.webp';
    }
  };

  return (
    <div className="container mx-auto py-12 flex flex-col items-center">
      <div className="character bg-white p-6 rounded-lg shadow-md mb-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-primary">{character.name}</h2>
        <p className="text-gray-700">House: {character.house}</p>
        {character.wand ? (
          <p className="text-gray-700">
            Wand: {character.wand.wood},{' '}
            {character.wand.core ? character.wand.core : 'Unknown core'},{' '}
            {character.wand.length}
          </p>
        ) : (
          <p className="text-gray-700">Wand: Unknown</p>
        )}
        <p className="text-gray-700">{character.bio}</p>
        <img
          src={character.imageurl}
          alt={character.name}
          className="character-image rounded-lg mt-4"
          onError={handleError}
        />
      </div>
    </div>
  );
}

export default CharacterInfo;
