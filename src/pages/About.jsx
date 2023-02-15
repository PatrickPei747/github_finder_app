import { Typewriter } from 'react-simple-typewriter';

function About() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>
        G
        <Typewriter words={['ithub Finder']} deleteSpeed={90} loop={0} />
      </h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a className='text-white' href='https://github.com/PatrickPei747'>
          Patrick Pei
        </a>
      </p>
    </div>
  );
}

export default About;
