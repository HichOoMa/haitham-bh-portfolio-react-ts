import { useState } from 'react'

import './projectCard.css'

interface Props {
  name: string,
  imgUrl: string,
  description: string,
  github ?: string,
  demo ?: string
}
const ProjectCard = (props: Props) =>{

  const [action, setAction] = useState('more')
  const toggleAction = () =>{
    if (action === 'more'){
      setAction('less')
    }else{
      setAction('more')
    }
  }
  return (
    <div className="card">
      <div className="card-photo">
        <img src="./react.png" alt="" />
      </div>
      <div className="card-main">
        <span className="card-title">
          {props.name}
        </span>
        <p className="card-description">
          {action === 'more' ? `${props.description.slice(0,100)}...` : props.description}
          
        </p>
      </div>
      <div className="card-action">
        <button onClick={toggleAction}>{ action }</button>
      </div>
    </div>
  )
}

export default ProjectCard;
