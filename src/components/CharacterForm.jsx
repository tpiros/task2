import { useState } from 'react';
import './CharacterForm.css';

const AddCharacter = () => {
  const [name, setName] = useState('');
  const [house, setHouse] = useState('');
  const [wandWood, setWandWood] = useState('');
  const [wandCore, setWandCore] = useState('');
  const [wandLength, setWandLength] = useState('');
  const [bio, setBio] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      house,
      wand: {
        wood: wandWood,
        core: wandCore,
        length: wandLength,
      },
      bio,
      imageurl: imageUrl,
    };
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Add New Character</h2>

      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="house" className="form-label">
          House:
        </label>
        <select
          id="house"
          value={house}
          onChange={(e) => setHouse(e.target.value)}
          required
          className="form-input"
        >
          <option value="">Select a house</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </div>

      <div className="form-group">
        <h3 className="form-subtitle">Wand:</h3>
        <div className="form-wand-group">
          <div className="form-wand-item">
            <label htmlFor="wood" className="form-label">
              Wood:
            </label>
            <input
              type="text"
              id="wood"
              value={wandWood}
              onChange={(e) => setWandWood(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-wand-item">
            <label htmlFor="core" className="form-label">
              Core:
            </label>
            <input
              type="text"
              id="core"
              value={wandCore}
              onChange={(e) => setWandCore(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-wand-item">
            <label htmlFor="length" className="form-label">
              Length:
            </label>
            <input
              type="number"
              id="length"
              value={wandLength}
              onChange={(e) => setWandLength(e.target.value)}
              required
              className="form-input"
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="bio" className="form-label">
          Bio:
        </label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
          rows="4"
          className="form-textarea"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="imageurl" className="form-label">
          Image URL:
        </label>
        <input
          type="url"
          id="imageurl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
          className="form-input"
        />
      </div>

      <button type="submit" className="form-button">
        Add Character
      </button>
    </form>
  );
};

export default AddCharacter;
