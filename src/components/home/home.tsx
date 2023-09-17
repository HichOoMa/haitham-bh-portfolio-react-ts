import './home.css'
import { LinkedIn, Facebook, Instagram, GitHub } from '@mui/icons-material';

export default function Home(){
  return (
    <>
        <div className="greeting">
          <span>Hey! I'M HAITHAM BENHAMMOUDA</span>
          <p>A Full Stack Web developer focused on building simple and complexed web applications <br/> on demand</p>
          <input type="button" value="PROJECTS" />
        </div>
        <div className="socialMedia">
          <a href="">
            <LinkedIn sx={{color: '#000'}} fontSize='large' />
          </a>
          <a href="">
            <Facebook sx={{color: '#000'}} fontSize='large' />
          </a>
          <a href="">
            <GitHub sx={{color: '#000'}} fontSize='large' />
          </a>
          <a href="">
            <Instagram sx={{color: '#000'}} fontSize='large' />
          </a>
        </div>
        <div className='mouseScroll'>
          <div className="mouse"></div>
        </div>
    </>
  )  
}