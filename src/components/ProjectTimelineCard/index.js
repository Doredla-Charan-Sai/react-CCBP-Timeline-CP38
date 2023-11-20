// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  const {projectTitle, description, duration, imageUrl, projectUrl} = details
  return (
    <div className="course-cont">
      <img className="image" src={imageUrl} alt="project" />
      <div className="title-duration-cont">
        <h1 className="title">{projectTitle}</h1>
        <div className="title-duration-cont">
          <AiFillCalendar className="clock" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="anchor">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
