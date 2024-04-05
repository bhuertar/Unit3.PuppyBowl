import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <>
      <button>
        <Link to='/'>Puppies</Link>
      </button>
      {/* <button>
        <Link to='/PuppyDetails/:puppyId'>Puppy</Link>
      </button> */}
    </>
  )
}

export default NavBar