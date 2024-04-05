import { useState } from "react"

const AddPuppy = ({ API, getPuppies }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [img, setImg] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API}/players`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name ,
            breed ,
            img  
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      await getPuppies();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <h3>Add Puppy</h3>
      <form onSubmit={handleOnSubmit}>
      <label>Name:{' '} 
        <input placeholder='name' type="text" value={name}
          onChange={(e) => {setName(e.target.value);}}/>
      </label><br/>
      <label>Breed:{' '} 
        <input placeholder='breed' type="text" value={breed}
          onChange={(e) => {setBreed(e.target.value);}}/>
      </label><br/>
      <label>Image:{' '}
        <input placeholder='image url' type="text" value={img}
          onChange={(e) => {setImg(e.target.value);}}/>
      </label><br/>
      <input type="submit" value="Add Puppy" />
      </form>
    </> 
  )
}

export default AddPuppy