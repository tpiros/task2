import { useState, useEffect } from 'react';
import CharacterForm from './components/CharacterForm';
import CharacterList from './components/CharacterList';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      let data = [];
      try {
        const response = await fetch('http://localhost:8080/api/characters');
        data = await response.json();
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setCharacters(data);
      }
    };

    fetchCharacters();
  }, []);

  const addCharacter = (character) => {
    setCharacters([...characters, character]);
  };

  return (
    <div className="App">
      <h1>Harry Potter Characters</h1>
      <CharacterForm addCharacter={addCharacter} />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
