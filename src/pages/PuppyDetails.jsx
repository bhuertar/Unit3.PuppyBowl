import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const PuppyDetails = ({ API }) => {
  const [puppy, setPuppy] = useState({});

  const { puppyId } = useParams();

  useEffect(() => {
    const getPuppyDetails = async () => {
      try {
        const response = await fetch(`${API}/players/${puppyId}`);
        // console.log(`Response`, response)
        const json = await response.json();
        // console.log(`JSON`, json);
        setPuppy(json.data.player);
        // console.log(`Puppy`, puppy)
      } catch (error) {
        console.log(error.message);
      } 
    }

    getPuppyDetails();
  }, []);

  return (
    <>
      <h3>{puppy.name}</h3>
      <p>{puppy.breed}</p>
      <img src={puppy.imageUrl} />
    </>
  )
}

export default PuppyDetails