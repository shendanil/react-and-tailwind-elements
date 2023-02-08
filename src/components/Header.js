import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <header className="fixed top-0 z-10 w-full flex items-center justify-center bg-red-500 text-white font-semibold py-4 drop-shadow-lg">
          <FontAwesomeIcon icon={faGlobeEurope} className='mx-1 text-xl' />
          <h1 className='mx-1 tracking-wider'>travel journal</h1>
        </header>
    );
}

export default Header
  