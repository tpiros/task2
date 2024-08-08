import { useState } from 'react';

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
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
    await fetch('http://localhost:8080/api/characters', options);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6 mx-auto"
    >
      <h2 className="text-2xl font-bold text-center text-primary">
        Add New Character
      </h2>

      <div className="form-group">
        <label
          htmlFor="name"
          className="form-label block mb-2 text-sm font-medium text-gray-700"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input input-bordered w-full"
        />
      </div>

      <div className="form-group">
        <label
          htmlFor="house"
          className="form-label block mb-2 text-sm font-medium text-gray-700"
        >
          House:
        </label>
        <select
          id="house"
          value={house}
          onChange={(e) => setHouse(e.target.value)}
          required
          className="select select-bordered w-full"
        >
          <option value="">Select a house</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </div>

      <div className="form-group">
        <h3 className="form-subtitle text-lg font-medium text-gray-700">
          Wand:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="form-wand-item">
            <label
              htmlFor="wood"
              className="form-label block mb-2 text-sm font-medium text-gray-700"
            >
              Wood:
            </label>
            <input
              type="text"
              id="wood"
              value={wandWood}
              onChange={(e) => setWandWood(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-wand-item">
            <label
              htmlFor="core"
              className="form-label block mb-2 text-sm font-medium text-gray-700"
            >
              Core:
            </label>
            <input
              type="text"
              id="core"
              value={wandCore}
              onChange={(e) => setWandCore(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-wand-item">
            <label
              htmlFor="length"
              className="form-label block mb-2 text-sm font-medium text-gray-700"
            >
              Length:
            </label>
            <input
              type="number"
              id="length"
              value={wandLength}
              onChange={(e) => setWandLength(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label
          htmlFor="bio"
          className="form-label block mb-2 text-sm font-medium text-gray-700"
        >
          Bio:
        </label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
          rows="4"
          className="textarea textarea-bordered w-full"
        ></textarea>
      </div>

      <div className="form-group">
        <label
          htmlFor="imageurl"
          className="form-label block mb-2 text-sm font-medium text-gray-700"
        >
          Image URL:
        </label>
        <input
          type="url"
          id="imageurl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
          className="input input-bordered w-full"
        />
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Add Character
      </button>
    </form>
  );
};

export default AddCharacter;
