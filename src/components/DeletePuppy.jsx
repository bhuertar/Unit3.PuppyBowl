
const DeletePuppy = ({ puppies, API, getPuppies }) => {
  
  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`${API}/players/${id}`, {
        method: 'DELETE',
      });
      console.log(`Response: `, response)
      const json = await response.json();
      console.log(`JSON: `, json)
      await getPuppies();
      // console.log(id);
    } catch (error) {
      console.log(error);
    }
  }

  // deleteHandler();

  return (
    <>
      {/* {
        puppies.map((puppy) => {
          return (
            <button onClick={() => deleteHandler(puppy.id)} key={puppy.id}>Delete</button>
          )
        })
      } */}
    </>
  )
}

export default DeletePuppy