import CharacterForm from './components/CharacterForm';
import CharacterList from './components/CharacterList';
import Navbar from './components/ui/Navbar';
import Hero from './components/ui/Hero';
import Footer from './components/ui/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <section className="bg-white py-12 w-full flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/add" element={<CharacterForm />} />
          <Route path="/list" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterInfo />} />
        </Routes>

        {/* <CharacterForm addCharacter={addCharacter} /> */}
        {/* <CharacterList characters={characters} /> */}
      </section>
      <Footer />
    </>
  );
}

export default App;
