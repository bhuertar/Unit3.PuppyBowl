import { Link } from 'react-router-dom'

const AllPuppies = ({ puppies }) => {

  return (
    <>
      {
        puppies.map((puppy) => {
          return (
            <>
              <Link to={`/PuppyDetails/${puppy.id}`}>
                <li key={puppy.id}>{puppy.name}</li>
              </Link>
            </>
          )
        })
      }
    </>
  )
}

export default AllPuppies