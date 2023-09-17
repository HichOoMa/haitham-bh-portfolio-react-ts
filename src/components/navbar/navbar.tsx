import './navbar.css';

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="profile">
          <div className="profilePhotoContainer">
            <img className="profilePhoto" src="./profile.jpeg" alt="HaithamPP" />
          </div>
          <span>Haitham BENHAMMOUDA</span>
        </div>
        <div className='menu'>
          <span>Home</span>
          <span>About</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
      </nav>
    </>
  )
}