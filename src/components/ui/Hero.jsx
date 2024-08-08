import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to Wizarding World
      </h1>
      <p className="mt-4 text-gray-600">This is where all the magic happens!</p>
      <Link to="/list" className="btn btn-primary mt-6">
        See all characters
      </Link>
    </section>
  );
};

export default Hero;
