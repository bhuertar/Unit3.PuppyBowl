import { Link } from 'react-router-dom'

const AllPuppies = ({ puppies }) => {

  return (
    <>
      {
        puppies.map((puppy) => {
          return (
            <>
              <Link to={`/PuppyDetails/${puppy.id}`}>
                <p key={puppy.id}>{puppy.name}</p>
              </Link>
            </>
          )
        })
      }
    </>
  )
}

export default AllPuppies