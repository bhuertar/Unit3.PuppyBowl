import { useEffect, useState } from 'react'
import AllPuppies from '../components/AllPuppies';
import AddPuppy from '../components/AddPuppy';
import PuppyDetails from './PuppyDetails';

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
      {error && <p>{error}</p>}
      <AddPuppy API={API} getPuppies={getPuppies}/>
      <h1>Puppies</h1>
      <AllPuppies puppies={puppies} API={API} getPuppies={getPuppies}/>
    </>
  )
}

export default PuppiesList