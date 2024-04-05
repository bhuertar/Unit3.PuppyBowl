import { useEffect, useState } from 'react'
import AllPuppies from '../components/AllPuppies';

const PuppiesList = ({ API }) => {
  const [puppies, setPuppies] = useState([]);
  const [error, setError] = useState(null);

  const getPuppies = async () => {
    try {
      const response = await fetch(`${API}/players`);
      // console.log(response)
      const json = await response.json();
      console.log(json);
      setPuppies(json.data.players);
    } catch (error) {
      setError(error.message);
    } 
  }

  useEffect(() => {
    getPuppies();
  }, []);

  return (
    <>
      <h1>Puppies</h1>
      {error && <p>{error}</p>}
      <AllPuppies puppies={puppies} getPuppies={getPuppies} API={API}/>
    </>
  )
}

export default PuppiesList