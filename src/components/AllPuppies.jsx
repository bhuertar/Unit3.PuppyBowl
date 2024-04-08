import { Link } from 'react-router-dom'
import DeletePuppy from './DeletePuppy'

const AllPuppies = ({ puppies, API, getPuppies }) => {

  return (
    <>
      {
        puppies.map((puppy) => {
          return (
            <>
              <div>
                <Link to={`/PuppyDetails/${puppy.id}`} key={puppy.id}>
                  <p>{puppy.name}</p>
                  <img src={puppy.imageUrl} style={{height:'200px'}, {width: '200px'}}/>
                </Link><br/>
                <DeletePuppy puppies={puppies} API={API} getPuppies={getPuppies}/>
              </div>
            </>
          )
        })
      }
    </>
  )
}

export default AllPuppies